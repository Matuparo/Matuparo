import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useReducer } from 'react'
import { Types } from './Actions/shoppingActions'
import Articulos from './Articulos'
import CartItem from './CartItem'
import { shoppingInitialState, shoppingReducer } from './reducers/shoppingReducers'

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
    const {products , cart, total} = state
    
    const addToCart = (data)=>{
        console.log(data)
        dispatch({type:Types.ADD_TO_CART, payload: data })

    }
    const delToCart = ()=>{
        
    }
    const clearCart = ()=>{
        
    }
    return (
        <div>
            <h3>Menú</h3>
            <article>
                <div className='container'>
                    <div className='wrapper'>
                        {products.map((article)=>(<Articulos data={article} key={article.id} addToCart={addToCart}/>))}
                    </div>
                </div>
            </article>
            <h3>Carrito de compras</h3>
            <button className="btn-primary" onClick={()=> clearCart()}><FontAwesomeIcon icon={faTrashCan}/></button>
            {cart.map((item, index)=>(<CartItem data={item} deltocart={delToCart} key={index}/> ))}
            { total ? <h3>total {total} $</h3> : <></>}

        </div>
    )
}

export default ShoppingCart