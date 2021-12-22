import { TYPES } from '../actions/shoppingActions'

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
};

export function shoppingReducer(state, action){
    switch (action.type) {
        case TYPES.ADD_TO_CART:{

        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
            
        }
        case TYPES.CLEAR_CART:{
            
        }
        default:
            return state
    }
}
