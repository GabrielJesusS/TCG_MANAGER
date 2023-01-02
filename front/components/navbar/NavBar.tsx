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

        console.log(e.currentTarget.nextElementSibling)
        e.currentTarget.nextElementSibling?.classList.toggle('hidden')
    }



    return (
        <header className='nav-header'>
            <Logo/>
            <span className='text-white'>
                <button onClick={()=>swapNavMenu(!isNavMenuHide)} className='text-3xl'>
                    <MdMenu />
                </button>
            </span>

            <nav className={`navigation ${isNavMenuHide ? 'hidden' : null}`}>
                <div className='flex w-full items-center justify-between'>
                   <div className='nav-user'>
                        <span>
                            <img className='rounded-full' src={UserMP.src} alt="" />
                        </span>
                        <span>
                            <p className='text-base text-system-gray-800'>
                                Usuário X
                                <span className='text-xs text-system-gray-400 block'>Treinador nível: x</span>
                            </p>
                        </span>
                   </div>
                   <button onClick={()=>swapNavMenu(!isNavMenuHide)} ><MdOutlineClose className='text-4xl'/></button>
                </div>
                <form className='' action="">
                    <TextInput placeholder="Buscar por..." variant='primary'></TextInput>
                    <Button className='hidden' variant='primary'>Buscar</Button>
                </form>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <span onClick={(e)=>swapMenu(e)} className='nav-item-title'>Decks<MdChevronRight className='menu-chevron'/></span>
                        <ul className='nav-submenu hidden'>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Listagem</li>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Novos</li>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Destaques</li>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Construtor</li>
                        </ul>
                    </li>
                    <li className='nav-item'>
                        <span onClick={(e)=>swapMenu(e)} className='nav-item-title'>Artigos<MdChevronRight className='menu-chevron'/></span>
                        <ul className='nav-submenu hidden'>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Listagem</li>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Novos</li>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Destaques</li>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Construtor</li>
                        </ul>
                    </li>
                    <li className='nav-item'>
                        <span onClick={(e)=>swapMenu(e)} className='nav-item-title'>Cartas<MdChevronRight className='menu-chevron'/></span>
                        <ul className='nav-submenu hidden'>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Listagem</li>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Novos</li>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Destaques</li>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Construtor</li>
                        </ul>
                    </li>
                    <li className='nav-item'>
                        <span onClick={(e)=>swapMenu(e)} className='nav-item-title'>Coleções<MdChevronRight className='menu-chevron'/></span>
                        <ul className='nav-submenu hidden'>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Listagem</li>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Novos</li>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Destaques</li>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Construtor</li>
                        </ul>
                    </li>
                    <li className='nav-item'>
                        <span onClick={(e)=>swapMenu(e)} className='nav-item-title'>Usuários<MdChevronRight className='menu-chevron'/></span>
                        <ul className='nav-submenu hidden'>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Listagem</li>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Novos</li>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Destaques</li>
                            <li className='nav-subitem'><MdChevronRight className='menu-chevron'/>Construtor</li>
                        </ul>
                    </li>
                </ul>

                <Button variant='cancel' className='w-full'  type='outlined'>Sair</Button>
            </nav>
        </header>
    )
}

export default NavBar;