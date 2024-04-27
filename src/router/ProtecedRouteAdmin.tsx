import { Navigate } from "react-router-dom";
import {useRole} from "@/utils/hooks/useRole.ts";

type Props = {
    children: JSX.Element;
};

const ProtecedRoutesAdmin: React.FC<Props> = ({children}) => {
    const isAdmin = useRole();

    return isAdmin === 1 ? children : <Navigate to="/" replace={true}/>
}

export default ProtecedRoutesAdmin;