import {
  Button,
  Center,
  Group,
  Menu,
  SimpleGrid,
  Space,
  Text
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { notifications } from "@mantine/notifications";
import moment from "moment";
import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import {
  useUtilities
} from "../../../hooks/utils";
import DashboardStatisticCard from "../../home/components/DashboardStatisticCard";
import { IOrder, IOrdersStatistics } from "../../home/types";
import { OrderStatisticCardSkeleton } from "../components/Loaders";
import {
  useJobServices
} from "../services";
import { useDashboardParameters } from "../stores";
import {
  PaginatedResponse
} from "../types";
import JobTable from "./JobTable";

export default function JobStatistics() {
  const parameters = useDashboardParameters();
  const { getFormattedDate } = useUtilities();
  const { getOrdersStatistics, getOrders } =
    useJobServices();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [openStartDate, setOpenStartDate] = useState(false);
  const [openEndDate, setOpenEndDate] = useState(false);
  const [ordersStatistics, setOrderStatistics] = useState<IOrdersStatistics>();
    const [orders, setOrders] = useState<PaginatedResponse<IOrder>>();
  

  const getFirstDayOfCurrentMonth = (): Date => {
    const today = new Date();
    const value = new Date(today.getFullYear(), today.getMonth(), 1);

    return value;
  };

  const getLastDayOfCurrentMonth = (): Date => {
    const today = new Date();
    const value = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    return value;
  };

  const [startDate, setStartDate] = useState<Date | null>(() =>
    getFirstDayOfCurrentMonth()
  );
  const [endDate, setEndDate] = useState<Date | null>(() =>
    getLastDayOfCurrentMonth()
  );

  const fetchData = () => {
    setIsLoading(true);
    const params = useDashboardParameters.getState();
    getOrdersStatistics(params)
      .then((response) => {
        setIsLoading(false);
        setOrderStatistics(response.data);
      })
      .catch((_error) => {
        setIsLoading(false);
        notifications.show({
          color: "red",
          title: "Error",
          message: "Something went wrong!",
        });
      });

    
    fetchOrders(1);
  };
  const fetchOrders = (page: number) => {
    setLoadingOrders(true);
    const params = useDashboardParameters.getState();

    getOrders(params, page)
      .then((response) => {
        setLoadingOrders(false);
        setOrders(response.data);
      })
      .catch((_error) => {
        setLoadingOrders(false);
        notifications.show({
          color: "red",
          title: "Error",
          message: "Something went wrong!",
        });
      });
  };
  useEffect(() => {
    parameters.updateText("startDate", getFormattedDate(startDate));
    parameters.updateText("endDate", getFormattedDate(endDate));
    fetchData();
  }, []);


  const skeletons = Array.from({ length: 5 }, (_, index) => (
    <OrderStatisticCardSkeleton key={index} />
  ));

  return (
    <div>
      <Group justify="space-between">
        <Text size="18px" fw={500}>
          Jobs
        </Text>

        <Button.Group>
          {/* Date PopOver */}
          <Menu
            shadow="md"
            width={300}
            position="bottom-end"
            opened={openStartDate}
            onChange={setOpenStartDate}
          >
            <Menu.Target>
              <Button
                leftSection={<FaRegCalendarAlt color="#3A4656" />}
                variant="default"
                radius="md"
              >
                {startDate == null
                  ? "Start Date"
                  : moment(startDate).format("MMM Do YYYY")}
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Center>
                <DatePicker
                  allowDeselect
                  value={startDate}
                  onChange={(value) => {
                    parameters.updateText(
                      "startDate",
                      getFormattedDate(value) == ""
                        ? ""
                        : getFormattedDate(value)
                    );
                    setStartDate(value);
                    fetchData();
                  }}
                />
              </Center>
            </Menu.Dropdown>
          </Menu>
          <Menu
            shadow="md"
            width={300}
            position="bottom-end"
            opened={openEndDate}
            onChange={setOpenEndDate}
          >
            <Menu.Target>
              <Button
                leftSection={<FaRegCalendarAlt color="#3A4656" />}
                variant="default"
                radius="md"
              >
                {endDate == null
                  ? "End Date"
                  : moment(endDate).format("MMM Do YYYY")}
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Center>
                <DatePicker
                  allowDeselect
                  value={endDate}
                  onChange={(value) => {
                    parameters.updateText(
                      "endDate",
                      getFormattedDate(value) == ""
                        ? ""
                        : getFormattedDate(value)
                    );
                    setEndDate(value);
                    fetchData();
                  }}
                />
              </Center>
            </Menu.Dropdown>
          </Menu>
        </Button.Group>
      </Group>
      <Space h="md" />

       <SimpleGrid cols={{ base: 1, xs: 2, md: 5 }} spacing={{ base: 10 }}>
              {ordersStatistics && !isLoading ? (
                <>
                  <DashboardStatisticCard
                    title="Total Jobs"
                    data={ordersStatistics?.total_orders!}
                    duration="This Month"
                  />
                  <DashboardStatisticCard
              title="Active Jobs"
                    data={ordersStatistics?.active_orders!}
                    duration="This Month"
                  />
                  <DashboardStatisticCard
              title="Completed Jobs"
                    data={ordersStatistics?.delivered_orders!}
                    duration="This Month"
                  />
                  <DashboardStatisticCard
              title="Pending Jobs"
                    data={ordersStatistics?.pending_orders!}
                    duration="This Month"
                  />
                  <DashboardStatisticCard
              title="Cancelled Jobs"
                    data={ordersStatistics?.cancelled_orders!}
                    duration="This Month"
                  />
                </>
              ) : (
                skeletons
              )}
            </SimpleGrid>

      <Space h="md" />
      <JobTable orders={orders} loadingOrders={loadingOrders} fetchOrders={fetchOrders} />

    
    </div>
  );
}
