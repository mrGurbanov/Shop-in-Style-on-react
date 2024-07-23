import { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Input() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 100) {
      setQuantity(value);
    }
  };

  const incQuantity = () => {
    if (quantity < 100) {
      setQuantity(state => state + 1);
    }
  };

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(state => state - 1);
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center mr-2">
        <button onClick={decQuantity} className="px-5 py-1 border rounded-full">-</button>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          max="100"
          step="1"
          className="w-16 text-center no-spinners appearance-none bg-white "
        />
        <button onClick={incQuantity} className="px-4 py-1 border rounded-full">+</button>
      </div>
      <Button onClick={() => {}} className="flex items-center py-[6px] px-[12px] border border-[#212529] rounded-lg cursor-pointer hover:bg-[black] hover:text-white duration-[200ms]">
        <FaCartShopping className="mr-1" />
        <Link to={"/"}>Add to cart</Link>
      </Button>
    </div>
  );
}