import LoginForm from "../components/LoginForm";
// import { useForm } from "../../../hooks/";
import  useForm  from "../../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import { useCallback, useEffect, useLayoutEffect } from "react";
import { LOG_IN_REQUEST } from "../actions";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../../routes/routeNames";
import isEmail from "validator/es/lib/isEmail";

const LoginPageContainer = () => {
    const dispatch = useDispatch();

    const history = useHistory();

    const { isAuth } = useSelector((state) => state.auth);

    const [formData, handleChange, handleReset] = useForm({
        email: "",
        password: "",
    });

    const isEmailValid = isEmail(formData.email);
    const isPasswordValid = formData.password.length > 0;
    const isFormValid = isEmailValid && isPasswordValid;

    const handleSubmit = useCallback(
        (event) => {
            if (isFormValid) {
                event.preventDefault();
                dispatch(LOG_IN_REQUEST(formData));
            }
    }, 
    [formData, isFormValid]
    );

    useLayoutEffect(() => {
        if (isAuth) {
            history.push(ROUTES.POKEMONS_PAGE)
        }
    }, [isAuth]);

    return (
    <LoginForm 
    isFormValid={isFormValid}
    formValue={formData} 
    onChange={handleChange} 
    onSubmit={handleSubmit} 
    />
    );
};

export default LoginPageContainer;