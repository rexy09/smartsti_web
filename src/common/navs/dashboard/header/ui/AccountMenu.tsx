import { Avatar, Flex, Group, Menu, Space, Text } from "@mantine/core";

import { useState } from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { useNavigate } from "react-router-dom";
import { IUserResponse } from "../../../../../features/auth/types";
import { Color } from "../../../../theme";
type Props = {
  showTitle?: boolean;
};
function AccountMenu({ }: Props) {
  const navigate = useNavigate();
  const authUser = useAuthUser<IUserResponse>();

  const [_userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <Flex
      gap="xs"
      justify="space-between"
      align="center"
      direction="row"
      wrap="nowrap"
    >
      <Menu
        disabled
        position="top-start"
        onClose={() => setUserMenuOpened(false)}
        onOpen={() => setUserMenuOpened(true)}
        withinPortal
        transitionProps={{ transition: "rotate-right", duration: 150 }}
      >
        <Menu.Target>
          <Flex
            gap="xs"
            justify="space-between"
            align="flex-start"
            direction="row"
            wrap="nowrap"
            maw={200}
          >
            <Group>
              <Avatar src={"https://s3-alpha-sig.figma.com/img/b7c1/5587/5755e2904963145b165313ddd107bf49?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XjICcDDXI1O4sLx47xkXv59rQa2eg9VsY9lxSYQfPOiOGxM5yh35kS4qSQ-ZgQjPGOsVosHa~YX8T2W~fQGrdto~30u5PQz74nHqR1RkKbkvVyIzUgQHQpFsre6IpL5MIKe7KBb536rgMqIK6rQTXbPQ885hW9JQb80FGK-NvO1Jbbs8CrCBY7WIMFP86sGNJwYLAgdlKaMqnFliKsGO3yBN7hKLWcIsdItTuLkXdKv~34sLAjw2aHajha3MODDhl-GR3aY~xcU9HoKHSEECOLIlocrjKYEUpG~vxmSHwxOANWctgf1oqPs28pVsaO7RfPDBwD3hUVfCOQxBFVj6cw__"} radius="sm" />

              <div style={{ flex: 1 }}>
                <Text size="14px" fw={500} c={"#2A2A3C"}  tt={"capitalize"}>
                  John Juma
                  {/* {authUser?.user ? authUser?.user?.full_name : authUser?.owner?.user.full_name} */}
                </Text>
                <Space h="5px" />

                <Text
                  size="12px"
                  c={"#2A2A3C80"}
                  fw={500}
                  tt="capitalize"
                >
                  Superadmin
                  {/* {authUser?.user_type === "sender" && "Cargo Owner"}
                  {authUser?.user_type === "owner" && "Transpoter"} */}
                </Text>
              </div>
            </Group>
            {/* {Icons.chevron_down} */}
          </Flex>
        </Menu.Target>
        <Menu.Dropdown p={"sm"}>
          <Menu.Item
            // leftSection={<IconUserCircle size="0.9rem" stroke={1.5} />}
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </Menu.Item>

          <Menu.Divider />
          <Menu.Item
            // leftSection={<IconHelp size="0.9rem" stroke={1.5} />}
            onClick={() => {
              navigate("/account");
            }}
          >
            Help Center
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      {/* <SignOutModal /> */}
    </Flex>
  );
}

export default AccountMenu;
