import Footer from "../components/footer/Footer";
import BG from '../public/images/404/NotFoundBG.png'
import Slowpoke from '../public/images/404/NotFoundIcon.png'

export default function NotFoundPage() {
    return (
     <div className="h-screen flex flex-col">
        <main className="grow notfound-main">
            <p className="text-xl lg:text-4xl font-medium">Desculpe, não entendi o que você esta procurando...</p>
            <p className="text-base lg:text-2xl italic">A página que você procura não existe ou esta indisponivel</p>
            <img src={Slowpoke.src} alt="Slowpoke-not-found" />
            <h1 className="font-bold uppercase text-6xl lg:text-7xl">Erro 404</h1>
        </main>
        <Footer></Footer>
     </div>
    );
  }
  