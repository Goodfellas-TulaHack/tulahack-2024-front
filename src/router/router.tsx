import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login.tsx";
import Main from "../pages/main/Main.tsx";
import Detail from "@/pages/detail/Detail.tsx";
import ProtecedRoutesAdmin from "@/router/ProtecedRouteAdmin.tsx";
import {lazy, Suspense} from "react";
import LoadingPage from "@/components/loadingPage.tsx";

const RestrauntEdit = lazy(() => import("@/pages/restraunt-edit/restraunt.edit.tsx"))


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
    element: <Suspense fallback={<LoadingPage/>}><ProtecedRoutesAdmin><RestrauntEdit /></ProtecedRoutesAdmin></Suspense>,
  },
]);

export default router;
