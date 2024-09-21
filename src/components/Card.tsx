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
            <img src={icon} alt="" width={30} height={30}/>
            <h2>{title}</h2>
            <p></p>
            <br />
            <p>{text}</p>
        </div>
    )

}