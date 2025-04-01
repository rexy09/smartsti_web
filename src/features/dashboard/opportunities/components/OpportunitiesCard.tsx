import { Group, Image, Paper, Space, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Icons } from "../../../../common/icons";
interface Props {}
export default function OpportunitiesCard({}: Props) {
  const navigate = useNavigate();

  return (
    <Paper p={"md"} maw={"350px"} radius="10px">
      <Image
        onClick={() => {
          navigate("/opportunities/" + "opportunity.name");
        }}
        src="https://s3-alpha-sig.figma.com/img/2f35/20d6/a1154c0d501b2f945feada910ab9a703?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jfM0c47XtjWm2wtLzr69XSPJ8p5pC3EYakMllehwfLDUJpB9M3nP0wppZ46VxL1I75~55WdVbaX9fa9NC~TDyI2cB2rgaxsPZ9seNV4m~3nrG7XJyXPAeAjxmrRPgpoIpUqRerMiM1yH66OtZkgTYaI0gbjwhDSwA6jNCmGQj3zwpOP4RMEQWk2dP-jOof8WOrJFmmLduvQilsWI6LipYO~WZlB0eqgujsCXXpxIkqR5fOi4bZnbrGzYJRS0~bcbUmRIByJ0notKVeqG~A4BfV1rXiqdH9FsXBVkW8B2CEZiyIxIUNiogcJcW4wi0bhEM-e73x8BZh-gVpbh1Fv5Jw__"
        h={160}
        alt="image"
      />

      <Space h={"xs"} />

      <Text
        size="18px"
        c="#141522"
        fw={700}
        lineClamp={2}
        onClick={() => {
          navigate("/opportunities/" + "opportunity.name");
        }}
      >
        AI in Education Bootcamp
      </Text>
      <Space h={"xs"} />
      <Text size="14px" c="#9C9CA4" fw={400} lineClamp={2}>
        An intensive 5-day bootcamp for educators to integrate AI into
        classrooms
      </Text>
      <Space h={"xs"} />
      <Group gap={"xs"}>
        {Icons.calendar}
        <Text fw={400} size="14px" c="#141522">
          Dec 15, 2024
        </Text>
      </Group>
    </Paper>
  );
}
