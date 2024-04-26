import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main.tsx";

const router = createBrowserRouter([
  {
    index: true,
    element: <Main />,
  },
]);

export default router;
