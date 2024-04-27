import { Box, BoxProps, Flex, Text } from "@mantine/core";

import { IconStar } from "@tabler/icons-react";

type DetailInfoProps = BoxProps & {
  title?: string;
  kitchen?: string;
  raiting?: number;
  address?: string;
};

const DetaiHeaderlInfo = ({
  title,
  kitchen,
  raiting,
  address,
}: DetailInfoProps) => {
  return (
    <Flex justify="space-between" px={20}>
      <Flex maw="50%" direction="column" justify="space-between">
        <Text size="xl" fw={600}>
          {title}
        </Text>
        <Text c="gray" size="md">
          {kitchen}
        </Text>
      </Flex>
      <Box>
        <Flex gap="xs" align="center" justify="flex-end">
          <Text fw={600} style={{ fontSize: 20 }}>
            {raiting}
          </Text>
          <IconStar size={20} />
        </Flex>
        <Text size="md" c="gray">
          {address}
        </Text>
      </Box>
    </Flex>
  );
};

export default DetaiHeaderlInfo;
