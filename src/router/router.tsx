import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login.tsx";
import Main from "../pages/main/Main.tsx";
import RestrauntEdit from "@/pages/restraunt-edit/restraunt.edit.tsx";
import Detail from "@/pages/detail/Detail.tsx";

const router = createBrowserRouter([
  {
    index: true,
    element: <Main />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/restraunt-edit",
    element: <RestrauntEdit />,
  },
]);

export default router;
