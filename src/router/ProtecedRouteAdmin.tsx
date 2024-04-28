import { Navigate } from "react-router-dom";
import {useRole} from "@/utils/hooks/useRole.ts";

type Props = {
    children: JSX.Element;
};

const ProtecedRoutesAdmin: React.FC<Props> = ({children}) => {
    const role = useRole()


    return role ? children : <Navigate to="/" replace={true}/>
}

export default ProtecedRoutesAdmin;