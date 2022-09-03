import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/auth" component={AuthApp} />
          <Route path="/" component={MarketingApp} />
        </Switch>
        <MarketingApp />
      </BrowserRouter>
    </StylesProvider>
  );
};
