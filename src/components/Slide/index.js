import { useContext } from 'react';
// import required modules
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { GameContext } from '../../contexts/GamesContext';

export default function Slide() {
    const { gameData, onAddToCart } = useContext(GameContext);
    // const width = document.body.clientWidth;

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {gameData.map((obj, index) => (
                <SwiperSlide key={obj.id}>
                    <h3 className="title">{obj.name}</h3>
                    <img src={`/images/${obj.image}`} alt={obj.name} className="image-slide" />
                    <button
                        className="price"
                        onClick={() => onAddToCart(obj)}
                    >Apenas R$ {obj.price}!</button>
                </SwiperSlide>
            ))}
        </Swiper>
    )
};