import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Rank from "./components/Rank";
import Name from "./components/Name";
import Points from "./components/Points";
import Age from "./components/Age";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact></Route>
        <Route path="/rank" component={Rank}></Route>
        <Route path="/name" component={Name}></Route>
        <Route path="/points" component={Points}></Route>
        <Route path="/age" component={Age}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
