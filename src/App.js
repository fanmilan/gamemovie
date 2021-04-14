import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {GamePage} from "./components/GamePage";

function App() {
  return (
      <Router>
        <Switch>
          <Route path={"/games/:game_id"}>
              <GamePage />
          </Route>
          <Route path="/">
              <HomePage />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
