import { ActionIcon, Box, Flex } from "@mantine/core";

import { IconUser } from "@tabler/icons-react";

import logo from "@assets/icons/logo.svg";
import {useAuth} from "@/utils/hooks/useAuth.ts";
import {useRole} from "@/utils/hooks/useRole.ts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {

  const isAuth = useAuth()
  const userRole = useRole()
  const [href, setHref] = useState<string>('');

  useEffect(() => {
    if(isAuth){
      if(userRole){
        setHref('/restraunt-edit')
      }
      else{
        setHref('/profile')
      }
    }
    else{
      setHref('/login')
    }
  },[isAuth,userRole])

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
    </Box>
  );
};

export default Header;
