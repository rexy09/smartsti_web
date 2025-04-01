import { AreaChart } from '@mantine/charts';
import { Group, Paper, Space, Text } from "@mantine/core";
import { PiDotsThreeOutlineThin } from "react-icons/pi";
export const lineChartData = [
  { date: "Jan", Sales: 50000 },
  { date: "Feb", Sales: 30000 },
  { date: "Mar", Sales: 80000 },
  { date: "Apr", Sales: 100000 },
  { date: "May", Sales: 95000 },
  { date: "Jun", Sales: 90000 },
  { date: "Jul", Sales: 150000 },
  { date: "Aug", Sales: 140000 },
  { date: "Sep", Sales: 200000 },
  { date: "Oct", Sales: 250000 },
  { date: "Nov", Sales: 200000 },
  { date: "Dec", Sales: 150000 },
];

interface Props { }
export default function ResearchOutputGrowth({}: Props) {
  return (
    <Paper radius={"md"} p={"20px"}>
      <div >
        <Group justify="space-between" >
          <Text size="20px" fw={700} c={"#030A16"}>
            Research Output Growth
          </Text>
          <PiDotsThreeOutlineThin color="#A9ABAD" />
        </Group>
        <Space h={"3px"} />
        <Text size="12px" fw={400} c={"#5B5D7A"} >
          Research publications over time.
        </Text>
      </div>
      <Space h={"md"} />

      <AreaChart
        h={300}
        data={lineChartData}
        dataKey="date"
        withLegend
        series={[{ name: "Sales", label:"Growth", color: "#1463FF" }]}
        curveType="bump"
        withDots={false}
      />
     
    </Paper>
  );
}
