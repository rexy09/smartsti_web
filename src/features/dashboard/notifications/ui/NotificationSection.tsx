import {
  Avatar,
  Box,
  Button,
  Divider,
  Group,
  Paper,
  ScrollArea,
  Space,
  Text
} from "@mantine/core";
import { useState } from "react";
import { Icons } from "../../../../common/icons";
import { Color } from "../../../../common/theme";
import { OrderSkeleton } from "../components/Loaders";
import { INotification } from "../types";

interface Props {
  data: INotification[];
  isLoading: boolean;
}
export default function NotificationSection({ data, isLoading }: Props) {
  const [orderIndex, setOrderIndex] = useState<number>(0);

  const orderSkeletons = Array(4)
    .fill(0)
    .map((_, index) => <OrderSkeleton key={index} />);

  

  return (
    <>
      <Paper p="md" radius="10px" style={{ border: "1px solid #1A2F570F" }}>
        <Group justify="space-between">

          <Text c={Color.TextSecondary} size="16px" fw={500}>
            Today
          </Text>
          <Group>
            <Button radius={'md'}>All</Button>
            <Button variant="default" radius={'md'}>Unread (2)</Button>
          </Group>
        </Group>
        <Space h="md" />
        <ScrollArea h={"90vh"} w={"100%"} scrollbars="y">
          <Box w={"100%"}>
            {!isLoading
              ? data.map((order, index) => (
                <Paper
                  key={order.id}
                  p="md"
                  radius="10px"

                  w={"100%"}
                  onClick={() => {
                    setOrderIndex(index);
                  }}
                >
                  <Group justify="space-between">
                    <Group>
                      <Avatar color={orderIndex == index ? "#0B72DA" :"#A6A5A6"} radius="xl" size={'lg'}>
                        {Icons.notification}
                      </Avatar>
                      <div>

                        <Text
                          c="#000000"
                          size="16px"
                          fw={400}
                        >
                          New Bids Received
                        </Text>
                        <Space h="sm" />
                        <Text
                          c={Color.TextSecondary}
                          size="16px"
                          fw={400}
                        >
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                      </div>
                    </Group>
                    <Text
                      c={Color.TextSecondary}
                      size="16px"
                      fw={400}
                    >
                      14:30
                    </Text>

                  </Group>
                      <Divider ms={'70px'} my={'md'}/>

                </Paper>
              ))
              : orderSkeletons}
          </Box>
        </ScrollArea>
      </Paper>

    </>
  );
}
