import "./App.css";
// import Footer from './Components/Footer';

// import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import About from './Components/About';
// import Calculator from './Components/Calculator';
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/"></Route>
      </Switch>

      {/* <Footer  /> */}
    </Router>
  );
}

export default App;
