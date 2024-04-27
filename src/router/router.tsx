import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main.tsx";
import Login from "../pages/login/login.tsx";

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
