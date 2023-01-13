
export interface DeckItemProps{
    deckID: number;
    deckTitle: string
    deckAuthor: string
    deckCover: string
    deckDesc: string
    deckEffic: number
    deckDif: number
    deckWr:number
}

const DeckItem: React.FC<DeckItemProps> = ({deckAuthor,deckCover,deckDesc,deckDif,deckEffic,deckTitle,deckWr})=>{
    return (
        <div className="deck-container">
            <div className="deck-cover">
                <img className="deck-cover-img" src={deckCover} alt=""/>
            </div>
            <div className="deck-infos">
                <a href="#" className="deck-title">{deckTitle}</a>
                <a href="#" className="deck-author">{deckAuthor}</a>
                <p className="deck-desc">{deckDesc}</p>
                <div className="deck-data">
                    <p className="deck-effic">Efficiência: {deckEffic.toFixed(1)}</p>
                    <p className="deck-diffic">Dificuldade: {deckDif.toFixed(1)}</p>
                    <p className="deck-wr">Taxa de vitória: {deckWr}%</p>
                </div>
            </div>
        </div>
    )
}

export default DeckItem;