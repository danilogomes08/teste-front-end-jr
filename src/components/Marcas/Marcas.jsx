import React from 'react'
import './Marcas.scss'
import marca from '../../img/marca.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const Marcas = props => {

    return (
        <section className="marcas">

            <h2>
                Navegue por marcas
            </h2>

            <nav className="swiper-container-brand">
                <Swiper
                    slidesPerView={5}
                    modules={[Navigation]}
                    navigation
                    breakpoints={{
                        256: {
                            width: 256,
                            slidesPerView: 1,
                        },
                        512: {
                            width: 512,
                            slidesPerView: 2,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 3,
                        },
                        1024: {
                            width: 1024,
                            slidesPerView: 4,
                        },
                        1280: {
                            width: 1280,
                            slidesPerView: 5,
                        }
                    }}
                >
                <SwiperSlide>
                    <div>
                        <img src={marca} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={marca} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={marca} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={marca} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={marca} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={marca} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={marca} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={marca} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={marca} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={marca} />
                    </div>
                </SwiperSlide>

                </Swiper>
            </nav>


        </section>
    )

}

export default Marcas