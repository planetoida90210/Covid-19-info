import React, { Component } from "react";
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
import { fetchGlobalData } from "./api";
import "./App.css";

class App extends Component {
  state = {
    isActive: true,
    globalData: [],
  };
  async componentDidMount() {
    const globalData = await fetchGlobalData();
    this.setState({ globalData });
  }
  render() {
    const { globalData } = this.state;
    return (
      <div className='App'>
        <Router>
          {this.state.isActive ? (
            <>
              <Navbar />
              <Switch>
                <Redirect from='/welcome' to='/' />
                <Route exact path={"/"} component={Home} />
                <Route
                  path={"/map"}
                  render={(props) => (
                    <MapVirus {...props} globalData={globalData} />
                  )}
                />
                <Route path={"/activities"} component={Acitvities} />
              </Switch>
            </>
          ) : (
            <>
              <Redirect from={"/"} to={"/welcome"} />
              <Route path={"/welcome"} component={Welcome} />
            </>
          )}
        </Router>
      </div>
    );
  }
}

export default App;
