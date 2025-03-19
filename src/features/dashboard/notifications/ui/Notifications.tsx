import { Group, Space, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";
import { PaginatedResponse } from "../../home/types";
import { useNotificationServices } from "../services";
import { INotification } from "../types";
import NotificationSection from "./NotificationSection";

export default function Notifications() {
  const { getNotifications } = useNotificationServices();
  const [isLoading, setIsLoading] = useState(false);
  const [ongoingOrders, setOngoingOrders] =
    useState<PaginatedResponse<INotification>>();

  const fetchData = () => {
    setIsLoading(true);

    getNotifications()
      .then((response) => {
        setIsLoading(false);
        setOngoingOrders(response.data);
      })
      .catch((_error) => {
        setIsLoading(false);
        notifications.show({
          color: "red",
          title: "Error",
          message: "Something went wrong!",
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Group justify="space-between">
        <Text size="18px" fw={500}>
          Notifications
        </Text>
      </Group>
      <Space h="md" />
      <NotificationSection
        data={ongoingOrders?.results ?? []}
        isLoading={isLoading}
      />
      <Space h="md" />
    </div>
  );
}
