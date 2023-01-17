import Button from '../components/button/Button';
import Logo from '../public/icons/logo-svg.svg';
import Footer from '../components/footer/Footer';
import TextInput from '../components/input/TextInput';
import Card from '../components/card/Card';
import { useEffect, useRef, useState } from 'react';
import Vanilla from 'vanilla-tilt'
import {MdAddAlarm} from 'react-icons/md'
import Modal from '../components/modal/Modal';


export default function Login() {

  useEffect(()=>{

    const cards = document.querySelectorAll(".pokemon-card")

    Vanilla.init(cards)
  })

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const [modalOpen, toggleModal] = useState(false)
  const [modalErrorMsg , setModalMsg] = useState("");

  function login(e: any) {
    e.preventDefault();

    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;

    if (
      emailValue === '' ||
      passwordValue === ''
    ){
      setModalMsg("Existem campos que ainda não foram preenchidos, por favor verifique e tente novamente!")
      toggleModal(true)
      return;
    }

    if (!emailValue?.includes('@')) {
      setModalMsg("E-mail inválido, por favor verifique e tente novamente!")
      toggleModal(true)
      return;
    }
    
  }

  return (
    <>
     <Modal hide={modalOpen} hideHandler={()=>toggleModal(!modalOpen)} modalTitle='Erro'>
        <div className='text-center space-y-4'>
          <p>{modalErrorMsg}</p>
          <Button className='w-fit md:w-1/4' onClick={()=>toggleModal(!modalOpen)} variant='primary'>Ok</Button>
        </div>
      </Modal>
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
