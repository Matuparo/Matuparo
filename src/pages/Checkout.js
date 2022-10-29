import { faSortNumericDown } from '@fortawesome/free-solid-svg-icons'
import React, { useReducer } from 'react'
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import CartItem from '../components/CartItem'
import Footer from '../components/Footer'
import logo from "../img/Logo.svg"


const types = {
    DELETE_ONE: "DELETE_ONE",
    DELETE_ALL: "DELETE_ALL"
}
const reducers = (state, action) => {
    switch (action.type) {
        case types.DELETE_ONE: {
            let delArticle = state.cart.find(item => item.id === action.payload.id)
            return delArticle.amount > 1 ? {
                ...state,
                cart: state.cart.map(item => item.id === delArticle.id ? { ...item, amount: parseInt(item.amount) - 1 } : item),
                total: state.total - (1 * delArticle.value)
            } : {
                ...state,
                cart: state.cart.filter(item => item.id !== delArticle.id),
                total: state.total - (1 * delArticle.value)
            }
        }
        case types.DELETE_ALL: {
            let delArticle = state.cart.find(action.payload.id)
            return delArticle ? {
                ...state,
                cart: state.cart.map(item => item.id !== delArticle.id ? item : null)
            } : {
            }

        }
    }
}

const Checkout = () => {
    let nombre, direccion, telefono


    const location = useLocation()
    const initialState = {
        cart: location.state.cart,
        total: location.state.total
    }

    const [state, dispath] = useReducer(reducers, initialState)

    const delToCart = (id) => {
        dispath({ type: types.DELETE_ONE, payload: id })
    }
    const enviar = () => {
        const verificar = () => {
            const pedir = document.querySelector("#enviar")
            let pedido = `https://api.whatsapp.com/send?phone=573212079857&text=Nombre:%0A%20%20${nombre.value}%0ADireccion:%0A%20%20${direccion.value}%0A%20%20Telefono:%0A${telefono.value}%0A`
            state.cart.forEach(element => {
                pedido += `${element.amount}%20${element.name}%20${element.value * element.amount}%0A`
            });
            pedido += `Total%20%20${state.total}`
            pedir.setAttribute("href", pedido)
            pedir.click()

        }
        return nombre.value ? (direccion.value ? (telefono.value ? verificar() : alert("telefono es requerido")) : alert("direccion es requerida")) : alert("nombre es requerido")
    }

    return (
        <div>
            <nav className='navbar'>

                <Link to="/">
                    <img
                        src={logo}
                        width="110"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Link>
            </nav>
            <div className='checkout'>
                <center>

                    <Card >
                        <Card.Header>
                            <Card.Title>                        Información de contacto                        </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Nombre"
                                    className="mb-3"
                                >

                                    <Form.Control type="text" ref={node => nombre = node} placeholder="Nombre" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Celular">
                                    <Form.Control type="tel" placeholder="310XXXXXXX" ref={node => telefono = node} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Dirección">
                                    <Form.Control type="text" placeholder="Dirección" ref={node => direccion = node} />
                                </FloatingLabel>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header><Card.Title><center>Pedido</center></Card.Title></Card.Header>
                        <Card.Body>

                            <table>
                                <thead>
                                    <tr>
                                        <th>cantidad</th>
                                        <th>descripción</th>
                                        <th>Vr unitario</th>
                                        <th>Vr total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {state.cart.map((item, index) => (<CartItem data={item} delToCart={delToCart} key={index} />))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th>Total</th>
                                        <th>{state.total}</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </Card.Body>
                    </Card>
                    <Button variant='success' onClick={() => enviar()} >Finalizar Pedido</Button>
                    <a id='enviar' target='_blank' ></a>
                </center>
            </div>
            <Footer />
        </div>
    )
}

export default Checkout