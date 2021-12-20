import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from './components/Footer'
import Home from "./components/Home.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Footer>
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Footer>
    </BrowserRouter>
  );
}

export default App;
