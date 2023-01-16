import useMobx from "../hooks/useMobx";
import {useEffect, useState} from "react";
import {checkAuthRequest} from "../http/ProfileAPI";
import LoadingScreen from "./UI/LoadingScreen";
import {observer} from "mobx-react-lite";


const CheckAuth = observer(({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const {profile} = useMobx();

    useEffect(() => {
        checkAuthRequest()
            .then(userData => {
                profile.setUser(userData);
                profile.setIsAuth(true);
            })
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <LoadingScreen/>
    }

    return children;
});

export default CheckAuth;