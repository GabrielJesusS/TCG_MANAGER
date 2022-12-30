export interface ButtonProps{
    children?: React.ReactNode;
    variant: 'primary' | 'cancel' | 'success';
    type?: 'outlined';
    icon?: any;
    iconRight?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({className, children, variant, type, icon, iconRight})=>{
    
    return (
        <button className={`dft-btn btn-${variant}${type? `-${type} btn-outlined` : ''} ${className}`}>
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