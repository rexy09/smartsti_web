import {
  Button,
  Center,
  Grid,
  Group,
  Menu,
  SimpleGrid,
  Space,
  Text,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import moment from "moment";
import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { useUtilities } from "../../../hooks/utils";
import DashboardStatisticCard from "../components/DashboardStatisticCard";
import { DashboardStatisticCardSkeleton } from "../components/Loaders";
import { useDashboardServices } from "../services";
import { useDashboardParameters } from "../stores";
import { IOrder, PaginatedResponse } from "../types";
import Announcements from "./Announcements";
import InnovationHubData from "./InnovationHubData";
import RegionalParticipation from "./RegionalParticipation";
import ResearchOutputGrowth from "./ResearchOutputGrowth";
export function DashboardStatistics() {
  const [searchParams, setSearchParams] = useSearchParams();

  const parameters = useDashboardParameters();
  const { getFormattedDate } = useUtilities();
  const { getOrdersStatistics, getOrders, getOngoingOrders } =
    useDashboardServices();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [openStartDate, setOpenStartDate] = useState(false);
  const [openEndDate, setOpenEndDate] = useState(false);
  const [ordersStatistics, setOrdersStatistics] = useState<any>();
  const [orders, setOrders] = useState<PaginatedResponse<IOrder>>();
  const [ongoingOrders, setOngoingOrders] =
    useState<PaginatedResponse<IOrder>>();
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
        setOrdersStatistics(response.data);
      })
      .catch((_error) => {
        setIsLoading(false);
        // notifications.show({
        //   color: "red",
        //   title: "Error",
        //   message: "Something went wrong!",
        // });
      });

    getOngoingOrders(params)
      .then((response) => {
        setIsLoading(false);
        setOngoingOrders(response.data);
      })
      .catch((_error) => {
        setIsLoading(false);
        // notifications.show({
        //   color: "red",
        //   title: "Error",
        //   message: "Something went wrong!",
        // });
      });

    const page = searchParams.get("page") || "1";
    fetchOrders(Number(page));
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
        // notifications.show({
        //   color: "red",
        //   title: "Error",
        //   message: "Something went wrong!",
        // });
      });
  };
  useEffect(() => {
    const searchStartDate = searchParams.get("startDate");
    const searchEndDate = searchParams.get("endDate");
    searchParams.set(
      "startDate",
      searchStartDate ?? getFormattedDate(startDate)
    );
    searchParams.set("endDate", searchEndDate ?? getFormattedDate(endDate));
    setStartDate(searchStartDate ? new Date(searchStartDate) : startDate);
    setEndDate(searchEndDate ? new Date(searchEndDate) : endDate);
    parameters.updateText(
      "startDate",
      searchStartDate ?? getFormattedDate(startDate)
    );
    parameters.updateText(
      "endDate",
      searchEndDate ?? getFormattedDate(endDate)
    );

    // fetchData();
  }, []);

  const skeletons = Array.from({ length: 3 }, (_, index) => (
    <DashboardStatisticCardSkeleton key={index} />
  ));

  return (
    <div>
      <Group justify="space-between">
        <Text size="24px" fw={500}>
          Dashboard
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
                  // allowDeselect
                  value={startDate}
                  onChange={(value) => {
                    parameters.updateText(
                      "startDate",
                      getFormattedDate(value) == ""
                        ? ""
                        : getFormattedDate(value)
                    );
                    setStartDate(value);
                    searchParams.set("startDate", getFormattedDate(value));
                    setSearchParams(searchParams);
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
                  value={endDate}
                  onChange={(value) => {
                    parameters.updateText(
                      "endDate",
                      getFormattedDate(value) == ""
                        ? ""
                        : getFormattedDate(value)
                    );
                    setEndDate(value);

                    searchParams.set("endDate", getFormattedDate(value));
                    setSearchParams(searchParams);
                    fetchData();
                  }}
                />
              </Center>
            </Menu.Dropdown>
          </Menu>
        </Button.Group>
      </Group>
      <Space h="md" />

      <SimpleGrid cols={{ base: 1, xs: 2, sm: 2, md: 3 }} spacing={{ base: 30 }}>
        {!isLoading ? (
          <>
            <DashboardStatisticCard
              title="MoU Implementation Status"
              duration="This Month"
              iconkey="mou"
              status="Completed"
              statusColor="#4D5BD4"
              percentage={30}
              ongoing_mou={50}
              delayed_mou={-10}
            />
            <DashboardStatisticCard
              title="Research Outputs"
              duration="This Month"
              research_growth={15}
              iconkey="research"
              status="Published Papers"
              statusColor="#7CC1C5"
              count={1250}

            />
            <DashboardStatisticCard
              title="Funding Utilization "
              duration="This Month"
              iconkey="funding"
              status="Disbursed"
              statusColor="#6E9FF3"
              percentage={80}
              total_budget={1000000}
              remaining={-200000}

            />

          </>
        ) : (
          skeletons
        )}
      </SimpleGrid>

      <Space h="md" />
      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
          <Announcements />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <InnovationHubData />
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <RegionalParticipation />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <ResearchOutputGrowth />
        </Grid.Col>
      </Grid>

      <Space h="md" />

    </div>
  );
}
