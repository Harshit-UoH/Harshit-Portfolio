import React, {Suspense , lazy} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/style.css";
import Loader from "./images/loader.gif";

/* -------------- COMPONENTS --------------- */
import Navbar from "./components/Navbar";


/* ------------- PAGES -------------- */
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Resume = lazy(() => import('./pages/Resume'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const Admin = lazy(() => import('./pages/Admin'));
const Error = lazy(() => import('./pages/Error'));



function App() {
  return (
<>
        <Router>
          <Navbar />
          <Route render = {({location}) => (
            <Suspense fallback = {<div className = "loader"><img src = {Loader} alt = "loader" /></div>}>
                <Switch location = {location}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Resume" component={Resume} />
                    <Route exact path="/Portfolio" component={Portfolio} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route exact path="/Admin" component={Admin} />
                    <Route component={Error} />
                </Switch>
                </Suspense>
           ) }/>        
        </Router>
      </>
  );
}

export default App;
