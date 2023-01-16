import {createContext} from "react";
import ProfileStore from "./ProfileStore";
import ShopStore from "./ShopStore";


const store = {
    profile: new ProfileStore(),
    shop: new ShopStore(),
};

const MobxContext = createContext(null);


const MobxProvider = ({children}) => {
    return (
        <MobxContext.Provider value={store}>
            {children}
        </MobxContext.Provider>
    );
};

export {MobxProvider, MobxContext};