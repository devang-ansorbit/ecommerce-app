import { RootState } from '../../Store/Store';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuanity,
  decrementQuantiy,
  removeFromCart,
} from '../../Store/ProductSlice';

const Cart = () => {
  const ProductList = useSelector((state: RootState) => state.Product.value);
  const total = useSelector((state: RootState) => state.Product.total);
  let totalQuantities: number = 0;

  const dispatch = useDispatch();

  ProductList.forEach((pro) => {
    totalQuantities = totalQuantities + pro.quantity;
    console.log('Total Qut:', totalQuantities);
  });

  return (
    <div className='border' id='body'>
      <div className='border rounded-xl my-5 w-3/5 m-auto p-1 shadow-gray-800 hover:bg-slate-900 hover:text-white'>
        <h1 className='text-4xl font-extrabold tracking-wide'>
          Your Cart ({totalQuantities} Products)
        </h1>
      </div>
      <div className='shadow-xl mx-auto my-4 w-2/5 p-5 flex flex-col justify-center '>
        {ProductList.map((ele) => (
          <div
            key={ele.id}
            className='flex justify-evenly items-center my-1 border-b-[2px] h-56  border-slate-300'
          >
            <div className='border p-2'>
              <div className='w-52 h-32 border'>
                <img className='w-full h-full' src={ele.thumbnail} alt='' />
              </div>
              <div className='w-52 border text-l '>
                <p className='text-xs'>{ele.brand}</p>
                <h1 className='text-2xl'>{ele.title}</h1>
              </div>
            </div>

            <div className='flex flex-col w-48 h-48 justify-evenly items-center p-1'>
              <div className='w-32  flex justify-between items-center'>
                <h1>Price : </h1>
                <h1 className='text-xl'>${ele.price}.00</h1>
              </div>

              <div className='flex w-36 justify-between items-center'>
                <button
                  className='rounded-full border w-5 h-5 flex justify-center items-center font-bold text-xl text-center border-black  hover:bg-black hover:text-white'
                  onClick={() => dispatch(decrementQuantiy(ele.id))}
                >
                  -
                </button>
                <p>
                  Quantity : <span className='text-xl'> {ele.quantity}</span>
                </p>
                <button
                  className='rounded-full border w-5 h-5 flex justify-center items-center font-bold text-xl text-center border-black hover:bg-black hover:text-white'
                  onClick={() => {
                    dispatch(incrementQuanity(ele.id));
                  }}
                >
                  +
                </button>
              </div>

              <div className='w-auto  flex justify-between items-center'>
                <h1>Total Price : </h1>
                <h1 className='text-xl ml-1 tracking-wide'>
                  ${ele.price * ele.quantity}.00
                </h1>
              </div>

              <div className='my-1'>
                <button
                  onClick={() => {
                    dispatch(removeFromCart(ele.id));
                  }}
                  className='rounded px-6 py-1 border hover:bg-red-600 hover:text-white border-red-600 text-red-600'
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className='w-8/12 mx-auto mt-3 h-14 flex justify-between'>
          <div className='text-4xl tracking-widest'>Total :</div>
          <h1 className='text-4xl font-bold tracking-wider h-14 text-right'>
            ${total}.00
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Cart;
