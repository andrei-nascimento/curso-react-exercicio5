import { itemsList } from "../Items/ItemsList"
import "./Items.css"
import Item from "../Item/Item"

function Items(props) {
    const { updateTotalPrice } = props;

    function buildItemsList() {
        return itemsList.map(item => {
            return (
                <Item 
                    name={item.name}
                    icon={item.icon}
                    price={item.price}
                    updateTotalPrice={(price) => updateTotalPrice(price)}
                />
            )
        })
    }

    const items = buildItemsList();
    return (
        <div className="Items">
            {items}
        </div>
    )
}

export default Items;