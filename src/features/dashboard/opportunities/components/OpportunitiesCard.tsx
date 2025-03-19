import { Card, Group, Image, Paper, Space, Text } from "@mantine/core";
import { Icons } from "../../../../common/icons";
interface Props {}
export default function OpportunitiesCard(props: Props) {
  return (
    <Paper p={"md"} maw={"333px"} radius="10px">
      {/* <Card.Section> */}
        <Image
          src="https://s3-alpha-sig.figma.com/img/2f35/20d6/a1154c0d501b2f945feada910ab9a703?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dZVTP2J~eAK0XgcGGsV5T9xaFWkzF21iIYtR1qrT2MDfqhep5ieueCCdauV7NzIW2nGafqDCT27-k8ktl63QoolqhEtdlYd0SVR0EeNPoYsCRdFwOR1q~QFWtwadWNCo7CI3y8oHhbk8KX7Gsv3BkmJFmeOQqIGoRUsyNvdwOBlHqW1ZQKJWk9uZYcJ4~ILwaNdwmEZ09-M-E7ri4RsHp2ZRAIB909SYqCSx8~JqJofmE2i~cCtWboiVT1kHp4oUa9MS44dZ7iiyiOS23V2on8nnrrQ5odDr~VS944xc2JhRZFD9lO0lNYtcQhpqQO1Qr8~KCb~o2763lIQpuegTcQ__"
          h={150}
          alt="image"
        />
      {/* </Card.Section> */}

      <Space h={"xs"} />

      <Text size="18px" c="#141522" fw={700} lineClamp={2}>
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
