import React from 'react'
import './Header.scss'

import pedidos from '../img/pedidos.png'
import carrinho from '../img/carrinho.png'
import cartao from '../img/cartao-credito.png'
import conta from '../img/conta.png'
import favoritos from '../img/favoritos.png'
import frete from '../img/frete.png'
import promocoes from '../img/promocoes.png'
import seguranca from '../img/seguranca.png'
import logo from '../img/logo-vtex.png'
import busca from '../img/busca.png'
import coroa from '../img/coroa.png'


const Header = _ => {

    return (
        <header>
            <div class="header-top">
                <div>
                    <img src={seguranca} alt="" />
                    <p>Compra <span> 100% segura </span></p>
                </div>
                
                <div>
                    <img src={frete} alt="" />
                    <p> <span> Frete grátis </span> acima de R$ 200</p>
                </div>

                <div>
                    <img src={cartao} alt="" />
                    <p> <span> Parcele </span> suas compras</p>
                </div>
            </div>

            <hr />

            <div class="header-middle">
                <img src={logo} alt="" />

                <div>
                    <input 
                        placeholder="O que você está buscando?"
                        type="text"
                    />
                    <button>
                        <img src={busca} />
                    </button>
                </div>
                
                <a href="#">
                    <img src={pedidos} alt="" />
                </a>

                <a href="#">
                    <img src={favoritos} alt="" />
                </a>

                <a href="#">
                    <img src={conta} alt="" />
                </a>

                <a href="#">
                    <img src={carrinho} alt="" />
                </a>
            </div>

            <nav>
                <ul>
                    <li>
                        <a href="#"> Todas Categorias </a>
                    </li>
                    <li>
                        <a href="#"> Supermercado </a>
                    </li>
                    <li>
                        <a href="#"> Livros </a>
                    </li>
                    <li>
                        <a href="#"> Moda </a>
                    </li>
                    <li>
                        <a href="#"> Lançamentos </a>
                    </li>
                    <li>
                        <a href="#"> Ofertas do dia </a>
                    </li>
                    <li>
                        <img src={coroa} alt="" />
                        <a href="#"> 
                             Assinatura 
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header