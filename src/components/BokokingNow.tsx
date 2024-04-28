import { Box, Flex, BoxProps, Text, Button } from "@mantine/core";

import { IconCarambola, IconHome } from "@tabler/icons-react";
import ModalMenuButton from "./ModalMenuButton";
import { postNotification } from "@/api/notification/postNotification";
import { useUserId } from "@/utils/hooks/useUserId";
import { uBookingseActive } from "@/api/booking/getActiveBooking";

type BokokingNowProps = BoxProps & {};

const BokokingNow = ({ ...rest }: BokokingNowProps) => {
  const userId = useUserId();
  const { data: booking } = uBookingseActive({ userId: userId });
  return (
    <Box bg="#D0EBFF" mx={10} px={20} py={10} style={{ borderRadius: "20px" }}>
      <Flex align="center" justify="space-between" {...rest}>
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
            Тен
          </Text>
          <Text size="md">Ул. Пушкина д.77</Text>
        </Box>

        <Flex justify="flex-start" align="center" gap="sm">
          <Text fw={700} style={{ fontSize: 32 }}>
            4.0
          </Text>
          <IconCarambola size={30} />
        </Flex>
      </Flex>
      <Button
        fullWidth
        mt="sm"
        h={30}
        onClick={() =>
          postNotification({
            userId: userId,
            restaurantId: "8cb87000-76aa-41d3-88e4-98ab967f8c8f",
            type: "1",
            description: "ОФИЙИИАНТ",
          })
        }
      >
        Позвать официанта
      </Button>
      <Flex gap="sm" mt="sm">
        <ModalMenuButton />
        <Button fullWidth h={30}>
          Счет
        </Button>
      </Flex>
    </Box>
  );
};

export default BokokingNow;
