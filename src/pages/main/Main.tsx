//import { useMobileQuery } from "../components/media";
import {
  ActionIcon,
  Box,
  CloseButton,
  Flex,
  Input,
  ScrollArea,
  Select,
} from "@mantine/core";
import { useState } from "react";
import { IconSearch, IconUser } from "@tabler/icons-react";
import { useMobileQuery } from "@/components/media.tsx";
import Restoran from "@/components/Restoran";
import logo from "@assets/icons/logo.svg";
import Header from "@/components/Header";

const Main = () => {
  const mobile = useMobileQuery();
  const [search, setSearch] = useState("");

  console.log(mobile);
  return (
    <ScrollArea h="100vh">
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
          data={["Суши", "Пицца", "Бургеры"]}
        />

        <Restoran />
        <Restoran />
        <Restoran />
        <Restoran />
        <Restoran />
        <Restoran />
        <Restoran />
        <Restoran />
      </Flex>
    </ScrollArea>
  );
};

export default Main;
