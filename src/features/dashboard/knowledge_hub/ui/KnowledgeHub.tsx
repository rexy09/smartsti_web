import {
  Button,
  Group,
  Menu,
  SimpleGrid,
  Space,
  Tabs,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Icons } from "../../../../common/icons";
import { Color } from "../../../../common/theme";
import { IUserResponse } from "../../../auth/types";
import { PaginatedResponse } from "../../../services/types";
import { IOrder } from "../../home/types";
import KnowledgeHubStatisticCard from "../components/KnowledgeHubStatisticCard";
import { useBidServices } from "../services";
import { useOpportunitiesParameters } from "../stores";
import EducationalResourceTable from "./EducationalResourceTable";
import FundingOpportunitiesTable from "./FundingOpportunitiesTable";
import KnowledgeHubTable from "./KnowledgeHubTable";
import TechnologyInnovationTable from "./InnovationTable";
import InnovationTable from "./InnovationTable";

export default function KnowledgeHub() {
  const { cancelBid, acceptBid, declineBid, getAvailableDrivers } =
    useBidServices();
  const { id } = useParams();
  const authUser = useAuthUser<IUserResponse>();
  const navigate = useNavigate();
  const parameters = useOpportunitiesParameters();

  const [isLoading, setIsLoading] = useState(false);
  const [loadingOrder, setLoadingOrder] = useState(false);
  const [order, setOrder] = useState<IOrder>();
  const [bids, setBids] = useState<PaginatedResponse<any>>();
  const [dirivers, setDirivers] = useState<PaginatedResponse<any>>();

  const cancelBidAction = () => {
    setIsLoading(true);
    cancelBid(bids?.results[0].id!)
      .then((_response) => {
        setIsLoading(false);
        close();
        fetchData();
        notifications.show({
          color: "green",
          title: "Successfuly",
          message: "Your bid has been cancelled",
        });
      })
      .catch((error) => {
        setIsLoading(false);
        // if (
        //   error.response.data.error &&
        //   typeof error?.response?.data?.error === "string"
        // ) {
        //   notifications.show({
        //     color: "red",
        //     title: "Error",
        //     message: error.response.data.error,
        //   });
        // } else {
        //   notifications.show({
        //     color: "red",
        //     title: "Error",
        //     message: "Something went wrong!",
        //   });
        // }
      });
  };

  const acceptBidAction = () => {
    setIsLoading(true);
    acceptBid(bids?.results[0].id!)
      .then((_response) => {
        setIsLoading(false);
        fetchData();
        notifications.show({
          color: "green",
          title: "Successfuly",
          message: "Bid has been accepted",
        });
      })
      .catch((error) => {
        setIsLoading(false);
        // if (
        //   error.response.data.error &&
        //   typeof error?.response?.data?.error === "string"
        // ) {
        //   notifications.show({
        //     color: "red",
        //     title: "Error",
        //     message: error.response.data.error,
        //   });
        // } else {
        //   notifications.show({
        //     color: "red",
        //     title: "Error",
        //     message: "Something went wrong!",
        //   });
        // }
      });
  };

  const declineBidAction = () => {
    setIsLoading(true);
    declineBid(bids?.results[0].id!)
      .then((_response) => {
        setIsLoading(false);
        fetchData();
        notifications.show({
          color: "green",
          title: "Successfuly",
          message: "Bid has been declined",
        });
      })
      .catch((error) => {
        setIsLoading(false);
        // if (
        //   error.response.data.error &&
        //   typeof error?.response?.data?.error === "string"
        // ) {
        //   notifications.show({
        //     color: "red",
        //     title: "Error",
        //     message: error.response.data.error,
        //   });
        // } else {
        //   notifications.show({
        //     color: "red",
        //     title: "Error",
        //     message: "Something went wrong!",
        //   });
        // }
      });
  };

  const fetchData = () => {
    setLoadingOrder(true);
  };

  useEffect(() => {}, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<{ tabId: string; title: string }>({
    tabId: "0",
    title: "Knowledge Hub",
  });
  const tabs = [
    { tabId: "0", title: "Knowledge Hub" },
    {
      tabId: "1",
      title: "Publication Insights",
    },
    {
      tabId: "2",
      title: "Educational Resources",
    },
    {
      tabId: "3",
      title: "Funding Opportunities",
    },
    {
      tabId: "4",
      title: "Technology & Innovation",
    },
    {
      tabId: "5",
      title: "Innovations",
    },
  ];
  useEffect(() => {
    if (searchParams.get("tab")) {
      const tabIndex = searchParams.get("tab");
      if (tabIndex !== null) {
        setActiveTab(tabs[parseInt(tabIndex)]);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Group justify="space-between">
        <div>
          <Text size="24px" fw={500}>
            {activeTab.title}
          </Text>
          <Space h={"5px"} />
          <UnstyledButton
            onClick={() => {
              setActiveTab(tabs[0]);
            }}
          >
            <Text size="12px" fw={500} c="#27A8DE" fs={"italic"}>
              {activeTab.tabId == "0" ? "" : "Knowledge Hub"}
            </Text>
          </UnstyledButton>
        </div>
        <Group>
          <Menu width={220} withinPortal>
            <Menu.Target>
              <Button
                color="#13131329"
                variant="default"
                radius={"md"}
                leftSection={Icons.date}
                rightSection={<RiArrowDropDownLine size={18} />}
              >
                <Text
                  size="14px"
                  fw={parameters.type == "" ? 500 : 700}
                  c={parameters.type == "" ? "" : Color.PrimaryBlue}
                  tt={"capitalize"}
                >
                  {parameters.type == ""
                    ? "This Month"
                    : parameters.type.split("_").join(" ")}
                </Text>
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              {[
                { label: "This Month", value: "" },
                { label: "This Week", value: "This Week" },
                { label: "Last Month", value: "Last Month" },
              ].map((item) => (
                <Menu.Item
                  key={item.value}
                  style={{
                    color:
                      parameters.type === item.value
                        ? `${Color.PrimaryBlue}`
                        : "",
                    fontWeight: parameters.type === item.value ? "700" : "",
                  }}
                  onClick={() => {
                    parameters.updateText("type", item.value);
                    fetchData();
                  }}
                >
                  {item.label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
      <Space h={"md"} />
      <SimpleGrid cols={{ base: 1, xs: 2, sm: 2, md: 5 }}>
        {!isLoading ? (
          <>
            <KnowledgeHubStatisticCard
              title="STI Policies & Guidelines"
              iconkey="policies"
              statusColor="#4D5BD4"
              count={1250}
              onClick={() => {
                setActiveTab(tabs[0]);
                searchParams.set("tab", tabs[0].tabId);
                setSearchParams(searchParams);
              }}
            />
            <KnowledgeHubStatisticCard
              title="Educational Resources"
              subscript="Learning Modules"
              count={25}
              iconkey="education"
              statusColor="#7CC1C5"
              onClick={() => {
                setActiveTab(tabs[2]);
                searchParams.set("tab", tabs[2].tabId);
                setSearchParams(searchParams);
              }}
            />
            <KnowledgeHubStatisticCard
              title="Funding Opportunities"
              subscript="Open Grants"
              iconkey="education"
              statusColor="#6361CD"
              count={85}
              onClick={() => {
                setActiveTab(tabs[3]);
                searchParams.set("tab", tabs[3].tabId);
                setSearchParams(searchParams);
              }}
            />
            <KnowledgeHubStatisticCard
              title="Technology & Innovation"
              subscript="Recognized Projects"
              iconkey="awards"
              statusColor="#6E9FF3"
              count={5}
              onClick={() => {
                setActiveTab(tabs[4]);
                searchParams.set("tab", tabs[4].tabId);
                setSearchParams(searchParams);
              }}
            />
            <KnowledgeHubStatisticCard
              title=" Innovations"
              subscript="Reports Available"
              count={7}
              iconkey="innovation"
              statusColor="#6E9FF3"
              onClick={() => {
                setActiveTab(tabs[5]);
                searchParams.set("tab", tabs[5].tabId);
                setSearchParams(searchParams);
              }}
            />
          </>
        ) : null}
      </SimpleGrid>
      <Space h={"md"} />
      <Tabs keepMounted={false} value={activeTab.tabId}>
        <Tabs.Panel value="0">
          <KnowledgeHubTable />
        </Tabs.Panel>
        <Tabs.Panel value="1">
          <KnowledgeHubTable />
        </Tabs.Panel>
        <Tabs.Panel value="2">
          <EducationalResourceTable />
        </Tabs.Panel>
        <Tabs.Panel value="3">
          <FundingOpportunitiesTable />
        </Tabs.Panel>
        <Tabs.Panel value="4">
          <TechnologyInnovationTable />
        </Tabs.Panel>
        <Tabs.Panel value="5">
          <InnovationTable />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
