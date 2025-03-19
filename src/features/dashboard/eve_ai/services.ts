import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { ChatbotService } from "./ai-convo";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { IUserResponse } from "../../auth/types";
import Env from "../../../config/env";

export const useEveServices = () => {
  const chatbotService = new ChatbotService();
  const authHeader = useAuthHeader() || "";
  const authUser = useAuthUser<IUserResponse>();


  const sendMessage = async ({
    message,
    username,
    conversationId,
  }: {
    message: string;
    username?: string;
    conversationId: string;
  }) => {
    return chatbotService.sendMessage(
      message,
      authHeader,
      authUser?.user_type || "regular",
      username!,
      conversationId
    );
  };


  const sendChat = async ({
    message,
    username,
    conversationId,
  }: {
    message: string;
    username?: string;
    conversationId: string;
  }) => {

    const url = new URL(Env.CHATBOT_URL+"/action/chatbot");
    url.searchParams.append("engine", "engine_3");
    url.searchParams.append("verbose", "true");
    url.searchParams.append("conversation_id", conversationId);

    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
        chatbot_id: Env.CHATBOT_ID,
        chatbot_type: "customer_interaction",
        additional_data: `The user you are chatting to is called: ${username}`,
        user_token: authHeader,
      }),
    });
    return response;
    
  };

  return {
    sendMessage,
    sendChat,
  };
};
