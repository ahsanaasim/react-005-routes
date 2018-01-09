import React from 'react';
import {render} from 'react-dom';
// import {Router, Route, Switch} from 'react-router';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>

                        <hr/>

                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default App;
