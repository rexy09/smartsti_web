import {
  ActionIcon,
  Button,
  Divider,
  Group,
  Paper,
  SimpleGrid,
  Space,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosSearch, IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useBidServices } from "../services";
export default function ResearchDetails() {
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
              Research Details
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
      <Paper
        p={"xl"}
        radius="10px"
        style={{ border: "1px solid #E5E5E5" }}
        bg={"#FFFFFF"}
        maw={"900"}
      >
        <Text size="21px" c="#21232C" fw={600}>
          Title: Impact of Climate Change on Agriculture
        </Text>
        <Space h={"xl"} />
        <Text size="14px" c="#47464A" fw={400}>
          2023-05-12
        </Text>
        <Space h={"xl"} />
        <Paper
          p={"xl"}
          radius="10px"
          style={{ border: "1px solid #E5E5E5" }}
          bg={"#FAFAFA"}
        >
          <SimpleGrid cols={1}>
            <Group justify="space-between">
              <Text
                size="14px"
                fw={400}
                mb={"xs"}
              >
                Type
              </Text>
              <Text size="14px" fw={600}>
                Journal Article
              </Text>
            </Group>
            <Group justify="space-between">
              <Text
                size="14px"
                fw={400}
                mb={"xs"}
              >
                Focus Area
              </Text>
              <Text size="14px" fw={600}>
                Climate Change
              </Text>
            </Group>
            <Group justify="space-between">
              <Text
                size="14px"
                fw={400}
                mb={"xs"}
              >
                Contribution
              </Text>
              <Text size="14px" fw={600}>
                Environmental Sustainability
              </Text>
            </Group>
            <Group justify="space-between">
              <Text
                size="14px"
                fw={400}
                mb={"xs"}
              >
                Authors
              </Text>
              <Text size="14px" fw={600}>
                Dr. John Doe, A. Smith
              </Text>
            </Group>

            <Group justify="space-between">
              <Text
                size="14px"
                fw={400}
                mb={"xs"}
              >
                Institution
              </Text>
              <Text size="14px" fw={600}>
                University of Dar es Salaam
              </Text>
            </Group>

            <Group justify="space-between">
              <Text
                size="14px"
                fw={400}
                mb={"xs"}
              >
                Public Access:
              </Text>
              <Text size="14px" fw={600}>
                Yes
              </Text>
            </Group>

          </SimpleGrid>
        </Paper>
        <Space h={"md"} />

        <Text size="14px" fw={600}>
          Abstract
        </Text>
        <Space h={"xl"} />

        <Text size="10px" fw={400} c="#717579">
          This study examines the effects of climate change on agricultural productivity in Tanzania, focusing on adaptive strategies for sustainable food production.
        </Text>

        <Divider my={'xl'} />
        <Button
          variant="default"
          color="#1F293A"
          radius="md"
          size="sm"
          onClick={() => {
          }}
        >
          View Full Publication
        </Button>
        <Space h={"xl"} />

        <Text size="14px" fw={600}>
          Related Research
        </Text>
        <Space h={"md"} />

        <SimpleGrid cols={1}>
          <Group >
            <FaCircleCheck color="#1463FF"/>
            <Text size="10px" fw={400}>
              Smart Diagnostics with AI (2022) 
            </Text>
            <Button variant="light" color="#717680" leftSection={<IoIosSearch size={15}/>} size="compact-xs">View more</Button>
          </Group>
          <Group >
            <FaCircleCheck color="#1463FF"/>
            <Text size="10px" fw={400}>
              Predictive Analytics in Healthcare (2021)
            </Text>
            <Button variant="light" color="#717680" leftSection={<IoIosSearch size={15}/>} size="compact-xs">View more</Button>
          </Group>
          <Group >
            <FaCircleCheck color="#1463FF"/>
            <Text size="10px" fw={400}>
              Personalized Medicine using Machine Learning (2023) 
            </Text>
            <Button variant="light" color="#717680" leftSection={<IoIosSearch size={15}/>} size="compact-xs">View more</Button>
          </Group>
         

        </SimpleGrid>
      </Paper>
    </div>
  );
}
