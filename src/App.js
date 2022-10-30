import React from "react";
import { Fragment } from "react";
import { Header } from "component/header";
import AppRoutes from "config/router";
import Footer from "component/footer";

function App(props) {
  return (
    <div className="App">
      <Fragment>
        <Header {...props} />
        <AppRoutes {...props} />
        <Footer {...props} />
      </Fragment>
    </div>
  );
}

export default App;
