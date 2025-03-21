import {
  ActionIcon,
  Button,
  Menu,
  Progress,
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
import { agreements } from "../types";
import { IoMdEye } from "react-icons/io";
interface Props {
  data?: PaginatedResponse<any>;
  loadingOrders?: boolean;
  fetchOrders?: (offset: number) => void;
}

export default function AgreementTable({ fetchOrders }: Props) {
  const parameters = useOpportunitiesParameters();

  const navigate = useNavigate();
  function getStrengthColor(strength: number) {
    switch (true) {
      case strength < 25:
        return "yellow";
      case strength < 50:
        return "violet";
      case strength < 70:
        return "blue";
      default:
        return "green";
    }
  }
  const rows = agreements?.map((row, index) => (
    <Table.Tr key={index}>
      <Table.Td>{row.id}</Table.Td>
      <Table.Td>{row.title}</Table.Td>
      <Table.Td>{row.startDate}</Table.Td>
      <Table.Td>{row.endDate}</Table.Td>
      <Table.Td>{row.responsiblePerson}</Table.Td>
      <Table.Td>
        <p
          className={`px-3 py-1 inline-flex text-[12px] leading-5 font-[400] rounded-full text-center
                      ${
                        row.status === "Completed"
                          ? "bg-green-100 text-[#469D4E]"
                          : row.status === "At Risk"
                          ? "bg-red-100 text-[#B42318]"
                          : "bg-gray-100 text-[#414651]"
                      }`}
        >
          {row.status}
        </p>
      </Table.Td>
      <Table.Td>
        <Progress
          color={getStrengthColor(row.progress)}
          size="sm"
          value={row.progress}
        />
      </Table.Td>
      <Table.Td>{row.reportsUploaded}</Table.Td>

      <Table.Td>
        <ActionIcon
          variant="subtle"
          color="#555252"
          radius="md"
          onClick={() => {

            navigate('/agreements/'+row.id)
          }}
        >
          <IoMdEye />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <CustomTable
      title="Agreements"
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
      totalData={agreements != undefined ? agreements.length : 0}
      downloading={false}
      exporData={true}
      showPagination
      columns={
        <Table.Tr style={{ border: "none" }}>
          <Table.Th>ID</Table.Th>
          <Table.Th>Title</Table.Th>
          <Table.Th>start date </Table.Th>
          <Table.Th>end date</Table.Th>
          <Table.Th>Responsible Personnel </Table.Th>
          <Table.Th>status </Table.Th>
          <Table.Th>PROGRESS </Table.Th>
          <Table.Th>Reports Uploaded </Table.Th>
          <Table.Th>Action</Table.Th>
        </Table.Tr>
      }
    />
  );
}
