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
import { useNavigate } from "react-router-dom";
import { CustomTable } from "../../../../common/components/Table/CustomTable";
import { Icons } from "../../../../common/icons";
import { Color } from "../../../../common/theme";
import { PaginatedResponse } from "../../../services/types";
import { useOpportunitiesParameters } from "../stores";
import {
  IResearchOutput,
  patentsData,
  publicationInsightData,
  researchData,
} from "../types";
import { FiDownload } from "react-icons/fi";
interface Props {
  opportunities?: PaginatedResponse<IResearchOutput>;
  loadingOrders?: boolean;
  fetchOrders?: (offset: number) => void;
}

export default function PatentTable({ fetchOrders }: Props) {
  const parameters = useOpportunitiesParameters();


  const rows = patentsData?.map((row, index) => (
    <Table.Tr key={index}>
      <Table.Td>{row.title}</Table.Td>
      <Table.Td>{row.inventor}</Table.Td>
      <Table.Td>
        <Text tt="capitalize" fw={400} size="14px">
          {row.datePublished}
        </Text>
      </Table.Td>
      <Table.Td>{row.category}</Table.Td>
      <Table.Td>{row.patentNumber}</Table.Td>

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
      title="Patent List"
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
      totalData={researchData != undefined ? researchData.length : 0}
      downloading={false}
      exporData={true}
      showPagination
      columns={
        <Table.Tr style={{ border: "none" }}>
          <Table.Th>patent title</Table.Th>
          <Table.Th>inventor</Table.Th>
          <Table.Th>Date published </Table.Th>
          <Table.Th>Category</Table.Th>
          <Table.Th>patent number </Table.Th>
          <Table.Th>Action</Table.Th>
        </Table.Tr>
      }
    />
  );
}
