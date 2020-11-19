import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import {Container, Row} from 'react-bootstrap';
import Login from './screens/Login.js';
import Register from './screens/Register.js';
import Search from './screens/Search.js';
import Home from './screens/Home.js';
import Locations from './screens/Locations.js';
import Reserve from './screens/Reserve.js';
import CheckIn from './screens/CheckIn.js';
import Settings from './screens/Settings.js';
// import Header from './components/Header.js';
import TabBar from './components/TabUI.js';
import StoreContext from "./contexts/store.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const defaultUser = {
  user : "support",
  pwd : "support",
}


const initialUsers = [defaultUser];

function App() {
  const [isSignedIn, signIn] = useState(false);
  const [users, setUsers] = useState(initialUsers);

  const history = useHistory();
  console.log(history)

  const addUser = user => {
    setUsers([...users, user])
  }
  const delUser = (index) => {
    const copy = [...users];
    copy.splice(index, 1);
    setUsers(copy);
  }

  return (
    <Router>
      <StoreContext.Provider value={{users, addUser: addUser, delUser: delUser}}>
        <div className="py-4" style={{width: "100%", height: "100vh"}}>
          {/* <AppContext.Consumer> */}
            <Container className="mx-auto d-flex flex-column" style={{maxWidth: "375px", height: "100%", border: "1px solid black"}}>
          <Row className="h-100" style={{overflowY: "scroll"}}>
            <Container className="h-100 pt-3">
              {isSignedIn ?
                <Switch>
                  <Route path="/settings">
                    <Settings signIn={signIn}/>
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
                    <Register signIn={signIn} />
                  </Route>
                  <Route exact path="/">
                    <Login signIn={signIn}/>
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
          {/* </AppContext.Consumer> */}
        </div>
      </StoreContext.Provider>
    </Router>
  );
}

export default App;

