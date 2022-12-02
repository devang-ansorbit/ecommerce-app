import React from 'react';
import { Navigate } from 'react-router-dom';
// import ProductList from '../ProductList/ProductList';

export default function EmptyCart() {
  const [emptyCartValue, setEmptyCartValue] = React.useState(false);
  setTimeout(() => {
    setEmptyCartValue(true);
  }, 5000);
  return (
    <div className='w-full h-full'>
      {emptyCartValue ? (
        <Navigate to='/' />
      ) : (
        <div
          className='border border-red-700 w-full h-full'
          style={{
            backgroundImage: `url(https://i.gifer.com/AIq4.gif)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <div className='w-1/3 flex  justify-evenly items-center mx-auto my-56'>
            <h1 className='text-3xl font-bold'>Opps ! </h1>
            <div className='w-20 h-20'>
              <img
                src='https://thumbs.gfycat.com/LonelyDazzlingBoar-size_restricted.gif'
                alt='cart-value-empty'
                className='w-full h-full bg-black'
              />
            </div>
            <h1 className='text-3xl font-bold'>Your Cart is empty !</h1>
          </div>
        </div>
      )}
    </div>
  );
}
