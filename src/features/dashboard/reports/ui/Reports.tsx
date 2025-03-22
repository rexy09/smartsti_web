import {
  Button,
  Group,
  SimpleGrid,
  Space,
  Text
} from "@mantine/core";
import { useEffect, useState } from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { FiDownload } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { IUserResponse } from "../../../auth/types";
import ReportStatisticCard from "../components/ReportStatisticCard";
import { useOpportunitiesParameters } from "../stores";
import ReportTable from "./ReportTable";
export default function Reports() {
  const { id } = useParams();
  const authUser = useAuthUser<IUserResponse>();
  const navigate = useNavigate();
  const parameters = useOpportunitiesParameters();

  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => { }, []);

  return (
    <div>
      <Group justify="space-between">
        <div>
          <Text size="24px" fw={500}>
            Reports
          </Text>
        </div>
        <Group>
          <Button
            color="#1463FF"
            variant="filled"
            radius={"md"}
            leftSection={<IoMdAdd size={20} />}
          >
            Add New Report
          </Button>
          <Button
            color="#1463FF"
            variant="filled"
            radius={"md"}
            leftSection={<FiDownload size={20} />}
          >
            Export Report
          </Button>
        </Group>
      </Group>
      <Space h={"md"} />
      <SimpleGrid cols={{ base: 1, xs: 2, sm: 2, md: 5 }}>
        {!isLoading ? (
          <>
            <ReportStatisticCard
              title="Total Reports"
              description="Available"
              count={120}
              iconkey="mou"
            />
            <ReportStatisticCard
              title="Recent Reports"
              description="Published Last Month"
              count={15}
              iconkey="research"
            />
            <ReportStatisticCard
              title="Most Downloaded AI in Education"
              description="Downloads"
              count={450}
              iconkey="mou"
            />
            <ReportStatisticCard
              title="Top Contributor"
              description="UDSM Reports"
              iconkey="mou"
              count={30}
            />
            <ReportStatisticCard
              title="Reports by Category"
              description="STEM: 45  Health: 30 Engineering: 25 | AI: 20"
              count={45}
              iconkey="upcoming"
            />
          </>
        ) : null}
      </SimpleGrid>
      <Space h={"md"} />
      <ReportTable />
    </div>
  );
}
