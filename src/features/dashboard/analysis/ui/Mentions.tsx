import { RadialBarChart } from '@mantine/charts';
import { Badge, Button, Divider, Grid, Group, Menu, Paper, Space, Stack, Text } from "@mantine/core";
import { useAnalysisParameters } from "../stores";
import { Icons } from '../../../../common/icons';
import { Color } from '../../../../common/theme';
import { RiArrowDropDownLine } from 'react-icons/ri';
const chartData = [
  { name: 'Academic Journals', value: 65.88, color: '#1463FF' },
  { name: 'News Sites', value: 20.00, color: '#6EBDE8' },
  { name: 'Social Media', value: 14.12, color: '#96D544' },
  { name: 'Government Sites', value: 8.22, color: '#3CCDFB' },
];

interface Props { }
export default function Mentions(props: Props) {
  const parameters = useAnalysisParameters();

  return (
    <Paper radius="10px" style={{ border: "1px solid #EFF2F1" }}>

      <Group justify="space-between" p={"20px"}>
        <Text size="18px" fw={500} c={"#0E0F12"}>
          Top Positive and Negative Mentions
        </Text>
        <Menu width={220} withinPortal>
          <Menu.Target>
            <Button
              color="#13131329"
              variant="default"
              radius={"md"}
              rightSection={<RiArrowDropDownLine size={18} />}
              pr={12}
            >
              <Text
                size="14px"
                fw={parameters.type == "" ? 500 : 700}
                c={parameters.type == "" ? "" : Color.PrimaryBlue}
                tt={"capitalize"}
              >
                {parameters.type == ""
                  ? "Filters"
                  : parameters.type.split("_").join(" ")}
              </Text>
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            {[
              { label: "All", value: "" },
              { label: "Positive", value: "Positive" },
              { label: "Negative", value: "Negative" },
            ].map((item) => (
              <Menu.Item
                key={item.value}
                style={{
                  color:
                    parameters.type === item.value
                      ? `${Color.PrimaryBlue}`
                      : "",
                  fontWeight: parameters.type === item.value ? "700" : "",
                }}
                onClick={() => {
                  parameters.updateText("type", item.value);
                  // fetchData();
                }}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </Group>
      <Divider />
      <Paper p={"20px"}>
        <Paper radius="10px" style={{ border: "1px solid #EFF2F1" }}>
          <Paper p="20px" bg={"#F9F9F9"}>
            <Text fw={500} size='14px' c="#2A2D4E">
              Top Positive Mentions
            </Text>
          </Paper>
          <Space h={"xs"} />

          <Paper p="10px">
            <Stack gap={5} mb={"md"}>
              <Text c="#1AB233" size='13px' fw={500}>
                95% positive
              </Text>
              <Paper radius="10px" withBorder p={"md"} bg={"#F9F9FB"}>
                <Group justify='space-between' wrap='nowrap'>

                  <Text fw={400} size='14px' c="#383B59">
                    AI training bootcamp lauded for youth engagement
                  </Text>
                  <Text fw={400} size='12px' c="#7F8195">
                    00:22:21
                  </Text>
                </Group>
              </Paper>
            </Stack>
            <Stack gap={5} mb={"md"}>
              <Text c="#1AB233" size='13px' fw={500}>
                95% positive
              </Text>
              <Paper radius="10px" withBorder p={"md"} bg={"#F9F9FB"}>
                <Group justify='space-between' wrap='nowrap'>

                  <Text fw={400} size='14px' c="#383B59">
                    AI training bootcamp lauded for youth engagement
                  </Text>
                  <Text fw={400} size='12px' c="#7F8195">
                    00:22:21
                  </Text>
                </Group>
              </Paper>
            </Stack>
          </Paper>
        </Paper>

      </Paper>

    </Paper>
  );
}
