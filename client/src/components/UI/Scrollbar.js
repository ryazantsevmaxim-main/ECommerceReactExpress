import styled from "styled-components";
import SimpleBarReact from 'simplebar-react';


const RootStyle = styled.div(() => ({
    flexGrow: 1,
    height: '100%',
    overflow: 'hidden',
}));

const SimpleBarStyle = styled(SimpleBarReact)(() => ({
    maxHeight: '100%',
    '& .simplebar-scrollbar': {
        '&:before': {
            backgroundColor: 'grey',
        },
        '&.simplebar-visible:before': {
            opacity: 1,
        },
    },
    '& .simplebar-track.simplebar-vertical': {
        width: 10,
    },
    '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
        height: 6,
    },
    '& .simplebar-mask': {
        zIndex: 'inherit',
    },
}));

const Scrollbar = ({children, ...other}) => {
    return (
        <RootStyle>
            <SimpleBarStyle timeout={500} clickOnTrack={false} {...other}>
                {children}
            </SimpleBarStyle>
        </RootStyle>
    );
};

export default Scrollbar;