import { RootState } from '../../Store/Store';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuanity,
  decrementQuantiy,
  removeFromCart,
  confirmedOrder,
} from '../../Store/ProductSlice';
import Total from '../../Componets/Total';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import HomePageLogo from '../../svg/HomePageLogo';
import ConfirmLogo from '../../svg/ConfirmLogo';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const productList = useSelector((state: RootState) => state.Product.value);
  // const total = useSelector((state: RootState) => state.Product.total);
  const [homeButtonValue, setHomeButtonValue] = useState(false);
  const [confirmButtonValue, setConfirmButtonValue] = useState(false);
  let totalQuantities: number = 0;

  const dispatch = useDispatch();

  productList.forEach((pro) => {
    totalQuantities = totalQuantities + pro.quantity;
    console.log('Total Qut:', totalQuantities);
  });
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/loading', { state: { route: '/confirmedOrder' } });
    dispatch(confirmedOrder(productList));
  };
  const handleHome = () => {
    navigate('/loading', { state: { route: '/' } });
  };
  const handleDecrement = (id: number, qnty: number) => {
    if (qnty === 1) {
      console.log('Hello I am 1');
      alert('You wanna remove it from yuor cart');
      dispatch(removeFromCart(id));
    } else {
      dispatch(decrementQuantiy(id));
    }
  };
  if (productList.length === 0) {
    return <EmptyCart />;
  } else {
    return (
      <div className='border' id='body'>
        <div className='border rounded-xl my-5 w-full bg-gradient-to-r from-zinc-500 m-auto p-1 shadow-gray-800 hover:bg-slate-900 hover:text-white'>
          <h1 className='text-4xl font-extrabold tracking-wide'>
            Your Cart ({totalQuantities} Products)
          </h1>
        </div>
        <div className='shadow-xl mx-auto my-4 w-2/5 p-5 flex flex-col justify-center '>
          {productList.map((ele, index) => (
            <div
              key={index}
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
                    onClick={() => {
                      handleDecrement(ele.id, ele.quantity);
                    }}
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
        <div className='flex border rounded-lg w-3/5 h-16 mx-auto my-10 justify-evenly items-center'>
          <button
            onMouseEnter={() => setHomeButtonValue(true)}
            onMouseLeave={() => setHomeButtonValue(false)}
            className='border h-10 px-6 w-10 py-3 flex justify-center items-center rounded-lg text-xl'
          >
            {homeButtonValue ? (
              <button onClick={() => handleHome()}>
                <HomePageLogo
                  style={{
                    width: '60px',
                    height: '40px',
                    padding: '5px',
                    border: '1px solid',
                    borderRadius: '10px',
                  }}
                />
              </button>
            ) : (
              <button className='h-10 px-14 py-3 w-10 flex justify-center items-center text-white rounded-lg bg-blue-700'>
                Home
              </button>
            )}
          </button>
          <button
            onMouseEnter={() => setConfirmButtonValue(true)}
            onMouseLeave={() => setConfirmButtonValue(false)}
            className='h-10 px-6 py-6flex justify-center items-center rounded-lg text-xl'
          >
            {confirmButtonValue ? (
              <button onClick={() => handleConfirm()}>
                <ConfirmLogo
                  style={{
                    width: '60px',
                    height: '40px',
                    padding: '5px',
                    border: '1px solid lightgrey',
                    borderRadius: '10px',
                  }}
                />
              </button>
            ) : (
              <button className='h-10 px-14 py-3 w-10 flex justify-center items-center text-white rounded-lg bg-blue-700'>
                Confirm
              </button>
            )}
          </button>
        </div>
      </div>
    );
  }
};
export default Cart;
