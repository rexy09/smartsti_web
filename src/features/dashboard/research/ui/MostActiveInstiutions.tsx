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
import { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { IoMdArrowRoundBack, IoMdEye } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useBidServices } from "../services";
import { MdOutlineTravelExplore } from "react-icons/md";
export default function MostActiveInstiutions() {
  const { } = useBidServices();
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

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

                <Text size="16px" c="#1F2D3D" fw={700}>
                  300
                </Text>
              </div>
              <div>
                <Text size="14px" c="#0F1F26" fw={500}>
                  Patents Registered
                </Text>
                <Space h={"xs"} />

                <Text size="16px" c="#1F2D3D" fw={700}>
                  50
                </Text>
              </div>
              <div>
                <Text size="14px" c="#0F1F26" fw={500}>
                  Ongoing Projects
                </Text>
                <Space h={"xs"} />

                <Text size="16px" c="#1F2D3D" fw={700}>
                  30
                </Text>
              </div>

            </SimpleGrid>

            <Divider my={"xl"} />

            <Text size="15px" fw={600}>
              Yearly Publication Trends
            </Text>
            <Space h={"md"} />
            <Text size="11px" fw={400} c="#717579">
              2021 – 70 | 2022 – 110 | 2023 – 120
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
            <Space h={"md"} />

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
              Top Researchers
            </Text>
            <Space h={"md"} />

            <SimpleGrid cols={1}>
              <Group>
                <FaCircleCheck color="#1463FF" />
                <Text size="11px" fw={400}>
                  Prof. Jane Smith – 50 Papers Published
                </Text>
              </Group>
              <Group>
                <FaCircleCheck color="#1463FF" />
                <Text size="11px" fw={400}>
                  Dr. John Doe – 40 Papers Published
                </Text>
              </Group>
              <Group>
                <FaCircleCheck color="#1463FF" />
                <Text size="11px" fw={400}>
                  Dr. Laura Zhang – 30 Papers Published
                </Text>
              </Group>
            </SimpleGrid>
           
          </Paper>
          <Space h={"md"} />

          <Group>
            <Button
              color="#1463FF"
              variant="outline"
              radius={"md"}
              leftSection={ <IoMdEye /> }
            >
              View All Publications
            </Button>
            <Button
              color="#1463FF"
              variant="outline"
              radius={"md"}
              leftSection={<MdOutlineTravelExplore />}
            >
              Explore Ongoing Projects
            </Button>
            
          </Group>
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
