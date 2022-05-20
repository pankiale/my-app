import './Card.css'

const Card = ({title, author, src}) => {
    return (
        <div className="card">
            <img src={src} alt={title} className="card__image"/>
            <p className="card__title">{title}</p>
            <p className="card__author">{author}</p>
        </div>
    )
}

export default Card 