import { Card, Flex, Group, Image, Paper, Rating, Space, Text } from "@mantine/core";
import { Icons } from "../../../../common/icons";
import { getColorForState } from "../../../hooks/utils";
import { GoClock } from "react-icons/go";
import { FaUser } from "react-icons/fa";

const learningPoints= [
  'Critical Thinking',
  'User Experience Research',
  'History of Digital Product Design',
  'How Human Perception Works',
  'Usability testing',
  'User Interface Design',
  'Some Relevant Design History',
  'Design Processes',
  'Increased Creativity',
  'Applied Psychology in Design'
];
const requirements= [
  'Academic & Professional Qualifications',
  'Documents Needed: Research Proposal, CV, Letter of Recommends',
  'A free or paid Figma account (I will show you how to set this up)',
  'Must be affiliated with a recognized institution'
];
interface Props {}
export default function OpportunityDetailsCard(props: Props) {
  return (
    <Paper
      p={"xl"}
      radius="10px"
      style={{ border: "1px solid #E5E5E5" }}
      bg={"#FFFFFF"}
    >
      <Flex
        justify="flex-start"
        align="flex-start"
        direction="row"
      >
        <Image
          src="https://s3-alpha-sig.figma.com/img/2f35/20d6/a1154c0d501b2f945feada910ab9a703?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dZVTP2J~eAK0XgcGGsV5T9xaFWkzF21iIYtR1qrT2MDfqhep5ieueCCdauV7NzIW2nGafqDCT27-k8ktl63QoolqhEtdlYd0SVR0EeNPoYsCRdFwOR1q~QFWtwadWNCo7CI3y8oHhbk8KX7Gsv3BkmJFmeOQqIGoRUsyNvdwOBlHqW1ZQKJWk9uZYcJ4~ILwaNdwmEZ09-M-E7ri4RsHp2ZRAIB909SYqCSx8~JqJofmE2i~cCtWboiVT1kHp4oUa9MS44dZ7iiyiOS23V2on8nnrrQ5odDr~VS944xc2JhRZFD9lO0lNYtcQhpqQO1Qr8~KCb~o2763lIQpuegTcQ__"
          w={115}
          h={115}
          radius={"lg"}
          alt="image"
        />
        <Space w={"md"} />
        <div>
          <Text size="24px" c="#202020" fw={500}>
            AI in Education Bootcamp
          </Text>
          <Space h={"md"} />
          <Text size="14px" c="#84818A" fw={400}>
            A complete design education for product designers: Research the user
            experience, then design a great user interface
          </Text>
          <Space h={"md"} />

          <Group>
            <div
              className={`px-3 py-1 rounded-[8px] text-[14px]`}
              style={{
                color: getColorForState("Ongoing"),
                backgroundColor: getColorForState("Ongoing") + "1A",
              }}
            >
              Ongoing
            </div>
            <Group gap={"3"}>
              <Text size="14px" c="#202020" fw={500}>
                4.6
              </Text>
              <Rating defaultValue={4} size="xs" />
              <Text size="14px" c="#202020" fw={500}>
                (2,104 ratings)
              </Text>
            </Group>
            <Text size="14px" c="#47464A" fw={400}>
              12,034 students
            </Text>
          </Group>
          <Space h={"md"} />

          <Group>
            <Group gap={"5"}>
              <GoClock color="#47464A" size={18} />
              <Text size="14px" c="#47464A" fw={400}>
                25.5 total hour
              </Text>
            </Group>

            <Group gap={"5"}>
              {Icons.star}
              <Text size="14px" c="#47464A" fw={400}>
                International
              </Text>
            </Group>
            <Group gap={"5"}>
              <FaUser color="#47464A" />
              <Text size="14px" c="#47464A" fw={400}>
                Ministry of Education
              </Text>
            </Group>
          </Group>
        </div>
      </Flex>

      <Space h={"xl"} />
      <Paper
        py={"lg"}
        px={"xl"}
        radius="10px"
        style={{ border: "1px solid #E5E5E5" }}
        bg={"#FFFFFF"}
      >
        <Text size="18px" c="#202020" fw={500}>
          What you'll learn
        </Text>
        <Space h={"xl"} />

        <div className="grid grid-cols-2 gap-4">
          {learningPoints.map((point, index) => (
            <div key={index} className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[#47464A] text-[14px] text-[400]">{point}</span>
            </div>
          ))}
        </div>
      </Paper>
      <Space h={"xs"} />
      {requirements && (
        <div className="mt-8">
          <h2 className="text-[16px] font-[500] mb-4 text-[#202020]">Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-[#47464A] text-[14px] text-[400]">
            {requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
      )}
      <Space h={"xs"} />
      {requirements && (
        <div className="mt-8">
          <h2 className="text-[16px] font-[500] mb-4 text-[#202020]">Description</h2>
          <p className="text-[#47464A] text-[14px] text-[400]">
            This AI Research Grant supports AI-driven projects in healthcare, education, and agriculture. The goal is to fund research that solves real-world problems using artificial intelligence.
          </p>
        </div>
      )}
    </Paper>
  );
}
