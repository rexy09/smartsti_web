import {
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
import OpportunitiesTable from "./OpportunitiesTable";
import { PaginatedResponse } from "../../../services/types";
export default function Opportunities() {
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
      <Group justify="space-between">
        <Text size="24px" fw={500}>
          Opportunities
        </Text>
        <Group>
          <Select
            leftSection={Icons.filter2}
            // rightSection={<RiArrowDropDownLine size={18} />}
            placeholder="Region"
            w={'150'}
            size="sm"
            searchable
            data={[
              { label: "Arusha", value: "Arusha" },
              { label: "Dar es Salaam", value: "Dar es Salaam" },
              { label: "Dodoma", value: "Dodoma" },
              { label: "Geita", value: "Geita" },
              { label: "Iringa", value: "Iringa" },
              { label: "Kagera", value: "Kagera" },
              { label: "Katavi", value: "Katavi" },
              { label: "Kigoma", value: "Kigoma" },
              { label: "Kilimanjaro", value: "Kilimanjaro" },
              { label: "Lindi", value: "Lindi" },
              { label: "Manyara", value: "Manyara" },
              { label: "Mara", value: "Mara" },
              { label: "Mbeya", value: "Mbeya" },
              { label: "Morogoro", value: "Morogoro" },
              { label: "Mtwara", value: "Mtwara" },
              { label: "Mwanza", value: "Mwanza" },
              { label: "Njombe", value: "Njombe" },
              { label: "Pwani", value: "Pwani" },
              { label: "Rukwa", value: "Rukwa" },
              { label: "Ruvuma", value: "Ruvuma" },
              { label: "Shinyanga", value: "Shinyanga" },
              { label: "Simiyu", value: "Simiyu" },
              { label: "Singida", value: "Singida" },
              { label: "Tabora", value: "Tabora" },
              { label: "Tanga", value: "Tanga" },
              { label: "Songwe", value: "Songwe" },
              { label: "Pemba North", value: "Pemba North" },
              { label: "Pemba South", value: "Pemba South" },
              { label: "Unguja Central", value: "Unguja Central" },
              { label: "Unguja North", value: "Unguja North" },
              { label: "Unguja South", value: "Unguja South" }
            ]}
            value={parameters.region}
            onChange={(value) => {
              parameters.updateText("region", value??"");
              fetchData();
            }
            }
            clearable
          />
          {/* <Menu width={220} withinPortal>
            <Menu.Target>
              <Button
                color="#13131329"
                variant="default"
                radius={"md"}
                leftSection={Icons.filter2}
                rightSection={<RiArrowDropDownLine size={18} />}
                pr={12}
              >
                <Text
                  size="14px"
                  fw={parameters.region == "" ? 500 : 700}
                  c={parameters.region == "" ? "" : Color.PrimaryBlue}
                  tt={"capitalize"}
                >
                  {parameters.region == ""
                    ? "Region"
                    : parameters.region.split("_").join(" ")}
                </Text>
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              {[
                { label: "Region", value: "" },
                { label: "Arusha", value: "Arusha" },
                { label: "Dar es Salaam", value: "Dar es Salaam" },
                { label: "Dodoma", value: "Dodoma" },
                { label: "Geita", value: "Geita" },
                { label: "Iringa", value: "Iringa" },
                { label: "Kagera", value: "Kagera" },
                { label: "Katavi", value: "Katavi" },
                { label: "Kigoma", value: "Kigoma" },
                { label: "Kilimanjaro", value: "Kilimanjaro" },
                { label: "Lindi", value: "Lindi" },
                { label: "Manyara", value: "Manyara" },
                { label: "Mara", value: "Mara" },
                { label: "Mbeya", value: "Mbeya" },
                { label: "Morogoro", value: "Morogoro" },
                { label: "Mtwara", value: "Mtwara" },
                { label: "Mwanza", value: "Mwanza" },
                { label: "Njombe", value: "Njombe" },
                { label: "Pwani", value: "Pwani" },
                { label: "Rukwa", value: "Rukwa" },
                { label: "Ruvuma", value: "Ruvuma" },
                { label: "Shinyanga", value: "Shinyanga" },
                { label: "Simiyu", value: "Simiyu" },
                { label: "Singida", value: "Singida" },
                { label: "Tabora", value: "Tabora" },
                { label: "Tanga", value: "Tanga" },
                { label: "Songwe", value: "Songwe" },
                { label: "Pemba North", value: "Pemba North" },
                { label: "Pemba South", value: "Pemba South" },
                { label: "Unguja Central", value: "Unguja Central" },
                { label: "Unguja North", value: "Unguja North" },
                { label: "Unguja South", value: "Unguja South" }
              ].map((item) => (
                  <Menu.Item
                    key={item.value}
                    style={{
                      color:
                        parameters.region === item.value
                          ? `${Color.PrimaryBlue}`
                          : "",
                      fontWeight: parameters.region === item.value ? "700" : "",
                    }}
                    onClick={() => {
                      parameters.updateText("region", item.value);
                      fetchData();
                    }}
                  >
                    {item.label}
                  </Menu.Item>
                ))}
            </Menu.Dropdown>
          </Menu> */}
          <Menu width={220} withinPortal>
            <Menu.Target>
              <Button
                color="#13131329"
                variant="default"
                radius={"md"}
                leftSection={Icons.filter2}
                rightSection={<RiArrowDropDownLine size={18} />}
                pr={12}
              >
                <Text
                  size="14px"
                  fw={parameters.type == "" ? 500 : 700}
                  c={parameters.type == "" ? "" : Color.PrimaryBlue}
                  tt={"capitalize"}
                >
                  {parameters.type == ""
                    ? "Type"
                    : parameters.type.split("_").join(" ")}
                </Text>
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              {[
                { label: "Type", value: "" },
                { label: "Ongoing", value: "Ongoing" },
                { label: "Closed", value: "Closed" },
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
      <OpportunitiesSection/>
      <Space h={"md"} />
      <OpportunitiesTable />
      
   


    </div>
  );
}
