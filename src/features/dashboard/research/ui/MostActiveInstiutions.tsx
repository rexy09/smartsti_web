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
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosSearch, IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useBidServices } from "../services";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
export default function MostActiveInstiutions() {
  const { } = useBidServices();
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { }, []);

  return (
    <div>
      <Space h={"md"} />
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
              Most Active Instiutions
            </Text>
          </Group>
          <UnstyledButton
            onClick={() => {
              navigate(-1);
            }}
          >
            <Text size="12px" fw={500} c="#27A8DE" fs={"italic"}>
              Research Outputs
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
            <Text size="16px" c="#21232C" fw={600}>
              University of Tanzania – Most Active Institution
            </Text>
            <Space h={"xl"} />

            <SimpleGrid cols={3}>
              <div>
                <Text size="14px" c="#0F1F26" fw={500}>
                  Research Papers Published
                </Text>
                <Space h={"xs"} />

                <Text size="14px" c="#717579" fw={500}>
                  300
                </Text>
              </div>
              <div>
                <Text size="14px" c="#0F1F26" fw={500}>
                  Patents Registered
                </Text>
                <Space h={"xs"} />

                <Text size="14px" c="#717579" fw={500}>
                  50
                </Text>
              </div>
              <div>
                <Text size="14px" c="#0F1F26" fw={500}>
                  Ongoing Projects
                </Text>
                <Space h={"xs"} />

                <Text size="14px" c="#717579" fw={500}>
                  30
                </Text>
              </div>

            </SimpleGrid>

            <Divider my={"xl"} />

            <Text size="14px" fw={600}>
              Abstract
            </Text>
            <Space h={"xl"} />

            <Text
              size="11px"
              fw={400}
              c="#717579"
              style={{ lineHeight: "21px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Text>

            <Divider my={"xl"} />

            <Text size="14px" fw={600}>
              Research Focus
            </Text>
            <Space h={"md"} />

            <SimpleGrid cols={1}>
              <Group>
                <FaCircleCheck color="#1463FF" />
                <Text size="11px" fw={400}>
                  AI Diagnostics in Healthcare
                </Text>
              </Group>
              <Group>
                <FaCircleCheck color="#1463FF" />
                <Text size="11px" fw={400}>
                  Predictive Analytics for Patient Care
                </Text>
              </Group>
              <Group>
                <FaCircleCheck color="#1463FF" />
                <Text size="11px" fw={400}>
                  Personalized Treatment Models
                </Text>
              </Group>
            </SimpleGrid>
            <Divider my={"xl"} />

            <Text size="15px" fw={600}>
              Keywords
            </Text>
            <Space h={"xl"} />

            <Text
              size="12px"
              fw={400}
              c="#717579"
              style={{ lineHeight: "21px" }}
            >
              AI, Healthcare, Predictive Analytics, Diagnostics
            </Text>
            <Divider my={"xl"} />

            <Text size="14px" fw={600}>
              Author Information
            </Text>
            <Space h={"md"} />

            <SimpleGrid cols={1}>
              <Group>
                <Text size="12px" fw={400} c="#717579">
                  Name: Dr JohnDoe
                </Text>
              </Group>
              <Group>
                <Text size="12px" fw={400} c="#717579">
                  Institution:AI Research Center
                </Text>
              </Group>
              <Group>
                <Text size="12px" fw={400} c="#717579">
                  Other Publications: 15 Research Paper
                </Text>
                <Group>
                  <Text size="15px" fw={600} c="#21232C">
                    Email
                  </Text>
                  <TextInput
                    readOnly
                    bg={"#D5D7DA"}
                    styles={{
                      root: { borderRadius: "10px" },
                      input: { backgroundColor: "#D5D7DA", color:"#717680",borderRadius:"10px" },
                    }}
                    leftSection={<MdOutlineEmail />}
                    placeholder="Email"
                    radius={"md"}
                    size="xs"
                    value={"john.doe@airesearch.tz"}
                  />
                </Group>
              </Group>
            </SimpleGrid>
            <Divider my={"xl"} />
            <Text size="14px" fw={600}>
              Related Research
            </Text>
            <Space h={"md"} />

            <SimpleGrid cols={1}>
              <Group>
                <FaCircleCheck color="#1463FF" />
                <Text size="10px" fw={400}>
                  Smart Diagnostics with AI (2022)
                </Text>
                <Button
                  variant="light"
                  color="#717680"
                  leftSection={<IoIosSearch size={15} />}
                  size="compact-xs"
                >
                  View more
                </Button>
              </Group>
              <Group>
                <FaCircleCheck color="#1463FF" />
                <Text size="10px" fw={400}>
                  Predictive Analytics in Healthcare (2021)
                </Text>
                <Button
                  variant="light"
                  color="#717680"
                  leftSection={<IoIosSearch size={15} />}
                  size="compact-xs"
                >
                  View more
                </Button>
              </Group>
              <Group>
                <FaCircleCheck color="#1463FF" />
                <Text size="10px" fw={400}>
                  Personalized Medicine using Machine Learning (2023)
                </Text>
                <Button
                  variant="light"
                  color="#717680"
                  leftSection={<IoIosSearch size={15} />}
                  size="compact-xs"
                >
                  View more
                </Button>
              </Group>
            </SimpleGrid>
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
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
        </Grid.Col>
      </Grid>
    </div>
  );
}
