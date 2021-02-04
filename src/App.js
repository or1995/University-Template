import React from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import { BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Programs from './components/pages/Programs/Programs';
import Bachelor from './components/pages/Programs/Bachelor/Bachelor';
import Masters from './components/pages/Programs/Masters/Masters';
import Doctorate from './components/pages/Programs/Doctorate/Doctorate';
import HighMasters from './components/pages/High/Masters/Masters';
import HighDoctorate from './components/pages/High/Doctorate/Doctorate';
import HighContact from './components/pages/High/Contact/Contact';
import Head from './components/pages/Head/Head';
import Astro from './components/pages/Astro/Astro';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/programs/1" component={Bachelor}/>
          <Route exact path="/programs/2" component={Masters}/>
          <Route exact path="/programs/3" component={Doctorate}/>
          <Route exact path="/highed/masters" component={HighMasters}/>
          <Route exact path="/highed/doctorate" component={HighDoctorate}/>
          <Route exact path="/highed/contact" component={HighContact}/>
          <Route exact path="/head" component={Head}/>
          <Route exact path="/astro" component={Astro}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
