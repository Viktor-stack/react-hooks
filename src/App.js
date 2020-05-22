import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import {Route, Switch} from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Alert from "./components/Alert";
import AlertState from "./hooks/context/alert/alertState";
import GithubState from "./hooks/context/github/GithubState";

function App() {
  return (
    <>
      <GithubState>
        <AlertState>
          <NavBar/>
          <div className="container pt-4">
            <Alert alert={{text: 'Test Alert!!'}}/>
            <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/about'} component={About}/>
              <Route path={'/profile/:name'} component={Profile}/>
            </Switch>
          </div>
        </AlertState>
      </GithubState>
    </>
  );
}

export default App;
