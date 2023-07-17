import React from 'react'
import './Categorias.scss'

const Categorias = props => {

    return (

            <div class="categoria">
                <div>
                    <img src={props.img} alt="" />
                </div>

                <a href={props.link}>
                    {props.categoria}
                </a>
            </div>

    )

}

export default Categorias