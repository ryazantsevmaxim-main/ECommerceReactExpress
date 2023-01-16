import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star-fill.svg'
import {useNavigate} from "react-router-dom";
import {PATH_SHOP} from "../routes/paths";
import styled from "styled-components";


const DeviceCard = styled(Card)(() => ({
    cursor: "pointer",
}));

const DeviceItem = ({device}) => {
    const navigate = useNavigate();

    return (
        <Col md={3} className="mt-2">
            <DeviceCard
                className="p-2"
                border="light"
                onClick={() => navigate(PATH_SHOP.device(device.id))}
            >
                <Image src={process.env.REACT_APP_API_URL + device.img}/>

                <div className="d-flex justify-content-between mt-2">
                    <div className="text-black-50">
                        {device.name}
                    </div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image src={star}/>
                    </div>
                </div>

                <div>{device.name}</div>
            </DeviceCard>
        </Col>
    );
};

export default DeviceItem;