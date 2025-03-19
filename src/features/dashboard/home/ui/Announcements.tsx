import { Divider, Paper, Text } from "@mantine/core";
import AnnouncementCard from "../components/AnnouncementCard";
import { Carousel } from "@mantine/carousel";

interface Props {}
export default function Announcements(props: Props) {
  return (
    <Paper radius="10px" style={{ border: "1px solid #EFF2F1" }}>
      <Text size="18px" c="#1F2D3D" fw={600} p="20px">
        Announcements and Key Updates
      </Text>
      <Divider />
      <div style={{ padding: "20px" }}>
        <Carousel
          slideSize="33.33%"
          align="start"
          slideGap="md"
          dragFree
          withControls={false}
        >
          <Carousel.Slide>
            <AnnouncementCard />
          </Carousel.Slide>
          <Carousel.Slide>
            <AnnouncementCard />
          </Carousel.Slide>
          <Carousel.Slide>
            <AnnouncementCard />
          </Carousel.Slide>
        </Carousel>
      </div>
    </Paper>
  );
}
