import React, {useEffect} from 'react';
import {fetchBrands} from "../http/ShopAPI";
import UseMobx from "./useMobx";


const useFetchBrands = () => {
    const {shop} = UseMobx();

    useEffect(() => {
        fetchBrands().then(brandsData => shop.setBrands(brandsData));
    }, [])
};

export default useFetchBrands;