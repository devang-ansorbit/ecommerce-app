import { useNavigate } from 'react-router-dom';
import '../module.css';
import { RootState } from '../Store/Store';
import { useSelector } from 'react-redux';
// import Loading from './Loading';
// import Cart from '../Modules/Cart/Cart';

const Navbar = () => {
  const productList = useSelector((state: RootState) => state.Product.value);
  let totalQuantities: number = 0;
  let total: number = 0;
  productList.forEach((product) => {
    totalQuantities += product.quantity;
    total += product.price * product.quantity;
  });
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate('/loading', { state: { route: path } });
  };
  return (
    <div className='navbar bg-base-100 border flex bg-gradient-to-r from-zinc-500 mx-auto p-2 mb-5 justify-between sticky top-0'>
      <div className='flex-none w-2/5  h-14'>
        <h1 id='navbar_title'>Doorstep Shopping</h1>
      </div>
      <div className='flex w-1/4 h-14  justify-between p-3'>
        <h1
          className='cursor-grab hover:text-teal-700'
          onClick={() => handleClick('/')}
        >
          Home
        </h1>
        <h1
          className='cursor-grab hover:text-teal-700'
          onClick={() => handleClick('/cart')}
        >
          cart
        </h1>
        {/* <Link to='/loading'>Loading</Link> */}
      </div>
      <div className='flex-none'>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <div className='indicator hover:text-teal-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 hover:text-teal-700'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span className='badge badge-sm indicator-item'>
                {totalQuantities}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className='mt-3 card card-compact dropdown-content w-56 h-40 bg-base-100 shadow'
          >
            <div className='card-body'>
              <span className='font-bold text-lg'>{totalQuantities} Items</span>
              <span className='text-info text-xl my-1 font-bold'>
                Subtotal: ${total}.00
              </span>
              <div className='card-actions'>
                <button
                  onClick={() => {
                    handleClick('/cart');
                  }}
                  className='btn btn-primary btn-block'
                >
                  view cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
