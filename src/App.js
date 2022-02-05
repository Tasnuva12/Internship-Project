

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import './App.css';
import Home from '../src/ux/Home';
import About from '../src/ux/About';
import Test from '../src/ux/Test';


import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from "react-router-dom";
import Ticket from './ux/Ticket';
import FAQ from './ux/FAQ';
import Pricing from './ux/Pricing';
import OrderTrack from './ux/OrderTrack';
import merchant_register from './ux/merchant_register';
import account_statement from './ux/account_statement';
import orderHistory from './orderHistory';
import order_create from './order_create';



const routes = [
  {
    path: "/",
    name: "Home",
    view: Home
  },
  {
    path: "/about",      
    name: "About",
    view: About
  },
  {

    path: "/test",
    name: "Test",
    view: Test

  },
  {

    path: "/ticket",
    name: "Ticket",
    view: Ticket

  },
  {

    path: "/faq",
    name: "FAQ",
    view: FAQ

  },
  {

    path: "/pricing",
    name: "Pricing",
    view: Pricing

  },
  
  {

    path: "/OrderTrack",
    name: "Track Order",
    view: OrderTrack

  },
  {

    path: "/merchant_register",
    name: "Merchant Register",
    view: merchant_register

  },
  
  {

    path: "/orderHistory",
    name: "Order History",
    view: orderHistory

  },
  {

    path: "/order_create",
    name: "Order Create",
    view: order_create

  },
  {

    path: "/account_statement",
    name: "Account Statement",
    view: account_statement

  },
  
]

const buildNav = () => {
  return routes.map(r => (
    <li>
      <Link key={r.path} to={r.path}>{r.name}</Link>
    </li>
  ))
}

const mountNav = () => {
  return routes.map(r => (
    <Route exact path={r.path}>
      {r.view}
    </Route>
  ))
}

const App = () => (
  <div className="App">
    <Button type="primary">Click!</Button>
    <Router>
      <div>
        <nav>
          <ul>
            {buildNav()}
          </ul>
        </nav>
        <Switch>
          {mountNav()}
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
