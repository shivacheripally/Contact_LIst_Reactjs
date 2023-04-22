import React,{useEffect} from 'react';
const url = 'https://jsonplaceholder.typicode.com/users';

export function DeleteContact(props){
  console.log("delete contact");
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data, props);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [props]);
  

  return(
    <div>
      <p>props.index:{props.index}</p>
    </div>
  );
}