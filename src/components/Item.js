import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const Item = ({ item }) => {
    const [qtyToCart, setQtyToCart] = useState();
    const [checkoutBtnState, setCheckoutBtnState] = useState(false);
    const { addToCart } = useCartContext();
    function onAddToCart(count) {
        setQtyToCart(count);
        setCheckoutBtnState(true);
    };

    return (
        <div className="container d-flex flex-no-wrap bg-secondary mb-1 rounded d-flex px-0">
            <div className="col-9">
                <Link to={`/item/${item.id}`} className="text-decoration-none my-auto">
                    <div className="d-flex">
                        <figure className="col-2 my-auto px-0">
                            <img className="w-100 rounded" src={item.imageURL} alt={item.title} />
                        </figure>
                        <div className="col-9 px-5 my-auto rounded">
                            <p className="my-1">Model: {item.title}</p>
                            <p className="my-1">Based on: {item.realName}</p>
                            <p className="my-1">Category: {item.categoryId}</p>
                        </div>
                        <div className="col-1 my-auto d-flex">
                            <p className="my-1 text-center">${item.price}</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                {!checkoutBtnState &&
                    <div className="my-auto">
                        <ItemCount initial={2} min={1} stock={5} onAddClick={onAddToCart} />
                    </div>
                }
                {checkoutBtnState &&
                    <Link to="/cart">
                        <div className="w-100 text-center py-4">
                            <button onClick={() => addToCart(item, qtyToCart)} className="btn btn-secondary rounded shadow-none">Confirm to cart</button>
                        </div>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Item;