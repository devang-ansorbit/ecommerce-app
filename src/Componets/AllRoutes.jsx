import { Routes,Route } from 'react-router-dom';
import Cart from '../Modules/Cart/Cart';
import ConfirmedOrder from '../Modules/ConfirmedOrder/ConfirmedOrder';
import ProductList from '../Modules/ProductList/ProductList';


const AllRoutes = () => {
    return (
      <div className=' w-11/12 border m-auto'>
        <Routes>
          <Route path='/' element={<ProductList />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/confirmedOrder' element={<ConfirmedOrder />}></Route>
        </Routes>
      </div>
    );
}

export default AllRoutes ;