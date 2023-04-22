import React, { useState, useEffect } from 'react';
import {DeleteContact} from './DeleteContact.js';

import './data.css';

const url = 'https://jsonplaceholder.typicode.com/users';

function ContactList() {
  
  const [list, setList] = useState([]);
  const [remove, setRemove] = useState(false);
  // const deleteUrl = `https://example.com/api/contacts/${id}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const contacts = data.map((obj) => {
          // console.log(obj)
          return {
            name: obj.username,
            phone: obj.phone,
            id: obj.id
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

  const deleteClick = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(`Contact with id ${id} has been deleted`);
      // update the list of contacts after deleting the contact
      const updatedList = list.filter(contact => contact.id !== id);
      setList(updatedList);
    })
    .catch(error => console.error('Error deleting data:', error));
  }
  
  

  return (
    <div>
      <h1>Contacts</h1>
      {list.map((contact, index) => (
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
              onClick = {() => {deleteClick(contact.id)}}
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
