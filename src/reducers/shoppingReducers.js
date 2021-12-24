import { TYPES } from "../actions/shoppingActions";
import useState from 'react';

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Prod 1", price: 120 },
    { id: 2, name: "Prod 2", price: 180 },
    { id: 3, name: "Prod 3", price: 190 },
    { id: 4, name: "Prod 4", price: 200 },
    { id: 5, name: "Prod 5", price: 90 },
    { id: 6, name: "Prod 6", price: 155 },
    { id: 7, name: "Prod 6", price: 155 },
    { id: 8, name: "Prod 6", price: 155 },
    { id: 9, name: "Prod 6", price: 155 },
    { id: 10, name: "Prod 6", price: 155 },
    { id: 11, name: "Prod 6", price: 155 },
    { id: 12, name: "Prod 6", price: 155 },
    { id: 13, name: "Prod 6", price: 155 },
    { id: 14, name: "Prod 6", price: 155 },
    { id: 15, name: "Prod 6", price: 155 },
    { id: 16, name: "Prod 6", price: 155 },
    { id: 17, name: "Prod 6", price: 155 },
    { id: 18, name: "Prod 6", price: 155 },
    { id: 19, name: "Prod 6", price: 155 },
    { id: 20, name: "Prod 6", price: 155 },
  ],
  // props: [productos],
  cart: []
};

// const [productos, setProductos] = useState([])

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
