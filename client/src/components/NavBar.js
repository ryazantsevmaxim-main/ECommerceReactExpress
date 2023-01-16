import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import useMobx from "../hooks/useMobx";
import {PATH_PROFILE, PATH_SHOP} from "../routes/paths";


const NavBar = observer(() => {
    const {profile} = useMobx();
    const navigate = useNavigate();


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink className="text-white" to={PATH_SHOP.root}>E-commerce</NavLink>

                <Nav className="ml-auto text-white">
                    {profile.isAuth ?
                        <>
                            <Button
                                className="me-2"
                                variant="outline-light"
                                onClick={() => navigate(PATH_PROFILE.cart)}
                            >
                                Cart
                            </Button>

                            <Button
                                variant="outline-light"
                                onClick={() => navigate(PATH_PROFILE.root)}
                            >
                                Profile
                            </Button>
                        </>
                        :
                        <>
                            <Button
                                variant="outline-light me-2"
                                onClick={() => navigate(PATH_PROFILE.login)}
                            >
                                Log in
                            </Button>
                            <Button
                                variant="outline-light me-2"
                                onClick={() => navigate(PATH_PROFILE.signin)}
                            >
                                Sign in
                            </Button>
                        </>
                    }

                </Nav>
            </Container>
        </Navbar>
    );
});

export default NavBar;