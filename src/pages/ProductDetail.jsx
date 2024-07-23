import { useParams } from "react-router-dom";
import Flex from "../components/Flex";
import Container from "../components/Container";
import Input from "../components/Input";
import axios from "axios";
import { useEffect, useState } from "react";


export default function ProductDetail() {
  const { id } = useParams();
  const [product , setProduct] = useState({});

    const getDada = async () => {

        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return response;
    }

    useEffect(() => {
        getDada().then((res) => setProduct(res.data));
    }, []);

  return (
    <Flex as="section" className={"py-5"}>
      <Container className="my-5 mx-auto">
        <div className="grid grid-cols-2 py-5" >
          <Flex className="w-full grow" justifyContent={"center"}>
            <img className="w-[500px] overflow-hidden px-6" src={product.image} alt="" />
          </Flex>
          <Flex direction={"column"} justifyContent={"center"} alignItems="flex-start" className="w-[636px] px-6" >
            <div className="mb-1">SKU: BST-498</div>
            <h1 className="text-5xl mb-2 font-bold">{product.title}</h1>
            <div className="price text-xl mb-12">
              <span className="line-through mr-2">$45.00</span>
              <span>{product.price}</span>
            </div>
            <p className="mb-4 text-xl font-light ">
              {product.description}
            </p>
            <Input />
          </Flex>
        </div>
      </Container>
    </Flex>
  );
}
