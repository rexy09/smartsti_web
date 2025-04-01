import {
  ActionIcon,
  Avatar,
  Card,
  Group,
  Image,
  Space,
  Text
} from "@mantine/core";
import { BsThreeDotsVertical } from "react-icons/bs";
import coat_of_arms from "../../../../assets/coat_of_arms.svg";
interface Props { }
export default function AnnouncementCard({}: Props) {
  return (
    <Card padding={'3px'} maw={280}>
      <Card.Section>
        <Image
          src="https://s3-alpha-sig.figma.com/img/8815/5ce8/9656fb4f2ae485c7ba9f087e1ae2bf96?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KUCjvqEPBCRwkzfV3OJbwMCkjPTDV7ywHsGpfJDoLrRXatuxsFqbcMdfR1x9W-LCBSulYm8YChTVTXXZ1TJx8-P6jkATnZII24sqK28UDZLKr66ubC714YTXwqraFzUIEZCdzPfS1fpt5Tmi8434dqAP-ABHdVrG-eqNR-8ixyjGFr5PLKJey2hiRSPzOZzTo-gNkFCRqZx3jVZGy5-d6c9g-3FmGTwvXTj1AWMBw9141WYAR9sk~u~VeqJVLxTFETrRmDYlBOn95CAwCsu5UrAWZ4lCEYz-ijqXc-ivyppDnvdBGPOVlbsFGOlmBLgBVes-yKu9a4y9AgNC2VBU4g__"
          height={170}
          alt="image"
          radius="md"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Group>
          <Avatar radius="35px" src={coat_of_arms} />
          <div>
            <Text fw={400} size="11px" c="#12263F">Ministry of Education</Text>
        <Space h={"3px"}/>
            <Text fw={400} size="10px" c="#95AAC9">4h ago </Text>
          </div>
        </Group>
        <ActionIcon variant="subtle" color="#D2DDEC" >
          <BsThreeDotsVertical />
        </ActionIcon>
      </Group>

      <Text size="15px" c="#12263F" fw={500} lineClamp={2}>
        The new STEM curriculum framework will roll out in January 2025
      </Text>


    </Card>
  );
}
