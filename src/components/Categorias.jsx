import React from 'react'
import './Categorias.scss'

const Categorias = props => {

    return (

            <div class="categoria">
                <div>
                    <img src={props.img} alt="" />
                </div>

                <p>
                    {props.categoria}
                </p>
            </div>

    )

}

export default Categorias