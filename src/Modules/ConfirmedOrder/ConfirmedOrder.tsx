// import { useSelector } from 'react-redux';
// import { RootState } from '../../Store/Store';
import Model from '../../Componets/Model';
import Navbar from '../../Componets/Navbar';
import ConfirmedOrderSVG from '../../svg/ConfirmedOrderSVG';

const ConfirmedOrder = () => {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  return (
    <div className='leading-8 border-black m-3'>
      <Navbar />
      <div className='flex justify-center items-center m-auto'>
        <h1 className='text-green-500 text-3xl'>Your order is placed !</h1>
        <ConfirmedOrderSVG
          style={{
            width: '40px',
            padding: '5px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid green',
          }}
        />
      </div>
      <p className='text-slate-500'>Total Quantity : 2</p>
      <h1 className='text-3xl'>Total Cart Value : $4999.00</h1>
      <p className='text-xl'>
        Order Placed on :{' '}
        <span className='text-slate-500  hover:text-teal-600'>
          {' '}
          {date} - {month} - {year}
        </span>
      </p>
      <p className='text-l '>
        Expected Delivery on :{' '}
        <span className='text-slate-500 hover:text-teal-600'>
          {date + 2} - {month} - {year}
        </span>
      </p>
      <p>
        Order ID :{' '}
        <span className='text-slate-500 hover:text-teal-600'>
          67ASD3F568QW90N
        </span>
      </p>
      <h1 className='w-4/5 m-auto'>
        Address :{' '}
        <span className='text-start text-slate-500  hover:text-teal-600'>
          Ansorbit TechnoLabs Pvt. Ltd, 713 - Fortune Busines Hub, near science
          city, Ahmedabad{' '}
        </span>
      </h1>
      <div className='flex mx-auto my-2 justify-center bg-gradient-to-r from-indigo-500 h-10 p-2 items-center'>
        <p className='text-3xl '>Order details </p>
      </div>
      <Model />
    </div>
  );
};
export default ConfirmedOrder;
