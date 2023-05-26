import React, { useState, useEffect } from 'react'
// import './Vitrine.scss'

import Axios from "axios";

const Vitrine = props => { 

    const [dados, setDados] = useState([])
    const url = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

    useEffect( () => {
       Axios.get(url) 
            .then((resp) => {
                setDados(resp.data.products)
            })    
    }, [])

    return (

        <div>
            {dados.map((item) => (
                <div key="item.productName">
                    <p>{item.productName}</p>
                    <p>{item.descriptionShort} </p>
                    <img src={item.photo} />
                    <p>{item.price} </p>
                </div>
            ))}
               
        </div>

    )

}

export default Vitrine;
