import { ActionIcon, Indicator } from "@mantine/core";

import { useState } from "react";
import { Icons } from "../../../../icons";
import { useNavigate } from "react-router-dom";

type Props = {
  setOpened?: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function NotificationMenu({ setOpened }: Props) {
  const navigate = useNavigate();

  const [_userMenuOpened, _setUserMenuOpened] = useState(false);

  return (
    <>
      <ActionIcon
        variant="subtle"
        color="gray"
        size="lg"
        radius={"sm"}
        aria-label="notifications"
        onClick={() => {
          setOpened && setOpened(false);
          navigate("/notifications");
        }}
      >
        <Indicator
          color="#F06A6A"
          size={10}
          offset={0}
          processing
          withBorder
          // disabled
        >
          {Icons.notification}
        </Indicator>
      </ActionIcon>
      {/* <Menu
      width={400}
      position="bottom-end"
      transitionProps={{ transition: "pop-top-right" }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
    >
      <Menu.Target>
        <ActionIcon variant="outline" color="#0000001A" size="lg" radius={'md'} aria-label="Settings">
          <Indicator color="#F06A6A" size={10} offset={5} processing withBorder>
            {Icons.notification}
          </Indicator>
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <ScrollArea h={300}>
          <Menu.Label>Notifications</Menu.Label>

          <Text size="sm" ta="center">
            No notifications
          </Text>

        </ScrollArea>
      </Menu.Dropdown>
    </Menu> */}
    </>
  );
}
