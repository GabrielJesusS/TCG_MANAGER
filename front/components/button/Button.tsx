import { MouseEventHandler } from "react";

export interface ButtonProps{
    children?: React.ReactNode;
    variant: 'primary' | 'cancel' | 'success';
    type?: 'outlined';
    icon?: any;
    iconRight?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<ButtonProps> = ({onClick, className, children, variant, type, icon, iconRight})=>{
    
    return (
        <button onClick={onClick} className={`dft-btn btn-${variant}${type? `-${type} btn-outlined` : ''} ${className}`}>
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