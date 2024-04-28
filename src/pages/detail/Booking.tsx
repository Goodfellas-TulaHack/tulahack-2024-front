import { Box, BoxProps, Center, Flex, Text } from "@mantine/core";
import { useRef, useState } from "react";
import { DateInput, DatePicker, TimeInput } from "@mantine/dates";
import "@mantine/dates/styles.css";

type BookingProps = BoxProps & {};

const Booking = ({}: BookingProps) => {
  const refStart = useRef<HTMLInputElement>(null);
  const refEnd = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<Date | null>(null);


  return (
    <Flex px={20} gap="sm" direction="column">
      <DateInput value={value} onChange={setValue} label="Выберите дату" />

      <Flex gap="md" justify="space-between">
        <TimeInput w="100%" label="От" ref={refStart} />
        <TimeInput w="100%" label="До" ref={refEnd} />
      </Flex>
    </Flex>
  );
};

export default Booking;
