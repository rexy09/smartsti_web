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
import AgreementStatisticCard from "../components/AgreementStatisticCard";
import { useOpportunitiesParameters } from "../stores";
import AgreementTable from "./AgreementTable";
export default function Agreements() {
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
            Agreements Management
          </Text>
        </div>
        <Group>
          <Button
            color="#1463FF"
            variant="filled"
            radius={"md"}
            leftSection={<IoMdAdd size={20} />}
          >
            Add New Agreement
          </Button>
          <Button
            color="#1463FF"
            variant="filled"
            radius={"md"}
            leftSection={<FiDownload size={20} />}
          >
            Export Agreements
          </Button>
        </Group>
      </Group>
      <Space h={"md"} />
      <SimpleGrid cols={{ base: 1, xs: 2, sm: 2, md: 5 }}>
        {!isLoading ? (
          <>
            <AgreementStatisticCard
              title="Active Agreements"
              description="Current agreements with ongoing collaborations"
              percentage={60}
              iconkey="mou"
            />
            <AgreementStatisticCard
              title="Pending Signatures"
              description="Agreements awaiting signatures"
              percentage={25}
              iconkey="research"
            />
            <AgreementStatisticCard
              title="Expired Agreements"
              description="Require renewal or review."
              percentage={20}
              iconkey="mou"
            />
            <AgreementStatisticCard
              title="New Agreements Added This Year"
              description="Agreements initiated in 2024 for STEM"
              iconkey="mou"
              count={120}
            />
            <AgreementStatisticCard
              title="Upcoming Expiry"
              description="Agreements expiring in the next 3 months"
              percentage={35}
              iconkey="upcoming"
            />
          </>
        ) : null}
      </SimpleGrid>
      <Space h={"md"} />
      <AgreementTable />
    </div>
  );
}
