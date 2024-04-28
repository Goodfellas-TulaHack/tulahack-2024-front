import {Layer, Stage, Circle, Rect, Transformer} from "react-konva";
import {Button, Flex, Input, Select} from "@mantine/core";
import {useRef, useState} from "react";
import Konva from "konva";
import {IconTrash} from "@tabler/icons-react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postNewRest} from "@api/admin/admin.restraunt.api.ts";
import {postNewTableFn} from "@api/admin/admin.restraunt.scheme.save.ts";



const restrauntEditorSchema = (props: {schemeId: string}) => {


    const [tableShape, setTableShape] = useState<string>('Квадратный стол')

    const [tables, setTable] = useState<ITable[]>([]);

    const [selectId, setSelectId] = useState<number>(0);
    const [isSelected, setIsSelected] = useState<boolean>(false);

    const stageRef = useRef<Konva.Stage | null>(null);
    const transformerRef = useRef<Konva.Transformer | null>(null);

    const queryClient = useQueryClient();

    const addTableMutatuion = useMutation({
        mutationFn: (data: ITable) => postNewTableFn(data),
        onSuccess: async () => {
        queryClient.invalidateQueries({ queryKey: ['getListRestraunAdmin'] })
    }}
    )


    const addTable = () => {
        const newTable: ITable = {
            id: crypto.randomUUID(),
            schemeId: props.schemeId,
            x: 50,
            y: 50,
            width: 50,
            height: 50,
            type: tableShape === 'Квадратный стол' ? "rect" : "circle",
            fill: "#A5D8FF",
            scaleX: 1,
            scaleY: 1,
            rotate: 0,
            numberOfPeople: 0,
            radius: 25
        }
        addTableMutatuion.mutate(newTable)
        setTable((prev) => [...prev, newTable]);
    }

    const saveTable = (table: ITable, i:number, num?: number) => {
        const newTable: ITable = {
            id: tables[i].id,
            schemeId: props.schemeId,
            x: table.x,
            y: table.y,
            width: table.width,
            height: table.height,
            scaleX: table.scaleX,
            scaleY: table.scaleY,
            rotate: table.rotate,
            fill: "#A5D8FF",
            type: tables[i].type,
            numberOfPeople: num ? num : tables[i].numberOfPeople,
            radius: 25
        };
        const newTables: ITable[] = [...tables.slice(0,i),newTable,...tables.slice(i+1, tables.length)];
        setTable(newTables);
    }


    const saveTablesHandler = () => {

    }

    const deleteHandler = () => {
        const newTables: ITable[] = [...tables.slice(0,selectId),...tables.slice(selectId+1, tables.length)];
        setIsSelected(false)
        setTable(newTables);
    }

    return(
        <>
            <Flex gap={50}>
                <Select
                    value={tableShape}
                    onChange={(e) => setTableShape(e ? e : '')}
                    placeholder="Форма стола"
                    data={['Квадратный стол','Круглый стол']}
                />
                <Button onClick={() => {addTable()}}>Добавить стол</Button>
                {isSelected && <Input value={tables[selectId].numberOfPeople} placeholder={"Вместитмость"} type={"number"} onChange={(e) => saveTable(tables[selectId], selectId, parseInt(e.target.value))}/>}
                {isSelected && <Button color={"red"} onClick={() => deleteHandler()}><IconTrash/></Button>}
            </Flex>
            <Stage
                //@ts-ignore
                onClick={e => e.target === stageRef.current && transformerRef.current.nodes([]) && setIsSelected(false)}
                ref={stageRef}
                height={700} width={900} style={{background:"#D0EBFF", width:"900px"}} >
                <Layer>
                    {tables.map((table, i) => (
                        table.type === "rect" ?
                            <Rect
                                x={table.x}
                                y={table.y}
                                width={table.width}
                                height={table.height}
                                scaleX={table.scaleX}
                                scaleY={table.scaleY}
                                rotation={table.rotate}
                                fill={table.fill}
                                key={table.id}
                                draggable
                                //@ts-ignore
                                onMouseDown={e => transformerRef.current.nodes([e.currentTarget])}
                                //@ts-ignore
                                onDragEnd={e => saveTable(e.currentTarget.attrs, i)}
                                onClick={() => {setSelectId(i), setIsSelected(true)}}
                                onTransformEnd={e => saveTable(e.currentTarget.attrs, i)}

                                cornerRadius={5}
                            ></Rect>

                            :

                            <Circle
                                x={table.x}
                                y={table.y}
                                scaleX={table.scaleX}
                                scaleY={table.scaleY}
                                rotation={table.rotate}
                                fill={table.fill}
                                key={table.id}
                                radius={table.radius}
                                draggable
                                //@ts-ignore
                                onMouseDown={e => transformerRef.current.nodes([e.currentTarget])}
                                //@ts-ignore
                                onDragEnd={e => saveTable(e.currentTarget.attrs, i)}
                                onClick={() => {setSelectId(i), setIsSelected(true)}}
                                onTransformEnd={e => saveTable(e.currentTarget.attrs, i)}
                            />
                    ))}
                    <Transformer ref={transformerRef} />
                </Layer>
            </Stage>
            <Button onClick={() => saveTablesHandler()}>Сохранить</Button>
        </>


    )
}

export default restrauntEditorSchema;
