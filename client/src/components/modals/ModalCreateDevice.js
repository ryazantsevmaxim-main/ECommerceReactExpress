import {useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import useFetchTypes from "../../hooks/useFetchTypes";
import useFetchBrands from "../../hooks/useFetchBrands";
import {observer} from "mobx-react-lite";
import {createDeviceRequest} from "../../http/ShopAPI";
import useMobx from "../../hooks/useMobx";


const ModalCreateDevice = observer(({show, onHide}) => {
    const {shop} = useMobx();
    const [error, setError] = useState('');
    const [formValues, setFormValues] = useState({
        type: "",
        brand: "",
        name: "",
        price: "",
        img: null,
    });
    const [info, setInfo] = useState([]);

    useFetchTypes();
    useFetchBrands();

    const handleFormValues = (key, newValue) => {
        setFormValues(prevState => ({
            ...prevState,
            [key]: newValue
        }));
    };

    const handleAddInfo = () => {
        setInfo(prevState => [...prevState, {number: Date.now(), title: '', description: ''}]);
    };

    const handleDeleteInfo = (infoNumber) => {
        setInfo(prevState => prevState.filter(element => element.number !== infoNumber));
    };

    const handleChangeInfo = (infoNumber, key, newValue) => {
        setInfo(prevState => prevState.map(element => (element.number === infoNumber ? {
            ...element,
            [key]: newValue
        } : element)))
    };

    const handleCreateDevice = () => {
        const formData = new FormData();
        const {brand, type, name, price, img} = formValues;

        if (type && brand && name && price && img) {
            formData.append('brandId', brand.id);
            formData.append('typeId', type.id);
            formData.append('name', name);
            formData.append('price', `${price}`);
            formData.append('img', img);
            formData.append('info', JSON.stringify(info));

            createDeviceRequest(formData)
                .then(() => onHide())
                .catch(error => {
                    if (error?.response?.data?.message) {
                        alert(error.response.data.message);
                    } else {
                        alert(error.message);
                    }
                });
        } else {
            setError('Something is wrong...');
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="md"
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="d-flex">
                        <Dropdown>
                            <Dropdown.Toggle>{formValues.type?.name ? "Type: " + formValues.type?.name : "Type"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {shop.types?.map(type =>
                                    <Dropdown.Item
                                        onClick={() => handleFormValues("type", type)}
                                        key={type.id}
                                    >
                                        {type.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown className="ms-2">
                            <Dropdown.Toggle>{formValues.brand?.name ? "Brand: " + formValues.brand?.name : "Brand"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {shop.brands?.map(brand =>
                                    <Dropdown.Item
                                        onClick={() => handleFormValues("brand", brand)}
                                        key={brand.id}
                                    >
                                        {brand.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <Form.Control
                        className="mt-3"
                        placeholder="Name"
                        value={formValues.name}
                        onChange={(e) => handleFormValues('name', e.target.value)}
                    />

                    <Form.Control
                        className="mt-3"
                        placeholder="Price"
                        type="number"
                        value={formValues.price}
                        onChange={(e) => handleFormValues('price', e.target.value)}
                    />

                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={(e) => handleFormValues('img', e.target.files[0])}
                    />

                    <hr/>
                    <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={handleAddInfo}
                    >
                        Add feature
                    </Button>

                    {info?.map(element =>
                        <Row key={element.number} className="mt-2">
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Title"
                                    size="sm"
                                    value={element.title}
                                    onChange={(e) => handleChangeInfo(element.number, "title", e.target.value)}
                                />
                            </Col>

                            <Col md={4}>
                                <Form.Control
                                    placeholder="Description"
                                    size="sm"
                                    value={element.description}
                                    onChange={(e) => handleChangeInfo(element.number, "description", e.target.value)}
                                />
                            </Col>

                            <Col md={4}>
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={() => handleDeleteInfo(element.number)}
                                >
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    )}

                    {error &&
                        <div className="text-danger mt-3">{error}</div>
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="primary" onClick={handleCreateDevice}>Create</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default ModalCreateDevice;