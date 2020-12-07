import React, { /* useState */ /*, useEffect */ } from 'react';
import { Link } from 'react-router-dom';
// import { useCartContext } from '../context/CartContext';
// import ItemCount from './ItemCount';

const Item = (item) => {
    // const [qtyToCart, setQtyToCart] = useState();
    // const { addToCart } = useCartContext();

    // console.log(`Item.JS (NO ANDA) item is: ${item.title}`);

    // function onAddToCart(count) {
    //     setQtyToCart(count);
    //     addToCart(item, qtyToCart);
    // };


    return (
        <div className="container">
            <Link to={`/item/${item.id}`} className="text-decoration-none">
                <div className="row bg-secondary mb-1 rounded d-flex">
                    <figure className="col-1 my-auto">
                        <img className="w-100 rounded" src={item.imageURL} alt={item.title} />
                    </figure>
                    <div className="col-8 pl-2 my-auto rounded">
                        <p className="my-1">Model: {item.title}</p>
                        <p className="my-1">Based on: {item.realName}</p>
                        <p className="my-1">Category: {item.categoryId}</p>
                    </div>
                    <div className="col-1 my-auto d-flex">
                        <p className="my-1 text-center">${item.price}</p>
                    </div>
                </div>
            </Link>
            {/* <ItemCount initial={2} min={1} stock={5} onAddClick={onAddToCart} /> */}
        </div>
    )
}

export default Item;