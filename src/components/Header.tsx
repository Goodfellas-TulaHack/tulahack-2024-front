import { ActionIcon, Box, Flex, Text, Image } from "@mantine/core";

import { IconUser } from "@tabler/icons-react";

import logo from "@assets/icons/logo.svg";
import { useAuth } from "@/utils/hooks/useAuth.ts";
import { useRole } from "@/utils/hooks/useRole.ts";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "@/utils/hooks/use-user";
import BokokingNow from "./BokokingNow";

const Header = () => {
  const isAuth = useAuth();
  const userRole = useRole();
  const userInfo = useUser();
  const [href, setHref] = useState<string>("");

  useEffect(() => {
    if (isAuth) {
      if (userRole) {
        setHref("/restraunt-edit");
      } else {
        setHref("/profile");
      }
    } else {
      setHref("/login");
    }
  }, [isAuth, userRole]);

  return (
    <>
      <Box
        bg="#A5D8FF"
        px={50}
        h={100}
        style={{
          boxShadow: "0px 0px 4px 1px #49505726",
          borderRadius: "0 0 40px 40px",
        }}
      >
        {isAuth ? (
          <Flex align="center" h="100%" justify="space-between">
            <Text size="30px" fw={600}>
              {userInfo.lastName} {userInfo.firstName[0]}.
            </Text>
            <Link to={href}>
              <Image
                radius="50%"
                h={60}
                w={60}
                fit="contain"
                src="https://workspace.ru/upload/main/f19/mu43yimsv02kumhkc2a2xpe2mqp58ci3/IMG_20221230_223752_673.jpg"
              />
            </Link>
          </Flex>
        ) : (
          <Flex align="center" h="100%" justify="space-between">
            <img src={logo} />
            <Link to={href}>
              <ActionIcon
                color="#E7F5FF"
                variant="filled"
                size="xl"
                radius="xl"
                aria-label="Settings"
              >
                <IconUser color="#1C7ED6" size={25} />
              </ActionIcon>
            </Link>
          </Flex>
        )}
      </Box>
      <BokokingNow />
    </>
  );
};

export default Header;
