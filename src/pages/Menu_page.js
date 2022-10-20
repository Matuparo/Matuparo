import React from 'react'
import Menu from '../components/menu'
import RedesSociales from '../components/RedesSociales'

const Menu_page = () => {
    return (
        <div className='container'>
            <section className='components'>
                <center id="menu">
                    <div className='spacetitle'>
                        <h1 className='title'> <strong>Menú</strong> </h1>
                    </div>
                </center>
                <Menu />
            </section>
        </div>
    )
}

export default Menu_page