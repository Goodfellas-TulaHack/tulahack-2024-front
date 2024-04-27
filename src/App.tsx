import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function App() {
  const theme = createTheme({});
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
