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

    return <>
        <button onClick={onSubstract}>-</button>
        <span>{count}</span>
        <button onClick={onAdd}>+</button>
    </>;
}

export default function ItemCount() {
    return <Counter amount={1} stock={5} min={1} initial={2}/>
}