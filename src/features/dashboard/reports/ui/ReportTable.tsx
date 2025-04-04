import {
  ActionIcon,
  Button,
  Menu,
  Table,
  Text,
  TextInput
} from "@mantine/core";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";
import { CustomTable } from "../../../../common/components/Table/CustomTable";
import { Icons } from "../../../../common/icons";
import { Color } from "../../../../common/theme";
import { PaginatedResponse } from "../../../services/types";
import { useOpportunitiesParameters } from "../stores";
import { reports } from "../types";
interface Props {
  data?: PaginatedResponse<any>;
  loadingOrders?: boolean;
  fetchOrders?: (offset: number) => void;
}

export default function ReportTable({ fetchOrders }: Props) {
  const parameters = useOpportunitiesParameters();

  // const navigate = useNavigate();
 
  const rows = reports?.map((row, index) => (
    <Table.Tr key={index}>
      <Table.Td>{row.resourceTitle}</Table.Td>
      <Table.Td>{row.category}</Table.Td>
      <Table.Td>{row.publishDate}</Table.Td>
      <Table.Td>{row.institution}</Table.Td>
      <Table.Td>{row.downloads}</Table.Td>
     

      <Table.Td>
        <ActionIcon
          variant="subtle"
          color="#555252"
          radius="md"
          onClick={() => {

            // navigate('/agreements/' + row.resourceTitle)
          }}
        >
          <BsThreeDots />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <CustomTable
      title="Reports"
      summary={
        <>
          <TextInput
            leftSection={Icons.search}
            placeholder="Search"
            radius={"md"}
            value={parameters.search}
            onChange={(value) => {
              parameters.updateText("search", value.currentTarget.value);
              // fetchOrders(1);
            }}
            rightSection={
              parameters.search.length != 0 ? (
                <ActionIcon
                  variant="transparent"
                  color="black"
                  onClick={() => {
                    parameters.updateText("search", "");
                    // fetchOrders(1);
                  }}
                >
                  <MdOutlineClear />
                </ActionIcon>
              ) : null
            }
          />
          <Menu width={220} withinPortal>
            <Menu.Target>
              <Button
                color="#13131329"
                variant="default"
                radius={"md"}
                leftSection={Icons.filter_lines}
                pr={12}
              >
                <Text
                  size="14px"
                  fw={parameters.type == "" ? 500 : 700}
                  c={parameters.type == "" ? "" : Color.PrimaryBlue}
                  tt={"capitalize"}
                >
                  {parameters.type == ""
                    ? "Filters"
                    : parameters.type.split("_").join(" ")}
                </Text>
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              {[
                { label: "All", value: "" },
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
                    // fetchData();
                  }}
                >
                  {item.label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </>
      }
      rows={rows ?? []}
      colSpan={8}
      isLoading={false}
      fetchData={fetchOrders}
      totalData={reports != undefined ? reports.length : 0}
      downloading={false}
      exporData={true}
      showPagination
      columns={
        <Table.Tr style={{ border: "none" }}>
          <Table.Th>Resource Title</Table.Th>
          <Table.Th>Category</Table.Th>
          <Table.Th>Published Date</Table.Th>
          <Table.Th>Institution</Table.Th>
          <Table.Th>Downloads</Table.Th>
          <Table.Th>Action</Table.Th>
        </Table.Tr>
      }
    />
  );
}
