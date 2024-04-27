import { Box, Flex } from "@mantine/core";

import { useParams } from "react-router";
import { useGetOneRestoran } from "@/api/restoran/getOneRestoran";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import "@mantine/carousel/styles.css";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const Detail = () => {
  type dataId = {
    id: string;
  };
  const id = useParams<dataId>();

  const { data } = useGetOneRestoran({ id: id.id ?? "" });

  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Flex direction="column" gap="sm">
      <Box>
        <Carousel
          withIndicators
          height={400}
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
          align="start"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {data?.photos.map((url) => (
            <Carousel.Slide key={url}>
              <Image h={400} src={url} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Box>
    </Flex>
  );
};

export default Detail;
