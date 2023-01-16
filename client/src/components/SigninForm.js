import {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {signinRequest} from "../http/ProfileAPI";
import {observer} from "mobx-react-lite";
import useMobx from "../hooks/useMobx";
import {PATH_PROFILE, PATH_SHOP} from "../routes/paths";


const SigninForm = observer(() => {
    const navigate = useNavigate();
    const {profile} = useMobx();
    const [error, setError] = useState('');
    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
        confirmedPassword: ''
    });

    const handleInputValues = (nameInput, newValue) => {
        setInputValues(prevState => ({
            ...prevState,
            [nameInput]: newValue
        }))
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password, confirmedPassword} = inputValues;

        if (email && password && confirmedPassword && password === confirmedPassword) {
            try {
                const userData = await signinRequest(email, password);

                profile.setIsAuth(true);
                profile.setUser(userData);

                navigate(PATH_SHOP.root);
            } catch (error) {
                if (error?.response?.data?.message) {
                    alert(error.response.data.message);
                } else {
                    alert(error.message);
                }
            }
        } else {
            setError('Something is wrong...');
        }
    };

    return (
        <Form className="d-flex flex-column" onSubmit={handleSubmit}>
            <Form.Control
                className="mt-3"
                placeholder="Email"
                value={inputValues.email}
                onChange={(e) => handleInputValues('email', e.target.value)}
                type="email"
            />

            <Form.Control
                className="mt-3"
                placeholder="Password"
                value={inputValues.password}
                onChange={(e) => handleInputValues('password', e.target.value)}
                type="password"
            />

            <Form.Control
                className="mt-3"
                placeholder="Confirm Password"
                value={inputValues.confirmedPassword}
                onChange={(e) => handleInputValues('confirmedPassword', e.target.value)}
                type="password"
            />

            {error &&
                <div className="text-danger mt-3">{error}</div>
            }

            <div className="d-flex justify-content-between flex-row mt-3">
                <div>
                    <NavLink to={PATH_PROFILE.login}>Log in</NavLink>
                </div>

                <Button
                    variant="outline-primary"
                    type="submit"
                >
                    Sign in
                </Button>
            </div>
        </Form>
    );
});

export default SigninForm;