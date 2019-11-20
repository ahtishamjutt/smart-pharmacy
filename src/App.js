import React from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import About from "./components/about";
import Header from "./components/subcomponents/header";
import Footer from "./components/subcomponents/footer";
import HomePage from "./components/home";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Packages from "./components/subcomponents/packages";
import Support from "./components/subcomponents/support";
import AddMedicine from "./components/subcomponents/addmedicine";
import DeleteMedicine from "./components/subcomponents/deletemedicine";
import UpdateMedicine from "./components/subcomponents/updatemedicine";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/homepage" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/packages" component={Packages} />
        <Route path="/contact" component={Contact} />
        <Route path="/support" component={Support} />
        <Route path="/deletmedicine" component={DeleteMedicine} />
        <Route path="/addmedicine" component={AddMedicine} />
        <Route path="/updatemedicine" component={UpdateMedicine} />
        <Redirect from="/" exact to="/homepage" />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
