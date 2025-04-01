import {
  ActionIcon,
  Button,
  Divider,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Space,
  Text,
  UnstyledButton
} from "@mantine/core";
import { useEffect } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaCircleCheck, FaRegFilePdf } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Icons } from "../../../../common/icons";
import { useReportServices } from "../services";
export default function ReportDetails() {
  const { } = useReportServices();
  // const { id } = useParams();
  const navigate = useNavigate();

  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { }, []);

  return (
    <div>
      <Group justify="space-between">
        <div>
          <Group>
            <ActionIcon
              variant="subtle"
              color="gray"
              onClick={() => {
                navigate(-1);
              }}
            >
              <IoMdArrowRoundBack size={20} />
            </ActionIcon>
            <Text size="18px" fw={500}>
              Agreement Details
            </Text>
          </Group>
          <UnstyledButton
            onClick={() => {
              navigate(-1);
            }}
          >
            <Text size="12px" fw={500} c="#27A8DE" fs={"italic"}>
              Agreements
            </Text>
          </UnstyledButton>
        </div>
      </Group>
      <Space h={"md"} />
      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
          <Paper
            p={"xl"}
            radius="10px"
            style={{ border: "1px solid #E5E5E5" }}
            bg={"#FFFFFF"}
          // maw={"900"}
          >
            <Group>
              {Icons.agreement}
              <Text size="16px" c="#21232C" fw={600}>
                Agreement Title:Climate Action Partnership
              </Text>
            </Group>
            <Divider my={"md"} />

            <SimpleGrid cols={2}>
              <div>
                <Text size="14px" c="#0F1F26" fw={500}>
                  Parties Involved
                </Text>
                <Space h={"xs"} />
                <Paper p={"sm"} radius={"md"} withBorder>
                  <Text size="11px" c="#717680" fw={400}>
                    Ministry of Environment, NGO X
                  </Text>
                </Paper>
              </div>
              <div>
                <Text size="14px" c="#0F1F26" fw={500}>
                  Agreement Type
                </Text>
                <Space h={"xs"} />

                <Paper p={"sm"} radius={"md"} withBorder>
                  <Text size="11px" c="#717680" fw={400}>
                    Environmental Sustainability Collaboration
                  </Text>
                </Paper>
              </div>
              <div>
                <Text size="14px" c="#0F1F26" fw={500}>
                  Start Date
                </Text>
                <Space h={"xs"} />
                <Button
                  variant="outline"
                  color="#717680"
                  leftSection={<CiCalendar size={15} />}
                  size="xs"
                >
                  Jan 10, 2025
                </Button>
              </div>
              <div>
                <Text size="14px" c="#0F1F26" fw={500}>
                  End Date
                </Text>
                <Space h={"xs"} />

                <Button
                  variant="outline"
                  color="#717680"
                  leftSection={<CiCalendar size={15} />}
                  size="xs"
                >
                  Jan 16, 2025
                </Button>
              </div>
            </SimpleGrid>

            <Divider my={"xl"} />

            <Text size="17px" fw={600}>
              Summary of MoU
            </Text>
            <Space h={"md"} />
            <Paper p={"md"} radius={"md"} withBorder bg={"#0A0D120D"}>
              <Text
                size="14px"
                fw={400}
                c="#717680"
                style={{ lineHeight: "21px" }}
              >
                This MoU aims to promote sustainable climate action initiatives
                in Tanzania by leveraging joint resources and expertise from the
                government and NGOs.
              </Text>
            </Paper>
            <Space h={"xl"} />
            <div>
              <Text size="14px" fw={600}>
                Milestones & Deadlines
              </Text>
              <Space h={"md"} />
              <Paper p={"md"} radius={"md"} withBorder>
                <SimpleGrid cols={1}>
                  <Group justify="space-between">
                    <Group>
                      <FaCircleCheck color="#1463FF" />
                      <Text size="10px" fw={400}>
                        Develop adaptive learning platforms for STEM.
                      </Text>
                    </Group>
                    <Group>
                      <Text size="11px" fw={600} c="#0F1F26">
                        Due Date:
                      </Text>
                      <Button
                        variant="outline"
                        radius={"sm"}
                        color="#717680"
                        leftSection={<CiCalendar size={15} />}
                        size="compact-xs"
                      >
                        2023-06-30
                      </Button>
                    </Group>
                  </Group>
                  <Group justify="space-between">
                    <Group>
                      <FaCircleCheck color="#1463FF" />
                      <Text size="10px" fw={400}>
                        Increase student engagement using AI tools.
                      </Text>
                    </Group>
                    <Group>
                      <Text size="11px" fw={600} c="#0F1F26">
                        Due Date:
                      </Text>
                      <Button
                        variant="outline"
                        radius={"sm"}
                        color="#717680"
                        leftSection={<CiCalendar size={15} />}
                        size="compact-xs"
                      >
                        2023-06-30
                      </Button>
                    </Group>
                  </Group>
                  <Group justify="space-between">
                    <Group>
                      <FaCircleCheck color="#1463FF" />
                      <Text size="10px" fw={400}>
                        Personalized Treatment Models
                      </Text>
                    </Group>
                    <Group>
                      <Text size="11px" fw={600} c="#0F1F26">
                        Due Date:
                      </Text>
                      <Button
                        variant="outline"
                        radius={"sm"}
                        color="#717680"
                        leftSection={<CiCalendar size={15} />}
                        size="compact-xs"
                      >
                        2023-06-30
                      </Button>
                    </Group>
                  </Group>
                </SimpleGrid>
              </Paper>
            </div>

            <Space h={"xl"} />

            <Text size="15px" fw={600}>
              Key Parties Involved
            </Text>
            <Space h={"md"} />
            <Paper p={"md"} radius={"md"} withBorder>
              <SimpleGrid cols={1}>
                <Group>
                  <FaCircleCheck color="#1463FF" />
                  <Text size="11px" fw={400}>
                    UDSM Innovation Lab (Lead)
                  </Text>
                </Group>
                <Group>
                  <FaCircleCheck color="#1463FF" />
                  <Text size="11px" fw={400}>
                    AI4EduTech (Partner)
                  </Text>
                </Group>
                <Group>
                  <FaCircleCheck color="#1463FF" />
                  <Text size="11px" fw={400}>
                    STEM Park Arusha (Partner)
                  </Text>
                </Group>
              </SimpleGrid>
            </Paper>
            <Space h={"xl"} />

            <div>
              <Text size="17px" fw={600}>
                Objectives & Deliverables
              </Text>
              <Space h={"md"} />
              <Paper p={"md"} radius={"md"} withBorder>
                <SimpleGrid cols={1}>
                  <Group>
                    <FaCircleCheck color="#1463FF" />
                    <Text size="11px" fw={400}>
                      Increase public awareness on climate change impacts.
                    </Text>
                  </Group>
                  <Group>
                    <FaCircleCheck color="#1463FF" />
                    <Text size="11px" fw={400}>
                      Develop community adaptation strategies.
                    </Text>
                  </Group>
                  <Group>
                    <FaCircleCheck color="#1463FF" />
                    <Text size="11px" fw={400}>
                      Implement climate-resilient agricultural practices.
                    </Text>
                  </Group>
                </SimpleGrid>
              </Paper>
            </div>
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>

          <div>

            <Text size="14px" fw={500}>
              Quick Actions
            </Text>
            <Space h={"md"} />

            <Group>
              <Button
                color="#1463FF"
                variant="outline"
                radius={"md"}
                leftSection={<IoShareSocialOutline />}
              >
                Share Paper
              </Button>
              <Button
                color="#13131329"
                variant="default"
                radius={"md"}
                leftSection={<FiDownload />}
              >
                Download
              </Button>
            </Group>
          </div>
          <Space h={"xl"} />
          <div>

            <Text size="14px" fw={500}>
              Related Documents
            </Text>
            <Space h={"md"} />
            <Paper p={"md"} radius={"md"} withBorder mb={"sm"}>

              <Group>
                <FaRegFilePdf size={30} color="#0F1F26" />

                <div>
                  <Text size="11px" fw={500} c="#414651">
                    Budget-Approval
                  </Text>
                  <Space h={"xs"} />

                  <Text size="11px" fw={400} c={"#535862"}>
                    200 KB
                  </Text>
                </div>
              </Group>
            </Paper>
            <Paper p={"md"} radius={"md"} withBorder mb={"sm"}>

              <Group>
                <FaRegFilePdf size={30} color="#0F1F26" />
                <div>
                  <Text size="11px" fw={500} c="#414651">
                    Project Proposal
                  </Text>
                  <Space h={"5"} />

                  <Text size="11px" fw={400} c={"#535862"}>
                    200 KB
                  </Text>
                </div>
              </Group>
            </Paper>
          </div>

        </Grid.Col>
      </Grid>
    </div>
  );
}
