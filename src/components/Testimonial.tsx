import { useEffect } from "react";
import Star from "../assets/star.svg";
import StarOuter from "../assets/star-outer.svg";

interface ITestemonialProps {
    photo: string;
    testimony: string;
    rating: 1 | 2 | 3 | 4 | 5;
    setStars?: () => void;
    customerName: string;
    customerDescription: string;
}

function Testimonial({ photo, testimony, rating, setStars, customerName, customerDescription }: ITestemonialProps) {
    let star1 = StarOuter;
    let star2 = StarOuter;
    let star3 = StarOuter;
    let star4 = StarOuter;
    let star5 = StarOuter;

    const updateStars = () => {
        star1 = rating >= 1 ? Star : StarOuter;
        star2 = rating >= 2 ? Star : StarOuter;
        star3 = rating >= 3 ? Star : StarOuter;
        star4 = rating >= 4 ? Star : StarOuter;
        star5 = rating >= 5 ? Star : StarOuter;
    };

    updateStars();


    return (
        <>
            <div className="carousel-card">
                <img src={photo} alt="Imagem perfil cliente" />
                <span className="testimony">
                    <p>{testimony}</p>
                </span>
                <span className="rating">
                    <img src={star1} alt="ícone estrela" width={22} height={20} />
                    <img src={star2} alt="ícone estrela" width={22} height={20} />
                    <img src={star3} alt="ícone estrela" width={22} height={20} />
                    <img src={star4} alt="ícone estrela" width={22} height={20} />
                    <img src={star5} alt="ícone estrela sem fundo" width={20} height={22} />
                </span>
                <span className="names">
                    <p>{customerName}</p>
                    <p>{customerDescription}</p>
                </span>
            </div>
        </>
    );
}

export default Testimonial;
