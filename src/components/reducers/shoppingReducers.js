import productos from "../../data/Menu"
import { Types } from "../Actions/shoppingActions"

export const shoppingInitialState = {
    products: productos,
    cart: [],
    total: 0
}
export const shoppingReducer = (state, action) => {
    switch (action.type) {
        case Types.ADD_TO_CART: {
            const { id, amount } = action.payload
            let newArticle = state.products.find(product => product.id === id)
            newArticle = { ...newArticle, amount }
            let itemInCart = state.cart.find(item => item.id === newArticle.id)
            return itemInCart ? {
                ...state,
                cart: state.cart.map(item => item.id === newArticle.id ? { ...item, amount: parseInt(item.amount) + parseInt(amount) } : item),
                total: state.total + newArticle.amount * newArticle.value
            } : {
                ...state,
                cart: [...state.cart, newArticle],
                total: state.total + newArticle.amount * newArticle.value
            }
        }
        case Types.CLEAN_CART: {
            return {
                ...state,
                cart: [],
                total: 0
            }

        }
        case Types.DELETE_ONE: {
            let delArticle = state.cart.find(item => item.id = action.payload.id)
            return delArticle.amount > 1 ? {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? { ...item, amount: parseInt(item.amount) - 1 } : item),
                total: state.total - (1 * delArticle.value)
            } : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
                total: state.total - (1 * delArticle.value)

            }

        }
        case Types.REMOVE_ALL_CART: {

        }
        default:
            return state

    }
}