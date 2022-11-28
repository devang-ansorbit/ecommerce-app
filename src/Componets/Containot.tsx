import { stringify } from 'querystring';
import React, { useEffect } from 'react';
import { Product } from '../Types/ProductResponce';

const Containor = () => {
    const [ arr,setArr ] = React.useState<Product[]>([]);
    const [ temp, setTemp ] = React.useState<Product[]>()
    const [ smartPhones, setSmartPhones ] =React.useState<Product[]>([]);
    const [ lapTop, setLapTop ] = React.useState<Product[]>([]);
    // const [ temp, setTemp ] = React.useState<Product[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => setArr(data.products))
    }, [])

    useEffect(()=>{
        setSmartPhones(arr.filter((ele)=>{
            if (ele.category == 'smartphones'){
                return ele;
            }
        }));

        setLapTop(arr.filter((ele) => {
            if (ele.category == 'laptops') {
                return ele;
            }
        }))

    },[])
    console.log(arr)
  
    return (
        <div className="mt-5">
            {/* section -1 */}
            <div className='border'>
                <div className='w-112 h-4/5 border'>
                
                </div>
                <h1 className='text-3xl my-5'>SmartPhones</h1>
                <div className='grid g  grid-cols-3 grid-rows'>
                    { smartPhones.map((pro)=>(
                        <div className='border p-10'>
                            <div className='w-4/5'>
                                <img  src={pro.thumbnail} alt="" />
                            </div>
                                <h1 className='text-2xl'>{pro.title}</h1>
                            <div className='flex'>
                                {/* <h1>{pro.price}</h1> */}
                                <h1></h1>
                            </div>
                        </div>

                    ))
                    }
                </div>
                <h1 className='text-3xl my-5'>Laptops</h1>
                <div className='grid g  grid-cols-3 grid-rows'>
                    {lapTop.map((pro) => (
                        <div className='border p-10'>
                            <div className='w-4/5'>
                                <img src={pro.thumbnail} alt="" />
                            </div>
                                <h1 className='text-2xl'>{pro.title}</h1>

                        </div>

                    ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Containor;