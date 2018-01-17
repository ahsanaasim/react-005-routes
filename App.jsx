import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
        <Router>
        <div>
          <Header />

          <hr/>

          <Route exact path="/home" component={Home}/>
          <Route exact path="/about" component={About}/>

        </div>
        </Router>
        );
    }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)


const Header = () => (
  <div>
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
  </div>
)

export default App;
