import { Badge, Center, Divider, Flex, Grid, Group, Paper, SimpleGrid, Space, Stack, Text } from "@mantine/core";
import { DonutChart, RadialBarChart } from '@mantine/charts';
import { PiDotsThreeOutlineThin } from "react-icons/pi";
const chartData = [
  { name: 'Academic Journals', value: 65.88, color: '#1463FF' },
  { name: 'News Sites', value: 20.00, color: '#6EBDE8' },
  { name: 'Social Media', value: 14.12, color: '#96D544' },
  { name: 'Government Sites', value: 8.22, color: '#3CCDFB' },
];

interface Props { }
export default function SourcesDistributionChart(props: Props) {
  return (
    <Paper radius="10px" style={{ border: "1px solid #EFF2F1" }}>

      <Group justify="space-between" p={"20px"}>
        <Text size="18px" fw={500} c={"#0E0F12"}>
          Sources Distribution
        </Text>
        <PiDotsThreeOutlineThin color="#A9ABAD" />
      </Group>
      <Divider />
      <Space h={"md"} />
      <Grid p={"20px"}>
        <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
            <RadialBarChart data={chartData} dataKey="value" h={220} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <Stack   >
            {chartData.map((data) => (
              <div key={data.name}>

                <Text size="12px" fw={600} c="#19203166">
                  {data.name}
                </Text>
                <Space h={"md"} />

                <Group>
                  <Badge size="xs" circle color={data.color}></Badge>
                  <Text size="17px" fw={600} c={"#192031"}>
                    {data.value}%
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
