// Import the handleUpdateContact() function from another file
import React, { useState } from 'react';
import { handleUpdateContact } from './index.js';

// Define the Edit component
export function Edit(props) {
  // Destructure the id, list, and setList properties from the props object
  const { id, list, setList } = props;
  // Define two state variables: name and phone
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Define the clickUpdate() function that is called when the user submits the form
  const clickUpdate = (e) => {
    e.preventDefault();
    // Create an object containing the updated name and phone number of the contact
    const updatedContactData = {
      name,
      phone,
    };
    // Call the handleUpdateContact() function to update the contact
    handleUpdateContact(id, list, setList, updatedContactData);
  };

  // Define the styles object for the form
  const styles = {
    form: {
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  // Return JSX that defines the form for updating the contact
  return (
    <div>
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
