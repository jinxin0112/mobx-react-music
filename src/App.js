import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Index from './page';
import RouteElement from './router';
class App extends Component {
    state = {}
    render() {
        return (
            <Router>
                <Index>
                    <RouteElement />
                </Index>
            </Router>
        );
    }
}
export default App;