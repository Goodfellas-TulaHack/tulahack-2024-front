import { BoxProps, Flex } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { DateInput, TimeInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { useQuery } from "@tanstack/react-query";
import { getAllTableFn } from "@/api/admin/admin.restraunt.scheme.save";
import { Layer, Circle, Rect } from "react-konva";
type BookingProps = BoxProps & {
  schemeId: string;
};

const Booking = ({ schemeId }: BookingProps) => {
  const refStart = useRef<HTMLInputElement>(null);
  const refEnd = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<Date | null>(null);
  const [tables, setTable] = useState<ITable[]>([]);

  const { data } = useQuery({
    queryFn: () => getAllTableFn(schemeId),
    queryKey: ["tables"],
  });

  useEffect(() => {
    setTable(data?.data ? data?.data : []);
  }, [data]);

  console.log(tables);

  return (
    <Flex px={20} gap="sm" direction="column">
      <DateInput value={value} onChange={setValue} label="Выберите дату" />

      <Flex gap="md" justify="space-between">
        <TimeInput w="100%" label="От" ref={refStart} />
        <TimeInput w="100%" label="До" ref={refEnd} />
      </Flex>

      <Layer>
        {tables.map((table, i) =>
          table.type === "rect" ? (
            <Rect
              x={table.x}
              y={table.y}
              width={table.width}
              height={table.height}
              scaleX={table.scaleX}
              scaleY={table.scaleY}
              rotation={table.rotation}
              fill={table.fill}
              key={table.id}
              draggable
              onMouseDown={(e) =>
                //@ts-ignore
                transformerRef.current.nodes([e.currentTarget])
              }
              onClick={() => {
                //@ts-ignore
                setSelectId(i), setIsSelected(true);
              }}
              cornerRadius={5}
            ></Rect>
          ) : (
            <Circle
              x={table.x}
              y={table.y}
              scaleX={table.scaleX}
              scaleY={table.scaleY}
              rotation={table.rotation}
              fill={table.fill}
              key={table.id}
              radius={table.radius}
              draggable
              onMouseDown={(e) =>
                //@ts-ignore
                transformerRef.current.nodes([e.currentTarget])
              }
              onClick={() => {
                //@ts-ignore
                setSelectId(i), setIsSelected(true);
              }}
            />
          ),
        )}
      </Layer>
    </Flex>
  );
};

export default Booking;
