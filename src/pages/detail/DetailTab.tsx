import { BoxProps, Button, Flex } from "@mantine/core";
import { IconCalendarPlus, IconClipboardText } from "@tabler/icons-react";

export enum Tab {
  Info = 0,
  Booking = 1,
}

type DetailTabProps = BoxProps & {
  tab: Tab;
  setTab: (value: Tab) => void;
};

const DetailTab = ({ tab, setTab }: DetailTabProps) => {
  return (
    <Flex px={20} gap="md">
      <Button
        fullWidth
        leftSection={<IconClipboardText size={18} />}
        variant={tab === Tab.Info ? "filled" : "subtle"}
        color={tab === Tab.Info ? "" : "black"}
        onClick={() => setTab(Tab.Info)}
      >
        Описание
      </Button>
      <Button
        fullWidth
        leftSection={<IconCalendarPlus size={18} />}
        variant={tab === Tab.Booking ? "filled" : "subtle"}
        color={tab === Tab.Booking ? "" : "black"}
        onClick={() => setTab(Tab.Booking)}
      >
        Бронирование
      </Button>
    </Flex>
  );
};

export default DetailTab;
