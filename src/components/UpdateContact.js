export const handleUpdateContact = (id, list, setList, updatedContactData) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedContactData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(`Contact with id ${id} has been updated`);
      // update the list of contacts after updating the contact
      const updatedList = list.map((contact) => {
        if (contact.id === id) {
          return {
            ...contact,
            ...updatedContactData,
          };
        } else {
          return contact;
        }
      });
      setList(updatedList);
    })
    .catch((error) => console.error('Error updating data:', error));
};
