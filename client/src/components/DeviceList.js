import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import useMobx from "../hooks/useMobx";


const DeviceList = observer(() => {
    const {shop} = useMobx();

    return (
        <Row className="d-flex mt-3">
            {shop.devices?.rows?.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </Row>
    );
});

export default DeviceList;