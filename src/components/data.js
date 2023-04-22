import React, { useState, useEffect } from 'react';
import {handleDeleteClick,handleAddClick,App,Edit} from './index.js'; 
import './data.css';

const url = 'https://jsonplaceholder.typicode.com/users';

export function ContactList() {
  const [list, setList] = useState([]);
  const [isEdit,setIsEdit] = useState(false);
  const [editId,setEditId] = useState('');

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
    console.log("name,phone",name,phone);
    const id = Date.now();
    handleAddClick(name,phone,id,list,setList);
  }

  const editClick = (id) => {
    setIsEdit(!isEdit);
    setEditId(id);
  };

  const deleteClick = (id) => {
    handleDeleteClick(id, list, setList);
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
                onClick = {() => {editClick(contact.id)}}
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
          {isEdit && editId === contact.id && <Edit id={contact.id} list={list} setList={setList}/>}
        </div>
      ))}
    </div>
  );
}
