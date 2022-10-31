import { useState } from "react";
import "./Item.css"

function Item(props) {
    const [selected, setSelected] = useState(false);
    const { icon, name, price, updateTotalPrice } = props;

    function handleSelect() {
        const isSelected = !selected;
        if(isSelected) updateTotalPrice(price);
        else updateTotalPrice(price * -1)

        setSelected(isSelected)
    }

    function checkSelected() {
        let classes = "item";
        if(selected) {
            classes = "item selected"
        }
        return classes;
    }

    return (
        <>
            <div className="Item">
                <div className={checkSelected()} onClick={handleSelect}>
                <p className="icon">{icon}</p>
                <p className="name">{name}</p>
                <p className="price">: R${price.toFixed(2)}</p>
                </div>
            </div>
        </>
    )
}

export default Item;