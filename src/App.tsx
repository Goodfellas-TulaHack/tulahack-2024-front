import '@mantine/core/styles.css';
import {createTheme, MantineProvider} from "@mantine/core";
import {RouterProvider} from "react-router-dom";
import router from "./router/router.ts";

function App() {
  const theme = createTheme({



  });

  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router}/>
    </MantineProvider>
  )
}

export default App
