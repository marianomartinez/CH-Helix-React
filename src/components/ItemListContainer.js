import React from 'react';
// Components
import ListItem from './ListItem';
// Bootstrap
import { Container } from 'react-bootstrap';

// temporary list of items to show
let items = [
    {
        id: 0,
        hxName: 'Minotaur',
        realName: 'Klon® Centaur'
    },
    {
        id: 1,
        hxName: 'Compulsive Drive',
        realName: 'Fulltone® OCD'
    },
    {
        id: 2,
        hxName: 'Valve Driver',
        realName: 'Chandler Tube Driver'
    }
]

let title = "selected Category ('Distortion')"; // this should changed as each Category is selected

function ItemListContainer() {
    
    // useEffect(() => {
        
    // })  
    return (
        <Container>
            <h3 style={{textAlign: "center"}}>{title}</h3>
            <ul className="list-unstyled">
                {items.map((item,i) => (<ListItem {...item} key={i}/>))}
            </ul>
        </Container>
    )
}

export default ItemListContainer;