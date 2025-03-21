import {
  ActionIcon,
  Button,
  Group,
  Space,
  Text
} from "@mantine/core";
import { useState } from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { BsBookmarkPlus } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { IUserResponse } from "../../../auth/types";
import { PaginatedResponse } from "../../../services/types";
import { IOrder } from "../../home/types";
import OpportunityDetailsCard from "../components/OpportunityDetailsCard";
import { useOpportunitiesParameters } from "../stores";
export default function OpportunityDetails() {
 
  const { id } = useParams();
  const authUser = useAuthUser<IUserResponse>();
  const navigate = useNavigate();
  const parameters = useOpportunitiesParameters();



  const [isLoading, setIsLoading] = useState(false);
  const [loadingOrder, setLoadingOrder] = useState(false);
  const [order, setOrder] = useState<IOrder>();
  const [bids, setBids] = useState<PaginatedResponse<any>>();
  const [dirivers, setDirivers] = useState<PaginatedResponse<any>>();







  return (
    <div>
      <Text size="24px" fw={500}>
        Opportunity Details
      </Text>
      <Space h={"md"} />
      <Group justify="space-between">
        <Group>
          <ActionIcon variant="subtle" color="gray" onClick={() => {
            navigate(-1);
          }} >
            <IoMdArrowRoundBack />
          </ActionIcon>
          <Text size="18px" fw={500}>
            Courses
          </Text>
        </Group>
        <Group>
          <Button variant="filled" radius="md" color={"#0459FE"}>Apply Now</Button>
          <Button
            color="#13131329"
            variant="default"
            radius={"md"}
            leftSection={<IoShareSocialOutline />}
          >
            Share
          </Button>
          <Button
            color="#13131329"
            variant="default"
            radius={"md"}
            leftSection={<BsBookmarkPlus />}
          >
            Save
          </Button>

        </Group>

      </Group>
      <Space h={"md"} />
      <OpportunityDetailsCard />
    </div>
  );
}
