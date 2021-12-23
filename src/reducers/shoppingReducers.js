import { TYPES } from "../actions/shoppingActions";
import { prodApi } from "../api";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Prod 1", price: 120 },
    { id: 2, name: "Prod 2", price: 180 },
    { id: 3, name: "Prod 3", price: 190 },
    { id: 4, name: "Prod 4", price: 200 },
    { id: 5, name: "Prod 5", price: 90 },
    { id: 6, name: "Prod 6", price: 155 },
  ],
  cart: [],
  data : prodApi,
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      // console.log(newItem);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToRemove = state.cart.find(item => item.id === action.payload)

      return itemToRemove.quantity > 1 
      ? {
      ...state,
      cart:state.cart.map(item =>
        item.id === action.payload 
        ? {...item, quantity: item.quantity -1 }
         : item
        ),
      }
      :{
        ...state,
        cart:state.cart.filter(item => item.id !== action.payload),
      };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return{
        ...state,
        cart:state.cart.filter(item => item.id !== action.payload),
      }
    }
    case TYPES.CLEAR_CART: {
      return shoppingInitialState;
    }
    default:
      return state;
  }
}
