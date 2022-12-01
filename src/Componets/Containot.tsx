// import { stringify } from 'querystring';
import React, { useEffect } from 'react';
import Rating from '../Modules/ProductList/Rating';
import { Product } from '../Types/ProductResponce';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Store/ProductSlice';
import { RootState } from '../Store/Store';

const Containor = () => {
  const [arr, setArr] = React.useState<Product[]>([]);
  const [smartPhones, setSmartPhones] = React.useState<Product[]>([]);
  const [lapTop, setLapTop] = React.useState<Product[]>([]);
  const [fraGrances, setFraGrances] = React.useState<Product[]>([]);
  const [homeDecoration, setHomeDecoration] = React.useState<Product[]>([]);
  const [groceries, setGroceries] = React.useState<Product[]>([]);
  const dispatcher = useDispatch();
  const productList = useSelector((state: RootState) => state.Product.value);

  // const [selectButton, setSelectButton] = useState(false);

  console.log('products:', productList);
  const addButton = (pro: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let flag: boolean = false;
    productList.forEach((product) => {
      if (product.id === pro.id) {
        flag = true;
      }
    });
    if (flag) {
      alert('Opps! This product is already in the cart.');
      console.log('SORRY');
    } else {
      // setSelectButton(true);
      dispatcher(addToCart(pro));
    }
  };

  useEffect(() => {
    void fetch('https://dummyjson.com/products')
      .then(async (res) => await res.json())
      .then((data) => setArr(data.products));
  }, []);

  useEffect(() => {
    setSmartPhones(arr.filter((ele) => ele.category === 'smartphones'));
    setLapTop(arr.filter((ele) => ele.category === 'laptops'));
    setFraGrances(arr.filter((ele) => ele.category === 'fragrances'));
    setHomeDecoration(
      arr.filter(
        (ele) =>
          ele.category === 'home-decoration' &&
          ele.title !== 'Handcraft Chinese style'
      )
    );
    setGroceries(arr.filter((ele) => ele.category === 'groceries'));
  }, [arr]);
  console.log(arr);

  // arr.forEach((ele) => {
  //   let bag: any = 'buttonValue' + ele.id;
  //   [bag, setBag] = useState(true);
  // });

  return (
    <div className='mt-5 w-11/12 mx-auto'>
      {/* section -1 */}
      <div className=''>
        <div className='w-112 h-4/5'></div>
        <h1 className='text-3xl my-5 underline decoration-2'>SmartPhones</h1>
        <div className='grid g  grid-cols-3 grid-rows'>
          {smartPhones.map((pro) => (
            <div
              className='border p-5 h-auto flex flex-col justify-center m-2 rounded-lg bg-slate-100'
              key={pro.id}
            >
              <div className='w-4/5 h-48 m-auto'>
                <img
                  className='w-full h-full'
                  src={pro.thumbnail}
                  alt='cover'
                />
              </div>
              <h1 className='text-2xl'>{pro.title}</h1>
              <p className='text-sm my-1.5 h-12 text-slate-600 p-1 '>
                {pro.description}
              </p>
              <div className='flex bg-white shadow-md p-2 my-10 justify-around items-center'>
                <div className='flex  w-36 justify-between items-center'>
                  <div className='w-48 '>
                    <h1 className=' font-sans text-xl  font-bold'>
                      ${pro.price}{' '}
                      <span className='text-slate-700 text-xs  '>
                        ({pro.discountPercentage} % off )
                      </span>
                    </h1>
                  </div>
                </div>
                <Rating rating={pro.rating} />
              </div>
              <div className='flex my-5 justify-evenly'>
                <button className=' hover:border-blue-700 hover:border hover:bg-white border border-blue-700  text-white bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-1.5'>
                  More Info
                </button>
                <button
                  onClick={() => addButton(pro)}
                  className=' hover:border-blue-700 hover:border border  hover:bg-white border-blue-700  text-white bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-2'
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <h1 className='text-3xl my-5  underline decoration-2'>Laptops</h1>
        <div className='grid g  grid-cols-3 grid-rows'>
          {lapTop.map((pro) => (
            <div
              className='border p-10 flex flex-col justify-center m-2 rounded-lg bg-slate-100'
              key={pro.id}
            >
              <div className='w-4/5 h-48 m-auto'>
                <img
                  className='w-full h-full'
                  src={pro.thumbnail}
                  alt='cover'
                />
              </div>
              <h1 className='text-2xl'>{pro.title}</h1>
              <p className='text-sm my-1.5 h-12 text-slate-600 p-1 '>
                {pro.description}
              </p>
              <div className='flex  bg-white shadow-md p-2 my-10 justify-around items-center'>
                <div className='flex  w-36 justify-between items-center'>
                  <div className='w-48 '>
                    <h1 className=' font-sans text-xl  font-bold'>
                      ${pro.price}{' '}
                      <span className='text-slate-700 text-xs  '>
                        {' '}
                        ({pro.discountPercentage} % off )
                      </span>
                    </h1>
                  </div>
                </div>
                <Rating rating={pro.rating} />
              </div>
              <div className='flex my-5 justify-evenly'>
                <button className=' hover:border-blue-700 hover:border hover:bg-white text-white border border-blue-700 bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-1.5'>
                  More Info
                </button>
                <button
                  onClick={() => dispatcher(addToCart(pro))}
                  className=' hover:border-blue-700 hover:border hover:bg-white text-white border  border-blue-700 bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-2'
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <h1 className='text-3xl my-5  underline decoration-2'>
          Ossam Fragrances
        </h1>
        <div className='grid g  grid-cols-3 grid-rows'>
          {fraGrances.map((pro) => (
            <div
              className='border p-10 flex flex-col justify-center m-2 rounded-lg bg-slate-100'
              key={pro.id}
            >
              <div className='w-4/5 h-48 m-auto'>
                <img
                  className='w-full h-full'
                  src={pro.thumbnail}
                  alt='cover'
                />
              </div>
              <h1 className='text-2xl'>{pro.title}</h1>
              <p className='text-sm my-1.5 h-12 text-slate-600 p-1 '>
                {pro.description}
              </p>
              <div className='flex  bg-white shadow-md p-2 my-10 justify-around items-center'>
                <div className='flex  w-36 justify-between items-center'>
                  <div className='w-48 '>
                    <h1 className=' font-sans text-xl  font-bold'>
                      ${pro.price}{' '}
                      <span className='text-slate-700 text-xs  '>
                        {' '}
                        ({pro.discountPercentage} % off )
                      </span>
                    </h1>
                  </div>
                </div>
                <Rating rating={pro.rating} />
              </div>

              <div className='flex my-5 justify-evenly'>
                <button className=' hover:border-blue-700 hover:border hover:bg-white text-white border border-blue-700 bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-1.5'>
                  More Info
                </button>
                <button
                  onClick={() => dispatcher(addToCart(pro))}
                  className=' hover:border-blue-700 hover:border hover:bg-white text-white border border-blue-700 bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-1.5'
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <h1 className='text-3xl my-5  underline decoration-2'>
          Home Decoration
        </h1>
        <div className='grid g  grid-cols-3 grid-rows'>
          {homeDecoration.map((pro) => (
            <div
              className='border p-10 flex flex-col justify-center m-2 rounded-lg bg-slate-100'
              key={pro.id}
            >
              <div className='w-4/5 h-48 m-auto'>
                <img
                  className='w-full h-full'
                  src={pro.thumbnail}
                  alt='cover'
                />
              </div>
              <h1 className='text-2xl'>{pro.title}</h1>
              <p className='text-sm my-1.5 h-12 text-slate-600 p-1 '>
                {pro.description}
              </p>
              <div className='flex  bg-white shadow-md p-2 my-10 justify-around items-center'>
                <div className='flex  w-36 justify-between items-center'>
                  <div className='w-48 '>
                    <h1 className=' font-sans text-xl  font-bold'>
                      ${pro.price}{' '}
                      <span className='text-slate-700 text-xs  '>
                        {' '}
                        ({pro.discountPercentage} % off )
                      </span>
                    </h1>
                  </div>
                </div>
                <Rating rating={pro.rating} />
              </div>

              <div className='flex my-5 justify-evenly'>
                <button className=' hover:border-blue-700 hover:border hover:bg-white text-white border border-blue-700 bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-1.5'>
                  More Info
                </button>
                <button
                  onClick={() => dispatcher(addToCart(pro))}
                  className=' hover:border-blue-700 hover:border hover:bg-white text-white border border-blue-700 bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-1.5'
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <h1 className='text-3xl my-5  underline decoration-2'>
          Kitchen Groceries
        </h1>
        <div className='grid g  grid-cols-3 grid-rows'>
          {groceries.map((pro) => (
            <div
              className='border p-10 flex flex-col justify-center m-2 rounded-lg bg-slate-100'
              key={pro.id}
            >
              <div className='w-4/5 h-48 m-auto'>
                <img
                  className='w-full h-full'
                  src={pro.thumbnail}
                  alt='cover'
                />
              </div>
              <h1 className='text-2xl'>{pro.title}</h1>
              <p className='text-sm my-1.5 h-12 text-slate-600 p-1 '>
                {pro.description}
              </p>
              <div className='flex  bg-white shadow-md p-2 my-10 justify-around items-center'>
                <div className='flex  w-36 justify-between items-center'>
                  <div className='w-48 '>
                    <h1 className=' font-sans text-xl  font-bold'>
                      ${pro.price}{' '}
                      <span className='text-slate-700 text-xs  '>
                        {' '}
                        ({pro.discountPercentage} % off )
                      </span>
                    </h1>
                  </div>
                </div>
                <Rating rating={pro.rating} />
              </div>

              <div className='flex my-5 justify-evenly'>
                <button className=' hover:border-blue-700 hover:border hover:bg-white text-white border border-blue-700 bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-1.5'>
                  More Info
                </button>
                <button
                  onClick={() => dispatcher(addToCart(pro))}
                  className=' hover:border-blue-700 hover:border hover:bg-white text-white border border-blue-700 bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-1.5'
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Containor;
