import {useEffect} from 'react';
import {Col, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {fetchDevices} from "../http/ShopAPI";
import useFetchTypes from "../hooks/useFetchTypes";
import useFetchBrands from "../hooks/useFetchBrands";
import useMobx from "../hooks/useMobx";
import {LIMIT_DEVICES} from "../utils/config";
import Pagination from "../components/Pagination";


const ShopPage = observer(() => {
    useFetchTypes();
    useFetchBrands();
    useFetchDevices();

    return (
        <Row className="h-100">
            <Col md={3}>
                <TypeBar/>
            </Col>

            <Col md={9}>
                <div className="d-flex justify-content-between flex-column h-100">
                    <div>
                        <BrandBar/>

                        <DeviceList/>
                    </div>

                    <Pagination/>
                </div>
            </Col>
        </Row>
    );
});

const useFetchDevices = () => {
    const {shop} = useMobx();
    const {selectedTypeId, selectedBrandId, selectedPage} = shop;

    useEffect(() => {
        fetchDevices({
            typeId: selectedTypeId,
            brandId: selectedBrandId,
            page: selectedPage,
            limit: LIMIT_DEVICES
        })
            .then(devicesData => shop.setDevices(devicesData));
    }, [selectedTypeId, selectedBrandId, selectedPage]);
};

export default ShopPage;