import { faCartShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useReducer, useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import { Types } from './Actions/shoppingActions'
import Articulos from './Articulos'
import CartItem from './CartItem'
import { shoppingInitialState, shoppingReducer } from './reducers/shoppingReducers'

const ShoppingCart = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
    const { products, cart, total } = state


    const addToCart = (data) => {
        console.log(data)
        dispatch({ type: Types.ADD_TO_CART, payload: data })

    }
    const delToCart = (id) => {
        dispatch({ type: Types.DELETE_ONE, payload: id })
    }
    const clearCart = (data) => {
        dispatch({ type: Types.CLEAN_CART, payload: data })

    }
    return (
        <div>
            <div className='shoppingCart'>
                <div>{cart.length}</div>
                <Button variant="primary" onClick={handleShow} >
                    <FontAwesomeIcon icon={faCartShopping} />
                </Button>
            </div>
            <h3>Menú</h3>
            <article>
                <div className='container'>
                    <div className='wrapper'>
                        {products.map((article) => (<Articulos data={article} key={article.id} addToCart={addToCart} />))}
                    </div>
                </div>
            </article>

            <>

                <Offcanvas show={show} onHide={handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <button className="btn-primary" onClick={() => clearCart(cart)}><FontAwesomeIcon icon={faTrashCan} /> Limpiar Carrito</button>
                        <table>
                            <tr>
                                <th>cantidad</th>
                                <th>descripción</th>
                                <th>Vr unitario</th>
                                <th>Vr total</th>
                            </tr>

                            {cart.map((item, index) => (<CartItem data={item} delToCart={delToCart} key={index} />))}
                        </table>
                        {total ? <h3>total {total} $</h3> : <></>}

                    </Offcanvas.Body>
                </Offcanvas>
            </>

        </div>
    )
}

export default ShoppingCart