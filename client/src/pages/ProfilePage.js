import {PATH_ADMIN, PATH_SHOP} from "../routes/paths";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import useMobx from "../hooks/useMobx";
import {observer} from "mobx-react-lite";


const ProfilePage = observer(() => {
    const {profile} = useMobx();
    const navigate = useNavigate();

    const logout = () => {
        profile.setUser({});
        profile.setIsAuth(false);
        localStorage.removeItem('token');
        navigate(PATH_SHOP.root);
    };

    return (
        <div>
            <h2 className="mb-3">{profile?.user.email}</h2>

            {profile?.user.role === "ADMIN" &&
                <Button
                    variant="outline-primary me-2"
                    onClick={() => navigate(PATH_ADMIN.root)}
                >
                    Admin
                </Button>
            }

            <Button
                variant="outline-danger"
                onClick={logout}
            >
                Log out
            </Button>
        </div>
    );
});

export default ProfilePage;