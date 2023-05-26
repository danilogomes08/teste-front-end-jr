import React from 'react'
import './Marcas.scss'
import marca from '../img/marca.png'

const Marcas = props => {

    return (
        <section class="marcas">

            <h2>
                Navegue por marcas
            </h2>

            <nav>
                <div>
                    <img src={marca} />
                </div>

                <div>
                    <img src={marca} />
                </div>

                <div>
                    <img src={marca} />
                </div>

                <div>
                    <img src={marca} />
                </div>

                <div>
                    <img src={marca} />
                </div>
            </nav>


        </section>
    )

}

export default Marcas