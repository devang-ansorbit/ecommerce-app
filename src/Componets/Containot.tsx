import { stringify } from 'querystring';
import React, { useEffect } from 'react';
import Rating from '../Modules/ProductList/Rating';
import { Product, ModulValueProps } from '../Types/ProductResponce';

const Containor = () => {
    const [arr, setArr] = React.useState<Product[]>([]);
    const [smartPhones, setSmartPhones] = React.useState<Product[]>([]);
    const [lapTop, setLapTop] = React.useState<Product[]>([]);
    const [fraGrances, setFraGrances] = React.useState<Product[]>([]);
    const [homeDecoration, setHomeDecoration] = React.useState<Product[]>([]);
    const [groceries, setGroceries] = React.useState<Product[]>([]);
    const [moduleValue, setModuleValue] = React.useState<ModulValueProps>({
        moduleValue: false
    });

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => setArr(data.products))
    }, [])

    useEffect(() => {
        setSmartPhones(arr.filter((ele) => {
            if (ele.category == 'smartphones') {
                return ele;
            }
        }));

        setLapTop(arr.filter((ele) => {
            if (ele.category == 'laptops') {
                return ele;
            }
        }));

        setFraGrances(arr.filter((ele) => {
            if (ele.category == 'fragrances') {
                return ele;
            }
        }));

        setHomeDecoration(arr.filter((ele) => {
            if (ele.category == 'home-decoration' && ele.title != 'Handcraft Chinese style') {
                return ele;
            }
        }));

        setGroceries(arr.filter((ele) => {
            if (ele.category == 'groceries') {
                return ele;
            }
        }));



    }, [arr])
    console.log(arr);


    return (
        <div className="mt-5">
            {/* section -1 */}
            <div className='border'>
                <div className='w-112 h-4/5 border'>

                </div>
                <h1 className='text-3xl my-5'>SmartPhones</h1>
                <div className='grid g  grid-cols-3 grid-rows'>
                    {smartPhones.map((pro) => (
                        <div className='border p-5 h-auto flex flex-col justify-center' key={pro.id}>
                            <div className='w-4/5 h-48 m-auto'>
                                <img className='w-full h-full' src={pro.thumbnail} alt="cover" />
                            </div>
                            <h1 className='text-2xl'>{pro.title}</h1>
                            <p className='text-sm my-1.5 h-12 text-slate-600 p-1 '>{pro.description}</p>
                            <div className='flex shadow-md p-2 my-10 justify-around items-center'>
                                <div className='flex  w-36 justify-between items-center'>
                                    <div className='w-48 '>
                                        <h1 className=' font-sans text-xl  font-bold'>${pro.price} <span className='text-slate-700 text-xs  '> ({pro.discountPercentage} % off )</span></h1>
                                    </div>

                                </div>
                                <Rating rating={pro.rating} />
                            </div>
                            <div className='flex my-5 justify-evenly'>
                                <button className=' hover:border-blue-700 hover:border-2 text-white bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-1.5 border-slate-900'>More Info</button>
                                <button className=' hover:border-blue-700 hover:border-2 text-white bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-2 border-slate-900'>Add to cart</button>
                            </div>
                        </div>

                    ))
                    }
                </div>

                <h1 className='text-3xl my-5'>Laptops</h1>
                <div className='grid g  grid-cols-3 grid-rows'>
                    {lapTop.map((pro) => (
                        <div className='border p-10 flex flex-col justify-center' key={pro.id}>
                            <div className='w-4/5 h-48 m-auto'>
                                <img className='w-full h-full' src={pro.thumbnail} alt="cover" />
                            </div>
                            <h1 className='text-2xl'>{pro.title}</h1>
                            <p className='text-sm my-1.5 h-12 text-slate-600 p-1 '>{pro.description}</p>
                            <div className='flex shadow-md p-2 my-10 justify-around items-center'>
                                <div className='flex  w-36 justify-between items-center'>
                                    <div className='w-48 '>
                                        <h1 className=' font-sans text-xl  font-bold'>${pro.price} <span className='text-slate-700 text-xs  '> ({pro.discountPercentage} % off )</span></h1>
                                    </div>

                                </div>
                                <Rating rating={pro.rating} />
                            </div>
                            <div className='flex my-5 justify-evenly'>
                                <button className=' hover:border-blue-700 hover:border-2 text-white bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-1.5 border-slate-900'>More Info</button>
                                <button className=' hover:border-blue-700 hover:border-2 text-white bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-2 border-slate-900'>Add to cart</button>
                            </div>
                        </div>

                    ))
                    }
                </div>

                <h1 className='text-3xl my-5'>Ossam Fragrances</h1>
                <div className='grid g  grid-cols-3 grid-rows'>
                    {fraGrances.map((pro) => (
                        <div className='border p-10 flex flex-col justify-center' key={pro.id}>
                            <div className='w-4/5 h-48 m-auto'>
                                <img className='w-full h-full' src={pro.thumbnail} alt="cover" />
                            </div>
                            <h1 className='text-2xl'>{pro.title}</h1>
                            <p className='text-sm my-1.5 h-12 text-slate-600 p-1 '>{pro.description}</p>
                            <div className='flex shadow-md p-2 my-10 justify-around items-center'>
                                <div className='flex  w-36 justify-between items-center'>
                                    <div className='w-48 '>
                                        <h1 className=' font-sans text-xl  font-bold'>${pro.price} <span className='text-slate-700 text-xs  '> ({pro.discountPercentage} % off )</span></h1>
                                    </div>

                                </div>
                                <Rating rating={pro.rating} />
                            </div>

                            <div className='flex my-5 justify-evenly'>
                                <button className=' hover:border-blue-700 hover:border-2 text-white bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-1.5 border-slate-900'>More Info</button>
                                <button className=' hover:border-blue-700 hover:border-2 text-white bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-2 border-slate-900'>Add to cart</button>
                            </div>

                        </div>
                    ))
                    }
                </div>

                <h1 className='text-3xl my-5'>Home Decoration</h1>
                <div className='grid g  grid-cols-3 grid-rows'>
                    {homeDecoration.map((pro) => (
                        <div className='border p-10 flex flex-col justify-center' key={pro.id}>
                            <div className='w-4/5 h-48 m-auto'>
                                <img className='w-full h-full' src={pro.thumbnail} alt="cover" />
                            </div>
                            <h1 className='text-2xl'>{pro.title}</h1>
                            <p className='text-sm my-1.5 h-12 text-slate-600 p-1 '>{pro.description}</p>
                            <div className='flex shadow-md p-2 my-10 justify-around items-center'>
                                <div className='flex  w-36 justify-between items-center'>
                                    <div className='w-48 '>
                                        <h1 className=' font-sans text-xl  font-bold'>${pro.price} <span className='text-slate-700 text-xs  '> ({pro.discountPercentage} % off )</span></h1>
                                    </div>

                                </div>
                                <Rating rating={pro.rating} />
                            </div>

                            <div className='flex my-5 justify-evenly'>
                                <button className=' hover:border-blue-700 hover:border-2 text-white bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-1.5 border-slate-900'>More Info</button>
                                <button className=' hover:border-blue-700 hover:border-2 text-white bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-2 border-slate-900'>Add to cart</button>
                            </div>

                        </div>
                    ))
                    }
                </div>

                <h1 className='text-3xl my-5'>Kitchen Groceries</h1>
                <div className='grid g  grid-cols-3 grid-rows'>
                    {groceries.map((pro) => (
                        <div className='border p-10 flex flex-col justify-center' key={pro.id}>
                            <div className='w-4/5 h-48 m-auto'>
                                <img className='w-full h-full' src={pro.thumbnail} alt="cover" />
                            </div>
                            <h1 className='text-2xl'>{pro.title}</h1>
                            <p className='text-sm my-1.5 h-12 text-slate-600 p-1 '>{pro.description}</p>
                            <div className='flex shadow-md p-2 my-10 justify-around items-center'>
                                <div className='flex  w-36 justify-between items-center'>
                                    <div className='w-48 '>
                                        <h1 className=' font-sans text-xl  font-bold'>${pro.price} <span className='text-slate-700 text-xs  '> ({pro.discountPercentage} % off )</span></h1>
                                    </div>

                                </div>
                                <Rating rating={pro.rating} />
                            </div>

                            <div className='flex my-5 justify-evenly'>
                                <button className=' hover:border-blue-700 hover:border-2 text-white bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-1.5 border-slate-900'>More Info</button>
                                <button className=' hover:border-blue-700 hover:border-2 text-white bg-blue-700 hover:bg-inherit hover:text-blue-700 hover:font-bold rounded-lg px-6 py-2 border-slate-900'>Add to cart</button>
                            </div>

                        </div>
                    ))
                    }
                </div>

                <div></div>
            </div>
        </div>
    )
}
export default Containor;