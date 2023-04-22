export const handleAddClick = (name,phone,id,list,setList) => {
  console.log('add', name, phone);
  const addUrl = 'https://example.com/api/contacts';
  fetch(addUrl, {
    method: 'POST',
    body: JSON.stringify({ name, phone }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Contact has been added');
      const id = Date.now();
      console.log("id",id);
      setList([...list, { name, phone, id }]);
    })
    .catch((error) => console.error('Error adding data:', error));
};