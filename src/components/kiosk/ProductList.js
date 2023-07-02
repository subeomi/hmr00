import axios from "axios"
import { useEffect, useState } from "react"

const ProductList = ({requestViewProduct}) => {

    const [obj, setObj] = useState([])

    useEffect(() => {
        // 이 안에는 제약이 있어 await 사용 불가능
        axios.get('http://localhost/products').then(res => {
            // http://localhost/products의 JSON 데이터가 찍힘
            console.log("effect inside", res.data)
            // setObj로 상태가 변경, 리렌더링이 되므로 console.log(obj)가 한번 더 찍히고 3개의 로그로 끝.
            setObj(res.data)
        })
    }, [])

    if (obj.length === 0) {
        return(
            <div className="text-4xl">Loading . . . . . . .</div>
        )
    }
    
    return ( 
        <div
        className="w-2/3 bg-slate-50 p-3 h-full">
            <div>Product List</div>
            <ul
            className="flex flex-wrap">

                {obj.map(p => <li 
                key={p.id}
                className="w-1/5 h-[20vh] bg-orange-100 p-3 m-3"
                onClick={() => requestViewProduct(p.id)}
                >
                    {p.id} - {p.pname}<br/>
                    {p.price}
                </li>)}

            </ul>
        </div>
     );
}
 
export default ProductList;