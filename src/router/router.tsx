import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login.tsx";
import Main from "../pages/Main.tsx";

const router = createBrowserRouter([
  {
    index: true,
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
