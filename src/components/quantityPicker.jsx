

import React, { useState } from "react";


const QuantityPicker = () => {
    const [quantity, setQuantity] = useState(1);


    const increase = () =>  {
        setQuantity(quantity + 1);
    };
    const decrease = () => {
        let newVal = quantity - 1;
        if (newVal> 0) {
        setQuantity(quantity - 1);
        }
    };

    return ( 
    <div className="quantity-picker">
        <button disabled={quantity === 1} onClick={decrease} className="btn bnt-sm btn-primary">-</button>
        <label>{quantity}</label>
        <button  onClick={increase} className="btn bnt-sm btn-primary">+</button>
    </div>
    );
};

export default QuantityPicker;