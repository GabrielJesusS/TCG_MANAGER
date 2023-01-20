export interface PageHeaderProps{
    sampleTextProp: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({sampleTextProp})=>{
    return (<div>{sampleTextProp}</div>)
}

export default PageHeader;