import axios from "axios";
import ProductGridItem from "./ProductGridItem";
import { useEffect, useState } from "react";


export default function ProductGrid() {
    const [products , setProducts] = useState([]);

    const getDada = async () => {

        const response = await axios.get('https://fakestoreapi.com/products');
        return response;
    }

    useEffect(() => {
        getDada().then((res) => setProducts(res.data));
    }, []);

    // console.log(product);

    return (
        <section className="grid grid-cols-5 gap-5 py-8">
            {products.map((item) => (
                <ProductGridItem key={item.id} product={item}/>
            ))}
        </section>
    )
}