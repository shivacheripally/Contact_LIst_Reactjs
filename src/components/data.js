import React, { useState, useEffect } from 'react';
import {DeleteContact} from './DeleteContact.js';
import './data.css';

const url = 'https://jsonplaceholder.typicode.com/users';

function ContactList() {
  const [list, setList] = useState([]);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const contacts = data.map((obj) => {
          return {
            name: obj.username,
            phone: obj.phone,
          };
        });
        setList(contacts);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const editClick = (index) => {
    console.log("edit",index);
    setRemove(true)
  };

  const deleteClick = (index) => {
    console.log("delete",index);
  };

  return (
    <div>
      <h1>Contacts</h1>
      {list.filter(contact => contact.name !== "").map((contact, index) => (
        <div key={`index-${index}`} className="contact-data">
          <span>Name: {contact.name}</span>
          <span>Contact: {contact.phone}</span>
          <div className="icons">
            <span>
              <i
                onClick = {() => {editClick(index)}}
                style={{ color: 'orange' }}
                className="fa-solid fa-pen-to-square"
              ></i>
            </span>
            <span>
              <i 
              onClick = {() => {deleteClick(index)}}
              style={{ color: 'red' }} 
              className="fa-solid fa-trash"></i>
            </span>
          </div>
          {remove && <DeleteContact index={index}/> }
        </div>
      ))}
    </div>
  );
}

export default ContactList;
