import { createSlice } from '@reduxjs/toolkit';

// import type { PayloadAction } from '@reduxjs/toolkit'
// import { Action } from '@remix-run/router';
import { Cart } from '../Types/ProductResponce';

export interface ProductState {
  value: Cart[];
  total?: number;
}

const initialState: ProductState = {
  value: [],
  total: 0,
};

export const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        const tempItem = { ...action.payload, quantity: 1 };
        state.value.push(tempItem);
        console.log('I am Value', state.value.length);
        state.total = state.total + action.payload.price;
      } else {
        state.value[itemIndex].quantity += 1;

        state.total = action.payload.price + state.total;
      }
    },

    removeFromCart: (state, action) => {
      console.log(action.payload);
      let productList: Cart[];
      if (state.value.length === 0) {
        return;
      } else {
        productList = state.value.filter(
          (product) => product.id !== action.payload
        );
      }
      let tempTotal: number = 0;
      state.value.forEach((pro) => {
        tempTotal = tempTotal + pro.price * pro.quantity;
      });
      console.log(tempTotal);
      return {
        value: productList,
        total: tempTotal,
      };
    },

    incrementQuanity: (state, action) => {
      console.log('ok');
      const itemIndex = state.value.findIndex(
        (ele) => ele.id === action.payload
      );
      state.value[itemIndex].quantity += 1;
      state.total = (state.total ?? 0) + state.value[itemIndex].price;
    },

    decrementQuantiy: (state, action) => {
      console.log('ok');
      const itemIndex = state.value.findIndex(
        (ele) => ele.id === action.payload
      );
      if (state.value[itemIndex].quantity === 1) {
        state.value[itemIndex].quantity = 1;
      } else {
        state.value[itemIndex].quantity -= 1;
        state.total = (state.total ?? 0) - state.value[itemIndex].price;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, incrementQuanity, decrementQuantiy } =
  productSlice.actions;

export default productSlice.reducer;
