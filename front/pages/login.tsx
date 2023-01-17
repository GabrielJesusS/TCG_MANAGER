import Button from '../components/button/Button';
import Logo from '../public/icons/logo-svg.svg';
import Footer from '../components/footer/Footer';
import TextInput from '../components/input/TextInput';
import Card from '../components/card/Card';
import { useEffect } from 'react';
import Vanilla from 'vanilla-tilt'
import {MdAddAlarm} from 'react-icons/md'


export default function Login() {

  useEffect(()=>{

    const cards = document.querySelectorAll(".pokemon-card")
    

    Vanilla.init(cards)
    
  })

  return (
    <>
      <div className="flex flex-col h-screen">
        <main className="w-full h-full justify-center flex bg-blue-500">
          <div className='flex w-full justify-center lg:justify-around items-center max-w-7xl'>
            <div className='flex'>
              <form action="post" className='shadow-xl flex flex-col items-center py-8 px-12 text-xl text-system-gray-900 bg-white rounded-2xl'>
                <Logo height={112} width={248}/>
                <h1 className='font-bold text-2xl my-16 uppercase'>Autenticação</h1>
                <label>
                  <span className='block'>Email:</span>
                  <TextInput type='email' className='max-w-[300px] text-base mb-8' variant="primary" placeholder="Email..."></TextInput>
                </label>
                <label>
                <span className='block'>Senha:</span>
                  <TextInput type='password' className='max-w-[300px] text-base mb-8' variant="primary" placeholder="Senha..."></TextInput>
                </label>
                <p className='text-base mb-8'>Não possui registro? Registre-se <a className='transition-colors  hover:text-secondary-dark text-secondary-main' href="/register">aqui!</a></p>
                <Button className='w-full' variant='primary'>Realizar autenticação</Button>
              </form>
            </div>
            <div>
              <Card className='min-w-[300px] hidden lg:block' cardSrc='https://images.pokemontcg.io/pl3/1.png' cardName='Absol G' cardId='pl3-1'></Card>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}
