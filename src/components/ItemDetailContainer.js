import React from 'react';
// Components
// import ItemDetail from './ItemDetail';
// Bootstrap
import { Container } from 'react-bootstrap';

// temporary item to show


let title = "selected Category ('Distortion')"; // this should changed as each Category is selected

function ItemDetailContainer() {
    
    // useEffect(() => {
        
    // })  
    return (
        <Container>
            {/* cambiar esto por el contenedor */}
            <h3 style={{textAlign: "center"}}>{title}</h3>
            <ul className="list-unstyled">
                {items.map((item,i) => (<ListItem {...item} key={i}/>))}
            </ul>
            {/* uso el itemDetail */}
            <ItemDetail />
        </Container>
    )
}

export default ItemDetailContainer;