import Footer from "../../footer/Footer";

export interface FormLayoutProps{
    children: React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({children})=>{
    return (
    <div className="flex flex-col h-screen">
        <main className="w-full h-full justify-center flex pokemon-user-bg">
                {children}
        </main>
        <Footer></Footer>
    </div>
    )
}

export default FormLayout;