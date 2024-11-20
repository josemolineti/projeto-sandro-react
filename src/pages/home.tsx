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
import "../styles/testemonials.css"
import "../styles/pricing.css"
import "../styles/contact.css"
import Button from "../components/Button";
import HeroRectangleOne from "../assets/images/rectangleOne.png"
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Card from "../components/Card";
import ProfileImageOne from "../assets/images/testimonial-photo1.jpg"
import ProfileImageTwo from "../assets/images/testimonial-photo2.jpg"
import ProfileImageThree from "../assets/images/testimonial-photo3.jpg"
import Testemonial from "../components/Testimonial";
import Check from "../assets/check.svg";


export default function Home() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const token_google = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA3NTczNjEyODM5MTIxMTIzNjczIiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJqZW1vbGluZXRpQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IndDdVJPRkRSQmdKeWRRQWItSE1kc0EiLCJuYmYiOjE3MzIxMzIwMzksImlhdCI6MTczMjEzMjMzOSwiZXhwIjoxNzMyMTM1OTM5LCJqdGkiOiJlNTgyYzgyYzMxYTdjNThiZGIwOWUwMDZjM2M3MGYzMGM4ZjE5NTFlIn0.Vu5vBxfefQPBBRzIa3BJitJlP1FKQkP6NwMFLUbkF2WoNCW_u_lyZzc_kQfBuZu6QLU1bND2posjZaVYDpCIvzIrMDysuZFheoDtB2utO06C292wWAXkCtqUyWwIWJrc0kFkNBPPOtOzsLFBrs1xxciEkwAmGohD80iFm6bbaZi8zjUtDwBlA5EYdWnyqWYtzrU5ieOTol9Vyj3gWKVKHeCwy1Y9sDrFVvaYLiHJ_C3SoRV4aKfJqebAnibeFNfw0XgmbO4yBI1ABURzDIZdRCxE9WQdRycXrJSfMQJVqrMZTy18lydRswh9tcu4T1bVTaRDPVKXbhTPkTz-N6740A';

    useEffect(() => {
        if (showMobileMenu) {
            //pegar o html e mudar o stye para overflow-y hidden
            document.documentElement.style.overflowY = 'hidden';

        } else {
            document.documentElement.style.overflowY = '';

        }
        console.log('executou');
    }, [showMobileMenu])

    function func(){

    }


    function realizarRequest(event: { preventDefault: () => void; }) {
        event.preventDefault()
        fetch('api', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token_google}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mail: mail,
                message: message,
            })
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Falha ao enviar a requisição');
            }
        })
        .then(data => {
            console.log('Email enviado com sucesso:', data);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    }



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
                            <Button func={() => console.log("teste")} text="Cadastre-se" />
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
                        <span><Button func={() => console.log("teste")} text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button func={() => console.log("teste")} secondary text="Veja Mais" />
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

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p id="paragraph">
                        Quem já usou sabe da qualidade do nosso aplicativo. Estamos mudando aquela ideia de que o gerenciamento de gado tem que ser complicado e cansativo. Veja abaixo os depoimentos de quem já experimentou e aprovou!
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <Testemonial photo={ProfileImageOne} testimony={"Bom, é um aplicativo legal, direto, nada complicado. Dá pra usar tranquilo, ajuda mesmo, sabe? Não tem frescura, só faz o que precisa fazer. Gostei, é bem útil."} rating={5} customerName="Pessi" customerDescription="Cozinheiro MC Donald's" />
                        <Testemonial photo={ProfileImageTwo} testimony={"Epá, é que nem dá pra acreditar, pá! Esse aplicativo é tipo… uma máquina, mudou tudo. Agora vejo tudo diferente, até o treino fica mais top com essa cena, percebes? Parece que virei outro gajo, malta. É só dar um toque ali e pronto, já me sinto o maior, tá feito! Verdadeiro game-changer, mesmo!"} rating={3} customerName="Cerrote" customerDescription="Jogador de Ping-Pong" />
                        <Testemonial photo={ProfileImageThree} testimony={"Rapaz, olha, vou te falar... esse aplicativo aí, fraquinho demais, viu? Tentei usar, mas só deu dor de cabeça. Promete muito e faz pouco, né? Pra mim, não rolou, não. Falta muito pra ser bom de verdade, tipo... muito mesmo."} rating={2} customerName="Neymara" customerDescription="Jogador do Flamengo" />
                    </div>
                    <div className="carousel-content">
                        <Testemonial photo={ProfileImageOne} testimony={"Bom, é um aplicativo legal, direto, nada complicado. Dá pra usar tranquilo, ajuda mesmo, sabe? Não tem frescura, só faz o que precisa fazer. Gostei, é bem útil."} rating={5} customerName="Pessi" customerDescription="Cozinheiro MC Donald's" />
                        <Testemonial photo={ProfileImageTwo} testimony={"Epá, é que nem dá pra acreditar, pá! Esse aplicativo é tipo… uma máquina, mudou tudo. Agora vejo tudo diferente, até o treino fica mais top com essa cena, percebes? Parece que virei outro gajo, malta. É só dar um toque ali e pronto, já me sinto o maior, tá feito! Verdadeiro game-changer, mesmo!"} rating={3} customerName="Cerrote" customerDescription="Jogador de Ping-Pong" />
                        <Testemonial photo={ProfileImageThree} testimony={"Rapaz, olha, vou te falar... esse aplicativo aí, fraquinho demais, viu? Tentei usar, mas só deu dor de cabeça. Promete muito e faz pouco, né? Pra mim, não rolou, não. Falta muito pra ser bom de verdade, tipo... muito mesmo."} rating={2} customerName="Neymara" customerDescription="Jogador do Flamengo" />
                    </div>

                </section>


            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span><h2>Grátis</h2>
                        <Button func={() => console.log("teste")} text="Pedir agora" secondary key="free" /><span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Sucos por semana</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Legal bem loco</p>
                        </span>
                    </div>

                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>1º MÊS COM DESCONTO</p>
                        </span>
                        <span className="plan">
                            <h3>Premium</h3>
                            <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 89,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button func={() => console.log("teste")} text="Pedir agora" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Entregas</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>5 Refeições por semana</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Sucos por semana</p>
                        </span>
                    </div>

                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span><h2>Grátis</h2>
                        <Button func={() => console.log("teste")} text="Pedir agora" secondary key="free" /><span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Sucos por semana</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Legal bem loco</p>
                        </span>
                    </div>

                </section>
            </section>

            <section id="contact" className="container">
                <header>
                    <p className="desktop-only">Mande sua opinião</p>
                    <h2>Fale conosco:</h2>
                </header>
                <form action="" onSubmit={realizarRequest}>
                    <div className="input-box">
                        <label htmlFor="">Email</label>
                        <input
                            type="email"
                            value={mail}
                            onChange={event => {
                                setMail(event.target.value);
                            }}
                            required
                        />

                    </div>
                    <div className="input-box">
                        <label htmlFor="">Mensagem</label>
                        <textarea value={message} onChange={event => setMessage(event.target.value)} required></textarea>
                    </div>
                    <Button text="testando" func={func} />
                </form>
            </section>






        </>

    )
}