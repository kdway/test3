import React from 'react';
import { useState, useRef, useEffect } from 'react';
import {products} from './products';
import './styles/productD.css'

const currency = number => {
  return number.toLocaleString("en", {style: "currency", currency: "USD", minimumFractionDigits: 2});
}

const ProductDetails = ({name, match }) => {
  const { params: { productId }} = match;
  const product = products[productId];

  const [color, setColor] = useState("red");
 
  const [image1,setImage1] = useState("/m2.jpg");

  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  useEffect(() => {
      setCalculation(() => count *(product.Reprice));
    }, [count]); // <- add the count variable here

  return (
    <>


   
<div className='container shadow-lg'>
  <div className='row'>
    <div className='col-lg-6'>
    <img className='image w-75 h-100 me-1'src={product.img} alt='product' />

    </div>
    <div className='col-lg-6'>
         <p className='name' style={{fontSize:'2.2em',marginTop:'1.5em', marginLeft:'1.8em'}}>{ product.name }</p>
         <strike><h4 style={{fontSize:'2.2em',marginTop:'1.5em', marginLeft:'4.8em'}}>{ currency(product.price) }</h4></strike>
         <h4 style={{fontSize:'2.2em',marginTop:'-1.5em', marginLeft:'8.8em'}}>{ currency(product.Reprice) }</h4>

         <h4 className='color' style={{fontSize:'25px',marginLeft:'7em'}}>Quantity:</h4>
                 <p className='disp-count' style={{fontSize:'25px',marginLeft:'7em'}}><strong>Count</strong>: {count}</p>
                 <div className='count w-25 rounded ' style={{marginLeft:'22em',display:'flex', marginTop:'-4.8em'}}>
                 <button onClick={() => setCount((c) => c + 1)}>+</button>
                 <button onClick={() => setCount((c) => c - 1)}>-</button>
             
            
                
               

                 </div>
                 <div className='price mt-2 ms-5'>
                <p className='somme me-5'style={{fontSize:'35px',marginLeft:'-8.8'}} >La somme est: <span style={{fontSize:'40px',color:'blue',marginLeft:'1em'}}>{calculation}€</span></p>
                </div>


         <h4 className='disp-colors ms-5'><strong>Disponsible Colors :</strong></h4>
<button type="button" className='blue bg-gradient-info ms-5 m-1 mt-5 rounded'style={{width:'5em',height:'2.8em'}}   onClick={() => setImage1("./m2.jpg")}></button>

<button type="button" className='blue bg-secondary ms-5 m-1 mt-5 rounded' style={{width:'5em',height:'2.8em'}}  onClick={() => setImage1("./m3.jpeg")}></button>


<button type="button" className='blue bg-pink m-1 ms-5 mt-5 rounded' style={{width:'5em',height:'2.8em'}}  onClick={() => setImage1("./m4.jpg")}></button>

<button type="button" className='blue bg-dark ms-5  m-1 mt-5 rounded'style={{width:'5em',height:'2.8em'}}   onClick={() => setImage1("./m5.jpg")}></button>

         <h4 className='color mt-3 mb-2' style={{fontSize:'25px',marginLeft:'2em'}}><strong>Disponsible Size:</strong></h4>
                 <select class="form-select w-25"style={{marginLeft:'17em',marginTop:'-1.8em'}} id="validationCustom04" required>
                         <option selected disabled value="">Choose Size</option>
                         <option>Small</option>
                         <option>Large</option>
                        <option>Xlarge</option>
                        <option>xxlarge</option>
                 </select>
          
        
       

    </div>

  </div>

</div>
    
    
    </>

     
    
     
    
       
      
 
    
  )
};

export default ProductDetails;