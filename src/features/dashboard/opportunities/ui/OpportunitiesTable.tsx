import {
  ActionIcon,
  Button,
  Group,
  Menu,
  NumberFormatter,
  Table,
  Text,
  TextInput
} from "@mantine/core";
import { BsThreeDots } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CustomTable } from "../../../../common/components/Table/CustomTable";
import { Icons } from "../../../../common/icons";
import { Color } from "../../../../common/theme";
import { getColorForState } from "../../../hooks/utils";
import { PaginatedResponse } from "../../../services/types";
import { useOpportunitiesParameters } from "../stores";
import { IOpportunity, opportunities } from "../types";
interface Props {
  opportunities?: PaginatedResponse<IOpportunity>;
  loadingOrders?: boolean;
  fetchOrders?: (offset: number) => void;
}

export default function OpportunitiesTable({
  fetchOrders,
}: Props) {
  const parameters = useOpportunitiesParameters();

  const navigate = useNavigate();

  const rows = opportunities?.map((row, index) => (
    <Table.Tr key={index}>
      <Table.Td>
        <Group justify="space-between">
          {row.name}

        </Group>
      </Table.Td>
      <Table.Td>
        <Text tt="capitalize" fw={400} size="14px">
          {row.type}
        </Text>
      </Table.Td>
      <Table.Td w={150}>
        <NumberFormatter prefix="$ " value={row.funding} thousandSeparator />
      </Table.Td>
      <Table.Td>
        {row.deadline}
      </Table.Td>
      <Table.Td w={100}>
        <Group>
          <Text
            fw={400} size="14px"
            c={getColorForState(row.status)}
          >
            {row.status}
          </Text>
        </Group>
      </Table.Td>

      <Table.Td>
        <Group wrap="nowrap" gap={5}>
          <IoMdEye /> {row.views}
        </Group>
      </Table.Td>
      <Table.Td>
        <ActionIcon
          variant="subtle"
          color="#555252"
          radius="md"
          onClick={() => {
            navigate("/opportunities/" + row.name);
          }}
        >
          <BsThreeDots />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <CustomTable
      title="Opportunities List"
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
            rightSection={parameters.search.length != 0 ? <ActionIcon variant="transparent" color="black" onClick={() => {
              parameters.updateText("search", "");
              // fetchOrders(1);
            }}>

              <MdOutlineClear />
            </ActionIcon> : null}
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
      totalData={opportunities != undefined ? opportunities.length : 0}
      downloading={false}
      exporData={true}
      showPagination
      columns={
        <Table.Tr style={{ border: "none" }}>
          <Table.Th>Opportunity Name</Table.Th>
          <Table.Th>Type</Table.Th>
          <Table.Th>funding</Table.Th>
          <Table.Th>DEADLINE</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Views</Table.Th>
          <Table.Th>Action</Table.Th>
        </Table.Tr>
      }
    />
  );
}
