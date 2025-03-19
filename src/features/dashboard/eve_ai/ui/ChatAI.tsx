import { Card, Textarea } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Send, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import ReactMarkdown from "react-markdown";
import { v4 as uuidv4 } from "uuid";
import eve from "../../../../assets/icons/eve.png";
import { IUserResponse } from "../../../auth/types";
import { useEveServices } from "../services";
import { useEveStore } from "../stores";

const MarkdownComponents: any = {
  // Style paragraphs

  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-2 text-sm last:mb-0">{children}</p>
  ),
  // Style code blocks

  code: ({
    node,
    inline,
    className,
    children,
    ...props
  }: {
    node: any;
    inline: boolean;
    className: string;
    children: React.ReactNode;
  }) => (
    <code
      className={`${className} ${inline
        ? "rounded bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-600"
        : "block overflow-x-auto rounded-lg bg-gray-800 p-3 text-sm dark:bg-gray-900"
        }`}
      {...props}
    >
      {children}
    </code>
  ),
  // Style lists

  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="mb-2 ml-4 list-disc">{children}</ul>
  ),

  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="mb-2 ml-4 list-decimal">{children}</ol>
  ),

  li: ({ children }: { children: React.ReactNode }) => (
    <li className="mb-1">{children}</li>
  ),
  // Style headings

  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="mb-2 text-xl font-bold">{children}</h1>
  ),

  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="mb-2 text-lg font-bold">{children}</h2>
  ),

  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="mb-2 text-base font-bold">{children}</h3>
  ),

  // Style links
  a: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="text-blue-500 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
};

