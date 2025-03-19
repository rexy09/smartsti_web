import { Burger, Divider, Group, Image, Select } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import mainLogo from "../../../../assets/smartsti_logo.png";
import { Icons } from "../../../icons";
import { Color } from "../../../theme";
import AccountMenu from "./ui/AccountMenu";
import NotificationMenu from "./ui/NotificationMenu";

type Props = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function HeaderMenu({ opened, setOpened }: Props) {
  const navigate = useNavigate();
  // const authUser = useAuthUser<IUserResponse>();
  const routesByRights = {
    sender: [{ value: '/post_cargo', label: 'Post Cargo' }],
    owner: [
      { value: '/company', label: 'Company' },
      { value: '/jobs', label: 'Jobs' },
    ],
    general: [
      { value: '/', label: 'Dashboard' },
      { value: '/opportunities', label: 'Opportunities' },
      { value: '/research', label: 'Research Outputs' },
      { value: '/hub', label: 'Knowledge Hub' },
      { value: '/ai', label: 'Ai Insights' },
      { value: '/collaboration', label: 'Collaboration Tools' },
      { value: '/reports', label: 'Reports' },
      { value: '/settings', label: 'Settings' },
    ],
  };

  return (
    <Group h="100%" justify="space-between" bg={"white"} p={"md"}>
      <Group hiddenFrom="md">
        <Group>
          <Image radius="md" w={"130px"} src={mainLogo} alt="logo image" />
        </Group>
      </Group>
      <Group visibleFrom="md">
        <Select
          leftSection={Icons.search_blue}
          rightSection={<></>}
          radius="md"
          size="md"
          value={''}
          placeholder="Search for reports, research outputs, or opportunities..."
          searchable
          clearable
          data={[
            // ...(authUser?.user_type === 'owner' ? routesByRights.owner : []),
            // ...(authUser?.user_type === 'sender' ? routesByRights.sender : []),
            ...routesByRights.general
          ]}
          onChange={(value) => {
            navigate(value ?? "/");
          }}
        />

      </Group>
      <Group>
        <Group visibleFrom="sm">
          <NotificationMenu />
          <Divider orientation="vertical" />
          <AccountMenu />
        </Group>
        
        <Group>
          <Burger
            color={Color.PrimaryBlue}
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            hiddenFrom="md"
          />
        </Group>
      </Group>
    </Group>
  );
}
