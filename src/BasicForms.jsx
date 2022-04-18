import React, { useState } from "react";


const BasicForms = ()=>{

  const [values, setVaules] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false)

  const handleFirstNameInputChange = (event)=>{
    setVaules({ ...values, firstName: event.target.value})
  }
  const handleLastNameInputChange = (event)=>{
    setVaules({...values, lastName: event.target.value})
  }
  const handleEmailInputChange = (event)=>{
    event.preventDafult();
    setVaules({...values, email: event.target.value})
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    setSubmitted(true);
  }


  return(
    <>
      <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>

      {submitted ? <div className="success-message">Thank you for you signup</div>: null}
          
        <input
        onChange = {handleFirstNameInputChange}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInputChange}
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
    </>
  )
}

export default BasicForms;


