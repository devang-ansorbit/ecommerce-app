import { createSlice } from '@reduxjs/toolkit';

// import type { PayloadAction } from '@reduxjs/toolkit'
// import { Action } from '@remix-run/router';
import { Product } from '../Types/ProductResponce';

export interface ProductState {
 value: Product[],
 count ? : number
}

const initialState: ProductState = {
 value: [],
 count : 0,
};


export const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
  addToCart : (state ,action) =>{
        
            let productList : Product[];
            if(state.value.length === 0) {
                productList = [action.payload];
            }else {
                productList = [...state.value,action.payload]
            }
            return {
               value : productList
            }
        
    },

    removeFromCart : (state,action) =>{ 
        console.log(action.payload)
        let productList : Product[];
        if(state.value.length === 0) {
            return 
        }else {
            productList = state.value.filter(product => product.id!== action.payload)
        }
            return {
                value : productList
            }
        }
    },

    // increment : (state) => {
    //     return {...state,
    //         count: (state.count?? 0) + 1}
    // }
  
})

// Action creators are generated for each case reducer function
export const {addToCart,removeFromCart} = productSlice.actions

export default productSlice.reducer