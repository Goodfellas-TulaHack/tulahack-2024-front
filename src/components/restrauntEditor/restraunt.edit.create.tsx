import {Button, Flex, Input, MultiSelect, SimpleGrid, Text, Textarea} from "@mantine/core";
import {Dispatch, SetStateAction, useState} from "react";
import {TimeInput} from "@mantine/dates";
import {useMutation, useQueryClient} from "@tanstack/react-query";

import {postNewRest} from "@api/admin/admin.restraunt.api.ts";


const restrauntEditCreate = (props: {setIsNew: Dispatch<SetStateAction<boolean>>}) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [shortDescription, setShortDescription] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [startTime, setStartTime] = useState<string>("");
    const [endTime, setEndTime] = useState<string>("");
    const [kitchen, setKitchen] = useState<string[]>([]);

    const queryClient = useQueryClient();

    const addRestMutation = useMutation({
        mutationFn: (data: IRestData) => postNewRest(data),
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['getListRestraunAdmin'] })
        }
    })

    const saveHandler = () => {
        const newRest: IRestData = {
            title: title,
            description: description,
            subTitle: shortDescription,
            address: address,
            startWorkTime: startTime,
            endWorkTime: endTime,
            kitchen: kitchen,

        }

        addRestMutation.mutate(newRest)
    }

    return(
        <Flex p={50} direction="column" gap={50}>
            <Text fw={800} size={"48px"}>Новый ресторан</Text>
            <SimpleGrid cols={2}>
                <Flex direction={"column"} gap={20}>
                    <Text fw={700} size={"24px"}>
                        Название ресторана
                    </Text>
                    <Input value={title} onChange={(e) => setTitle(e.currentTarget.value)} required minLength={4} variant="filled" placeholder="Название ресторана "/>
                </Flex>
                <Flex direction={"column"} gap={20}>
                    <Text fw={700} size={"24px"}>
                        Адрес ресторана
                    </Text>
                    <Input value={address} onChange={(e) => setAddress(e.currentTarget.value)} required minLength={4} variant="filled" placeholder="Адрес ресторана "/>
                </Flex>
                <Flex direction={"column"} gap={20}>
                    <Text fw={700} size={"24px"}>
                        Адрес ресторана
                    </Text>
                    <Input value={address} onChange={(e) => setAddress(e.currentTarget.value)} required minLength={4} variant="filled" placeholder="Адрес ресторана "/>
                </Flex>
                <Flex direction={"column"} gap={20}>
                    <Text fw={700} size={"24px"}>
                        Время работы ресторана
                    </Text>
                    <Flex gap={20}>
                        <TimeInput
                            variant={"filled"}
                            value={startTime}
                            onChange={(e) => setStartTime(e.currentTarget.value)}
                            label="Открытие ресторана"
                        />
                        <TimeInput
                            variant={"filled"}
                            value={endTime}
                            onChange={(e) => setEndTime(e.currentTarget.value)}
                            label="Закрытие ресторана"
                            minTime={startTime}
                        />
                    </Flex>
                </Flex>
                <Flex direction={"column"} gap={20}>
                    <Text fw={700} size={"24px"}>
                        О ресторане
                    </Text>
                    <Flex align={"center"} justify={"center"} w={"100%"} m={"auto"} p={10} style={{backgroundColor: "#F2F4F5"}}>
                        Короткое описание
                    </Flex>
                    <Input w={400} size={"md"} value={shortDescription} onChange={(e) => setShortDescription(e.currentTarget.value)} required minLength={4} variant="filled" placeholder="Описание... "/>
                    <Flex align={"center"} justify={"center"} w={"100%"} m={"auto"} p={10} style={{backgroundColor: "#F2F4F5"}}>
                        Описание заведения
                    </Flex>
                    <Textarea w={400} autosize maxRows={10} size={"md"} value={description} onChange={(e) => setDescription(e.currentTarget.value)} required minLength={4} variant="filled" placeholder="Описание... "/>
                </Flex>
                <Flex direction={"column"} gap={20}>
                    <Button onClick={() => saveHandler()} fullWidth>Сохранить</Button>
                    <Button onClick={() => props.setIsNew(false)} color="gray" fullWidth>Отменить</Button>
                </Flex>
                <MultiSelect
                    value={kitchen}
                    onChange={(e) => setKitchen(e)}
                    variant={"filled"}
                    placeholder="Вид кухни"
                    data={['React', 'Angular', 'Vue', 'Svelte']}
                />
            </SimpleGrid>
        </Flex>

    )
}

export default restrauntEditCreate;