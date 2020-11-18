import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
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
import './assets/stylesheet.css'

function App() {
  const [isSignedIn, signIn] = useState(true);
  const history = useHistory();
  console.log(history)

  return (
    <Router>
      <div className="py-4" style={{width: "100%", height: "100vh"}}>
        <Container className="mx-auto d-flex flex-column" style={{maxWidth: "375px", height: "100%", border: "1px solid black"}}>
          {/* {isSignedIn ?
            <Row>
              <Container fluid className="border-bottom">
                <Header />
              </Container> 
            </Row> :
            ""
          } */}
          <Row className="h-100" style={{overflowY: "scroll"}}>
            <Container className="d-flex pt-3">
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
          </Row>
          {isSignedIn ?
            <Row>
              <Container fluid>
                <TabBar />
              </Container>
            </Row> :
            ""
          }
        </Container>
      </div>
    </Router>
  );
}

export default App;

