export interface InputProps{
   icon?:any;
   placeholder?:string;
   children?: React.ReactNode;
   variant: 'primary' | 'error'
   className?: string;
   disabled?: boolean;
}

const TextInput: React.FC<InputProps> = ({icon, placeholder, disabled})=>{
    return (
        <span className={`dft-input ${disabled? 'bg-system-gray-100' : null}`}>
            <span className="input-icon">{icon? <span>{icon}</span>: null}</span>
            <input disabled={disabled} className="input-box" placeholder={placeholder} type="text"/>
        </span>
    )
}

export default TextInput;