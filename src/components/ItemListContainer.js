import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getFirestore } from '../firebase';
import { useParams } from 'react-router-dom';

let style = { "text-align": "center" }

function greeting() { return <h2>Welcome to "Helix Effects store"</h2> };
let defaultTitle = "All models";

// Data from Firebase with a filter
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    if (!categoryId) {
      itemCollection.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) { console.log('No results') };
        setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      })
        .catch(err => { console.log(err) });
    } else {
      const catCollection = itemCollection.where('categoryId', '==', categoryId)
      catCollection.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) { console.log('No results') };
        setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      })
        .catch(err => { console.log(err) });
    }
  }, [categoryId]);

  return (
    <div className="container bg-dark">
      <h2 style={style}>{greeting()}</h2>
      <ItemList
        items={items}
        title={categoryId ? categoryId : defaultTitle} />
    </div>
  )
}

export default ItemListContainer;