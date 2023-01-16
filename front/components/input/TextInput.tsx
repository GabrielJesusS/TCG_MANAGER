import { ChangeEventHandler, forwardRef } from "react";

export interface InputProps{
   icon?:any;
   placeholder?:string;
   children?: React.ReactNode;
   variant: 'primary' | 'error'
   className?: string;
   disabled?: boolean;
   type?: 'text' | 'password' | 'email' | 'search'
   onChange?: ChangeEventHandler
}

const TextInput  = forwardRef<any, InputProps>(({onChange, icon, variant,children,className,disabled,placeholder,type}, ref)=>{

    return (
        <span className={`dft-input ${disabled? 'bg-system-gray-100' : null}`}>
            <span className="input-icon">{icon? <span>{icon}</span>: null}</span>
            <input onChange={onChange} ref={ref} disabled={disabled} className={`input-box ${icon && 'pr-8'} ${className}`} placeholder={placeholder} type={type || 'text'}/>
        </span>
    )
})

export default TextInput;