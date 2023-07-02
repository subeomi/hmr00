import { useEffect, useState } from "react";

const Cart = ({items}) => {

    const [picks, setPicks] = useState([])
    
    
    // useEffect(() => {
        
    //     console.log("Cart useEffect. . . . .")
    //     // 처음에 id: undefined로 가져오기 때문
    //     if(!id || id === 0){
    //         return
    //     }

    //     const targetDupl = items.filter(item => item.id === id)

    //     if(targetDupl.length === 0) {
    //         setItems([...items, {id, pname, price, qty:1}])
    //         console.log("추가")
    //         return
    //     }

    //     targetDupl[0].qty += 1
    //     setItems([...items])

    // }, [id, pname, price])
    // 중복 상품을 가져오면 id, pname, price가 이전 것과 같기 때문에 useEffect가 동작하지 않는다..

    useEffect(() => {

        setPicks([...items])

    }, [items])


    const getTotal = (arr) => {
        if(!arr || arr.length === 0) {
            return 0
        }
        let sum = 0
    
        // reduce
        for(const ele of arr){
            sum += (ele.price * ele.qty)
        }
        return sum
    }

    const changeQty = (id, amount) => {
        console.log("change qty...")

        const target = picks.filter(pick => pick.id === id)[0]
        target.qty += amount

        if(target.qty === 0) {
            setPicks(picks.filter(pick => pick.id !== id))
            return
        }
        setPicks([...picks])
    }

    return ( 
        <div>
            <div>Cart</div>
            <ul>
                {picks.map(pick => 
                <li 
                className="m-3 p-3 bg-green-100"
                key={pick.id}>
                    {pick.id} - {pick.pname}<br/>

                    <button
                    className="m-1 p-1 bg-orange-200"
                    onClick={() => changeQty(pick.id, 1)}
                    >+</button>

                    {pick.qty}

                    <button
                    className="m-1 p-1 bg-orange-200"
                    onClick={() => changeQty(pick.id, -1)}
                    >-</button>

                     - {pick.price * pick.qty}
                </li>    
                )}
            </ul>
            <div>합계 : {getTotal(picks)}</div>

            <button
            className="m-3 p-3 bg-blue-100"
            >결제</button>

            <button
            className="m-3 p-3 bg-red-100"
            onClick={() => setPicks([])}
            >비우기</button>
        </div>
     );
}
 
export default Cart;