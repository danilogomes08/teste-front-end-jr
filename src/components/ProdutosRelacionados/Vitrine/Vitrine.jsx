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

                
        <div className="Vitrine">
            <Swiper
                slidesPerView={4}
                modules={[Navigation]}
                navigation
                className="Swiper-container"
                breakpoints={{
                    320: {
                      width: 320,
                      slidesPerView: 1,
                    },
                    640: {
                        width: 640,
                        slidesPerView: 2,
                      },
                      960: {
                        width: 960,
                        slidesPerView: 3,
                      },
                    1280: {
                      width: 1280,
                      slidesPerView: 4,
                    },
                  }}
            >
            {dados.map((item) => (
                <SwiperSlide 
                    key="item.productName"
  
                >
                    <div className="ItemVintrine">
                        <h3>{item.productName}</h3>
                        <img src={item.photo} />
                        <p>{item.descriptionShort} </p>
                        <p> R$ 30,90</p>
                        <p>R$ {item.price} </p>
                        <p>ou 2x de R$ 49,95 sem juros</p>
                        <p>Frete grátis</p>
                        <a href="#"> comprar </a>
                    </div>

                </SwiperSlide>
            ))}
            </Swiper>
        </div>

    )

}

export default Vitrine;
