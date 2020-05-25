import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Welcome from "./Components/pages/Welcome";
import Home from "./Components/pages/Home";
import MapVirus from "./Components/pages/MapVirus";
import Acitvities from "./Components/pages/Activities";
import "./App.css";

function App() {
  //fake auth
  const [isActive, setIsActive] = useState(true);
  return (
    <div className='App'>
      <Router>
        {isActive ? (
          <>
            <Switch>
              <Redirect from='/welcome' to='/' />
              <Route exact path={"/"} component={Home} />
              <Route path={"/map"} component={MapVirus} />
              <Route path={"/activities"} compoenent={Acitvities} />
            </Switch>
            <Navbar />
          </>
        ) : (
          <>
            <Redirect from={"/"} to={"/welcome"} />
            <Route
              path={"/welcome"}
              component={(props) => (
                <Welcome
                  {...props}
                  setIsActive={setIsActive}
                  isActive={isActive}
                />
              )}
            />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
