import {useState} from "react";
import {Button, Center, Divider, Input, MultiSelect, PasswordInput, Stack, Tabs, Text} from "@mantine/core";
import {IMaskInput} from "react-imask";
import {IconHome, IconUser} from "@tabler/icons-react";


const Login = () => {
    const [isRegister, setRegister] = useState<boolean>(false);

    const typeOfKitchen = ["Вьетнамская", "Мексиканская","Паназиатская"]

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [middleName, setMiddleName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [type, setType] = useState<string[]>([]);

    const [tab, setTab] = useState<string>('Пользователь');

    return(
        <Center h={"100dvh"}>
            <form>
                <Stack w={350} gap={"md"} align={"stretch"}>
                    <Text ta="center" fw={400} size={"22px"}>
                        {isRegister ? "регистрация" : "войти в"}
                    </Text>
                    <Text ta="center" fw={700} size={"48px"}>
                        Гастрохаб
                    </Text>
                    <Divider size={"sm"}/>
                    {isRegister &&
                        <Tabs onChange={(e) => setTab(e ? e : '')} value={tab} defaultValue="Пользователь">
                            <Tabs.List grow>
                                <Tabs.Tab value="Пользователь" leftSection={<IconUser />}>
                                    Пользователь
                                </Tabs.Tab>
                                <Tabs.Tab value="Ресторан" leftSection={<IconHome/>}>
                                    Ресторан
                                </Tabs.Tab>
                            </Tabs.List>
                        </Tabs>
                    }

                    <Input required minLength={4} variant="filled" placeholder="Логин "/>
                    {
                        isRegister && tab === 'Пользователь' &&
                        <>

                            <Input required minLength={1} variant="filled" placeholder="Имя"/>
                            <Input required minLength={1} variant="filled" placeholder="Фамилия"/>
                            <Input minLength={1} variant="filled" placeholder="Отчество"/>
                            <Input required component={IMaskInput} mask="+7 (000) 000-00-00" type={"phone"}
                                   variant="filled" placeholder="Номер телефона"/>

                        </>
                    }
                    {
                        isRegister && tab === 'Ресторан' &&
                        <>
                            <Input required minLength={4} variant="filled" placeholder="Название ресторана "/>
                            <Input required minLength={4} variant="filled" placeholder="Адрес "/>
                            <MultiSelect
                                value={type}
                                onChange={(e) => setType(e)}
                                variant="filled"
                                placeholder="Тип кухни"
                                data={typeOfKitchen}
                            />
                        </>
                    }
                    <PasswordInput required minLength={6} variant="filled" type={"password"} placeholder="Пароль"/>
                    <Button type={'submit'} variant="light">{isRegister ? 'Зарегистрироваться' : 'Войти'}</Button>
                    <Button onClick={() => setRegister(!isRegister)} variant="outline"
                            color="rgba(0, 0, 0, 1)">{isRegister ? 'Войти' : 'Зарегистрироваться'}</Button>
                </Stack>
            </form>
    </Center>


)
}

export default Login