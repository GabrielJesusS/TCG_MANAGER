import { ReactHTMLElement } from "react";
import { IconType } from "react-icons";

export interface ButtonProps{
    sampleTextProp?: string;
    children?: React.ReactNode;
    variant: 'primary' | 'cancel' | 'success';
    type?: 'outlined';
    icon?: any;
    iconRight?: boolean;

}

const Button: React.FC<ButtonProps> = ({sampleTextProp, children, variant, type, icon, iconRight})=>{
    
    return (
        <button className={`dft-btn btn-${variant}${type? `-${type} btn-outlined` : ''}`}>
            <span className={`btn-txt ${iconRight? "flex-row-reverse" : ""}`}>
                {icon? <span>{icon}</span>: null}
                {children}
            </span>
        </button>
    )
}

const ButtonDefaultProps = {
    variant: 'primary'
}

export default Button;