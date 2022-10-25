import React from 'react'
import Menu from '../components/menu'
import RedesSociales from '../components/RedesSociales'
import ShoppingCart from '../components/shoppingCart'

const Menu_page = () => {
    return (
        <div className='container'>
            <section className='components'>
                <center id="menu">
                    <div className='spacetitle'>
                        <h1 className='title'> <strong>Menú</strong> </h1>
                    </div>
                </center>
                <ShoppingCart/>
            </section>
        </div>
    )
}

export default Menu_page