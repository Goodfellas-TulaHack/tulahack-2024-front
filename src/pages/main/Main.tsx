//import { useMobileQuery } from "../components/media";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  CloseButton,
  Flex,
  Input,
  ScrollArea,
  Select,
  Text,
} from "@mantine/core";
import { useMobileQuery } from "../../components/media";
import AccountIcon from "../../components/icon/AccountIcon";
import { useState } from "react";
import { IconCarambola, IconHome, IconSearch } from "@tabler/icons-react";

const Main = () => {
  const mobile = useMobileQuery();
  const [search, setSearch] = useState("");

  console.log(mobile);
  return (
    <ScrollArea h="100vh">
      <Flex direction="column" gap="xl">
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
              <AccountIcon color="#1C7ED6" size={20} />
            </ActionIcon>
            <Button color="#E7F5FF" size="md" style={{ color: "#1C7ED6" }}>
              Авторизация
            </Button>
          </Flex>
        </Box>

        <Flex direction="row" justify="space-between" px={10} gap={20}>
          <Input
            size="md"
            placeholder="Поиск"
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            rightSectionPointerEvents="all"
            leftSection={<IconSearch size={16} />}
            rightSection={
              <CloseButton
                aria-label="Clear input"
                onClick={() => setSearch("")}
                style={{ display: search ? undefined : "none" }}
              />
            }
          />
          <Select
            size="md"
            placeholder="Фильтр"
            data={["React", "Angular", "Vue", "Svelte"]}
          />
        </Flex>

        <Flex
          bg="#D0EBFF"
          h={80}
          px={20}
          style={{ borderRadius: "20px" }}
          align="center"
          justify="space-between"
        >
          <Flex
            bg="#E7F5FF"
            w={40}
            h={40}
            style={{ borderRadius: "50%" }}
            align="center"
            justify={"center"}
          >
            <IconHome size={20} color="#1C7ED6" />
          </Flex>
          <Box>
            <Text size="xl">Название ресторана</Text>
            <Text size="md">Короткое описание</Text>
          </Box>
          <Text fw={700} style={{ fontSize: 32 }}>
            5.0
          </Text>
          <IconCarambola size={30} />
        </Flex>
      </Flex>
    </ScrollArea>
  );
};

export default Main;
