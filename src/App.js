import React from "react";

import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history'
import routes from "./routes";

import './global.scss';

export const history = createBrowserHistory()

history.listen(() => {
    window.scrollTo(0, 0)
});


function App() {
    return (
        <Router history={history}>
            {routes()}
        </Router>
    );
}

export default App;
