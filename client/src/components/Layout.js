import NavBar from "./NavBar";
import {HEIGHT_NAVBAR} from "../utils/config";
import {Container} from "react-bootstrap";
import Scrollbar from "./UI/Scrollbar";
import styled from "styled-components";


const MainWrapper = styled.div(() => ({
    height: window.innerHeight - HEIGHT_NAVBAR,
}));

const ContainerWrapper = styled.div(() => ({
    height: window.innerHeight - HEIGHT_NAVBAR,
    paddingTop: "1rem",
    paddingBottom: "1rem",
}));

const Layout = ({children}) => {
    return (
        <>
            <NavBar/>

            <MainWrapper>
                <Scrollbar>
                    <Container>
                        <ContainerWrapper>
                            {children}
                        </ContainerWrapper>
                    </Container>
                </Scrollbar>
            </MainWrapper>
        </>
    );
};

export default Layout;