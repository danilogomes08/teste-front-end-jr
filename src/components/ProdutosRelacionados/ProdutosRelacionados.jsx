import React from 'react'
import './ProdutosRelacionados.scss'
import Vitrine from './Vitrine/Vitrine'

const ProdutosRelacionados = props => {

    return (

        <section className="Produtos-relacionados">
            <h2>
                Produtos Relacionados
            </h2>

            { props.sub1 && props.sub2 && props.sub3 
            && props.sub4 && props.sub5 && props.sub6 ?
            null : (
                <a href="#">
                    Ver todos
                </a>
            )}

            { props.sub1 && props.sub2 && props.sub3 
            && props.sub4 && props.sub5 && props.sub6 ? (
            <nav>
                <div className="Sub-categorias">
                    <a href="#"> {props.sub1} </a>
                </div>
                <div className="Sub-categorias">
                    <a href="#"> {props.sub2} </a>
                </div>
                <div className="Sub-categorias">
                    <a href="#"> {props.sub3} </a>
                </div>
                <div className="Sub-categorias">
                    <a href="#"> {props.sub4} </a>
                </div>
                <div className="Sub-categorias">
                    <a href="#"> {props.sub5} </a>
                </div>
                <div className="Sub-categorias">
                    <a href="#"> {props.sub6} </a>
                </div>
            </nav>
        ) : null}

        <Vitrine />

        </section>

    )

}

export default ProdutosRelacionados;
