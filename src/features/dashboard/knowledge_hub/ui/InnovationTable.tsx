import {
  ActionIcon,
  Button,
  Menu,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";
import { CustomTable } from "../../../../common/components/Table/CustomTable";
import { Icons } from "../../../../common/icons";
import { Color } from "../../../../common/theme";
import { PaginatedResponse } from "../../../services/types";
import { useOpportunitiesParameters } from "../stores";
import { innovationData } from "../types";
interface Props {
  data?: PaginatedResponse<any>;
  loadingOrders?: boolean;
  fetchOrders?: (offset: number) => void;
}

export default function InnovationTable({ fetchOrders }: Props) {
  const parameters = useOpportunitiesParameters();
  // A small helper to color-code the status
  // const getStatusColor = (status: InnovationData["status"]): string => {
  //   switch (status) {
  //     case "Ongoing":
  //       return "#007bff"; // Blue
  //     case "Pending":
  //       return "#ffc107"; // Yellow
  //     case "Completed":
  //       return "#28a745"; // Green
  //     default:
  //       return "#6c757d"; // Gray (fallback)
  //   }
  // };
  // const navigate = useNavigate();

  const rows = innovationData?.map((row, index) => (
    <Table.Tr key={index}>
      <Table.Td>{row.institutionName}</Table.Td>
      <Table.Td>
        <Text tt="capitalize" fw={400} size="14px">
          {row.projectTitle}
        </Text>
      </Table.Td>
      <Table.Td>{row.field}</Table.Td>
      <Table.Td>

        <p className={`px-3 py-1 inline-flex text-[12px] leading-5 font-[400] rounded-full text-center
                      ${row.status === 'Completed' ? 'bg-green-100 text-[#469D4E]' :
          row.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
              'bg-blue-100 text-blue-800'}`}>
          {row.status}
        </p>
      </Table.Td>

      <Table.Td>
        <ActionIcon
          variant="subtle"
          color="#555252"
          radius="md"
          onClick={() => {
          }}
        >
          <BsThreeDots />
        </ActionIcon>

      </Table.Td>
    </Table.Tr>
  ));
  return (
    <CustomTable
      title="Institutional Research & Innovations"
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
      totalData={innovationData != undefined ? innovationData.length : 0}
      downloading={false}
      exporData={true}
      showPagination
      columns={
        <Table.Tr style={{ border: "none" }}>
          <Table.Th>Institution Name</Table.Th>
          <Table.Th>Project Title</Table.Th>
          <Table.Th>Field</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Action</Table.Th>
        </Table.Tr>
      }
    />
  );
}
