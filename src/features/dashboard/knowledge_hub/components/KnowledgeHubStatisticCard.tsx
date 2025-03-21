import {
  Button,
  Flex,
  Group,
  Paper,
  Space,
  Stack,
  Text
} from "@mantine/core";
import { Icons } from "../../../../common/icons";

interface Props {
  title: string;
  subscript?: string;
  statusColor: string;
  iconkey: keyof typeof Icons;
  count?: number;
  onClick: () => void
}
export default function KnowledgeHubStatisticCard(props: Props) {


  return (
    <Paper
      radius="10px"
      key={props.title}
      style={{ border: "1px solid #EFF2F1" }}
    >
      <Stack align="flex-start" justify="space-between" h={140} gap={0}>
        <Flex
          gap="xs"
          align="flex-end"
          justify={"space-between"}
          direction="row"
          p="15px 15px 0px 15px"
          w={'100%'}
        >
          <Group wrap="nowrap" w={'100%'}>
            <div
              style={{
                borderRadius: "5px",
                height: "50px",
                backgroundColor: props.statusColor,
                width: "5px",
              }}
            />
            <div style={{ width: "100%" }}>
              <Text size="13px" c="#30374F" fw={600}>
                {props.title}
              </Text>
              <Space h="sm" />
              {props.count && (
                <Text fw={600} size="24px" c="#192031">
                  {props.count}
                  {' '}
                  {props.subscript && <sub style={{ fontSize: "10px", fontWeight: 500, color:"#535862"}}>{props.subscript}</sub>}
                </Text>
              )}
              
            </div>
          </Group>

          <Group justify="flex-end">
            {Icons[props.iconkey]}
          </Group>
        </Flex>

        <div
          style={{
            padding: "10px",
            backgroundColor: "#F9FBFC",
            borderTop: "1px solid #EFF2F1",
            width: "100%",
            borderRadius: "0 0 10px 10px",
          }}
        >
          <Group justify="flex-end">
            <Button
              variant="subtle"
              color="#1F293A"
              size="xs"
              rightSection={Icons.arrow_up_right}
              onClick={
                () => {
                  props.onClick();

                }
              }
            >
              View More
            </Button>
          </Group>
        </div>
      </Stack>
    </Paper>
  );
}
