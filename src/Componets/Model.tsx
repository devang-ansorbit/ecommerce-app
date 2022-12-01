/* eslint-disable react/no-unescaped-entities */
import { useSelector } from 'react-redux';
import { RootState } from '../Store/Store';

const Model = () => {
  const productList = useSelector(
    (state: RootState) => state.Product.confirmedValue
  );
  console.log(productList);
  if (productList === undefined) {
    return null;
  } else {
    return (
      <div className='border rounded w-2/5 mx-auto p-2'>
        {productList.map((product) => (
          <div
            key={product.id}
            className=' flex m-3 rounded-md shadow-xl border justify-evenly p-3'
          >
            <div className='w-56 h-36'>
              <img className='w-full h-full' src={product.thumbnail} alt='' />
            </div>
            <div>
              <h1 className='text-sm'>{product.brand}'s</h1>
              <h1 className='text-2xl  hover:text-teal-600'>{product.title}</h1>
              <h1 className='text-sm  hover:text-teal-600'>
                ({product.category})
              </h1>
              <h1 className='text-xl  hover:text-teal-600'>
                Quantity : {product.quantity}
              </h1>
              <h1 className=' hover:text-teal-600'>Price : {product.price}</h1>
              <h1 className='text-xl  hover:text-teal-600'>
                Total Price: {product.quantity * product.price}
              </h1>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
// style={{
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100',
//         background: 'rgba(0,0,0,0.5)',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
export default Model;
