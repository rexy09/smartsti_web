import { Center, Space, Text } from "@mantine/core";
import { Color } from "../../common/theme";
import AuthCallback from "../../features/auth/ui/AuthCallback";

export default function AuthCallbackPage() {
  return (
    <div>

      <Center maw={"100%"} h={"100vh"} >
        <div className="w-[480px]">
         
          <Space h="md" />
          <Text size="40px" fw={700} c={Color.BrandBlue} style={{ lineHeight: "48px", letterSpacing: "-0.8px" }}>Welcome back </Text>
          <Space h="md" />
          <AuthCallback />
        </div>
      </Center>

    </div>
  );
}
