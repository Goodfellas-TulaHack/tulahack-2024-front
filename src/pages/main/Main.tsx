//import { useMobileQuery } from "../components/media";
import {
  ActionIcon,
  Box,
  Button,
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

const Main = () => {
  const mobile = useMobileQuery();
  const [search, setSearch] = useState("");

  console.log(mobile);
  return (
    <ScrollArea h="100vh">
      <Flex direction="column" gap="md">
        <Box
          bg="#A5D8FF"
          px={50}
          h={100}
          style={{
            boxShadow: "0px 0px 4px 1px #49505726",
            borderRadius: "0 0 40px 40px",
          }}
        >
          <Flex align="center" h="100%" justify="space-between">
            <ActionIcon
              color="#E7F5FF"
              variant="filled"
              size="xl"
              radius="xl"
              aria-label="Settings"
            >
              <IconUser color="#1C7ED6" size={25} />
            </ActionIcon>
            <Button color="#E7F5FF" size="md" style={{ color: "#1C7ED6" }}>
              Авторизация
            </Button>
          </Flex>
        </Box>

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
