import { MouseEventHandler } from 'react'
import {MdOutlineCancel} from 'react-icons/md'

export interface ModalProps{
   children?: React.ReactNode
   modalTitle?: string
   hideHandler: MouseEventHandler
   hide: boolean
}

const Modal: React.FC<ModalProps> = ({children, modalTitle, hideHandler, hide})=>{
    return (

    <div className={`modal-container ${!hide && 'hidden'}`}>
        <div className="modal">
            <div className='modal-header'>
                <p>{modalTitle}</p>
                <button onClick={hideHandler} className='modal-close'>
                    <MdOutlineCancel size={30}/>
                </button>
            </div>
            {children}
        </div>
    </div>)
}

export default Modal;