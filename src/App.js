import React from 'react';

import './App.css';
import Login from './component/login';
import Register from './component/register';
import ProductList from './component/productList';
import Cart from './component/cart';
import Order from './component/orders';
import Logout from './component/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
const routs = (
  < BrowserRouter >
     <Container fluid>
 
     <Row>    
    <Col ><Link to="/login">Login</Link></Col>
    <Col ><Link to="/register">Register</Link></Col>
    
    <Col ><Link to="/Products">Product List</Link></Col>
    <Col ><Link to="/cart">Cart</Link></Col>
    <Col ><Link to="/Orders">Order</Link></Col>
    <Col ><Link to="/logout">Logout</Link></Col>
  </Row>
        
        {/* <ul>
           <li>
              <Link to="/">Home</Link>
           </li>
           <li>
              <Link to="/aboutus">About us</Link>
           </li>         
        </ul> */}
        <Switch>
           <Route exact path="/" component={Login} />
           <Route path="/login" component={Login} />
           <Route path="/register" component={Register} />
           <Route path="/cart" component={Cart} />
           <Route path="/Products" component={ProductList} />
           <Route path="/Orders" component={Order} />
           <Route path="/logout" component={Logout} />
           
        </Switch>
    
     </Container>
  </ BrowserRouter >
);

function App() {
  const data="variable passing";
  const obj={"text":"Object text message","id":4};
  return (    
      
    <div className="App">
      <header className="App-header">              
        {routs}
        {/* <Car varpass={data}  simplestring="String passed" objpass={obj}/>            */}
      </header>
    </div>
  );

}

export default App;
