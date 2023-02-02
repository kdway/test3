import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import TopBar from './BOOKS/TopBar';
import EBOOK from './BOOKS/EBOOK';
import Contact from './BOOKS/Contact';
import ProductDetails from './BOOKS/ProductDetails';


import BuyProduct from './BOOKS/BuyProduct';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Router>
        <TopBar />

          <Route path="/Contact" component={Contact} />
          <Route path="/BuyProduct" component={BuyProduct} />
         

          <div className='container'>
          <Route exact path="/" component={EBOOK} />
          <Route path="/products/:productId" component={ProductDetails} />
          <Route path="/Data/:productId" component={DataDetail} />
     

          </div>
     
        
      
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));