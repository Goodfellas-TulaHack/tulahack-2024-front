import {
  Box,
  CloseButton,
  Flex,
  Input,
  Loader,
  ScrollArea,
  Select,
} from "@mantine/core";
import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import Restoran from "@/components/Restoran";
import Header from "@/components/Header";
import { useGetListRestoran } from "@/api/restoran/getListRestoran";
import { useGetListKitchen } from "@/api/kitchen/kitchen.api";

const Main = () => {
  const [search, setSearch] = useState("");

  const { data: restoran, isLoading } = useGetListRestoran({
    title: search,
    kitchenIds: [],
  });

  const { data: kitchenResp } = useGetListKitchen();

  return (
    <Flex direction="column" gap="md">
      <Header />

      <Input
        px={10}
        size="md"
        placeholder="Поиск"
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        leftSection={
          <Box ml={10}>
            <IconSearch size={16} />
          </Box>
        }
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setSearch("")}
            style={{ display: search ? undefined : "none" }}
          />
        }
      />

      <Select
        px={10}
        size="md"
        placeholder="Выберите кухню"
        data={kitchenResp?.map((elem) => elem.name)}
      />

      {isLoading ? (
        <Flex h="70vh" justify="center" align="center">
          <Loader color="cyan" />
        </Flex>
      ) : (
        <ScrollArea h="50vh">
          <Flex gap="sm" direction="column">
            {restoran?.map((elem) => (
              <Restoran
                key={elem.id}
                title={elem.title}
                subtitle={elem.subtitle}
                raiting={elem.raiting}
                address={elem.address}
                id={elem.id}
              />
            ))}
          </Flex>
        </ScrollArea>
      )}
    </Flex>
  );
};

export default Main;
