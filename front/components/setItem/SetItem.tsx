export interface SetItemProps{
    setId: string
    setName: string
    setImage: string
    setIcon: string
    releaseDate: string
    legalities: {
        unlimited?: string
        standard?: string
        expanded?: string
    }
}

const SetItem: React.FC<SetItemProps> = ({setId, legalities, setName, setIcon, setImage, releaseDate})=>{
    return (
        <div className="set-container">
            <div className="set-icon-container">
                <img className="set-icon" src={setIcon} alt={`${setName}-icon`}/>
                <img className="set-logo" src={setImage} alt={`${setName}-logo`}/>
            </div>
            <a className="set-name" href="">{setName}</a>
            <p className="set-release">Lançado em <span>{releaseDate}</span></p>
            <ul className="set-legality">
                {legalities.unlimited && <li>Unlimited {legalities.standard}</li>}
                {legalities.standard && <li>Standard {legalities.standard}</li>}
                {legalities.expanded && <li>Expanded {legalities.standard}</li>}
            </ul>
        </div>
    )
}

export default SetItem;