import React, { useState } from 'react';

export default function ItemCount({ stock, min, initial, onAddClick }) {
    const [count, setCount] = useState(initial);
    function valueUp() { if (count > min) { setCount(count - 1) } };
    function valueDown() { if (count < stock) { setCount(count + 1) } };
    function onAdd() { onAddClick(count) };

    return (
        <div className="col-12 py-2">
            <div className="w-100 text-center btn-group" role="group">
                <button className={`btn btn-secondary rounded shadow-none ${count === min ? "disabled" : ""}`} onClick={valueUp}>-</button>
                <button className="btn btn-secondary rounded shadow-none disabled">{count}</button>
                <button className={`btn btn-secondary rounded shadow-none ${count === stock ? "disabled" : ""}`} onClick={valueDown}>+</button>
            </div>
            <div className="w-100 text-center">
                <button className="btn btn-secondary rounded shadow-none" onClick={(count) => onAdd(count)}>Add {count} to cart</button>
            </div>
        </div>
    );
}