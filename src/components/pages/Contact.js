import React, {useState, useEffect} from 'react';

const Contact = () => {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [sendComplete, setSendComplete] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{setSendComplete(false)},3000)
  },[sendComplete])
  const handleChange = (event) => {
    setNameError(false)
    setEmailError(false)
    setMessageError(false)
    setToSend({
      ...toSend,
      [event.target.name]: event.target.value
    })
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onSubmit = () => {
    if(!toSend.name){setNameError(true)}
    if(!validateEmail(toSend?.email)){setEmailError(true)}
    if(!toSend.message){setMessageError(true)}
    if(toSend.name && 
      toSend?.email && validateEmail(toSend?.email) &&
      toSend.message
      ){
      setToSend({
        name: "",
        email: "",
        message: ""
      })
      document.querySelector('#formTextArea').value = '';
      document.querySelector('#formEmail').value = '';
      document.querySelector('#formName').value = '';
      setSendComplete(true)
    }
  }
  return (
    <div className="contact-block">
      <h1>Contact</h1>
      <div className="contact-form">
        <label>
          Name:
          {nameError && 
            <p className="error-message">
              Name cannot be empty  
            </p>}
          <input
            type='text'
            name='name'
            placeholder='name'
            id="formName"
            value={toSend.from_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email address:
          { emailError && 
            <p className="error-message">
              Please check your email format  
            </p>}
          <input
            type='text'
            name='email'
            placeholder='email'
            id="formEmail"
            value={toSend.from_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Message:
          {messageError && 
            <p className="error-message">
              message cannot be empty  
            </p>}
          <textarea
            type='text'
            name='message'
            placeholder='message'
            rows="4" 
            cols="50"
            id="formTextArea"
            value={toSend.from_name}
            onChange={handleChange}
          />
        </label>
          <button 
           type="submit"
            onClick={onSubmit}
          >
            Submit
          </button> 
      </div>
      {sendComplete && <h2 className="formSuccessfulMessage">Message send successfully</h2>}
    </div>
  );
}

export default Contact;