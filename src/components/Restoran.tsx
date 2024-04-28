import { Box, Flex, BoxProps, Text, Anchor } from "@mantine/core";

import { IconCarambola, IconHome } from "@tabler/icons-react";
import {Link} from "react-router-dom";
import {SetStateAction} from "react";

type RestoranProps = BoxProps & {
  title: string;
  subtitle: string;
  address: string;
  raiting: number;
  id: string;
  isSelectable?: boolean;
  isSelected?: boolean;
  onClick: (restId: string | null) => void;
};

const Restoran = ({
  title,
  subtitle,
  raiting,
  address,
  id,
  isSelectable,
  isSelected,
    onClick,
  ...rest
}: RestoranProps) => {
  return (
      <>
      {isSelectable ? <Flex
            bg={isSelected ? "#185e95" : "#D0EBFF"}
            mx={10}
            px={20}
            py={10}
            style={{ borderRadius: "20px" }}
            align="center"
            onClick={onClick}
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
          <Box w={170}>
            <Text size="xl" fw={600}>
              {title}
            </Text>
            <Text size="md">{subtitle}</Text>
            <Text size="md">{address}</Text>
          </Box>

          <Flex justify="flex-start" align="center" gap="sm">
            <Text fw={700} style={{ fontSize: 32 }}>
              {raiting}
            </Text>
            <IconCarambola size={30} />
          </Flex>
        </Flex> :

            <Link style={{ textDecoration: "none", color: "black" }} to={`/detail/${id}`} {...rest}>
              <Flex
                  bg="#D0EBFF"
                  mx={10}
                  px={20}
                  py={10}
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
                <Box w={170}>
                  <Text size="xl" fw={600}>
                    {title}
                  </Text>
                  <Text size="md">{subtitle}</Text>
                  <Text size="md">{address}</Text>
                </Box>

                <Flex justify="flex-start" align="center" gap="sm">
                  <Text fw={700} style={{ fontSize: 32 }}>
                    {raiting}
                  </Text>
                  <IconCarambola size={30} />
                </Flex>
              </Flex>
            </Link>
      }
      </>
  );
};

export default Restoran;
