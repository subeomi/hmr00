import { useState } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

const Kiosk = () => {

    const [wanted, setWanted] = useState(null)
    const [target, setTarget] = useState({id:0})
    const [items, setItems] = useState([])

    const requestViewProduct = (id) => {
        console.log("View >> ", id)
        setTarget({id:id})
    }

    const requestPick = (product) => {
        console.log("pick >> ", product)
        setWanted(product)

        const targetDupl = items.filter(item => item.id === product.id)

        if(targetDupl.length === 0) {
            setItems([...items, {id:product.id, pname:product.pname, price:product.price, qty:1}])
            console.log("추가")
            return
        }

        targetDupl[0].qty += 1
        setItems([...items])

    }

    return ( 
        <>
        <div className="flex">
        <ProductList requestViewProduct={requestViewProduct}></ProductList>
        <Cart items={items}></Cart>
        </div>
        <ProductDetail target={target} requestPick={requestPick}></ProductDetail>
        </>
     );
}
 
export default Kiosk;