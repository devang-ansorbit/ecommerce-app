import { Routes, Route } from 'react-router-dom';
import Cart from '../Modules/Cart/Cart';
import ConfirmedOrder from '../Modules/ConfirmedOrder/ConfirmedOrder';
import ProductList from '../Modules/ProductList/ProductList';
import Loading from './Loading';

const AllRoutes = () => {
  return (
    <div className=' w-full h-full m-auto'>
      <Routes>
        <Route path='/' element={<ProductList />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/confirmedOrder' element={<ConfirmedOrder />}></Route>
        <Route path='/loading' element={<Loading />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
