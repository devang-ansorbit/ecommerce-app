import { useSelector } from 'react-redux';
import { RootState } from '../Store/Store';

export default function Total() {
  const cart = useSelector((state: RootState) => state.Product.value);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let total = 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let totalQuantity = 0;

  cart.forEach((product) => {
    total += product.price * product.quantity;
    totalQuantity += product.quantity;
  });
  return (
    <div>
      <h1>${total}.00</h1>
    </div>
  );
}
