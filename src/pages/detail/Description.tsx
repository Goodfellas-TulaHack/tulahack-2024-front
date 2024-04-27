import { Box, BoxProps, Flex, Text } from "@mantine/core";

type DescriptionProps = BoxProps & {
  description?: string;
  startWorkTime?: string;
  endWorkTime?: string;
};

const Description = ({
  description,
  startWorkTime,
  endWorkTime,
  ...rest
}: DescriptionProps) => {
  return (
    <Flex gap="md" px={20} direction="column" {...rest}>
      <Box bg="#D0EBFF" p={10} style={{ borderRadius: "10px" }}>
        <Text fw={600}>Описание</Text>
        <Text mt="sm">{description}</Text>
      </Box>
      <Box bg="#D0EBFF" p={10} style={{ borderRadius: "10px" }}>
        <Text fw={600}>Время работы</Text>
        <Flex mt="sm" justify="space-between">
          <Text>Ежедневно</Text>
          <Flex gap="xs">
            <Text fw={600}>{startWorkTime}</Text>
            <Text fw={600}>-</Text>
            <Text fw={600}>{endWorkTime}</Text>
          </Flex>
        </Flex>
      </Box>
      <Flex bg="#D0EBFF" style={{ borderRadius: "10px" }} gap="sm"></Flex>
    </Flex>
  );
};
export default Description;
