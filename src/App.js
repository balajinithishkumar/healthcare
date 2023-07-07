import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [user, setuser] = useState();
  useEffect(() => {
    var data = localStorage.getItem("data");
    setuser(data);
  }, []);

  return (
    <div className="App">
      <Router>
        {user ? (
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
