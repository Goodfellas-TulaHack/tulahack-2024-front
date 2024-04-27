import Restoran from "@/components/Restoran.tsx";
import {Button, Flex, ScrollArea} from "@mantine/core";
import {useMobileQuery} from "@/components/media.tsx";
import {IconCirclePlus} from "@tabler/icons-react";
import {useState} from "react";
import RestrauntEditCreate from "@/components/restrauntEditor/restraunt.edit.create.tsx";
import {useGetListRestoran} from "@api/restoran/getListRestoran.ts";
import {useGetListAdminRestoran} from "@api/admin/admin.restraunt.api.ts";


const restrauntEdit = () => {
    const isMobile = useMobileQuery()

    const [isCreate, setIsCreate] = useState<boolean>(true);

    const {data, isLoading} = useGetListAdminRestoran('1');



    return(
        <Flex>
            <Flex justify={"flex-start"} align={"center"} h={"100dvh"} pt={30} pb={30}  direction="column" gap={20}>
                <Button onClick={() => setIsCreate(true)} h={50} w={"80%"} leftSection={<IconCirclePlus size={18} />}>
                    Добавить ресторан
                </Button>
                <ScrollArea>
                    <Flex justify={"center"} align={"center"} w={isMobile ? "100%" : "400px"} direction="column" gap={20}>
                        <Restoran/>
                        <Restoran/>
                        <Restoran/>
                        <Restoran/>
                        <Restoran/>
                        <Restoran/>
                        <Restoran/>
                        <Restoran/>
                    </Flex>
                </ScrollArea>
            </Flex>
            {isCreate && <RestrauntEditCreate setIsNew={setIsCreate}/>}

        </Flex>
        )

}

export default restrauntEdit