import { BarChart } from '@mantine/charts';
import { Divider, Group, Paper, Space, Text } from "@mantine/core";
import { PiDotsThreeOutlineThin } from "react-icons/pi";
export const lineChartData = [
  { date: "Jan", Funding: 50000, Stem: 60000, Research: 70000 },
  { date: "Feb", Funding: 30000, Stem: 40000, Research: 50000 },
  { date: "Mar", Funding: 80000, Stem: 70000, Research: 60000 },
  { date: "Apr", Funding: 100000, Stem: 90000, Research: 80000 },
  { date: "May", Funding: 95000, Stem: 85000, Research: 75000 },
  { date: "Jun", Funding: 90000, Stem: 80000, Research: 70000 },
  { date: "Jul", Funding: 150000, Stem: 140000, Research: 130000 },
  { date: "Aug", Funding: 140000, Stem: 130000, Research: 120000 },
  { date: "Sep", Funding: 200000, Stem: 190000, Research: 180000 },
  { date: "Oct", Funding: 250000, Stem: 240000, Research: 230000 },
  { date: "Nov", Funding: 200000, Stem: 190000, Research: 180000 },
  { date: "Dec", Funding: 150000, Stem: 140000, Research: 130000 },
].map(item => ({
  date: item.date,
  Funding: item.Funding,
  Stem: item.Stem,
  Research: item.Research,
  total: item.Funding + item.Stem + item.Research
}));

interface Props { }
export default function SentimentDistribution(props: Props) {
  return (
    <Paper radius={"md"} p={"0px"}>
      <Group justify="space-between" p={"20px"}>
        <Text size="18px" fw={500} c={"#12110F"}>
          Sentiment Distribution
        </Text>
        <PiDotsThreeOutlineThin color="#A9ABAD" />
      </Group>
      <Divider />
      <BarChart
        p={"20px"}
        h={340}
        data={lineChartData}
        dataKey="date"
        type="stacked"
        withLegend
        series={[
          { name: "Reserch", label: "Reserch", color: "#B4EDFF" },
          { name: "Stem", label: "Stem", color: "#3CCDFB" },
          { name: "Funding", label: "Funding", color: "#1463FF" }
        ]}
      />

    </Paper>
  );
}
