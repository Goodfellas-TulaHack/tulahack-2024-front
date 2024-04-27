import { Box, Button, Flex, Loader, ScrollArea, Text } from "@mantine/core";
import { useParams } from "react-router";
import { useGetOneRestoran } from "@/api/restoran/getOneRestoran";
import DetailCarousel from "@/components/DetailCarousel";
import { useState } from "react";
import DetailTab, { Tab } from "./DetailTab";
import DetaiHeaderlInfo from "./DetaiHeaderlInfo";
import Description from "./Description";
import Booking from "./Booking";

const Detail = () => {
  type dataId = {
    id: string;
  };
  const id = useParams<dataId>();

  const { data, isFetched } = useGetOneRestoran({ id: id.id ?? "" });
  const [tab, setTab] = useState(Tab.Info);

  if (!isFetched) {
    return (
      <Flex justify="center" align="center" h="100dvh">
        <Loader color="cyan" />
      </Flex>
    );
  }

  return (
    <ScrollArea h="100dvh">
      <Flex direction="column" gap="md">
        <DetailCarousel photo={data?.photos ?? [""]} />
        <DetaiHeaderlInfo
          title={data?.title}
          kitchen={data?.kitchen}
          raiting={data?.raiting}
          address={data?.address}
        />
        <DetailTab tab={tab} setTab={setTab} />
        {tab === Tab.Info ? (
          <Description
            description={data?.description}
            startWorkTime={data?.startWorkTime}
            endWorkTime={data?.endWorkTime}
          />
        ) : (
          <Booking />
        )}
      </Flex>
    </ScrollArea>
  );
};

export default Detail;
