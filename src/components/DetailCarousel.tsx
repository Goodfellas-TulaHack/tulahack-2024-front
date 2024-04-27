import { Box, BoxProps } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import "@mantine/carousel/styles.css";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

type DetailCarouselProps = BoxProps & {
  photo: string[];
};

const DetailCarousel = ({ photo, ...rest }: DetailCarouselProps) => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Box {...rest}>
      <Carousel
        withIndicators
        height={250}
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: 0, sm: "md" }}
        loop
        align="start"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {photo.map((url) => (
          <Carousel.Slide key={url}>
            <Image h={250} src={url} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};

export default DetailCarousel;
