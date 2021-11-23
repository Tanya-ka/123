import React from "react";
import { Route, Redirect } from "react-router-dom";
// import PrivaRoute from "./PrivaRoute";
import { Switch } from "react-router-dom";

import MySignUpPageContainer from "../pages/MySignUpPage/containers/SignUpPageContainer";
import LoginPageContainer from "../pages/LoginPage/containers/LoginPageContainer";
import PokemonPageContainer from "../pages/PokemonsPage/containers/PokemonPageContainer";
import PokemonDetailedPageContainer from "../pages/ProductAPage/containers/PokemonDetailsPageContainer";


import { ROUTES } from "./routeNames";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.MY_SIGN_UP} 
      component={MySignUpPageContainer} 
      />
       <Route exact path={ROUTES.LOGIN} 
      component={LoginPageContainer} 
      />
      <Route
        path={ROUTES.POKEMONS_PAGE}
        component={PokemonPageContainer}
      />
      <Route
        path={ROUTES.PRODUCT}
        component={PokemonDetailedPageContainer}
      />
      {/* <Route
        path={ROUTES.BASKET}
        component={BasketContainer}
      />
      <Route
        path={ROUTES.USER_ACCOUNT}
        component={UserAccountContainer}
      /> */}
      {/* <Redirect path="*" to={ROUTES.MY_SIGN_UP} /> */}
    </Switch>
  );
};

export default Routes;