import React, { useState, useEffect } from 'react';

// Routes
import { useParams } from 'react-router-dom';

// Firebase
import { getFirestore } from '../firebase';

// Components
import ItemDetail from './ItemDetail';
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

// Bootstrap


/*
// OLD LOCAL DB
// Array of items (local DB)
const getItemById = (itemId) => {
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
            ].filter(item => item.id === itemId)); // probar cambiar por .find
        }, 500);
    });
};

// OLD FUNCTIONAL COMPONENT DECLARATION FOR LOCAL DB
const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams(); // this is de URLs param. Add each param to be captured from the URL
    
    useEffect(() => {
        getItemById(Number(itemId))
        .then(response => {
            setLoading(false);
            setItem(response[0]);
        })
        .catch(err => { console.log(err) });
    }, [itemId]); // this [itemId] waits for itemId value change and re-runs the effect
    */
   
   
   
   // NEW VERSION, DATA FROM FIREBASE CON WHERE ???
   // const ItemDetailContainer = () => {
       //     const [item, setItem] = useState({ realName: 'cargando' });
       //     const { itemId } = useParams();
//     console.log('log: ', item);
//     useEffect(() => {
//         const db = getFirestore();
//         const itemCollection = db.collection("items")
//         const filtered = itemCollection.where('id', '==', itemId);
//         filtered.get().then((querySnapshot) => {
    //             if (querySnapshot.size === 0) { console.log('No results') };
//             setItem(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))); // ID is in de document. The document has data. This create an object with properties form different sources.
//         })
//             .catch(err => { console.log(err) });
//     }, []);


// NEW VERSION, DATA FROM FIREBASE CON DOC
const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});
    const { itemId } = useParams();
    const title = item.categoryId;
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const filtered = itemCollection.doc(itemId);
        filtered.get().then((doc) => {
            if (!doc.exists) { console.log('No results') };
            setItem({ id: doc.id, ...doc.data() }); // ID is in de document. The document has data. This create an object with properties form different sources.
            setLoading(false);
        })
            .catch(err => { console.log(err) });
        }, [itemId]);
        
        

    return <>
        <LoadingMask loading={loading}>
        <div className="container">
            <h3 style={{ textAlign: "center" }}>{title}</h3>
            <ItemDetail item={item} />
        </div>
        </LoadingMask>
    </>
}

export default ItemDetailContainer;