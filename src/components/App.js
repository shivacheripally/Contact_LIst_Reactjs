import React, { useState } from 'react';
import './style.css';

export default function App(props) {
  // console.log(props);
  const {addClick} = props;
  // console.log(addClick);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addContact = (e) => {
    e.preventDefault();
    addClick(name,phone);
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
    </div>
  );
}
