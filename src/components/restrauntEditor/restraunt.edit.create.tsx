import {Button, Flex, Group, Input, MultiSelect, rem, SimpleGrid, Text, Textarea, Image} from "@mantine/core";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {TimeInput} from "@mantine/dates";
import {useMutation, useQueryClient} from "@tanstack/react-query";

import {postNewRest, putNewRest} from "@api/admin/admin.restraunt.api.ts";
import {useUserId} from "@/utils/hooks/useUserId.ts";
import {useGetListKitchen} from "@api/kitchen/kitchen.api.ts";
import {IKitchenData} from "@/utils/types/kitchen/IKitchenData.ts";

import '@mantine/dropzone/styles.css';
import {Dropzone, FileWithPath, IMAGE_MIME_TYPE} from "@mantine/dropzone";
import {IconPhoto, IconUpload, IconX} from "@tabler/icons-react";

const restrauntEditCreate = (props: {setIsNew: Dispatch<SetStateAction<boolean>>, restData?: IRestData}) => {
    const [title, setTitle] = useState<string>(props.restData?.title ? props.restData.title : "");
    const [description, setDescription] = useState<string>(props.restData?.description ? props.restData.description : "");
    const [shortDescription, setShortDescription] = useState<string>(props.restData?.subtitle ? props.restData.subtitle : "");
    const [address, setAddress] = useState<string>(props.restData?.address ? props.restData.address : "");
    const [startTime, setStartTime] = useState<string>(props.restData?.startWorkTime ? props.restData.startWorkTime : "");
    const [endTime, setEndTime] = useState<string>(props.restData?.endWorkTime ? props.restData.endWorkTime : "");
    const [kitchen, setKitchen] = useState<string[]>(props.restData?.kitchen ? props.restData.kitchen : []);
    const [logo, setLogo] = useState<FileWithPath[]>();


    const queryClient = useQueryClient();

    const userId = useUserId()

    const [kitchenData, setKitchenData] = useState<IKitchenData[]>([]);

    const addRestMutation = useMutation({
        mutationFn: (data: IRestData) => postNewRest(data),
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['getListRestraunAdmin'] })
        }
    })

    const addRestMutationPut = useMutation({
        mutationFn: (data: IRestData) => putNewRest(data),
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['getListRestraunAdmin'] })
        }
    })

    const saveHandler = () => {
        // let newRest = new FormData()
        // newRest.append('title', title)
        // newRest.append('description', description)
        // newRest.append('subTitle', shortDescription)
        // newRest.append('address', address)
        // newRest.append('startWorkTime', startTime)
        // newRest.append('endWorkTime', endTime)
        // newRest.append('kitchen', kitchen.toString())
        // newRest.append('userId', userId)
        // if(logo){
        //     newRest.append('logo', logo[0])
        // }

        const newRest: IRestData = {
            id: props.restData ? props.restData.id : undefined,
            title: title,
            description: description,
            subtitle: shortDescription,
            userId: userId,
            address: address,
            startWorkTime: startTime,
            endWorkTime: endTime,
            kitchen: kitchen
        }

        props.restData ? addRestMutationPut.mutate(newRest) : addRestMutation.mutate(newRest)

    }

    const {data} = useGetListKitchen()

    useEffect(() => {
        if(data){
            setKitchenData(data)
        }
    },[data])

    useEffect(() => {
        setTitle(props.restData?.title ? props.restData.title : "");
        setDescription(props.restData?.description ? props.restData.description : "");
        setShortDescription(props.restData?.subtitle ? props.restData.subtitle : "")
        setAddress(props.restData?.address ? props.restData.address : "")
        setStartTime(props.restData?.startWorkTime ? props.restData.startWorkTime : "")
        setEndTime(props.restData?.endWorkTime ? props.restData.endWorkTime : "")
        setKitchen(props.restData?.kitchen ? props.restData.kitchen : [])
    }, [props.restData]);

    const previews = logo?.map((logo) => {
        const imageUrl = URL.createObjectURL(logo);
        return <Image src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />;
    });

    return(
        <Flex p={50} direction="column" gap={50}>
            <Text fw={800} size={"48px"}>{props.restData?.title ? props.restData?.title : 'Новый ресторан'}</Text>
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
                <MultiSelect
                    value={kitchen}
                    onChange={(e) => setKitchen(e)}
                    variant={"filled"}
                    placeholder="Вид кухни"
                    data={kitchenData.map(elem => ({value: elem.id, label: elem.name}))}
                />
                <Dropzone
                    hidden={logo ? true : false}
                    onDrop={setLogo}
                    maxSize={5 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                    p={50}
                >
                    <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
                        <Dropzone.Accept>
                            <IconUpload
                                style={{ width: rem(52), height: rem(52), color: '#1C7ED6' }}
                                stroke={1.5}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX
                                style={{ width: rem(52), height: rem(52), color: '#1C7ED6' }}
                                stroke={1.5}
                            />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconPhoto
                                style={{ width: rem(52), height: rem(52), color: '#1C7ED6' }}
                                stroke={1.5}
                            />
                        </Dropzone.Idle>

                        <div>
                            <Text size="xl" c="#1C7ED6" inline>
                                Перетащи лого
                            </Text>
                            <Text size="sm" c="#1C7ED6" inline mt={7}>
                            </Text>
                        </div>
                    </Group>
                </Dropzone>
                {previews}
                <Flex direction={"column"} gap={20}>
                    <Button onClick={() => saveHandler()} fullWidth>Сохранить</Button>
                    {!props.restData && <Button onClick={() => props.setIsNew(false)} color="gray" fullWidth>Отменить</Button>}
                </Flex>

            </SimpleGrid>
        </Flex>

    )
}

export default restrauntEditCreate;