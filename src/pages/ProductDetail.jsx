import { useParams } from "react-router-dom";
import Flex from "../components/Flex";
import Container from "../components/Container";
import Input from "../components/Input";

export default function ProductDetail() {
  // const { id } = useParams();

  return (
    <Flex as="section" className={"py-5"}>
      <Container className="my-5 mx-auto">
        <div className="grid grid-cols-2 ">
          <div>
            <img src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="" />
          </div>
          <Flex direction={"column"} justifyContent={"center"} className="w-full" >
            <div flex className="tetx-left">SKU: BST-498</div>
            <h1>Shop item template</h1>
            <div className="price">
              <span className="line-through">$45.00</span>
              <span>$40.00</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem
              modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis
              delectus ipsam minima ea iste laborum vero?
            </p>
            <Input />
          </Flex>
        </div>
      </Container>
    </Flex>
  );
}
