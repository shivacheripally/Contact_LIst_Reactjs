export const handleDeleteClick = (id, list, setList) => {
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
    // console.log("updatedList",updatedList);
    setList(updatedList);
  })
  .catch(error => console.error('Error deleting data:', error));
}
