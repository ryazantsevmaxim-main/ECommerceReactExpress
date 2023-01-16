import {Suspense} from 'react';
import {useRoutes} from 'react-router-dom';
import LoadingScreen from "../components/UI/LoadingScreen";
import {PATH_ADMIN, PATH_PROFILE, PATH_SHOP} from "./paths";
import AuthPage from "../pages/AuthPage";
import ProfilePage from "../pages/ProfilePage";
import AdminPage from "../pages/AdminPage";
import useMobx from "../hooks/useMobx";
import NotFoundPage from "../pages/NotFoundPage";
import ShopPage from "../pages/ShopPage";
import DevicePage from "../pages/DevicePage";
import CartPage from "../pages/CartPage";


const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<LoadingScreen/>}>
            <Component {...props} />
        </Suspense>
    );
};

const AppRouter = () => {
    const {profile: {isAuth, user}} = useMobx();

    return useRoutes([
        {
            path: PATH_PROFILE.root,
            children: [
                {path: PATH_PROFILE.login, element: <AuthPage/>},
                {path: PATH_PROFILE.signin, element: <AuthPage/>},
                (isAuth && {element: <ProfilePage/>, index: true}),
                (isAuth && {path: PATH_PROFILE.cart, element: <CartPage/>}),
            ],
        },
        (isAuth && user.role === "ADMIN" && {
            path: PATH_ADMIN.root,
            children: [
                {element: <AdminPage/>, index: true},
            ],
        }),
        {
            path: PATH_SHOP.root,
            children: [
                {element: <ShopPage/>, index: true},
                {path: '/device/:id', element: <DevicePage/>},
            ],
        },
        {path: '*', element: <NotFoundPage/>},
    ]);
}

export default AppRouter;