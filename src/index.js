//import React
import React from "react";
import ReactDOM from "react-dom";

//import Styles
import "./styles/index.css";

//import React Router
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import Components
import Home from "./components/Pages/Home.jsx";
import Europe from "./components/Pages/europe.jsx";
import SouthAmerica from "./components/Pages/south_america.jsx";
import Asia from "./components/Pages/asia.jsx";
import AboutUs from "./components/Pages/AboutUs.jsx";
import ContactUs from './components/Pages/ContactUs.jsx';

import BaseLayout from "./components/Layouts/base-layout.jsx"

//import IDK
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/Asia" component={Asia} />
        <Route path="/SouthAmerica" component={SouthAmerica} />
        <Route path="/Europe" component={Europe} />
        <Route path="/" component={Home} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
