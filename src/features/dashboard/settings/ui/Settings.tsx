import { Space, Tabs, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { FaRegUser } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { IUserResponse } from "../../../auth/types";
import CompanyForm from "../components/CompanyForm";
import ProfileForm from "../components/ProfileForm";
import { useSettingsServices } from "../services";
import { Color } from "../../../../common/theme";

export default function Settings() {
  const [activeTab, setActiveTab] = useState<string | null>("first");
  const { getUser } = useSettingsServices();
  const [user, setUser] = useState<IUserResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const signIn = useSignIn();
  const authHeader = useAuthHeader();
  const updateSystemUser = (userState: IUserResponse) => {
    if (
      authHeader &&
      signIn({
        auth: {
          token: authHeader.split(" ")[1],
          type: "Bearer",
        },
        userState: userState,
      })
    ) {
      return;
    }
  };
  const fetchData = () => {
    setIsLoading(true);
    getUser()
      .then((response) => {
        setIsLoading(false);
        setUser(response.data);
        updateSystemUser(response.data);
      })
      .catch((_error) => {
        setIsLoading(false);
        notifications.show({
          color: "red",
          title: "Error",
          message: "Something went wrong!",
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Tabs
        keepMounted={false}
        value={activeTab}
        onChange={setActiveTab}
        // variant="pills" 
        orientation="vertical"
      >
        
        <Tabs.List w={200} >
          <Tabs.Tab value="first" leftSection={<FaRegUser color={activeTab=="first"?Color.PrimaryBlue:""} size={18} />} mb={'md'}>
            <Text c={activeTab == "first" ? Color.PrimaryBlue : ""} size="16px">
            Profile
          </Text>
          </Tabs.Tab>
            {user?.user_type === "owner" && (
            <Tabs.Tab value="second" leftSection={<FiBriefcase color={activeTab == "second" ? Color.PrimaryBlue : ""} size={18} />}>
              <Text c={activeTab == "second" ? Color.PrimaryBlue : ""} size="16px">
                Company
          </Text>

            </Tabs.Tab>
            )}
          </Tabs.List>

        <Space h="md" />
          
        <Tabs.Panel value="first" >
          <ProfileForm
            isLoading={isLoading}
            fetchData={fetchData}
            user={user}
          />
        </Tabs.Panel>
        <Tabs.Panel value="second">
          <CompanyForm
            isLoading={isLoading}
            fetchData={fetchData}
            user={user}
          />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
