export interface TableProps{
    sampleTextProp: string;
}

const Table: React.FC<TableProps> = ({sampleTextProp})=>{
    return (<div>{sampleTextProp}</div>)
}

export default Table;