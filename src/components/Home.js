import React from 'react';
import ItemListContainer from './ItemListContainer';

let greeting = () => { return <h2>Welcome to "Helix Effects store"</h2> };

function Home() {
    return (
        <div className="container bg-dark">
            <h2 className="pt-5 text-center">{greeting}</h2>
            <ItemListContainer />
        </div>
    )
};

export default Home;