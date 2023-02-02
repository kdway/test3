import React from 'react'

function BuyProduct() {
    return (
       <>

       

         


<div className='container'>
      <div className='row'>
          <div className='col-md-6'>

                <div className="contact p-5" style={{marginTop:'-7em'}}>
                       <p style={{fontSize:'40px',marginLeft:'-5em'}}>Zustellung und Rechnung Adresse</p>
            
                </div>
                <form class="col g-3 needs-validation" style={{marginLeft:'-10em'}} novalidate>
  <div class="col-md-8 rounded">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control rounded" id="validationCustom01" placeholder="Your First Name.."/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-8 rounded">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" placeholder="Your Last Name.." />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-8 rounded">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-8 rounded">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required/>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-8 rounded">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>Berlin-Brandenburg</option>
      <option>West-Wattenfall</option>
      <option>Baden-Würtenberg</option>
      <option>Koblenz</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-8 rounded">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" required/>
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-md-8 rounded">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-md-8">
    <button class="btn btn-primary" style={{ marginLeft:'11em'}} type="submit">Confirm Buy</button>
  </div>
</form>

                </div>
              
            


         


                
                <div className='col-md-6' style={{widht:'30em'}}>
                    <div className='payment'style={{marginTop:'-17em'}}>
                        <p  style={{fontSize:'40px', marginTop:'5.2em', marginLeft:'5em'}}>Payment mode</p>
                       <div className='container' style={{marginLeft:'8em', marginTop:'1em'}}>
                       <img className='pic' style={{marginLeft:'-6em'}} src='./mastercard0.png' alt='wear'></img>
                         <div className='form-card'>
                           <div class="col-md-8 rounded" >
                               <label for="validationCustom02" class="form-label">CardName</label>
                               <input type="text" class="form-control" id="validationCustom02" placeholder="Your Last Name.." />
                      
                            </div>

                            <div class="col-md-8 rounded" >
                               <label for="validationCustom02" class="form-label">CardNumber</label>
                               <input type="text" class="form-control" id="validationCustom02" placeholder="Your Card Number.." />
                      
                            </div>

                            <div class="col-md-8">
                               <button class="btn btn-primary mt-3" style={{ marginLeft:'1em'}} type="submit">Valid payment</button>
                               <h3 className='or'style={{marginLeft:'5.5em', marginTop:'-1.2em'}} >OR</h3>
                               <button class="btn btn-primary mt-3" style={{ marginLeft:'1em'}} type="submit">Choose Another mode payment</button>
                            </div>
                            <a href='https://www.paypal.com/cgi-bin/webscr'><img className='pic1 shadow-lg w-25 mt-5' style={{marginLeft:'1em'}} src='paypal.jpg'></img></a>
                            <img className='pic2 shadow-lg w-25 mt-5' style={{marginLeft:'6em'}} src='./logo_vorkasse.png'></img>

                         </div>

                       </div>
                     

                    </div>

                </div>
    </div>
    </div>
              

            
       
       </>
    )
}

export default BuyProduct
