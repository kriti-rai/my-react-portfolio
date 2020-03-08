import React from 'react';
import './App.css';
import './styles/Home.css';
import './styles/BurgerMenu.css';
import './styles/Bio.css';
import './styles/Life.css';
import './styles/Portfolio.css';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/home/Home';
import Bio from './components/bio/Bio';
import BurgerMenu from './components/menu/BurgerMenu';
import Portfolio from './components/portfolio/Portfolio';
import Life from './components/life/Life';

function App() {
  return (
    <div id="outer-container" className="App">
      <Router>
        <BurgerMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}/>
        <div id="page-wrap">
          <Switch>
            <Route exact path='/kritirai' component={ Home } />
            <Route exact path='/bio' component={ Bio } />
            <Route exact path='/portfolio' component={ Portfolio } />
            <Route exact path='/life' component={ Life } />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
