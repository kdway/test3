import React from 'react'

function Contact() {
    return (

        <>

<div className="contact p-5" style={{marginTop:'2em'}}>
            <p style={{fontSize:'40px'}}>Contact Us</p>
        </div>

            <div className='container' style={{marginTop:'1em'}}>
              <div className='row'>
                <div className='col-md-6'>
                <form class="col g-3 needs-validation" novalidate>
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
  <div class="col-md-8 rounded ms-5 mt-5">
    <button class="btn btn-primary" style={{ marginLeft:'6em'}} type="submit">Submit form</button>
  </div>
</form>

                </div>
                <div className='col-md-6 rounded'style={{widht:'300px',height:'300px'}}>
                  
                </div>
            

              </div>

            </div>

        
        
        </>
       
      

            

    )
}

export default Contact
