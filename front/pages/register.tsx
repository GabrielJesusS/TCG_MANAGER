import Button from '../components/button/Button';
import Logo from '../public/icons/logo-svg.svg';
import Footer from '../components/footer/Footer';
import TextInput from '../components/input/TextInput';
import Card from '../components/card/Card';
import { ChangeEvent, MutableRefObject, use, useEffect, useRef, useState } from 'react';
import Vanilla from 'vanilla-tilt';
import Modal from '../components/modal/Modal';
import ky from 'ky';
import FormLayout from '../components/layouts/formsLayout/FormLayout';

export default function Register() {
  useEffect(() => {
    const cards = document.querySelectorAll('.pokemon-card');

    Vanilla.init(cards, {
      scale: 1.1
    });
  });

  const [modalOpen, toggleModal] = useState(false)
  const [modalErrorMsg , setModalMsg] = useState("");

  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confPassword = useRef<HTMLInputElement>(null);

  function checkPassword(e: ChangeEvent) {
    e.preventDefault();

    if (confPassword.current && password.current)
      if (confPassword.current.value != password.current.value) {
        confPassword.current.classList.add('border-system-error-dark')
      }else{
        confPassword.current.classList.remove('border-system-error-dark')
      }
  }



  function register(e: any) {
    e.preventDefault();

    const usernameValue = username.current?.value;
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;
    const confPasswordValue = confPassword.current?.value; 

    if (
      usernameValue == '' ||
      emailValue == '' ||
      passwordValue == '' ||
      confPasswordValue == ''
    ) {
      setModalMsg("Existem campos que ainda não foram preenchidos, por favor verifique e tente novamente!")
      toggleModal(true)
      return;
    }

    if(!emailValue?.includes('@') && emailValue != "") {
      setModalMsg("E-mail inválido, por favor verifique e tente novamente!")
      toggleModal(true)
      return;
    }

    if (passwordValue !== confPasswordValue) {
      setModalMsg("As senhas não coincidem, por favor verifique e tente novamente!")
      toggleModal(true)
      return;
    }

    if(emailValue && usernameValue && passwordValue){
      submitRegister(emailValue, passwordValue , usernameValue);
    }
    
  }

  const submitRegister = async (email:string, password:string, name:string)=>{ 
    const post = await ky.post('http://localhost:3333/user/register', {
      json:{
        email, password, name
      }
    })
    
    console.log(post)
  }

  return (
    <>
      <Modal hide={modalOpen} hideHandler={()=>toggleModal(!modalOpen)} modalTitle='Erro'>
        <div className='text-center space-y-4'>
          <p>{modalErrorMsg}</p>
          <Button className='w-fit md:w-1/4' onClick={()=>toggleModal(!modalOpen)} variant='primary'>Ok</Button>
        </div>
      </Modal>
      <FormLayout>
      <div className="flex flex-row-reverse w-full justify-center lg:justify-around items-center max-w-7xl">
            <div className="flex">
              <form
                action=""
                className="shadow-xl flex flex-col space-y-4 items-center py-8 px-6 md:px-12  text-xl text-system-gray-900 bg-white rounded-2xl"
              >
                <Logo height={112} width={248} />
                <h1 className="font-bold text-2xl my-4 md:my-10 uppercase">Registro</h1>
                <label>
                  <span className="block">Nome de usuário:</span>
                  <TextInput
                    ref={username}
                    type="text"
                    className="input-error max-w-[300px] text-base "
                    variant="primary"
                    placeholder="Nome de usuário..."
                  ></TextInput>
                </label>
                <label>
                  <span className="block">Email:</span>
                  <TextInput
                    ref={email}
                    type="email"
                    className="max-w-[300px] text-base "
                    variant="primary"
                    placeholder="Email..."
                  ></TextInput>
                </label>
                <label>
                  <span className="block">Senha:</span>
                  <TextInput
                    onChange={(e) => checkPassword(e)}
                    ref={password}
                    type="password"
                    className="max-w-[300px] text-base "
                    variant="primary"
                    placeholder="Senha..."
                  ></TextInput>
                </label>
                <label>
                  <span className="block">Confirmar senha:</span>
                  <TextInput
                    onChange={(e) => checkPassword(e)}
                    ref={confPassword}
                    type="password"
                    className="max-w-[300px] text-base "
                    variant="primary"
                    placeholder="Senha..."
                  ></TextInput>
                </label>
                <p className="text-base mb-8">
                  Possui registro? Autentique-se{' '}
                  <a
                    className="transition-colors  hover:text-secondary-dark text-secondary-main"
                    href="/login"
                  >
                    aqui!
                  </a>
                </p>
                <Button
                  onClick={(e) => register(e)}
                  className="w-full"
                  variant="primary"
                >
                  Realizar registro
                </Button>
              </form>
            </div>
            <div>
              <Card
                className="min-w-[300px] hidden lg:block"
                cardSrc="https://images.pokemontcg.io/pl3/1.png"
                cardName="Absol G"
                cardId="pl3-1"
              ></Card>
            </div>
          </div>
      </FormLayout>
    </>
  );
}
