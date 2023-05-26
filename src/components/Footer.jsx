import React from 'react'
import './Footer.scss'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import youtube from '../img/youtube.png'
import elo from '../img/elo.png'
import dinners from '../img/dinners.png'
import american from '../img/american.png'
import ifood from '../img/ifood.png'
import master from '../img/master.png'
import pix from '../img/pix.png'
import sodexo from '../img/sodexo.png'
import visa from '../img/visa.png'
import ticket from '../img/ticket.png'
import alelo from '../img/alelo.png'
import econverse from '../img/econverse.png'
import vtexfooter from '../img/vtex-footer.png'




const Footer = props => {

    return (
        <footer>
            <div class="footer-container">
                <div>
                    <h2>
                        Sobre nós
                    </h2>
                    <nav>
                        <ul>
                            <li> <a href="#">Conheça</a> </li>
                            <li> <a href="#">Como comprar</a> </li>
                            <li> <a href="#">Indicações e descontos</a> </li>
                        </ul>
                    </nav>

                    <div class="social">
                        <div>
                            <img src={facebook}   />
                        </div>

                        <div>
                            <img src={instagram}   />
                        </div>

                        <div>
                            <img src={youtube}   />
                        </div>
                    </div>

                </div>

                <div>
                    <h2>
                        INFORMAÇÕES ÚTEIS
                    </h2>
                    <nav>
                        <ul>
                            <li> <a href="#">Fale conosco</a> </li>
                            <li> <a href="#">Dúvidas</a> </li>
                            <li> <a href="#">Prazos de entrega</a> </li>
                            <li> <a href="#">Formas de pagamento</a> </li>
                            <li> <a href="#">Política de privacidade</a> </li>
                            <li> <a href="#">Trocas e devoluções</a> </li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <h2>
                        FORMAS DE PAGAMENTO
                    </h2>

                    <div class="pagamentos">
                        <div>
                            <img src={visa} />
                            <img src={elo} />
                            <img src={alelo} />
                        </div>
                        <div>
                            <img src={dinners} />
                            <img src={ifood} />
                            <img src={master} />
                        </div>
                        <div>
                            <img src={pix} />
                            <img src={american} />
                            <img src={ticket} />
                        </div>
                        <div>
                            <img src={sodexo} />
                        </div>
                    </div>
                </div>

                <div class="newsletter">
                    <h2>
                        Cadastre-se e Receba nossas
                        <span> novidades e promoções </span>
                    </h2>
                    <p>
                        Excepteur sint occaecat cudatat non ent, sunt in 
                        culpa qui officia lorem ipsum
                    </p>
                    <div class="form">
                        <input 
                            placeholder="Seu e-mail"
                            type="text"
                        />
                        <button> 
                            OK
                        </button>
                    </div>
                </div>
            </div>

            <hr />

            <div class="copyright">
                <p>
                    Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
                    É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
                </p>

                <div>
                    <img src={econverse} />
                    <img src={vtexfooter} />
                </div>
            </div>

        </footer>
    )

}

export default Footer