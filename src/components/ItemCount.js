import React, { useState } from 'react';

function Counter({ amount, stock, min, initial }) {
    const [count, setCount] = useState(initial);

    function onSubstract() {
        if (count > min) {
            setCount(count - amount)
        }
    }

    function onAdd() {
        if (count < stock) {
            setCount(count + amount)
        }
    }

    return (
        <div className="btn-group py-3 pr-3" role="group">
            <button className={`btn btn-secondary rounded shadow-none ${count == min ? "disabled" : ""}`} onClick={onSubstract}>-</button>
            <button className="btn btn-secondary rounded shadow-none disabled">{count}</button>
            <button className={`btn btn-secondary rounded shadow-none ${count == stock ? "disabled" : ""}`} onClick={onAdd}>+</button>
        </div>
    );
}

export default function ItemCount() {
    return <Counter amount={1} stock={5} min={1} initial={2}/>
}