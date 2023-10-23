import React from 'react';
import { useState } from 'react';
//import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers.js';

export function Contact() {
  //NOT "export default function Contact()"
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // const [value, setValue] = useState('');
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'ma,e') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
    
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !Name) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;

    }
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form>
        <h1>Contact Me!</h1>
      <div className="form-group">
        <label htmlFor="name">Name*:</label>
        <input
          onChange={handleInputChange}
          value={Name}
          name="name"
          type="text" required
          className="form-control"
          placeholder="Your Name*"
          id="name"
        />
        <label htmlFor="email">Email*:</label>
        <input
          onChange={handleInputChange}
          value={email}
          name="email"
          type="text" required
          className="form-control"
          placeholder="Your Email*"
          id="email"
        />
        <label htmlFor="message">Message*:</label>
        <textarea 
          onChange={handleInputChange}
          value={message}
          name="message"
          type="text" required
          className="form-control"
          placeholder="Your Message*"
          id="message"
          rows={4}
          cols={40}
        />
        
        <br />
        <button
          onClick={handleFormSubmit}
          className="btn btn-primary"
          type="submit"
        >
          Submit
        </button>
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </form>
    
  );
}
