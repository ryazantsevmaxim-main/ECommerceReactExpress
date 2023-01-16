import {Card, Col, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import LoginForm from "../components/LoginForm";
import SigninForm from "../components/SigninForm";
import {PATH_PROFILE} from "../routes/paths";


const AuthPage = () => {
    const location = useLocation();
    const isLogin = location.pathname === PATH_PROFILE.login;

    return (
        <Row className="d-flex h-100 w-100 justify-content-center align-items-center">
            <Col lg={6} md={10}>
                <Card className="p-5">
                    {isLogin ?
                        <>
                            <h2 className="m-auto">Log in</h2>
                            <LoginForm/>
                        </> : <>
                            <h2 className="m-auto">Sign in</h2>
                            <SigninForm/>
                        </>
                    }
                </Card>
            </Col>
        </Row>
    );
};

export default AuthPage;