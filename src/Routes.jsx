import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Header from "./components/Header";
import Dashboard from "./containers/Dashboard/Dashboard";
function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
export default Routes;
