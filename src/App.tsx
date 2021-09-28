import '../src/App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import HomeScreen from './screens/homeScreen';
import ProfileScreen from './screens/components/profile';

function App() {
  return (
    <div className="base-flex App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <HomeScreen />} />
          <Route path="/add-data" exact component={() => <ProfileScreen />} />s
        </Switch>
      </Router>

    </div>
  );
}

export default App;
