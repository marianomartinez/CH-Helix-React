import React from 'react';
//Components
import ItemListContainer from './ItemListContainer';
//Bootstrap
import {Container} from 'react-bootstrap';

let style = {
    "text-align": "center"
}

function greeting() {return <h2>Welcome to "Helix Effects store"</h2>}; // !!! AGREGAR styling

function Home(props) {
    return (
        <Container className="bg-dark">
            <h2 style={style}>{greeting()}</h2>
            <ItemListContainer />
        </Container>
    )
}

export default Home;