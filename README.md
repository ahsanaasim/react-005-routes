# React Webpack Setup


#### Install Router-dom
npm install react-router-dom --save-dev

#### Creating Router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

<Router>
<div>
  <Header />

  <hr/>

  <Route exact path="/home" component={Home}/>

</div>
</Router>

#### Creating Components
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

#### Creating Links
const Header = () => (
  <div>
    <ul>
      <li><Link to="/home">Home</Link></li>
    </ul>
  </div>
)
