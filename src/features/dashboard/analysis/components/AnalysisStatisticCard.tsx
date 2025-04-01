import { Group, Paper, Space, Text } from "@mantine/core";
import { Icons } from "../../../../common/icons";

interface Props {
  title: string;
  description?: string;
  iconkey: keyof typeof Icons;
  count?: number;
  percentage?: number;
  onClick?: () => void;
}
export default function AnalysisStatisticCard(props: Props) {
  return (
    <Paper
      radius="10px"
      key={props.title}
      style={{ border: "1px solid #EFF2F1" }}
      p={10}
    >
      <Group gap={5}>
        {Icons[props.iconkey]}
        <Text size="13px" c="#30374F" fw={600}>
          {props.title}
        </Text>
      </Group>
      <Space h="10px" />

      <Group gap={5} wrap="nowrap">
        {props.count && (
          <Text fw={600} size="24px" c="#192031">
            {props.count}
          </Text>
        )}
        {props.percentage && (
          <Text fw={600} size="24px" c="#192031">
            {props.percentage}%
          </Text>
        )}
        <Text size="11px" c="#797E90" fw={500}>
          {props.description}
        </Text>
      </Group>
    </Paper>
  );
}
