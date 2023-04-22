function createPost(name, phone, id) {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ name, phone, id }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error('There was an error:', error);
      throw error;
    });
}
 export default createPost;