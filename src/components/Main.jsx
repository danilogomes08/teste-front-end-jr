import React from 'react'
import './Main.scss'
import Categorias from './Categorias';

import tecnologia from '../img/tecnologia.svg'
import supermercados from '../img/supermercados.svg'
import bebidas from '../img/bebidas.svg'
import ferramentas from '../img/ferramentas.svg'
import saude from '../img/saude.svg'
import esportes from '../img/esportes.svg'
import moda from '../img/moda.svg'

const Main = _ => {

    return (
        <main>
            <div className="background">
                <div>
                    <h1> 
                        Venha conhecer nossas 
                        promoções
                    </h1>
                    <p> 
                        50% Off nos produtos 
                    </p>
                    <a>
                        Ver produto
                    </a>
                </div>
            </div>

            <section className="categorias">
                <Categorias img={tecnologia} categoria="Teconogia"/>
                <Categorias img={supermercados} categoria="Supermercado"/>
                <Categorias img={bebidas} categoria="Bebidas"/>
                <Categorias img={ferramentas} categoria="Ferramentas"/>
                <Categorias img={saude} categoria="Saúde"/>
                <Categorias img={esportes} categoria="Esportes e Fitness"/>
                <Categorias img={moda} categoria="Moda"/>
            </section>

        </main>

    )

}

export default Main
