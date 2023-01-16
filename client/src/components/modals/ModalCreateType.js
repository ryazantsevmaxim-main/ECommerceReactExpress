import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createTypeRequest} from "../../http/ShopAPI";


const ModalCreateType = ({show, onHide}) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue) {
            createTypeRequest({name: inputValue})
                .then(() => {
                    setInputValue('');
                    onHide();
                })
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
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="md"
            centered
        >
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create Type
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        placeholder="Type name"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />

                    {error &&
                        <div className="text-danger mt-3">{error}</div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={onHide}>Close</Button>
                    <Button variant="outline-primary" type="submit">Add</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default ModalCreateType;