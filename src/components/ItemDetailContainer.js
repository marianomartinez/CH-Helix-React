import React, { useState, useEffect } from 'react';

// Routes
import { useParams } from 'react-router-dom';

// Components
import ItemDetail from './ItemDetail';
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

// Bootstrap

let title = "selected category ('Distortion')"; // this should changed as each Category is selected


const getItem = (itemId) => {
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
        }, 3000);
    });
};


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(null);
    const { itemId } = useParams(); // this is de URLs param. Add each param to be captured from the URL

    useEffect(() => {
        setLoading(true);
        getItem(itemId)
            .then(response => {
                setLoading(false);
                setItem(response[0]);
            })
            .catch(err => { console.log(err) });
        // console.log(item)
    }, [itemId]);


    // // This version watches id changes and re-renders
    // // useEffect(() => {
    // //     getItem(id)
    // //         .then(response => {
    // //             setItem(response)
    // //         })
    // //         .catch(err => { console.log(err) });
    // // }, [id]);

    console.log(item)
    return <>
        <LoadingMask loading={loading}>
        <div className="container">
            <h3 style={{ textAlign: "center" }}>{title}</h3>
            <ItemDetail item={item} title={title} />
        </div>
        </LoadingMask>
    </>
}

export default ItemDetailContainer;