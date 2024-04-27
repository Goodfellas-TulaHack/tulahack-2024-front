import { ActionIcon, Anchor, Box, Flex } from "@mantine/core";

import { IconUser } from "@tabler/icons-react";

import logo from "@assets/icons/logo.svg";

const Header = () => {
  return (
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
        <img src={logo} />
        <Anchor href="/login">
          <ActionIcon
            color="#E7F5FF"
            variant="filled"
            size="xl"
            radius="xl"
            aria-label="Settings"
          >
            <IconUser color="#1C7ED6" size={25} />
          </ActionIcon>
        </Anchor>
      </Flex>
    </Box>
  );
};

export default Header;
