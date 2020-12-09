import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';
import ItemDetail from './ItemDetail';
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

// Data from Firebase for one item using doc
const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});
    const { id } = useParams();
    const category = item.categoryId;
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const filtered = itemCollection.doc(id);
        filtered.get().then((doc) => {
            if (!doc.exists) {
                console.log('No results');
                setItem(0);
                setLoading(false);
            } else {
                setItem({ id: doc.id, ...doc.data() });
                setLoading(false);
            }
        }).catch(err => { console.log(err) });
    }, [id]);

    return (
        <LoadingMask loading={loading}>
            <div className="container mt-5">
                <h3 style={{ textAlign: "center" }}>{category}</h3>
                <ItemDetail item={item} />
            </div>
        </LoadingMask>
    )
};

export default ItemDetailContainer;