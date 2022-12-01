import { RootState } from '../../Store/Store';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuanity,
  decrementQuantiy,
  removeFromCart,
} from '../../Store/ProductSlice';
import Total from '../../Componets/Total';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HomePageLogo from '../../svg/HomePageLogo';
import ConfirmLogo from '../../svg/ConfirmLogo';

const Cart = () => {
  const ProductList = useSelector((state: RootState) => state.Product.value);
  // const total = useSelector((state: RootState) => state.Product.total);
  const [homeButtonValue, setHomeButtonValue] = useState(false);
  const [confirmButtonValue, setConfirmButtonValue] = useState(false);
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
            className='flex justify-evenly items-center my-1 border-b-[2px] h-64  border-slate-300'
          >
            <div className=' p-2 flex justify-content items-center flex-col'>
              <div className='w-60 h-32 border'>
                <img className='w-full h-full' src={ele.thumbnail} alt='' />
              </div>
              <div className='w-60 mb-2 p-4 border flex justify-content items-center flex-col'>
                <p className='text-xs'>{ele.brand}</p>
                <h1 className='text-2xl w-56'>{ele.title}</h1>
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
            <Total />
          </h1>
        </div>
      </div>
      <div className='flex border w-3/5 h-16 mx-auto my-10 justify-evenly items-center'>
        <button
          onMouseEnter={() => setHomeButtonValue(true)}
          onMouseLeave={() => setHomeButtonValue(false)}
          className='border h-10 px-6 w-10 py-3 flex justify-center items-center rounded-lg text-xl'
        >
          {homeButtonValue ? (
            <Link to='/'>
              <HomePageLogo
                style={{
                  width: '50px',
                  height: '40px',
                  padding: '5px',
                  border: '1px solid',
                  borderRadius: '10px',
                }}
              />
            </Link>
          ) : (
            <p className='h-10 px-10 py-3 w-10 flex justify-center items-center text-white rounded-lg bg-blue-700'>
              Home
            </p>
          )}
        </button>
        <button
          onMouseEnter={() => setConfirmButtonValue(true)}
          onMouseLeave={() => setConfirmButtonValue(false)}
          className='h-10 px-6 py-6flex justify-center items-center rounded-lg text-xl'
        >
          {confirmButtonValue ? (
            <Link to='/about'>
              <ConfirmLogo
                style={{
                  width: '40px',
                  height: '40px',
                  padding: '5px',
                  border: '1px solid grey',
                  borderRadius: '10px',
                }}
              />
            </Link>
          ) : (
            <p className='h-10 px-14 py-3 w-10 flex justify-center items-center text-white rounded-lg bg-blue-700'>
              Confirm
            </p>
          )}
        </button>
      </div>
    </div>
  );
};
export default Cart;
