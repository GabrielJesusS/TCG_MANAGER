export interface SetItemProps{
    sampleTextProp: string;
}

const SetItem: React.FC<SetItemProps> = ({sampleTextProp})=>{
    return (<div>{sampleTextProp}</div>)
}

export default SetItem;