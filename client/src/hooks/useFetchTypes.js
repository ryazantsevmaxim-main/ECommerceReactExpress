import {useEffect} from 'react';
import {fetchTypes} from "../http/ShopAPI";
import UseMobx from "./useMobx";


const useFetchTypes = () => {
    const {shop} = UseMobx();

    useEffect(() => {
        fetchTypes().then(typesData => shop.setTypes(typesData));
    }, [])
};

export default useFetchTypes;