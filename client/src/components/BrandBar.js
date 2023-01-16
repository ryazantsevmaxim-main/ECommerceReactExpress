import {observer} from "mobx-react-lite";
import {Card} from "react-bootstrap";
import useMobx from "../hooks/useMobx";
import styled from "styled-components";


const BrandCard = styled(Card)(() => ({
    cursor: "pointer",
}));

const BrandBar = observer(() => {
    const {shop} = useMobx();

    return (
        <div className="d-flex">
            {shop.brands.map(brand =>
                <BrandCard
                    key={brand.id}
                    className="p-3 ms-2"
                    onClick={() => shop.setSelectedBrandId(brand.id)}
                    border={brand.id === shop.selectedBrandId ? 'primary' : 'dark'}
                >
                    {brand.name}
                </BrandCard>
            )}
        </div>
    );
});

export default BrandBar;