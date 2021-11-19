import "./item.css";
import QuantityPicker from "./quantityPicker";


const Item = (prod) => {
    const handleAdd = () => {
        console.log("adding item to the cart");
    };

    return (
        <div className="item">
            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/8c0b6e5cdd6a313bc581e9ebc0f934c5cf25ecfe/Shop-LC-EASY-WEAR-Light-Brown-Blonde-Karen-Style-Wig.jpg" alt="product" />
            <h5>The "I'm Stressed Wig"</h5>

            <label className="total">$ Total</label>
            <label className="price">$ Price</label>

            <div className="controls">
            <QuantityPicker/>
            <button onClick={handleAdd} className="btn btn-sm btn-dark btn-add">
                Add
            </button>
            </div>
        </div>

        
    );
};

export default Item;