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
import { citedPapersData, IResearchOutput, researchData } from "../types";
interface Props {
  opportunities?: PaginatedResponse<IResearchOutput>;
  loadingOrders?: boolean;
  fetchOrders?: (offset: number) => void;
}

export default function CitedPaperTable({ fetchOrders }: Props) {
  const parameters = useOpportunitiesParameters();

  // const navigate = useNavigate();

  const rows = citedPapersData?.map((row, index) => (
    <Table.Tr key={index}>
      <Table.Td>{row.title}</Table.Td>
      <Table.Td>
        <Text tt="capitalize" fw={400} size="14px">
          {row.author}
        </Text>
      </Table.Td>
      <Table.Td>{row.datePublished}</Table.Td>
      <Table.Td>{row.category}</Table.Td>
      <Table.Td>{row.citations}</Table.Td>
      <Table.Td>{row.impactFactor}</Table.Td>
      <Table.Td>{row.downloads}</Table.Td>

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
      title="Top Cited Research Papers"
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
          <Table.Th>Paper Title</Table.Th>
          <Table.Th>Author</Table.Th>
          <Table.Th>Date published</Table.Th>
          <Table.Th>Category</Table.Th>
          <Table.Th>citations</Table.Th>
          <Table.Th>IMPACT FACTOR</Table.Th>
          <Table.Th>DOWNLOADS</Table.Th>
          <Table.Th>Action</Table.Th>
        </Table.Tr>
      }
    />
  );
}
