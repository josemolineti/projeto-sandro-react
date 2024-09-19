import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import "../styles/utility.css"
import "../styles/header.css"
import "../styles/hero.css"
import "../styles/middle.css"
import Button from "../components/Button";
import HeroRectangleOne from "../assets/images/rectangleOne.png"
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Card from "../components/Card";

export default function Home() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            //pegar o html e mudar o stye para overflow-y hidden
        } else {
            // pegar o html e remover o style para overflow-y hidden
        }
        console.log('executou');
    }, [showMobileMenu])
    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo GadoExpert" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>

                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo" />

                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                <div className="container content">

                    <p className="desktop-only">Olá</p>

                    <h1>
                        Uma solução que irá te entregar X
                    </h1>
                    <p>Você sabe que, para alcançar o sucesso, é fundamental
                        ter parceiros que te impulsionem a ir mais longe.</p>
                    <div className="flex gap-1.5">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button secondary text="Veja Mais" />
                        </span>

                    </div>
                </div >
            </section>

            <section id="middle">
                <div className="container content">
                    <p >Soluções</p>
                    <h1>Sob Medida para você</h1>
                    <p>Inovação é com a gente! A <span className="text-destaque">Gado Expert</span> já conquistou diversos clientes, seja você mais um deles, veja tudo que pode ganhar com nossos serviços</p>
                </div>
                    <br />
                <div  id="card-sect">
                    <Card icon="A" title="Produto Vencedor" text="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles talta tal tal"/>
                    <Card icon="A" title="Produto Vencedor" text="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles talta tal tal"/>
                    <Card icon="A" title="Produto Vencedor" text="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles talta tal tal"/>
                </div>
            </section>

            <section className="container content">
                
            </section>
        </>
    )
}