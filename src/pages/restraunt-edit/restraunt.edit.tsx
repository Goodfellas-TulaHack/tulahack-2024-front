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
import {useUserId} from "@/utils/hooks/useUserId.ts";
import restrauntEditCreate from "@/components/restrauntEditor/restraunt.edit.create.tsx";


const restrauntEdit = () => {
    const isMobile = useMobileQuery()

    const [isCreate, setIsCreate] = useState<boolean>(false);
    const userId = useUserId();

    const {data, isLoading} = useGetListAdminRestoran(userId);

    const [restId, setRestId] = useState<string | null>(null)



    const [tab, setTab] = useState<string>('Схема');



    return(
        <Flex w={"100dvw"}>
            <Flex justify={"flex-start"} align={"center"} h={"100dvh"} pt={30} pb={30}  direction="column" gap={20}>
                <Button onClick={() => setIsCreate(true)} h={50} w={"80%"} leftSection={<IconCirclePlus size={18} />}>
                    Добавить ресторан
                </Button>
                <ScrollArea>
                    <Flex justify={"center"} align={"center"} w={isMobile ? "100%" : "400px"} direction="column" gap={20}>
                        {data?.map((item) => (
                            <Restoran key={item.id}
                                      title={item.title}
                                      subtitle={item.subTitle}
                                      address={item.address}
                                      raiting={item.raiting ? item.raiting : 0}
                                      id={item.id ? item.id : ''}/>
                        ))}
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
                    {tab === "Описание" &&
                        <RestrauntEditCreate setIsNew={setIsCreate} restId={restId} />
                    }
                </Flex>
            </Flex>
            }

        </Flex>
        )

}

export default restrauntEdit