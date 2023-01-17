export interface MainLayoutProps{
    sampleTextProp: string;
}

const MainLayout: React.FC< MainLayoutProps> = ({sampleTextProp})=>{
    return (<div>{sampleTextProp}</div>)
}

export default MainLayout;