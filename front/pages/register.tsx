import Button from '../components/button/Button';
import Logo from '../public/icons/logo-svg.svg';
import Footer from '../components/footer/Footer';
import TextInput from '../components/input/TextInput';
import Card from '../components/card/Card';
import { ChangeEvent, MutableRefObject, use, useEffect, useRef } from 'react';
import Vanilla from 'vanilla-tilt';

interface registerData {
  username: MutableRefObject<any>;
  email: MutableRefObject<any>;
  password: MutableRefObject<any>;
  confPassword: MutableRefObject<any>;
}

export default function Register() {
  useEffect(() => {
    const cards = document.querySelectorAll('.pokemon-card');

    Vanilla.init(cards);
  });

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
      usernameValue === '' ||
      emailValue === '' ||
      passwordValue === '' ||
      confPasswordValue === ''
    ) {
      console.log('Tem coisa vazia');
      return;
    }

    if (!emailValue?.includes('@')) {
      console.log('Email invalido');
    }

    if (passwordValue !== confPasswordValue) {
      console.log('dawdwdw');
      return;
    }

    console.log('tudo certo');
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        <main className="w-full h-full justify-center flex bg-blue-500">
          <div className="flex flex-row-reverse w-full justify-center lg:justify-around items-center max-w-7xl">
            <div className="flex">
              <form
                action=""
                className="shadow-xl flex flex-col space-y-4 items-center py-8 px-12 text-xl text-system-gray-900 bg-white rounded-2xl"
              >
                <Logo height={112} width={248} />
                <h1 className="font-bold text-2xl my-10 uppercase">Registro</h1>
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
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}
