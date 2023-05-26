import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import './Vitrine.scss'

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

        <div >
            <Swiper
                slidesPerView={4}
                className="vitrine"
                modules={[Navigation]}
                navigation
            >
            {dados.map((item) => (
                <SwiperSlide key="item.productName">
                    <h3>{item.productName}</h3>
                    <img src={item.photo} />
                    <p>{item.descriptionShort} </p>
                    <p>{item.price} </p>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>

    )

}

export default Vitrine;
