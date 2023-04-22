// This function handles the deletion of a contact from a list of contacts
export const handleDeleteClick = (id, list, setList) => {
  // Make an HTTP DELETE request to the server
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE',
  })
    // Handle the response from the server
    .then((response) => {
      // If the response is not OK, throw an error
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Log a message to the console saying that the contact has been deleted
      console.log(`Contact with id ${id} has been deleted`);
      // Update the list of contacts after deleting the contact
      const updatedList = list.filter((contact) => contact.id !== id);
      setList(updatedList);
    })
    // Handle errors that may occur during the deletion process
    .catch((error) => console.error('Error deleting data:', error));
};
