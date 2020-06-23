import React, { Fragment } from "react";
import Movies from "./Components/Movies";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Customers from "./Components/Customers";
import Rentals from "./Components/Rentals";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar";
import MoviesForm from "./Components/MoviesForm"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
      <Route path="/movies/:id" component={MoviesForm} />
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/login" component={Login} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
