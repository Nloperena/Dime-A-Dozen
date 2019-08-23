import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './Assets/App';
import Host from './Assets/Host';
import Join from './Assets/Join'
import Player from './Assets/Player';
import Game from './Assets/Game';
import Remote from './Assets/Remote';
import * as serviceWorker from './serviceWorker';
import Hostpage from "../src/Assets/components/Hostpage";

import Playerinfo from "./Assets/components/Playerinfo";


const routing = (
    <Router>
        <Link to=""></Link>
        <div>
            <Route exact path="/" component={App}/>
            {/* <Route path="/Join" component={Join}/> */}
            <Route exact path="/room/:roomId/:userId?" component={Hostpage}/>
            <Route path="/room/:roomId/player/:playerId" component={Playerinfo}/>
            {/* <Route path="/Room/:roomId/Game" component={Game}/> */}
            {/* <Route path="/Room/:roomId/Game/:playerId" component={Remote}/> */}
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
