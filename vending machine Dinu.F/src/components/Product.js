import React from 'react'

function Product(props){
    return(
        <div className={"products" + props.animate}>
        <div className={'products-icon'+ props.code}></div>
        <div className="products-price">{props.price} $</div>
        <div className="products-quantity">Stock: {props.pieces}</div>
        <div className="products-code">Code: {props.code}</div>
        </div>
    )
    
}

export default Product