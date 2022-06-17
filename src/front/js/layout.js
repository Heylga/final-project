import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Login } from "./component/login.js";
import { Signup } from "./component/signup.js";
import injectContext from "./store/appContext";
import { Offerbook } from "./pages/Offerbook";
import { AllBooks } from "./pages/allbooks.js";
import { BookDescription } from "./pages/book-description";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/offerbook">
              <Offerbook />
            </Route>
            <Route exact path="/allbooks">
              <AllBooks />
            </Route>
            <Route exact path="/book/:id">
              <BookDescription />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
