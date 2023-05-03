import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { ASL } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";


export const useAuthStore = () => {

    const { type, status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispatch(onChecking());
        console.log({ email, password });

        try {
            const { data } = await ASL.post('/auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            console.log(data);
            dispatch(onLogin({ name: data.name, uid: data.uid, type: data.typeU}));

        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    // startRegister
    const startRegister = async ({ email, password, name, typeU }) => {
        dispatch(onChecking());
        console.log({ email, password });

        try {
            const { data } = await ASL.post('/auth/new', { email, password, name, typeU});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            console.log(data);
            dispatch(onLogin({ name: data.name, uid: data.uid}));

        } catch (error) {
            dispatch(onLogout(error.response.data?.msg || 'El usuario ya existe'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token')

        if (!token) return dispatch(onLogout());

        try {
            const { data } = await ASL.get('auth/renew')
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            console.log(data)
            dispatch(onLogin({ name: data.name, uid: data.uid, type: data.typeU}));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }

    return {
        //* Propiedades
        errorMessage,
        status,
        user,
        type,

        //*Metodos
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
    }
}