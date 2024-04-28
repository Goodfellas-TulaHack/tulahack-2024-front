import {BoxProps, Button, Drawer, Flex, Input} from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { DateInput, TimeInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import {useMutation, useQuery} from "@tanstack/react-query";
import { getAllTableFn } from "@/api/admin/admin.restraunt.scheme.save";
import {Layer, Circle, Rect, Stage,Group, Text} from "react-konva";
import {useDisclosure} from "@mantine/hooks";
import {addBooking, getListBooking} from "@api/booking/booking.api.ts";
import {IBooking} from "@/utils/types/booking/IBooking.ts";
import {useNavigate} from "react-router";
import {useUserId} from "@/utils/hooks/useUserId.ts";
type BookingProps = BoxProps & {
  schemeId: string;
  restId: string
};

const Booking = ({ schemeId, restId }: BookingProps) => {

  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const refStart = useRef<HTMLInputElement>(null);
  const refEnd = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<Date | null>(new Date());
  const [tables, setTable] = useState<ITable[]>([]);
  const [closedTable, setClosedTable] = useState<string[]>([]);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [tableId, setTableId] = useState<string>('');

  const userId = useUserId()

  const [selectId, setSelectId] = useState<number>();
    const [opened, { open, close }] = useDisclosure(false);

  const { data } = useQuery({
    queryFn: () => getAllTableFn(schemeId),
    queryKey: ["tables"],
  });



  const {data: ListBookings} = useQuery({
    queryFn: () => getListBooking(restId),
    queryKey: ["booking"],
  })

  const bookingMutate = useMutation({
    mutationFn: (data: IBooking) => addBooking(data),
    onSuccess: async () => {navigate('..')}
  })

  useEffect(() => {
    const temp:string[] = []
    let flag: boolean = false

    ListBookings?.forEach((val) => {
      if(refStart.current?.value === val.time){
        flag = true
        val.tablesId.forEach((val) => temp.push(val));
      }
      if(flag===true){
        val.tablesId.forEach((val) => temp.push(val));
      }
      if(refEnd.current?.value){
        flag = false
        val.tablesId.forEach((val) => temp.push(val));
      }
    })

    setClosedTable(temp);
  }, [refStart, refEnd]);

  useEffect(() => {
    setTable(data?.data ? data?.data : []);
  }, [data]);

  const saveHandler = () => {
    const newBooking: IBooking = {
      userId,
      restrauntId: restId,
      tabelId: tableId,
      date: value ? value.toISOString() : '',
      startTime: startTime,
      endTime: endTime,
      personNumber: count,
      status: 1,
    }

    bookingMutate.mutate(newBooking)
  }

  return (
    <Flex px={20} gap="sm" direction="column">
      <DateInput minDate={new Date()} value={value} onChange={setValue} label="Выберите дату" />

      <Flex gap="md" justify="space-between">
        <TimeInput w="100%" label="От" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        <TimeInput w="100%" label="До" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      </Flex>
        <Stage draggable
            //@ts-ignore
            height={290} width={350} style={{background:"#D0EBFF"}} >
      <Layer  scaleX={0.5} scaleY={0.5}>
        {tables.map((table, i) =>
            <Group>
                {table.type === "rect" ? (
            <Rect
              x={table.x}
              y={table.y}
              width={table.width}
              height={table.height}
              scaleX={table.scaleX}
              scaleY={table.scaleY}
              rotation={table.rotation}
              fill={i===selectId ? "#1C7ED6" : closedTable.includes(table.id) ? "red" : table.fill}
              key={table.id}
              onTap={() => {
                  open()
                setSelectId(i);
                setTableId(table.id)
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
              fill={i===selectId ? "#1C7ED6" : table.fill}
              key={table.id}
              radius={table.radius}
              onTap={() => {
                  open()
                  setSelectId(i);
                setTableId(table.id)
              }}
            />
          )}
                <Text fontSize={20} zIndex={50} x={table.x} y={table.y} text={`Кол-во мест: ${table.numberOfPeople}`}/>
            </Group>
        )}

            </Layer>
        </Stage>
        <Drawer position={"bottom"}  opened={opened} onClose={close}>
          <Flex direction={"column"} gap={20}>
            <Input type={"number"} value={count} onChange={(e) => setCount(parseInt(e.target.value))} placeholder={"Количество челове"} />
            <Button onClick={() => saveHandler()}>Забронировать</Button>
          </Flex>

        </Drawer>
    </Flex>
  );
};

export default Booking;
