import {
  Button,
  Grid,
  Group,
  Menu,
  SimpleGrid,
  Space,
  Text,
} from "@mantine/core";
import { useEffect, useState } from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Icons } from "../../../../common/icons";
import { Color } from "../../../../common/theme";
import { IUserResponse } from "../../../auth/types";
import AnalysisStatisticCard from "../components/AnalysisStatisticCard";
import { useAnalysisParameters } from "../stores";
import SentimentDistribution from "./SentimentDistribution";
import SentimentDonutChart from "./SentimentDonutChart";
import SourcesDistributionChart from "./SourcesDistributionChart";
import Mentions from "./Mentions";
export default function Analysis() {
  const { id } = useParams();
  const authUser = useAuthUser<IUserResponse>();
  const navigate = useNavigate();
  const parameters = useAnalysisParameters();

  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {}, []);

  return (
    <div>
      <Group justify="space-between">
        <div>
          <Text size="24px" fw={500}>
            Sentiment Analysis
          </Text>
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
            <AnalysisStatisticCard
              title="Overall Sentiment"
              description="Positive | Negative: 10%"
              count={65}
              iconkey="overall"
            />
            <AnalysisStatisticCard
              title="Total Items Analyzed"
              description="Tweets & Blogs"
              count={5230}
              iconkey="research"
            />
            <AnalysisStatisticCard
              title="Net Sentiment Score"
              description="(↑ +5 from last period)"
              count={55}
              iconkey="score"
            />
            <AnalysisStatisticCard
              title="Top Trending Topic"
              description="“AI in Education”"
              iconkey="topic"
            />
            <AnalysisStatisticCard
              title="Most Discussed Region"
              description="Dar es Salaam "
              iconkey="score"
            />
          </>
        ) : null}
      </SimpleGrid>
      <Space h={"md"} />
      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
          <SentimentDistribution />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <SentimentDonutChart />
        </Grid.Col>
      </Grid>
      <Space h={"md"} />
      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
          <SourcesDistributionChart />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <Mentions />
        </Grid.Col>
      </Grid>
    </div>
  );
}
