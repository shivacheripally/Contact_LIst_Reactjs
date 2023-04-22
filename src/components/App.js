import React from 'react';
import './style.css';
import ContactList from './data';

export default function App() {
  return (
    <div className="App">
      <h1>Contact List</h1>
      <form className="form-div">
        <div className="name">
          <label htmlFor="contact-name">Name: </label>
          <input id="contact-name" type="text" required/>
        </div>

        <div className="contact">
          <label htmlFor="contact">Contact: </label>
          <input id="contact" type="number" required/>
        </div>

        <input className="submit" type="submit" value="submit" />
      </form>
      <ContactList />
    </div>
  );
}
