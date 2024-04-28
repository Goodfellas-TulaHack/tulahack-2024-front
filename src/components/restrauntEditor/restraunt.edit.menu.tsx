import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {addMenu, getMenu} from "@api/admin/admin.restraunt.menu.api.ts";
import {IMenu} from "@/utils/types/menu/IMenu.ts";
import {useEffect, useState} from "react";
import {Button, Flex, Input, Text} from "@mantine/core";
import {IconCirclePlus} from "@tabler/icons-react";
import {IUser} from "@/utils/types/user/IUser.ts";
import {registerFn} from "@api/user/user.api.ts";

const RestrauntEditMenu = (props: {restId: string}) => {

    const queryClient = useQueryClient();

    const [menu, setMenu] = useState<IMenu[]>([])

    const [name,setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [description, setDescription] = useState<string>("");

    const {data} = useQuery({
        queryFn: () => getMenu(props.restId),
        queryKey: ['menu']
    })

    const addMenuMutatuion = useMutation({
        mutationFn: (data: IMenu) => addMenu(data),
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['menu'] })
        }
    })
    useEffect(() =>data && setMenu(data.data), [data,props.restId])

    return(
            <Flex direction={"column"} gap={20}>
                <Flex gap={20}>
                    <Input variant={"filled"} value={name} onChange={(e) =>setName(e.target.value)} placeholder={"Название блюда"}/>
                    <Input variant={"filled"} value={description} onChange={(e) =>setDescription(e.target.value)} placeholder={"Описание блюда"}/>
                    <Input type={"number"} variant={"filled"} value={price} onChange={(e) => setPrice(parseInt(e.target.value))} placeholder={"Цена"}/>
                    <Button onClick={() => addMenuMutatuion.mutate({name, description,price, photo:'string', resourantId: props.restId})}>
                    <IconCirclePlus />
                </Button></Flex>
                {menu.map((item, i) => (
                    <Flex gap={20} key={i}>
                        <Input value={item.name} disabled/>
                        <Input value={item.description} disabled/>
                        <Input value={item.price} disabled/>
                    </Flex>
                ))}
            </Flex>
    )


}

export default RestrauntEditMenu;