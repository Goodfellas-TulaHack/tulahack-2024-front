import { Navigate } from "react-router-dom";
import {useAuth} from "@/utils/hooks/useAuth.ts";

type Props = {
    children: JSX.Element;
};

const ProtecedRoutes: React.FC<Props> = ({children}) => {
    const isAuth = useAuth();

    return isAuth ? children : <Navigate to="/login" replace={true}/>
}

export default ProtecedRoutes;