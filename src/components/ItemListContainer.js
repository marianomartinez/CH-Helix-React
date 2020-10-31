import React, { useState, useEffect } from 'react';
// Components
import ItemList from './ItemList';

let title = "selected category ('Distortion')"; // this should changed as each Category is selected

const getItems = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 0,
          title: 'Minotaur',
          realName: 'Klon® Centaur',
          price: 1000,
          imageURL: ""
        },
        {
          id: 1,
          title: 'Compulsive Drive',
          realName: 'Fulltone® OCD',
          price: 130,
          imageURL: ""
        },
        {
          id: 2,
          title: 'Valve Driver',
          realName: 'Chandler Tube Driver',
          price: 350,
          imageURL: ""
        }
      ]);
    }, 2000);
  });
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems()
    .then(response => {
      setItems(response)
    })
    .catch(err => {console.log(err)});
  }, []);

  return (
    <div className="container">
      <ItemList items={items} title={title} />
    </div>
  )
}

export default ItemListContainer;