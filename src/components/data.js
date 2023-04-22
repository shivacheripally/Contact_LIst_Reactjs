import React, { useState, useEffect } from 'react';
import {handleDeleteClick} from './DeleteContact.js';
import {handleAddClick} from './AddContact.js';
import App from './App';
import './data.css';

const url = 'https://jsonplaceholder.typicode.com/users';

export function ContactList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const contacts = data.map((obj) => {
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

  const addClick = (name,phone) => {
    const id = Date.now();
    handleAddClick(name,phone,id,list,setList);
  }
  // const addClick = (name, phone) => {
  //   console.log('add', name, phone);
  //   const addUrl = 'https://example.com/api/contacts';
  //   fetch(addUrl, {
  //     method: 'POST',
  //     body: JSON.stringify({ name, phone }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       console.log('Contact has been added');
  //       const id = Date.now();
  //       console.log("id",id);
  //       setList([...list, { name, phone, id }]);
  //     })
  //     .catch((error) => console.error('Error adding data:', error));
  // };

  const editClick = (index) => {
    console.log("edit",index);
  };

  const deleteClick = (id) => {
    handleDeleteClick(id, list, setList);
  }
  
  const updateContact = (id, updatedContactData) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedContactData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(`Contact with id ${id} has been updated`);
      // update the list of contacts after updating the contact
      const updatedList = list.map(contact => {
        if (contact.id === id) {
          return {
            ...contact,
            ...updatedContactData
          };
        } else {
          return contact;
        }
      });
      setList(updatedList);
    })
    .catch(error => console.error('Error updating data:', error));
  }  

  return (
    <div className="data">
      <App addClick={addClick}/>
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
        </div>
      ))}
    </div>
  );
}
