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
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = _ => {

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    return (
        <header>
            <div className="header-top">
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

            <div className="header-middle">
                <img src={logo} alt="" />

                <div className="pesquisa">
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

            <nav ref={navRef} className="nav">
                
                    <a href="#"> Todas Categorias </a>
                
            
                    <a href="#"> Supermercado </a>
                
            
                    <a href="#"> Livros </a>
                
            
                    <a href="#"> Moda </a>
                
            
                    <a href="#"> Lançamentos </a>
                
            
                    <a href="#"> Ofertas do dia </a>
                
                <div>
                    <img src={coroa} alt="" />
                    <a href="#"> 
                            Assinatura 
                    </a>
                </div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
            </nav>
            <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
        </header>
    )
}

export default Header