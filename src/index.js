//import React
import React from "react";
import ReactDOM from "react-dom";

//import Styles
import "./styles/index.css";

//import React Router
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import Components
import App from "./components/App.jsx";
import PageOne from "./components/page_one.jsx"
import PageTwo from "./components/page_two.jsx"
import BaseLayout from "./components/base-layout.jsx"

//import IDK
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/page_two" component={PageTwo} />
        <Route path="/page_one" component={PageOne} />
        <Route path="/" component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
  document.getElementById("root")
);

registerServiceWorker();
