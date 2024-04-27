import Restoran from "@/components/Restoran.tsx";
import {Button, Flex, ScrollArea, Tabs} from "@mantine/core";
import {useMobileQuery} from "@/components/media.tsx";
import {IconCirclePlus, IconPhoto} from "@tabler/icons-react";
import {useState} from "react";
import RestrauntEditCreate from "@/components/restrauntEditor/restraunt.edit.create.tsx";
import {useGetListRestoran} from "@api/restoran/getListRestoran.ts";
import {useGetListAdminRestoran} from "@api/admin/admin.restraunt.api.ts";
import restrauntEditScheme from "@/components/restrauntEditor/restraunt.edit.scheme.tsx";
import RestrauntEditScheme from "@/components/restrauntEditor/restraunt.edit.scheme.tsx";


const restrauntEdit = () => {
    const isMobile = useMobileQuery()

    const [isCreate, setIsCreate] = useState<boolean>(false);

    const {data, isLoading} = useGetListAdminRestoran('1');

    const [tab, setTab] = useState<string>('Схема');



    return(
        <Flex w={"100dvw"}>
            <Flex justify={"flex-start"} align={"center"} h={"100dvh"} pt={30} pb={30}  direction="column" gap={20}>
                <Button onClick={() => setIsCreate(true)} h={50} w={"80%"} leftSection={<IconCirclePlus size={18} />}>
                    Добавить ресторан
                </Button>
                <ScrollArea>
                    <Flex justify={"center"} align={"center"} w={isMobile ? "100%" : "400px"} direction="column" gap={20}>

                    </Flex>
                </ScrollArea>
            </Flex>
            {isCreate ? <RestrauntEditCreate setIsNew={setIsCreate}/> :

            <Flex direction={"column"} p={30}>
            <Tabs value={tab} onChange={(e) => setTab(e ? e : '')} w={"calc(100dvw - 550px)"} defaultValue="Схема">
                    <Tabs.List grow>
                        <Tabs.Tab value="Домашняя страница" >
                            Домашняя страница
                        </Tabs.Tab>
                        <Tabs.Tab value="Описание" >
                            Описание
                        </Tabs.Tab>
                        <Tabs.Tab value="Галлерея" >
                            Галлерея
                        </Tabs.Tab>
                        <Tabs.Tab value="Меню" >
                            Меню
                        </Tabs.Tab>
                        <Tabs.Tab value="Схема" >
                            Схема
                        </Tabs.Tab>
                    </Tabs.List>
                </Tabs>
                <Flex mt={20} gap={20} direction="column" align={"center"} justify={"center"}>
                    {tab === "Схема" &&
                        <RestrauntEditScheme/>
                    }
                </Flex>
            </Flex>
            }

        </Flex>
        )

}

export default restrauntEdit