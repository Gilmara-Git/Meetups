import { Route, Switch } from "react-router-dom";
import MainNavigation from "./components/Layout/MainNavigation";
import AllMeetups from "./pages/AllMeetups";
import NewMeetUps from "./pages/NewMeetups";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetups">
          <NewMeetUps />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
