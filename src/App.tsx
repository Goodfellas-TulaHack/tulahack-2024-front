import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
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

  useEffect(() => {
      if(checkAuth.data){
          auth(checkAuth.data)
      }
      else{
          logout()
      }
  })

  return (

      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
  );
}

export default App;
