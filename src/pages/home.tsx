import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Folders from "../assets/folders.svg"
import Compass from "../assets/compass.svg"
import Graphic from "../assets/graphic.svg"
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
            document.documentElement.style.overflowY = 'hidden';

        } else {
            document.documentElement.style.overflowY = '';

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

                    <p className="desktop-only">Assuma o controle total do seu rebanho com tecnologia de ponta</p>

                    <h1>
                        Uma solução completa para o gerenciamento do seu rebanho
                    </h1>
                    <p>Com o parceiro certo, você pode levar a gestão do seu gado a um novo patamar de eficiência e produtividade.</p>
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
                    <h1>A ferramenta certa para potencializar sua gestão no campo</h1>
                    <p>Inovação e eficiência para você cuidar do seu rebanho com mais inteligência e menos esforço. Veja como o <span className="text-destaque">Gado Expert</span> pode transformar a sua rotina.</p>
                </div>
                <br />
                <div id="card-sect">
                    <Card icon={Folders} title="Gestão Completa do Rebanho" text="Monitore cada detalhe do seu rebanho com facilidade. Controle o cadastro de animais, vacinas, pesagem e histórico de saúde, tudo em um só lugar." />
                    <Card icon={Compass} title="Localização Precisa e Monitoramento" text="Nunca perca de vista o seu gado. Utilize a nossa ferramenta de geolocalização para saber exatamente onde cada animal está e monitorar a movimentação em tempo real." />
                    <Card icon={Graphic} title="Relatórios e Análises Inteligentes" text="Tome decisões estratégicas com base em dados. Geração de relatórios detalhados sobre a produtividade, saúde e crescimento do seu rebanho, auxiliando no planejamento de longo prazo." />
                </div>
            </section>

            <section className="container content">

            </section>

        </>

    )
}