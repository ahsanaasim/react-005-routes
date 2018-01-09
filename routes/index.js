import {React} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from '../Home';

export default () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
  </BrowserRouter>
)