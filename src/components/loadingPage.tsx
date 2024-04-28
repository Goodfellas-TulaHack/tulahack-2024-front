import {Center, Loader} from "@mantine/core";


const loadingPage = () => {

    return(
        <Center>
            <Loader color="blue" type="bars" />
        </Center>
    )
}

export default loadingPage;