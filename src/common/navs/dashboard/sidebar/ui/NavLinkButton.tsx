import { Group, Space, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
import { Color } from "../../../../theme";
import { Icons } from "../../../../icons";

type Props = {
  label: string;
  target?: string;
  to: string;
  iconKey?: string;
  icon?:any;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavLinkButton(props: Props) {
  const { hovered, ref } = useHover();
  // const colorScheme = useColorScheme();
  const Icon = (iconKey: string) =>
    Icons[( iconKey) as keyof typeof Icons];
  return (
    <NavLink
      onClick={() => props.setOpened(true)}
      target={props.target}
      to={props.to}
      style={({ isActive }) => {
        return {
          textDecoration: "none",
          borderRadius: "7px",
          color: isActive ? Color.PrimaryYellow : Color.White,
        };
      }}
      children={({ isActive }) => {
        return (
          <div
            ref={ref}
            style={{
              padding: "10px",
              borderRadius: "12px",
              backgroundColor: hovered ? Color.PrimaryBlue : isActive ? Color.PrimaryBlue : "",

            }}
          >
            <Group>
              {/* {props.icon ? (
                <props.icon
                  size="1.3rem"
                  stroke={2}
                  color={isActive || hovered ? Color.PrimaryYellow : Color.White}
                />
              ) : (
                <Space w="md" />
              )} */}
              {props.iconKey ? (
                Icon(props.iconKey)
              ) : (
                <Space w="md" />
              )}
              <Text
                fz="16px"
                fw={400}
                c={isActive || hovered ? Color.White : Color.White}
              >
                {props.label}
              </Text>
            </Group>
          </div>
        );
      }}
    />
  );
}

export default NavLinkButton;
