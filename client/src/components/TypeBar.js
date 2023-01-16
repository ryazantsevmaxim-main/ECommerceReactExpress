import {observer} from "mobx-react-lite";
import {Button, ListGroup} from "react-bootstrap";
import useMobx from "../hooks/useMobx";
import styled from "styled-components";


const TypeListItem = styled(ListGroup.Item)(() => ({
    cursor: "pointer",
}));

const TypeBar = observer(() => {
    const {shop} = useMobx();

    const handleReset = () => {
        shop.setSelectedTypeId(null);
        shop.setSelectedBrandId(null);
    }

    return (
        <>
            <ListGroup>
                {shop.types.map(type =>
                    <TypeListItem
                        active={type.id === shop.selectedTypeId}
                        onClick={() => shop.setSelectedTypeId(type.id)}
                        key={type.id}
                    >
                        {type.name}
                    </TypeListItem>
                )}
            </ListGroup>

            {(shop.selectedTypeId || shop.selectedBrandId) &&
                <Button
                    variant="outline-secondary"
                    onClick={handleReset}
                    className="mt-3"
                >
                    Reset
                </Button>}
        </>
    );
});

export default TypeBar;