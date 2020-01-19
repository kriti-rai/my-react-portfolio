import React from 'react';
import './styles/Home.css';
import './styles/BurgerMenu.css';
import './styles/Bio.css';
import './styles/Portfolio.css';
import './styles/Contact.css';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/home/Home';
import Bio from './components/bio/Bio';
import BurgerMenu from './components/menu/BurgerMenu';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  return (
    <div id="outer-container" className="App">
      <Router>
        <BurgerMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}/>
        <div id="page-wrap">
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/bio' component={ Bio } />
            <Route exact path='/portfolio' component={ Portfolio } />
            <Route exact path='/contact' component={ Contact } />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
