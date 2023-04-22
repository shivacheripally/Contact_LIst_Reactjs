import React, { useState } from 'react';
import {handleUpdateContact} from './index.js';
// import './Edit.css';

export function Edit(props) {
  const {id,list,setList} = props;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const clickUpdate = (e) => {
    e.preventDefault();
    const updatedContactData = {
      name,
      phone,
    };
    handleUpdateContact(id,list,setList,updatedContactData);
  };
  const styles = {
    form:{
      padding: "10px",
      display:"flex",
      flexDirection: "column",
      gap:"10px",
      textAlign:"center",
      alignItems:"center",
      justifyContent:"center",
    }
  }
  return (
    <div >
      <h4>updating</h4>
      <form style={styles.form} onSubmit={clickUpdate}>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name: "
          required
        />
        <input
          onChange={(event) => setPhone(event.target.value)}
          type="number"
          placeholder="Contact: "
          required
        />
        <input type="submit" value="save" />
      </form>
    </div>
  );
}
