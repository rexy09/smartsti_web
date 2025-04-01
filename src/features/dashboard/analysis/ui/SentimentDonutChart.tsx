import { DonutChart } from '@mantine/charts';
import { Badge, Center, Divider, Grid, Group, Paper, Space, Stack, Text } from "@mantine/core";
import { PiDotsThreeOutlineThin } from "react-icons/pi";
export const donutChartData = [
  { name: "Positive", value: 120, color: "#036AE3" },
  { name: "Neutral", value: 67, color: "#96D544" },
  { name: "Negative", value: 50, color: "#00B2FE" },
];

interface Props { }
export default function SentimentDonutChart({}: Props) {
  return (
    <Paper radius="10px" style={{ border: "1px solid #EFF2F1" }}>

      <Group justify="space-between" p={"20px"}>
        <Text size="18px" fw={500} c={"#0E0F12"}>
          Sentiment Distribution
        </Text>
        <PiDotsThreeOutlineThin color="#A9ABAD" />
      </Group>
      <Divider/>
      <Space h={"md"} />
      <Grid p={"20px"}>
        <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
          <Center>
            <DonutChart size={250} thickness={30} data={donutChartData} />
          </Center>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <Stack   >
            {donutChartData.map((data) => (
              <div key={data.name}>

                <Text size="12px" fw={600} c="#19203166">
                  {data.name}
                </Text>
                <Space h={"md"} />

              <Group>
                <Badge size="xs" circle color={data.color}></Badge>
                  <Text size="17px" fw={600} c={"#192031"}>
                  {data.value}
                </Text>
              </Group>
              </div>
            ))}
          </Stack>
        </Grid.Col>
      </Grid>
      <Space h={"30px"} />

    </Paper>
  );
}
