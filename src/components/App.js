// This component renders a form for adding a new contact to the list.
// When the form is submitted, it calls the `addClick` function passed in through props
// to add the new contact to the list on the server.
import React, { useState } from 'react';
import './style.css';

export default function App(props) {
  // Destructure the `addClick` function from the props object
  const { addClick } = props;

  // Define two state variables to store the name and phone number of the new contact
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // This function is called when the form is submitted.
  // It calls the `addClick` function passed in through props
  // with the name and phone number of the new contact.
  const addContact = (e) => {
    e.preventDefault();
    addClick(name, phone);
  };

  // Render a form with inputs for the name and phone number of the new contact
  return (
    <div className="App">
      <h1>Contact List</h1>
      <form onSubmit={addContact} className="form-div">
        <div className="name">
          <label htmlFor="contact-name">Name: </label>
          <input
            onChange={(event) => setName(event.target.value)}
            id="contact-name"
            type="text"
            required
          />
        </div>

        <div className="contact">
          <label htmlFor="contact">Contact: </label>
          <input
            onChange={(event) => setPhone(event.target.value)}
            id="contact"
            type="number"
            required
          />
        </div>

        <input className="submit" type="submit" value="submit" />
      </form>
    </div>
  );
}
