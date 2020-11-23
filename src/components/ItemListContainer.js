import React, { useState, useEffect } from 'react';
// Components
import ItemList from './ItemList';
import { getFirestore } from '../firebase';
import { useParams } from 'react-router-dom';

let style = { "text-align": "center" }

function greeting() { return <h2>Welcome to "Helix Effects store"</h2> }; // !!! AGREGAR styling

// let title = "selected category ('Distortion')"; // this should changed as each Category is selected

/*
// OLD LOCAL VERSION
// Array of items (local DB)
const getItems = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          title: 'Minotaur',
          realName: 'Klon® Centaur',
          price: 1000,
          imageURL: "https://cdn.shopify.com/s/files/1/0916/0836/products/48137_Klon_Centaur_1_2a198c1d-ec43-4bca-9327-3171d2e66451_821x.progressive.jpg?v=1574722552"
        },
        {
          id: 2,
          title: 'Compulsive Drive',
          realName: 'Fulltone® OCD',
          price: 130,
          imageURL: "https://static.keymusic.com/products/263956/XL/fulltone-ocd-v2.0.jpg"
        },
        {
          id: 3,
          title: 'Valve Driver',
          realName: 'Chandler Tube Driver',
          price: 350,
          imageURL: "https://images.reverb.com/image/upload/s--oAknCBi5--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1480459840/zjqabzn9nls58se3wwg9.png"
        }
      ]);
    }, 500);
  });
};

// FUNCTIONAL COMPONENT DECLARATION 
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems()
    .then(response => {
      setItems(response)
    })
    .catch(err => {console.log(err)});
  }, []);
*/



// NEW VERSION, DATA FROM FIREBASE
// const ItemListContainer = () => {
//   const [items, setItems] = useState([]);
//   useEffect(() => {
//     const db = getFirestore();
//     const itemCollection = db.collection("items");
//     itemCollection.get().then((querySnapshot) => {
//       if (querySnapshot.size === 0) { console.log('No results') };
//       setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))); // ID is in de document. The document has data. This create an object with properties form different sources.
//     })
//       .catch(err => { console.log(err) });
//   }, []);



  // NEW VERSION, DATA FROM FIREBASE with a filter
  const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
    console.log(categoryId);
    useEffect(() => {
      const db = getFirestore();
      const itemCollection = db.collection("items");
      // const pricedItems = itemCollection.where('price', '>', 400); // adds this
      const catCollection = itemCollection.where('categoryId', '==', categoryId) // or adds this
      catCollection.get().then((querySnapshot) => { // and changes which filter is read
        if (querySnapshot.size === 0) { console.log('No results') };
        setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))); // ID is in de document. The document has data. This create an object with properties form different sources.
      })
      .catch(err => { console.log(err) });
    }, [categoryId]);



    return (
      <div className="container bg-dark">
        <h2 style={style}>{greeting()}</h2>
        <ItemList items={items} title={categoryId} />
      </div>
    )
  }

  export default ItemListContainer;