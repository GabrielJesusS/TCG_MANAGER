import {MdCoffee} from 'react-icons/md'

export interface FooterProps{
    
}

const Footer: React.FC<FooterProps> = ({})=>{
    return (
        <div className="footer-container">
            <footer className='my-footer'>
               <p className=''>Criado por <a className='footer-link' href="#">Gabriel Jesus</a> &amp; <a className='footer-link' href="#">Gabriel Lemos</a> com <MdCoffee className='inline'/></p> 
            </footer>
        </div>
    )
}

export default Footer;