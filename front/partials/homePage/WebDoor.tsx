import {Swiper, SwiperSlide} from "swiper/react";
import Banner1 from '../../public/images/caroussel/banner-1.jpg'
import Banner2 from '../../public/images/caroussel/banner-2.jpg'
import Banner3 from '../../public/images/caroussel/banner-3.jpg'
import Banner4 from '../../public/images/caroussel/banner-4.jpg'
import Banner5 from '../../public/images/caroussel/banner-5.jpg'
import 'swiper/css'
import { Pagination, Autoplay } from "swiper";
import ArticleList from "../../components/articlesList/ArticlesList";


export interface WebDoorProps{
    
}

const images = [Banner1, Banner2, Banner3, Banner4, Banner5]

const WebDoor: React.FC<WebDoorProps> = ({})=>{
    return (
        <div className="max-w-7xl m-auto bg-system-gray-100">
            <section className="">
                <div className="relative">
                    <Swiper
                        className="home-slider h-40 md:max-h-80 md:h-full"
                        slideClass="home-slide"
                        onTransitionStart={(e)=>console.log(e.activeIndex)}
                        autoplay={{
                            delay: 2000
                        }}
                        modules={[Autoplay, Pagination]}
                        pagination={{
                            clickable: true,
                            el:'.home-slider-pagination',
                            bulletClass: 'home-slider-bullet',
                            bulletActiveClass: 'home-slider-bullet-active'
                        }}
                        >
                         {images.map((image, index)=> <SwiperSlide key={"banner"+index} className="home-slide"><img width={image.width} height={image.height} src={image.src} className={'object-fill align-middle w-full'} alt="" /></SwiperSlide>)}
                    </Swiper>
                    <div className="text-white text-base absolute p-3 w-full bottom-0 z-10 bg-gradient-to-r from-black">
                        <p><strong className="font-medium leading-3">Acompanhe os novos decks!</strong></p>
                        <p className="text-[8px] font-normal italic leading-3">Novos meta decks disponíveis! Teste ja!</p>
                    </div>
                    <div className="home-slider-pagination absolute z-10 top-0 right-0 space-y-1 m-2"></div>
                </div>
            </section>
            <section className="p-6 space-y-6">
                <ArticleList topicTitle="Mais recentes"></ArticleList>
                <ArticleList topicTitle="Mais recentes"></ArticleList>
                <ArticleList topicTitle="Mais recentes"></ArticleList>
            </section>
        </div>
    )
}

export default WebDoor;