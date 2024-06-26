import {FormEvent, useEffect, useState} from "react";
import {Button, Center, Divider, Input, PasswordInput, Stack, Tabs, Text} from "@mantine/core";
import {IMaskInput} from "react-imask";
import {IconHome, IconUser} from "@tabler/icons-react";
import {loginFn, registerFn} from "@api/user/user.api.ts";
import logo from "@assets/icons/logo.svg"
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IUser, IUserLogin} from "@/utils/types/user/IUser.ts";
import {useNavigate} from "react-router";
import {useAuth} from "@/utils/hooks/useAuth.ts";
import {useRole} from "@/utils/hooks/useRole.ts";


const Login = () => {
    const queryClient = useQueryClient();

    const [isRegister, setRegister] = useState<boolean>(false);

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [firstName, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [middleName, setMiddleName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const navigate = useNavigate()

    const [tab, setTab] = useState<string>('Пользователь');

    const isAuth = useAuth()
    const userRole = useRole()

    useEffect(() => {
        isAuth ? (userRole === 1 ? navigate('/restraunt-edit', {replace: true}) : navigate('/profile', {replace: true})) : {}
    },[])

    const registerMutatuion = useMutation({
        mutationFn: (data: IUser) => registerFn(data),
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['user'] })
        }
    })

    const loginQuery = useMutation({
        mutationFn: (data: IUserLogin) => loginFn(data),
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['user'] })
        }
    })

    const submitHandlerUserRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newUser = {
            login,
            password,
            role: tab === 'Пользователь' ? 0 : 1,
            firstName,
            lastName,
            middleName,
            phone
        }

        registerMutatuion.mutate(newUser)

        const {error} = registerMutatuion

        navigate("..")

    }

    const submitHandlerLogin = (e:FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        const newLogin = {
            login,
            password
        }
        loginQuery.mutate(newLogin)

        const {error} = loginQuery

        if(!error){
            navigate("..")
        }
        else{

        }

    }


    return(
        <Center h={"100dvh"}>
            <form onSubmit={(e) => isRegister ? submitHandlerUserRegister(e) : submitHandlerLogin(e)}>
                <Stack w={350} gap={"md"} align={"stretch"}>
                    <Text ta="center" fw={400} size={"22px"}>
                        {isRegister ? "регистрация" : "войти в"}
                    </Text>
                    <img src={logo}/>
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

                    <Input value={login} onChange={(e) => setLogin(e.currentTarget.value)} required minLength={4} variant="filled" placeholder="Логин "/>
                    {isRegister && <>
                        <Input value={firstName} onChange={(e) => setName(e.currentTarget.value)} required minLength={1} variant="filled" placeholder="Имя"/>
                        <Input value={lastName} onChange={(e) => setLastName(e.currentTarget.value)} required minLength={1} variant="filled" placeholder="Фамилия"/>
                        <Input value={middleName} onChange={(e) => setMiddleName(e.currentTarget.value)} minLength={1} variant="filled" placeholder="Отчество"/>
                        <Input value={phone} onChange={(e) => setPhone(e.currentTarget.value)}                        required component={IMaskInput} mask="+7 (000) 000-00-00" type={"phone"}
                               variant="filled" placeholder="Номер телефона"/>
                    </>}


                    {/*{*/}
                    {/*    isRegister && tab === 'Ресторан' &&*/}
                    {/*    <>*/}
                    {/*        <Input required minLength={4} variant="filled" placeholder="Название ресторана "/>*/}
                    {/*        <Input required minLength={4} variant="filled" placeholder="Адрес "/>*/}
                            {/*<MultiSelect*/}
                            {/*    value={type}*/}
                            {/*    onChange={(e) => setType(e)}*/}
                            {/*    variant="filled"*/}
                            {/*    placeholder="Тип кухни"*/}
                            {/*    data={typeOfKitchen}*/}
                            {/*/>*/}
                    {/*    </>*/}
                    {/*}*/}
                    <PasswordInput value={password} onChange={(e) => setPassword(e.currentTarget.value)} required minLength={6} variant="filled" type={"password"} placeholder="Пароль"/>
                    <Button type={'submit'} variant="light">{isRegister ? 'Зарегистрироваться' : 'Войти'}</Button>
                    <Button onClick={() => setRegister(!isRegister)} variant="outline"
                            color="rgba(0, 0, 0, 1)">{isRegister ? 'Войти' : 'Зарегистрироваться'}</Button>
                </Stack>
            </form>
    </Center>


)
}

export default Login