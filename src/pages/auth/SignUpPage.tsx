import { Center, Image, Space, Text } from "@mantine/core";
import smartsti_logo from "../../assets/smartsti_logo.png";
import SignUpForm from "../../features/auth/ui/SignUpForm";

export default function SignUpPage() {
  return (
    <div>

      <Center maw={"100%"} h={"100vh"} >
        <div className="w-[480px]">
          <Image
            w={155}
            src={smartsti_logo}
          />
          <Text size="56px" fw={600} style={{ lineHeight: "67.2px", letterSpacing: "-2px" }}>Sign Up to Create  </Text>
          <Text size="56px" style={{ fontFamily: "Playfair Display", lineHeight: "67.2px", letterSpacing: "-2px" }}>your account</Text>
          <Space h="50" />
          <SignUpForm />
        </div>
      </Center>

    </div>
  );
}
