import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Keno from './Keno';
import Header from './Header';
import Pick from './Pick';
import Match from './Match';
import Hit from './Hit';
import './styles/App.scss';
import HowToPlay from './HowToPlay';

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/pick3" component={Pick} />
        <Route path="/match4" component={Match} />
        <Route path="/hit5" component={Hit} />
        <Route path="/keno" component={Keno} />
        <Route path="/custom" component={HowToPlay} />
      </div>
    </Router>
  )
}

export default App
