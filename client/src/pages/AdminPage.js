import {useState} from 'react';
import {Button, Card, Container} from "react-bootstrap";
import ModalCreateDevice from "../components/modals/ModalCreateDevice";
import ModalCreateBrand from "../components/modals/ModalCreateBrand";
import ModalCreateType from "../components/modals/ModalCreateType";


const AdminPage = () => {
    const [modals, setModals] = useState({
        device: false, brand: false, type: false
    });

    const handleModal = (modal, newValue) => {
        setModals(prevState => ({
            ...prevState,
            [modal]: newValue
        }))
    }

    return (<Container>
        <div className="d-flex justify-content-center">
            <Card className="p-3">
                <h2 className="text-center">Add</h2>

                <div className="d-flex flex-row mt-3">
                    <Button
                        variant="outline-dark"
                        onClick={() => handleModal("device", true)}
                    >
                        device
                    </Button>

                    <Button
                        className="ms-2"
                        variant="outline-dark"
                        onClick={() => handleModal("brand", true)}
                    >
                        brand
                    </Button>

                    <Button
                        className="ms-2"
                        variant="outline-dark"
                        onClick={() => handleModal("type", true)}
                    >
                        type
                    </Button>

                    {modals.device &&
                        <ModalCreateDevice show={modals.device} onHide={() => handleModal("device", false)}/>
                    }

                    {modals.brand &&
                        <ModalCreateBrand show={modals.brand} onHide={() => handleModal("brand", false)}/>
                    }

                    {modals.type &&
                        <ModalCreateType show={modals.type} onHide={() => handleModal("type", false)}/>
                    }

                </div>
            </Card>
        </div>
    </Container>);
};

export default AdminPage;