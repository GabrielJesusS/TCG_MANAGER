import Logo from '../../public/icons/logo-svg-nav.svg'
import {MdMenu, MdChevronRight, MdOutlineClose} from 'react-icons/md'
import TextInput from '../input/TextInput';
import Button from '../button/Button';
import React, { useState } from 'react';
import UserMP from '../../public/images/usermp.png'

 
export interface NavBarProps{
    
}

const NavBar: React.FC<NavBarProps> = ({})=>{

    const [isNavMenuHide, swapNavMenu] = useState(true);



    function swapMenu(e:React.MouseEvent){

        if(window.innerWidth < 1024){
            e.currentTarget.nextElementSibling?.classList.toggle('hidden')
        }
        
    }



    return (
        <div className='nav-container'>
            <header className='nav-header'>
                <Logo/>
                <button onClick={()=>swapNavMenu(!isNavMenuHide)} className='text-white text-3xl lg:hidden'>
                    <MdMenu />
                </button>
                <nav className={`navigation ${isNavMenuHide ? 'hidden' : null} lg:flex`}>
                    <div className='flex w-full lg:min-w-fit lg:w-fit items-center justify-between'>
                       <div className='nav-user'>
                            <span>
                                <img className='rounded-full' src={UserMP.src} alt="" />
                            </span>
                            <span>
                                <p className='text-base text-system-gray-800 lg:text-white'>
                                    Usuário X
                                    <span className='text-xs text-system-gray-400  lg:text-white block'>Treinador nível: x</span>
                                </p>
                            </span>
                       </div>
                       <button onClick={()=>swapNavMenu(!isNavMenuHide)} ><MdOutlineClose className='text-4xl lg:hidden'/></button>
                    </div>
                    <form className='' action="">
                        <TextInput placeholder="Buscar por..." variant='primary'></TextInput>
                        <Button className='hidden' variant='primary'>Buscar</Button>
                    </form>
                    <ul className='nav-menu'>
                        <li className='nav-item group'>
                            <span onClick={(e)=>swapMenu(e)} className='nav-item-title'>Decks<MdChevronRight className='menu-chevron'/></span>
                            <ul className='nav-submenu hidden lg:group-hover:block lg:hover:block'>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Listagem</li>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Novos</li>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Destaques</li>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Construtor</li>
                            </ul>
                        </li>
                        <li className='nav-item group'>
                            <span onClick={(e)=>swapMenu(e)} className='nav-item-title'>Artigos<MdChevronRight className='menu-chevron'/></span>
                            <ul className='nav-submenu hidden lg:group-hover:block lg:hover:block'>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Listagem</li>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Novos</li>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Destaques</li>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Construtor</li>
                            </ul>
                        </li>
                        <li className='nav-item group'>
                            <span onClick={(e)=>swapMenu(e)} className='nav-item-title'>Cartas<MdChevronRight className='menu-chevron'/></span>
                            <ul className='nav-submenu hidden lg:group-hover:block lg:hover:block'>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Listagem</li>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Novos</li>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Destaques</li>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Construtor</li>
                            </ul>
                        </li>
                        <li className='nav-item group'>
                            <span onClick={(e)=>swapMenu(e)} className='nav-item-title'>Coleções<MdChevronRight className='menu-chevron'/></span>
                            <ul className='nav-submenu hidden lg:group-hover:block lg:hover:block'>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Listagem</li>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Novos</li>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Destaques</li>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Construtor</li>
                            </ul>
                        </li>
                        <li className='nav-item group'>
                            <span onClick={(e)=>swapMenu(e)} className='nav-item-title'>Usuários<MdChevronRight className='menu-chevron'/></span>
                            <ul className='nav-submenu hidden lg:group-hover:block lg:hover:block'>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Listagem</li>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Novos</li>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Destaques</li>
                                <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Construtor</li>
                            </ul>
                        </li>
                    </ul>
                    <Button variant='cancel' className='w-full lg:hidden'  type='outlined'>Sair</Button>
                </nav>
            </header>
        </div>
    )
}

export default NavBar;