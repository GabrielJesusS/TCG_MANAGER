import Image from "next/image";
import { useEffect } from "react";
import Vanilla from 'vanilla-tilt'

export interface CardProps{
    cardId: string
    cardSrc: string
    cardName: string
    className?: string

}

const Card: React.FC<CardProps> = ({cardId,cardName,cardSrc, className})=>{
    

    return (
        <div className={`pokemon-card ${className}`}>
           <a href={`/cards/${cardId}`}>
            <Image width={245} height={342} className="relative w-full" src={cardSrc} alt={`card-${cardId}-${cardName}`}/>
           </a>
        </div>
    )
}

export default Card;