import { Divider, Paper, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import OpportunitiesCard from "../components/OpportunitiesCard";
import { OpportunityCardSkeleton } from "../components/Loaders";

interface Props { }
export default function OpportunitiesSection(props: Props) {
  return (
    <Paper radius="10px" style={{ border: "1px solid #EFF2F1" }} bg={"#E3EBF630"}>
      <Text size="18px" c="#1F2D3D" fw={600} p="20px">
        Featured Opportunities Section
      </Text>
      <Divider />
      <div style={{ padding: "20px" }}>
        <Carousel
          slideSize="25%"
          align="start"
          slideGap="md"
          withControls={false}
        >
          <Carousel.Slide>
            <OpportunitiesCard />
          </Carousel.Slide>
          <Carousel.Slide>
            <OpportunitiesCard />
          </Carousel.Slide>
          <Carousel.Slide>
            <OpportunitiesCard />
          </Carousel.Slide>
          <Carousel.Slide>
            <OpportunitiesCard />
          </Carousel.Slide>
          <Carousel.Slide>
            <OpportunityCardSkeleton />
          </Carousel.Slide>
        </Carousel>
      </div>
    </Paper>
  );
}
