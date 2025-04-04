import {
  Button,
  Group,
  Menu,
  Select,
  Space,
  Text
} from "@mantine/core";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Icons } from "../../../../common/icons";
import { Color } from "../../../../common/theme";
import { useOpportunitiesParameters } from "../stores";
import OpportunitiesSection from "./OpportunitiesSection";
import OpportunitiesTable from "./OpportunitiesTable";
export default function Opportunities() {
 
  // const { id } = useParams();
  // const authUser = useAuthUser<IUserResponse>();
  // const navigate = useNavigate();
  const parameters = useOpportunitiesParameters();



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
            }
            }
            clearable
          />
          
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
