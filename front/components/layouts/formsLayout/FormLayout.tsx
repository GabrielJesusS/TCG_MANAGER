export interface FormLayoutProps{
    sampleTextProp: string;
}

const FormLayout: React.FC<FormLayoutProps> = ({sampleTextProp})=>{
    return (<div>{sampleTextProp}</div>)
}

export default FormLayout;