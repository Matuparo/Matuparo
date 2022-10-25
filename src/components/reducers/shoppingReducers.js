import productos from "../../data/Menu"
import { Types } from "../Actions/shoppingActions"

export const shoppingInitialState = {
    products : productos,
    cart : [],
    total : 0
}
export const shoppingReducer = (state, action) =>{
    switch(action.type){
        case Types.ADD_TO_CART:{
            const {id, amount} = action.payload
            let newArticle = state.products.find(product=>product.id === id)
            newArticle = {...newArticle, amount}
            return {
                ...state,
                cart:[...state.cart, newArticle],
                total: state.total + newArticle.amount * newArticle.value 
            }
        }
        case Types.CLEAN_CART:{

        }
        case Types.DELETE_ONE:{

        }
        case Types.REMOVE_ALL_CART:{

        }
        default:
            return state

    }
}