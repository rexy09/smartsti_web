import {
  ActionIcon,
  Button,
  Menu,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { FiDownload } from "react-icons/fi";
import { MdOutlineClear } from "react-icons/md";
import { CustomTable } from "../../../../common/components/Table/CustomTable";
import { Icons } from "../../../../common/icons";
import { Color } from "../../../../common/theme";
import { PaginatedResponse } from "../../../services/types";
import { useOpportunitiesParameters } from "../stores";
import { policiesData } from "../types";
interface Props {
  opportunities?: PaginatedResponse<any>;
  loadingOrders?: boolean;
  fetchOrders?: (offset: number) => void;
}

export default function KnowledgeHubTable({ fetchOrders }: Props) {
  const parameters = useOpportunitiesParameters();

  // const navigate = useNavigate();

  const rows = policiesData?.map((row, index) => (
    <Table.Tr key={index}>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>
        <Text tt="capitalize" fw={400} size="14px">
          {row.category}
        </Text>
      </Table.Td>
      <Table.Td>{row.yearIssued}</Table.Td>
      <Table.Td>{row.institutions}</Table.Td>

      <Table.Td>
        <Button
          variant="light"
          color="#2A2A3C"
          radius="md"
          size="sm"
          leftSection={<FiDownload />}
          onClick={() => {
          }}
        >
          Download
        </Button>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <CustomTable
      title="STI Policies & Guidelines Section"
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
      totalData={policiesData != undefined ? policiesData.length : 0}
      downloading={false}
      exporData={true}
      showPagination
      columns={
        <Table.Tr style={{ border: "none" }}>
          <Table.Th>Policy Name</Table.Th>
          <Table.Th>Category</Table.Th>
          <Table.Th>Year Issued </Table.Th>
          <Table.Th>institutions</Table.Th>
          <Table.Th>Action</Table.Th>
        </Table.Tr>
      }
    />
  );
}
