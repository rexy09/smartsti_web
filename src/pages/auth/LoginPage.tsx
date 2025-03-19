import { Center, Image, Space, Text } from "@mantine/core";
import LoginForm from "../../features/auth/ui/LoginForm";
import smartsti_logo from "../../assets/smartsti_logo.png";
import { Color } from "../../common/theme";

export default function LoginPage() {
  return (
    <div>

      <Center maw={"100%"} h={"100vh"} >
        <div className="w-[480px]">
          <Image
            w={155}
            src={smartsti_logo}
          />
          <Space h="md" />
          <Text size="40px" fw={600} c={Color.Dark} style={{ lineHeight: "42px", letterSpacing: "-1px" }}>Welcome Back!</Text>
          <Space h="md" />
          <Text size="16px" fw={500} c={Color.TextSecondary} style={{ lineHeight: "24px", letterSpacing: "0px" }}>Sign In to your account</Text>
          <Space h="md" />
          <LoginForm />
        </div>
      </Center>

    </div>
  );
}
