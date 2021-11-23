import SignUpForm from "../components/SignUpForm";
import useForm  from "../../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import { useCallback, useEffect, useLayoutEffect } from "react";
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "../actions";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../../routes/routeNames";
import { signUp } from "../api";

const SignUpPageContainer = () => {
    const dispatch = useDispatch();

    const history = useHistory();

    const { isReg } = useSelector((state) => state.auth);

    console.log(isReg)
    const [formData, handleChange, handleReset] = useForm({
        email: "",
        firstName: "",
        lastName: "",
        gender: "",
        password: "",
        phone: "",
    });

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        dispatch(SIGN_UP_REQUEST(formData))
    }, [formData]);

    useLayoutEffect(() => {
        if (isReg) {
            history.push(ROUTES.LOGIN)
        }
    }, [isReg]);

    return <SignUpForm formValue={formData} onChange={handleChange} onSubmit={handleSubmit} />;
};

export default SignUpPageContainer;