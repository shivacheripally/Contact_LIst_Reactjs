import React, { useState, useEffect } from 'react';
import { handleDeleteClick, handleAddClick, App, Edit } from './index.js';
import './data.css';

const url = 'https://jsonplaceholder.typicode.com/users';

export function ContactList() {
  const [list, setList] = useState([]); // state to hold the list of contacts
  const [isEdit, setIsEdit] = useState(false); // state to track if an edit modal is open
  const [editId, setEditId] = useState(''); // state to track the id of the contact being edited

  useEffect(() => {
    // fetch data from API when component mounts
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // transform the response data to match the shape of our list state
        const contacts = data.map((obj) => {
          return {
            name: obj.username,
            phone: obj.phone,
            id: obj.id,
          };
        });
        setList(contacts);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addClick = (name, phone) => {
    const id = Date.now();
    handleAddClick(name, phone, id, list, setList); // call the handleAddClick function to add a new contact
  };

  const editClick = (id) => {
    setIsEdit(!isEdit); // toggle the isEdit state to show/hide the edit modal
    setEditId(id); // set the id of the contact being edited
  };

  const deleteClick = (id) => {
    handleDeleteClick(id, list, setList); // call the handleDeleteClick function to delete a contact
  };

  return (
    <div className="data">
      <App addClick={addClick} /> {/* render the form to add a new contact */}
      <h1>Contacts</h1>
      {/* map over the list of contacts and render each contact */}
      {list.map((contact, index) => (
        <div key={`index-${index}`} className="contact-data">
          <span>Name: {contact.name}</span>
          <span>Contact: {contact.phone}</span>
          {/* render edit and delete icons */}
          <div className="icons">
            <span>
              <i
                onClick={() => {
                  editClick(contact.id);
                }}
                style={{ color: 'orange' }}
                className="fa-solid fa-pen-to-square"
              ></i>
            </span>
            <span>
              <i
                onClick={() => {
                  deleteClick(contact.id);
                }}
                style={{ color: 'red' }}
                className="fa-solid fa-trash"
              ></i>
            </span>
          </div>
          {/* render the edit modal if isEdit state is true and editId matches the id of the contact being edited */}
          {isEdit && editId === contact.id && (
            <Edit id={contact.id} list={list} setList={setList} />
          )}
        </div>
      ))}
    </div>
  );
}
