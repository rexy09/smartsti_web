import {
  Button,
  Flex,
  Group,
  NumberFormatter,
  Paper,
  Space,
  Stack,
  Text
} from "@mantine/core";
import { Icons } from "../../../../common/icons";
import { FontFamily } from "../../../../common/theme";

interface Props {
  title: string;
  status: string;
  statusColor: string;
  duration: string;
  iconkey: keyof typeof Icons;
  count?: number;
  percentage?: number;
  ongoing_mou?: number;
  delayed_mou?: number;
  research_growth?: number;
  total_budget?: number;
  remaining?: number;
}
export default function DashboardStatisticCard(props: Props) {
  function getDiffIcon(percentageDifference: number) {
    return percentageDifference > 0 ? Icons.arrow_up : Icons.arrow_down;
  }

  return (
    <Paper
      radius="10px"
      key={props.title}
      style={{ border: "1px solid #EFF2F1" }}
    >
      <Stack align="flex-start" justify="space-between" h={250}>
        <Flex gap="xs" align="flex-start" direction="row" p="20px">
          <div>
            <Group wrap="nowrap">
              {Icons[props.iconkey]}
              <Text size="16px" c="#30374F" fw={600}>
                {props.title}
              </Text>
            </Group>
            <Space h="sm" />
            <Group wrap="nowrap">
              <div
                style={{
                  borderRadius: "5px",
                  height: "58px",
                  backgroundColor: props.statusColor,
                  width: "5px",
                  marginLeft: "14px",
                }}
              />
              <div>
                <Text
                  fw={600}
                  size="16px"
                  c="#19203166"
                  style={{ fontFamily: FontFamily.PlusJakartaSans }}
                >
                  {props.status}
                </Text>
                <Space h="sm" />
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
              </div>
            </Group>
          </div>
        </Flex>

        <div
          style={{
            padding: "20px",
            backgroundColor: "#F9FBFC",
            borderTop: "1px solid #EFF2F1",
            width: "100%",
            height: "100%",
            borderRadius: "0 0 10px 10px",
          }}
        >
          <Group justify="space-between">
            <div>
              {props.research_growth && (
                <Group gap={5} wrap="nowrap">
                  {getDiffIcon(props.research_growth)}
                  <Text
                    c={props.research_growth > 0 ? "#12B76A" : "#F04438"}
                    fz="14px"
                    fw={500}
                  >
                    <span>
                      +
                      <NumberFormatter
                        value={props.research_growth}
                        decimalScale={2}
                      />
                      %
                    </span>
                  </Text>
                  <Text c="#667085" fz="14px" fw={500}>
                    Growth from Last Year
                  </Text>
                </Group>
              )}
              {props.ongoing_mou && (
                <Group gap={5} wrap="nowrap">
                  {getDiffIcon(props.ongoing_mou)}
                  <Text
                    c={props.ongoing_mou > 0 ? "#12B76A" : "#F04438"}
                    fz="14px"
                    fw={500}
                  >
                    <span>
                      <NumberFormatter
                        value={props.ongoing_mou}
                        decimalScale={2}
                      />
                      %
                    </span>
                  </Text>
                  <Text c="#667085" fz="14px" fw={500}>
                    Ongoing
                  </Text>
                </Group>
              )}
              {props.delayed_mou && (
                <Group gap={5} wrap="nowrap">
                  {getDiffIcon(props.delayed_mou)}
                  <Text
                    c={props.delayed_mou > 0 ? "#12B76A" : "#F04438"}
                    fz="14px"
                    fw={500}
                  >
                    <span>
                      <NumberFormatter
                        value={props.delayed_mou * -1}
                        decimalScale={2}
                      />
                      %
                    </span>
                  </Text>
                  <Text c="#667085" fz="14px" fw={500}>
                    Delayed
                  </Text>
                </Group>
              )}

              {props.total_budget && (
                <Group gap={5} wrap="nowrap">
                  {getDiffIcon(props.total_budget)}

                  <Text c="#667085" fz="14px" fw={500}>
                    Total Budget:{" "}
                    <NumberFormatter
                      value={props.total_budget}
                      decimalScale={2}
                      thousandSeparator
                    />
                  </Text>
                </Group>
              )}
              {props.remaining && (
                <Group gap={5} wrap="nowrap">
                  {getDiffIcon(props.remaining)}

                  <Text c="#667085" fz="14px" fw={500}>
                    Remaining:{" "}
                    <NumberFormatter
                      value={props.remaining * -1}
                      decimalScale={2}
                      thousandSeparator

                    />
                  </Text>
                </Group>
              )}
            </div>
            <Button variant="subtle" color="#1F293A">
              View More
            </Button>
          </Group>
        </div>
      </Stack>
    </Paper>
  );
}
