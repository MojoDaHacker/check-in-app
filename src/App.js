import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Login from './screens/Login.js';
import Register from './screens/Register.js';
import Search from './screens/Search.js';
import Home from './screens/Home.js';
import Locations from './screens/Locations.js';
import Reserve from './screens/Reserve.js';
import CheckIn from './screens/CheckIn.js';
import Settings from './screens/Settings.js';
import Header from './components/Header.js';
import TabBar from './components/TabUI.js';

function App() {
  const [isSignedIn, signIn] = useState(true);


  return (
    <Router>
      <div className="py-4" style={{width: "100%", height: "100vh"}}>
        <div className="mx-auto" style={{maxWidth: "375px", height: "100%", border: "1px solid black", overflowY: "scroll"}}>
          {isSignedIn ?
            <Container fluid>
              <Header />
            </Container> :
            ""
          }
          <Container className="h-100 d-flex">
            {isSignedIn ?
              <Switch>
                <Route path="/settings">
                  <Settings />
                </Route>
                <Route path="/search">
                  <Search />
                </Route>
                <Route path="/reserve">
                  <Reserve />
                </Route>
                <Route path="/checkin">
                  <CheckIn />
                </Route>
                <Route path="/locations">
                  <Locations />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch> :
              <Switch>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
            }
          </Container>
          {isSignedIn ?
            <Container fluid>
              <TabBar />
            </Container> :
            ""
          }
        </div>
      </div>
    </Router>
  );
}

export default App;

