import React from 'react';
import { Link,component } from "react-router-dom";
import { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom';

import ProductAlerts from './ProductAlerts';

import {products} from './products';
import {Data} from './Data'

import './styles/ebook.css'
    


const EBOOK = ({ name, match }) => {
  const share = () => {
    window.alert('The product has been shared!');
  }

  const [color, setColor] = useState("red");
  const [image, setImage] = useState("/a1.webp");
  const [image1,setImage1] = useState("/m1.jpg")
  const onNotify = () => {
    window.alert('You will be notified when the product goes on sale');
  }

  const Ref = useRef(null);
  
  // The state for our timer
  const [timer, setTimer] = useState('00:00:00:00');


  const getTimeRemaining = (e) => {
      const total = Date.parse(e) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / 1000 / 60 / 60) % 24);
      const days = Math.floor((total /1000 /60 /60 )% 24);
    
      return {
          total,days, hours, minutes, seconds
      };
  }


  const startTimer = (e) => {
      let { total,days,  hours, minutes, seconds } 
                  = getTimeRemaining(e);
      if (total >= 0) {

          // update the timer
          // check if less than 10 then we need to 
          // add '0' at the beginning of the variable
          setTimer(
              ( (days > 0 ? days : '0' + days) + ':' +
                hours > 0 ? hours : '0' + hours) + ':' +
              (minutes > 0? minutes : '0' + minutes) + ':'
              + (seconds > 0 ? seconds : '0' + seconds)
          )
      }
  }


  const clearTimer = (e) => {

      // If you adjust it you should also need to
      // adjust the Endtime formula we are about
      // to code next    
      setTimer('00:01:00:00');

      // If you try to remove this line the 
      // updating of timer Variable will be
      // after 1000ms or 1sec
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
          startTimer(e);
      }, 1000)
      Ref.current = id;
  }

  const getDeadTime = () => {
      let deadline = new Date();

      // This is where you need to adjust if 
      // you entend to add more time
      deadline.setSeconds(deadline.getSeconds() +1200 );
      return deadline;
  }

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
      clearTimer(getDeadTime());
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
      clearTimer(getDeadTime());
  }

  return (
    <>

           <div className='header'>
               <p>''The top collection winter 2023 by <strong>Collection To Be Success</strong> ist the best women Clohes designed by our top qualified Clohtes designer''</p>
            </div>

    <div className="submit text-center shadow-lg bg-white mt-5">
 
   

  <div class="card-body">
    <h5 class="card-title"></h5>
       <p class="text3 text-align-center"> WINNTER SALE 2023 </p>
    <p class="text4">PLEASE SUBSCRIBE TO HAVE MORE SALES OFFERS</p>
    <div className='days ms-5' style={{fontSize:'35px',color:'red'}}> 25% SALE FOR 15 DAYS</div>
    
    <div className="App">
            <h2>{timer}</h2>
    </div>
    
    <a href="#" class="btn btn-info"><span style={{fontSize:'1.8em'}}>SUBMIT</span></a>
  </div> 
  
  
  
</div>


  
    
  








<div className="product-list shadow-lg" style={{marginTop:'10em'}}>
    

    {products.map((product, index) => {
      return (
        <div className="card">
          <h3>
            <Link to={`${match.url}products/${index}`} title={`${product.name} details`}> 
             
              <img className='image h-100' src={ product.img}></img>
            </Link>
            
          </h3>
          {product.description && <p style={{fontSize:'22px'}}>{`Description: ${product.description}`}</p>}
          <h3 className='price' style={{marginLeft:'5em'}}>{product.price}.00£</h3>
          <button onClick={share}>
            Share
          </button>
         
          <ProductAlerts product={product} notify={onNotify} />
        </div>
      )
    })}
  </div>



  <div className="product-list shadow-lg" style={{marginTop:'10em'}}>
    

    {Data.map((product, index) => {
      return (
        <div className="card">
          <h3>
            <Link to={`${match.url}products/${index}`} title={`${product.name} details`}> 
             
              <img className='image h-100' src={ product.img}></img>
            </Link>
            
          </h3>
          {product.description && <p style={{fontSize:'22px'}}>{`Description: ${product.description}`}</p>}
          <h3 className='price' style={{marginLeft:'5em'}}>{product.price}.00£</h3>
          <button onClick={share}>
            Share
          </button>
         
          <ProductAlerts product={product} notify={onNotify} />
          <a href='/DataDetail'>
                    <button type="button" class="btn btn-dark mt-4"style={{width:'7.2em',height:'3em',marginLeft:'20em'}}>
                 View Details
                 </button></a>
        </div>
      )
    })}
  </div>








    
    </>
    
    
  )
};

export default EBOOK;