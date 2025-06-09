import { useEffect } from "react";
import {useLocation, useNavigate} from "react-router-dom";

export const CheckIdProvider = ({
    children
} : {
    children: any
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const application_number = 1;
  
        if (!application_number ) navigate('/')

        // if (application_number && location.pathname === '/') {
        //     navigate('/1')
        // }

    }, [navigate, location.pathname]);

    return children;
};
