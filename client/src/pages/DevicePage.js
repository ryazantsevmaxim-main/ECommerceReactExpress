import {useEffect, useState} from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import star from "../assets/star-fill.svg";
import {fetchOneDevice} from "../http/ShopAPI";
import {useParams} from "react-router-dom";
import styled from "styled-components";


const InfoRow = styled(Row)(({index}) => ({
    background: (index % 2 === 0 ? 'lightgray' : 'transparent')
}));

const DevicePage = () => {
    const [device, setDevice] = useState({});

    useFetchOneDevice({setDevice});

    return (
        <>
            <Row>
                <Col md={4}>
                    <Image width="100%" src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>

                <Col md={4}>
                    <Row>
                        <h2>{device.name}</h2>

                        <div className="d-flex align-items-center">
                            <div>{device.rating}</div>

                            <Image src={star}/>
                        </div>

                    </Row>
                </Col>

                <Col md={2}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around p-3"
                    >
                        <h3>{device.price}$</h3>
                        <Button>Add to cart</Button>
                    </Card>
                </Col>
            </Row>
            {
                device.info?.length > 0 &&
                <Row className="justify-content-end mt-3">
                    <Col md={4}>
                        <h5>Features</h5>

                        <div className="px-3">
                            {device?.info?.map((info, index) =>
                                <InfoRow key={info.id} index={index}>
                                    {info.title}: {info.description}
                                </InfoRow>
                            )}
                        </div>
                    </Col>
                </Row>
            }
        </>
    );
};

const useFetchOneDevice = ({setDevice}) => {
    const {id} = useParams();

    useEffect(() => {
        fetchOneDevice({deviceId: id}).then(deviceData => setDevice(deviceData));
    }, []);
};

export default DevicePage;