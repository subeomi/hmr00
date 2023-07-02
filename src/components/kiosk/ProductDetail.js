import axios from "axios"
import { useEffect, useState } from "react"

const initState = {
    id: 0,
    pname: '',
    price: 0,
    info : ''
}

const ProductDetail = ({requestPick, target}) => {

    const [product, setProduct] = useState(initState)

    useEffect(() => {

        console.log("useEffect >> ", target)

        const id = target.id

        if(id !== 0){
            axios.get(`http://localhost:80/products/${id}`).then(res => {
                setProduct(res.data)
            })
        }
    // useEffect 2번째 파라미터 - 조건
    // 빈 배열 -> 최초 렌더링 시
    // [id] -> id가 변경 시
    }, [target])

    if (product.id === 0) {
        return null;
    }

    return ( 
        <div>
            <div>Product Detail</div>
            <div className="m-3 p-3">
                <div>ID {product.id}</div>
                <div>PNAME {product.pname}</div>
                <div>PRICE {product.price}</div>
                <div>INFO {product.info}</div>

            <button 
            className="m-3 p-3 bg-red-200"
            onClick={() => {requestPick(product)}}
            >ADD Cart</button>
            </div>
        </div>
     );
}
 
export default ProductDetail;