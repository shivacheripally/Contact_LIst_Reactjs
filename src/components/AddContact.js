// This function adds a new contact to the list of contacts on the server
// and updates the local state with the new contact.
export const handleAddClick = (name, phone, id, list, setList) => {
  console.log('add', name, phone, id);

  // Define the URL for the POST request
  const addUrl = 'https://jsonplaceholder.typicode.com/users';

  // Send a POST request to the server with the new contact data
  fetch(addUrl, {
    method: 'POST',
    body: JSON.stringify({ name, phone }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      // Check if the response from the server is not OK (i.e. status code >= 400)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Contact has been added');
      // Update the local state with the new contact by spreading the existing list and adding the new contact
      setList([...list, { name, phone, id }]);
    })
    .catch((error) => console.error('Error adding data:', error));
};
