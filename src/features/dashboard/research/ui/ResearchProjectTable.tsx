import {
  ActionIcon,
  Button,
  Menu,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { MdOutlineClear } from "react-icons/md";
import { TiZoomOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { CustomTable } from "../../../../common/components/Table/CustomTable";
import { Icons } from "../../../../common/icons";
import { Color } from "../../../../common/theme";
import { PaginatedResponse } from "../../../services/types";
import { useOpportunitiesParameters } from "../stores";
import {
  IResearchOutput,
  researchData,
  researchProjectData
} from "../types";
interface Props {
  opportunities?: PaginatedResponse<IResearchOutput>;
  loadingOrders?: boolean;
  fetchOrders?: (offset: number) => void;
}

export default function ResearchProjectTable({ fetchOrders }: Props) {
  const parameters = useOpportunitiesParameters();

  const navigate = useNavigate();

  const rows = researchProjectData?.map((row, index) => (
    <Table.Tr key={index}>
      <Table.Td>{row.title}</Table.Td>
      <Table.Td>{row.researcher}</Table.Td>
      <Table.Td>
        {row.startDate}
      </Table.Td>
      <Table.Td>
        {row.endDate}
      </Table.Td>
      <Table.Td>

        <p className={`px-3 py-1 inline-flex text-[12px] leading-5 font-[400] rounded-full text-center
                      ${row.status === 'Active' ? 'bg-green-100 text-[#469D4E]' :
          row.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
              'bg-blue-100 text-blue-800'}`}>
          {row.status}
        </p>
      </Table.Td>
      <Table.Td>{row.fundingSource}</Table.Td>

      <Table.Td>
        <Button
                 variant="light"
                 color="#2A2A3C"
                 radius="md"
                 size="sm"
          leftSection={<TiZoomOutline />}
                 onClick={() => {
                 }}
               >
          View Full
               </Button>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <CustomTable
      title="Ongoing Research Projects"
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
          <Table.Th>Project Title</Table.Th>
          <Table.Th>researcher</Table.Th>
          <Table.Th>start date </Table.Th>
          <Table.Th>end date</Table.Th>
          <Table.Th>status </Table.Th>
          <Table.Th>Funding source </Table.Th>
          <Table.Th>Action</Table.Th>
        </Table.Tr>
      }
    />
  );
}
