import {
  ActionIcon,
  Button,
  Group,
  Menu,
  Select,
  Space,
  Text
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { Icons } from "../../../../common/icons";
import { Color } from "../../../../common/theme";
import { IUserResponse } from "../../../auth/types";
import { IOrder } from "../../home/types";
import { useJobServices } from "../../jobs/services";
import { useBidServices } from "../services";
import { useOpportunitiesParameters } from "../stores";
import OpportunitiesSection from "./OpportunitiesSection";
import { BsBookmarkPlus } from "react-icons/bs";
import { PaginatedResponse } from "../../../services/types";
import { IoMdArrowRoundBack } from "react-icons/io";
import OpportunityDetailsCard from "../components/OpportunityDetailsCard";
import { IoShareSocialOutline } from "react-icons/io5";
export default function OpportunityDetails() {
  const { getOrder, getOrderBid } = useJobServices();
  const {
    cancelBid,
    acceptBid,
    declineBid,
    getAvailableDrivers,
  } = useBidServices();
  const { id } = useParams();
  const authUser = useAuthUser<IUserResponse>();
  const navigate = useNavigate();
  const parameters = useOpportunitiesParameters();


  const [opened, { open, close }] = useDisclosure(false);

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

    getOrder(id!)
      .then((response) => {
        setLoadingOrder(false);
        setOrder(response.data);
      })
      .catch((_error) => {
        setLoadingOrder(false);
        // notifications.show({
        //   color: "red",
        //   title: "Error",
        //   message: "Something went wrong!",
        // });
      });

    getOrderBid(id!)
      .then((response) => {
        setLoadingOrder(false);
        setBids(response.data);
      })
      .catch((_error) => {
        setLoadingOrder(false);
        // notifications.show({
        //   color: "red",
        //   title: "Error",
        //   message: "Something went wrong!",
        // });
      });

    if (authUser?.user_type == "owner") {
      fetchAvailableDrivers(1);
    }
  };

  const fetchAvailableDrivers = (page: number) => {
    setLoadingOrder(true);

    getAvailableDrivers(page)
      .then((response) => {
        setLoadingOrder(false);
        setDirivers(response.data);
      })
      .catch((_error) => {
        setLoadingOrder(false);
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