export default function ChatAI() {
  const eveStore = useEveStore();
  const { sendChat } = useEveServices();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you today?",
      sender: "bot",
      timestamp: "9:00 AM",
    },
  ]);
  const [conversationId, setConversationId] = useState("");
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const authUser = useAuthUser<IUserResponse>();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (eveStore.conversationId.length == 0) {
      const uuid = uuidv4();
      setConversationId(uuid);
      eveStore.updateText("conversationId", uuid);
    } else {
      setConversationId(eveStore.conversationId);
    }
  }, [eveStore]);

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /*  const handleSend = async () => {
     if (input.trim()) {
       const newMessage = {
         id: messages.length + 1,
         text: input,
         sender: "user",
         timestamp: new Date().toLocaleTimeString([], {
           hour: "2-digit",
           minute: "2-digit",
         }),
       };
 
       setMessages((prev) => [...prev, newMessage]);
       setInput("");
       setIsLoading(true);
 
       try {
         const response = await sendMessage({
           message: input,
           conversationId: conversationId,
           username:
             authUser?.user_type == "owner"
               ? authUser.owner?.user.full_name
               : authUser?.user?.full_name,
         });
 
         const data = await response;
 
         setMessages((prev) => [
           ...prev,
           {
             id: prev.length + 1,
             text: data.message,
             sender: "bot",
             timestamp: new Date().toLocaleTimeString([], {
               hour: "2-digit",
               minute: "2-digit",
             }),
           },
         ]);
       } catch (error) {
         notifications.show({
           color: "red",
           title: "Error",
           message: "Something went wrong!",
         });
         console.error("Error sending message:", error);
       } finally {
         setIsLoading(false);
       }
     }
   }; */
   
  const handleSend = async () => {

    if (input.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: input,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      // Append the new user message
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      // Reserve an id for the bot message that won't conflict with the user message
      const botMessageId = messages.length + 2;

      try {
        const response = await sendChat({
          message: input,
          conversationId: conversationId,
          username: authUser?.owner
            ? authUser.owner?.user.full_name
            : authUser?.user?.full_name,
        });

        if (!response.body) {
          console.error('ReadableStream not supported in this browser.');
          return;
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');

          // Process all complete lines except the last (which might be incomplete)
          for (let i = 0; i < lines.length - 1; i++) {
            const line = lines[i].trim();
            if (line) {
              try {
                const json = JSON.parse(line);
                if (json.type === 'chat_model_stream') {
                  setIsLoading(false);
                  setMessages((prevMessages) => {
                    // Check if the bot message already exists using the reserved id
                    const index = prevMessages.findIndex((msg) => msg.id === botMessageId);

                    if (index !== -1) {
                      // Update the existing bot message by appending the new response
                      const updatedMessages = [...prevMessages];
                      updatedMessages[index] = {
                        ...updatedMessages[index],
                        text: updatedMessages[index].text + json.response,
                      };
                      return updatedMessages;
                    } else {
                      // If it doesn't exist yet, add a new bot message with the reserved id
                      return [
                        ...prevMessages,
                        {
                          id: botMessageId,
                          text: json.response,
                          sender: "bot",
                          timestamp: new Date().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          }),
                        },
                      ];
                    }
                  });
                }
              } catch (error) {
                console.error('Error parsing JSON:', error);
              }
            }
          }
          // Keep the last incomplete line in the buffer
          buffer = lines[lines.length - 1];
        }
      } catch (error) {
        notifications.show({
          color: "red",
          title: "Error",
          message: "Something went wrong!",
        });
        console.error("Error sending message:", error);
      } finally {
        setIsLoading(false);
      }
    }


  };

  const handleKeyPress = (e: {
    key: string;
    shiftKey: any;
    preventDefault: () => void;
  }) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div>
      <Card
        className="flex h-[80vh] flex-col"
        radius={"md"}
      >

        <div className="flex-1 space-y-4 overflow-y-auto p-4 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-500">
          <div style={{ maxWidth: "800px" }} className="mx-auto">

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
              >
                {message.sender != "user" &&
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${message.sender === "user" ? "bg-blue-500" : "bg-transparent"
                      }`}
                  >
                    {message.sender === "user" ? (
                      <User className="h-5 w-5 text-white" />
                    ) : (
                      <img src={eve} alt="Eve Icon" className="h-8 w-8 " />
                    )}
                  </div>
                }
                <div className="flex max-w-[70%] flex-col gap-1">
                  <div
                    className={`rounded-lg  ${message.sender === "user"
                      ? "px-3 py-2 ml-auto bg-blue-500 text-white"
                      : "bg-white text-gray-700 px-3"
                      }`}
                  >
                    <ReactMarkdown
                      components={MarkdownComponents}
                      className={`markdown ${message.sender === "user" ? "text-white" : "text-gray-700"
                        }`}
                    >
                      {message.text}
                    </ReactMarkdown>
                  </div>
                  <span className={`text-xs text-gray-500 dark:text-gray-400 ${message.sender != "user" ? "ps-3" : ""}`}>
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full">
                  <img
                    src={eve}
                    alt="Rotating Icon"
                    className="h-8 w-8 animate-spin"
                    style={{
                      animationDuration: "3s",
                      animationTimingFunction: "linear",
                      animationIterationCount: "infinite",
                    }}
                  />
                </div>
                <div className="flex max-w-[70%] flex-col gap-1">
                  <div className="rounded-lg bg-gray-100 p-3 text-gray-700">
                    <div className="flex space-x-2">
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-gray-400 dark:bg-gray-500"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-gray-400 dark:bg-gray-500"
                        style={{ animationDelay: "200ms" }}
                      ></div>
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-gray-400 dark:bg-gray-500"
                        style={{ animationDelay: "400ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Dummy element for auto-scrolling */}
            <div ref={messagesEndRef} />
          </div>

        </div>

        <div className="border-0 p-4 dark:border-gray-700">
          <div style={{ maxWidth: "800px" }} className="mx-auto">
            <div className="flex items-center gap-2">
              <Textarea
                radius={"md"}
                w={"100%"}
                size="md"
                placeholder="Type your message..."
                autosize
                minRows={1}
                maxRows={4}
                onKeyPress={isLoading ? undefined : handleKeyPress}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="rounded-full bg-blue-500 p-2 text-white 
                hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50
                dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

      </Card>
    </div>
  );
}
