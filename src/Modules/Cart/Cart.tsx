import { RootState } from '../../Store/Store';
import { useSelector, useDispatch } from 'react-redux'
import { incrementQuanity, decrementQuantiy, removeFromCart } from '../../Store/ProductSlice';


const Cart = () => {
    const ProductList = useSelector((state: RootState) => state.Product.value);
    const total = useSelector((state: RootState) => state.Product.total);
    console.log("I am Total:", total)
    // const count = useSelector((state : RootState) => state.Product)
    // console.log('Count',count)
    const dispatch = useDispatch();

    return (
        <div className='border-red-500 border m-auto w-2/5 '>
            {
                ProductList.map((ele) => (
                    <div key={ele.id} className='flex justify-evenly items-center my-1 border-b-[2px] h-48 p-1 border-slate-300'>
                        <div className='w-48 h-32 border-green-700 border'>
                            <img className='w-full h-full' src={ele.thumbnail} alt="" />
                        </div>

                        <div className='flex flex-col justify-center items-center border p-1'>

                            <div className='w-56 border text-l '>
                                <p className='text-xs'>{ele.brand}'s</p>
                                <h1 className='text-2xl'>{ele.title}</h1>
                            </div>

                            <div className='border w-32  flex justify-between items-center'>
                                <h1>Price : </h1>
                                <h1 className='text-xl'>${ele.price}.00</h1>
                            </div>

                            <div className='flex w-28 border  justify-between'>
                                <button onClick={() => dispatch(decrementQuantiy(ele.id))}>-</button>
                                <p>Quantity : {ele.quantity}</p>
                                <button onClick={() => { dispatch(incrementQuanity(ele.id)) }}>+</button>
                            </div>

                            <div className='my-1'>
                                <button onClick={() => { dispatch(removeFromCart(ele.id)) }} className='rounded px-6 py-1 border hover:bg-red-600 hover:text-white border-red-600 text-red-600'>Remove</button>
                            </div>
                        </div>
                    </div>
                ))
            }
            <h1 className='text-2xl'>{total}</h1>
        </div>
    )
}
export default Cart