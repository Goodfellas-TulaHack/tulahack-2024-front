import { useBookingRestorn } from "@/api/booking/getBookingRestotan";
import { useNotification } from "@/api/notification/getNotification";
import { Alert, Box, Flex, ScrollArea, Text } from "@mantine/core";

const RestrauntEditHome = ({ restId }: { restId: string }) => {
  const { data: notification } = useNotification({ restaurantId: restId });
  // const { data: booking } = useBookingRestorn({ restaurantId: restId });
  return (
    <Flex gap={50}>
      <Box>
        <Text size="xl">Текущие бронирования</Text>
        <ScrollArea h="80vh" mt={20}>
          <Flex gap={10} direction="column">
            {notification?.map((elem) => (
              <Alert
                variant="light"
                color="blue"
                title={`${elem.description} ${elem.user.firstName} ${elem.user.lastName}`}
              ></Alert>
            ))}
          </Flex>
        </ScrollArea>
      </Box>
      <Box>
        <Text size="xl">Текущие уведомления</Text>
        <ScrollArea h="80vh" mt={20}>
          <Flex gap={10} direction="column">
            {notification?.map((elem) => (
              <Alert
                variant="light"
                color="blue"
                title={`${elem.description} ${elem.user.firstName} ${elem.user.lastName}`}
              ></Alert>
            ))}
          </Flex>
        </ScrollArea>
      </Box>
    </Flex>
  );
};

export default RestrauntEditHome;
