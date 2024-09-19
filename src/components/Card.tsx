import "../styles/cards.css"
import "../styles/index.css"

interface ICardProps {
    icon: string;
    title: string;
    text: string;
}

export default function Card({ icon, title, text }: ICardProps) {
    return(
        <div className="card-div">
            <img src="" alt="" />
            <h2>{title}</h2>
            <p></p>
            <br />
            <p>{text}</p>
        </div>
    )

}