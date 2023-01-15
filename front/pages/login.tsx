import Button from '../components/button/Button';
import { MdBattery90 } from 'react-icons/md';
import Input from '../components/input/TextInput';
import Logo from '../public/icons/logo-svg.svg';
import Footer from '../components/footer/Footer';
import TextInput from '../components/input/TextInput';

export default function Login() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <main className="w-full h-full justify-center flex bg-blue-500">
          <div className='flex w-full justify-around items-center max-w-7xl'>
            <div className='flex'>
              <form action="post" className='flex flex-col items-center py-8 px-12 text-xl text-system-gray-900 bg-white rounded-2xl'>
                <Logo height={112} width={248}/>
                <h1 className='font-bold text-2xl my-16'>Autenticação</h1>
                <label>
                  Email:
                  <TextInput type='email' className='max-w-[300px] text-base mb-8' variant="primary" placeholder="Email..."></TextInput>
                </label>
                <label>
                  Senha:
                  <TextInput type='password' className='max-w-[300px] text-base mb-8' variant="primary" placeholder="Senha..."></TextInput>
                </label>
                <p className='text-base mb-8'>Não possui registro? Registre-se <a className='hover:text-secondary-main' href="/register">aqui!</a></p>
                <Button variant='primary'>Realizar login</Button>
              </form>
            </div>
            <div>
              <img width={320} src="https://images.pokemontcg.io/pl3/1.png" alt="" />
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}
