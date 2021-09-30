import '../src/App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import HomeScreen from './screens/homeScreen';
import ProfileScreen from './screens/profile';
import WatchScreen from './screens/watchScreen';
import LoginScreen from './screens/loginScreen';
import { LoggedIn } from './screens/features/localState';

function App() {
  return (
    <div className="base-flex App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <HomeScreen mediaPage={'home'} />} />
          <Route path="/movies" exact component={() => <HomeScreen mediaPage={'Movie'} />} />
          <Route path="/shows" exact component={() => <HomeScreen mediaPage={'Show'} />} />
          <Route path="/watch" exact component={() => <WatchScreen />} />
          <Route path="/login" exact component={() => <LoginScreen />} />
          <Route path="/profile" exact component={() => LoggedIn() ? <ProfileScreen /> : <LoginScreen />} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
