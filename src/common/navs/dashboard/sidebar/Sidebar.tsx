import {
  Button,
  CloseButton,
  Divider,
  Group,
  Image,
  Paper,
  ScrollArea,
  Space,
  Stack,
  Text,
} from "@mantine/core";

import mainLogo from "../../../../assets/smartsti_logo2.png";

import { useMediaQuery } from "@mantine/hooks";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useNavigate } from "react-router-dom";
import keycloak from "../../../../config/keycloak-config";
import { Icons } from "../../../icons";
import { Color } from "../../../theme";
import AccountMenu from "../header/ui/AccountMenu";
import classes from "./sidenav.module.css";
import NavLinkButton from "./ui/NavLinkButton";

type SidebarProps = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

function Sidebar({ setOpened }: SidebarProps) {
  const matches = useMediaQuery("(min-width: 62em)");
  const signOut = useSignOut();
  const navigate = useNavigate();

  // const { hasRight } = useUserAuth();

  return (
    <nav
      className={classes.navbar}
      style={{ backgroundColor: Color.BrandBlue }}
    >
      <Group justify="flex-end" hiddenFrom="md">
        <CloseButton
          title="Close"
          size="xl"
          iconSize={20}
          icon={Icons.close}
          onClick={() => setOpened(true)}
        />
      </Group>

      <Stack
        h={matches ? "95vh" : "90vh"}
        align="stretch"
        justify="space-between"
        gap="xs"
      >
        <ScrollArea h={"100vh"}>
          <div>
            <Group mt={"sm"} justify="center">
              <Image w={"200px"} src={mainLogo} alt="logo image" />
            </Group>
            <Space h="lg" />
            <Stack align="stretch" justify="flex-start" gap="md">
              <Group hiddenFrom="md" mb={"md"}>
                <Paper p={"md"} radius="md" w={"100%"}>
                  <Group justify="space-between">
                    <AccountMenu />
                    {/* <NotificationMenu setOpened={setOpened} /> */}
                  </Group>
                </Paper>
              </Group>

              <NavLinkButton
                setOpened={setOpened}
                to={"/"}
                label={"Dashboard"}
                iconKey={"dashboard"}
              />

              <NavLinkButton
                setOpened={setOpened}
                to={"/opportunities"}
                label={"Opportunities"}
                iconKey={"opportunities"}
              />
              <NavLinkButton
                setOpened={setOpened}
                to={"/research"}
                label={"Research Outputs"}
                iconKey={"outputs"}
              />
              <NavLinkButton
                setOpened={setOpened}
                to={"/hub"}
                label={"Knowledge Hub"}
                iconKey={"hub"}
              />

              <NavLinkButton
                setOpened={setOpened}
                to={"/ai"}
                label={"Ai Insights"}
                iconKey={"ai"}
              />

              <NavLinkButton
                setOpened={setOpened}
                to={"/collaboration"}
                label={"Collaboration Tools"}
                iconKey={"tools"}
              />

              <NavLinkButton
                setOpened={setOpened}
                to={"/reports"}
                label={"Reports"}
                iconKey={"report"}
              />

              <NavLinkButton
                setOpened={setOpened}
                to={"/settings"}
                label={"Settings"}
                iconKey={"settings"}
              />
            </Stack>
            <Space h="md" />

            {/* <NavLinkButton
              setOpened={setOpened}
              to={"/eve"}
              label={"Eve AI"}
              iconKey={"eve"}
            /> */}
            <Divider />
            <Space h="md" />
            <Button
              leftSection={Icons.logout}
              variant="transparent"
              color={Color.White}
              onClick={() => {
                signOut();
                localStorage.clear();
                navigate("/login");
                keycloak.init();
                keycloak.logout({ redirectUri: "http://localhost:5173/login" });
              }}
            >
              <Text fz="14px" fw={500}>
                Log Out
              </Text>
            </Button>

            <Space h="lg" />
          </div>
        </ScrollArea>
      </Stack>
    </nav>
  );
}

export default Sidebar;
