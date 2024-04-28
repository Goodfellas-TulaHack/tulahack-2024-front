import "@mantine/core/styles.css";
import {createTheme, Loader, MantineProvider} from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";
import {
    useQuery
} from "@tanstack/react-query";
import {authFn} from "@api/user/user.api.ts";
import {useEffect} from "react";
import {useStore} from "@/store/store.ts";

function App() {
  const theme = createTheme({});


  const checkAuth = useQuery({
      queryFn: () => authFn(),
      queryKey: ["user"]
  });

  const auth = useStore((state) => state.logining)
    const logout = useStore((state) => state.logout)

    const {data, isLoading} = checkAuth

  useEffect(() => {

      if(data){
          auth(data)
      }
      else{
          logout()
      }
  },[isLoading])

  return (

      <MantineProvider theme={theme}>
          <RouterProvider router={router} />
      </MantineProvider>
  );
}

export default App;
