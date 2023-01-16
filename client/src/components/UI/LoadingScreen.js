import {Spinner} from "react-bootstrap";


const LoadingScreen = () => {
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <Spinner animation="border"/>
        </div>
    );
};

export default LoadingScreen;