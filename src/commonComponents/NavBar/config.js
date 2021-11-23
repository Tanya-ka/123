import {ROUTES} from "../../routes/routeNames";

export const NAV_TYPE_NAMES ={
    PUBLIC: 'public',
    PRIVATE: 'private'
}

export const NAV_CONFIG = {
   [ NAV_TYPE_NAMES.PUBLIC]: [
        {
            label: 'SignUp',
            path: ROUTES.MY_SIGN_UP
        },
        {
            label: 'Login',
            path: ROUTES.LOGIN
        }
    ],
    [NAV_TYPE_NAMES.PRIVATE]: [
        {
            label: 'Pokemons',
            path: ROUTES.POKEMONS_PAGE
        },
        {
            label: 'product',
            path: ROUTES.PRODUCT_A
        },
        {
            label: 'Basket',
            path: ROUTES.BASKET
        },
        {
            label: 'User-account',
            path: ROUTES.USER_ACCOUNT
        }
    ]
}