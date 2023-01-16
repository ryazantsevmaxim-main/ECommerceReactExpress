import {Pagination as BootstrapPagination} from 'react-bootstrap';
import useMobx from "../hooks/useMobx";
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {LIMIT_DEVICES} from "../utils/config";


const Pagination = observer(() => {
    const {shop} = useMobx();
    const [pages, setPages] = useState([]);

    useCountPage(setPages, shop.devices.count)

    return (
        <BootstrapPagination className="mt-3">
            {pages?.map(page =>
                <BootstrapPagination.Item
                    key={page}
                    active={shop.selectedPage === page}
                    onClick={() => shop.setSelectedPage(page)}
                >
                    {page}
                </BootstrapPagination.Item>
            )}
        </BootstrapPagination>
    );
});

const useCountPage = (setPage, countDevice) => {
    useEffect(() => {
        const pageCount = Math.ceil(countDevice / LIMIT_DEVICES);
        const pages = [];

        for (let i = 0; i < pageCount; i++) {
            pages.push(i + 1);
        }

        setPage(pages);
    }, [countDevice])
};

export default Pagination;