import React, { useState } from 'react';
import './style.css';
import ContactList from './data';
import createPost from './AddContact.js';

export default function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addContact = (e) => {
    e.preventDefault();
    console.log('adding contact', name, phone);
    const id = Date.now();
    createPost(name, phone, id)
      .then((response) => {
        console.log('response', response);
        // do something with the response
      })
      .catch((error) => {
        console.error('There was an error:', error);
      });
  };

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
      <ContactList />
    </div>
  );
}
