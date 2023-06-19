import "~/config/reactotron";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "~/pages/Dashboard";
import ImportFile from "~/pages/ImportFile";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/import" component={ImportFile} />
      </Switch>
    </Router>
  );
}
