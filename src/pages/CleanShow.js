import React from 'react'
import AlternClean from '../components/AlternClean';


const CleanShow = (props) => {
    const id = props.match.params.id;
    const chemicals = props.clean;
    const foundChemical = chemicals.find((c) => id === c._id);

//////// DESTRUCTURE FOUND CHEMICAL ///////////
    const {chemical, description, products} = foundChemical;

/////// MAPPING OVER THE PRODUCT ARRAY TO CREATE DIVS FOR EACH PRODUCT ////////////    
    const productList = products.map((p) => {
        return (
        <div className="productDiv">
            <h2>{p.name}</h2>
            <img src={p.img} alt={p.name}/>
        </div>
        )
    })



  return (
    <div className="showContainer">
        <div className="showDiv">
            <h1>{chemical}</h1>
            <h5>{description}</h5>
            <h1>Products that contain this toxin:</h1>
            <div className="productContainer">
                
                {productList}
            </div>
        </div>
        <section id="Altsection">
    <h1 id="AltTitle">Healthy Alternative Options</h1>
    <AlternClean />
    </section>
    </div>
    
  )
}

export default CleanShow;