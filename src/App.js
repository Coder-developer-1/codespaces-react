import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import 'swiper/css';
import A from "./assets/aa (1).jpg";
import B from "./assets/bb.jpg";
import C from "./assets/cc.jpg";

function App() {
  
  return (
    <>
      <div><h1>Namaste World</h1></div>

      <div className='carousel-container'>
        <h3> bappa Morya </h3>
      <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 900,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide> <img src={A}/> </SwiperSlide>
      <SwiperSlide> <img src={B}/> </SwiperSlide>
      <SwiperSlide> <img src={C}/> </SwiperSlide>
    
    </Swiper>
      </div>
    </>
  );
}

export default App;


// https://codesandbox.io/s/pdrc53?file=/src/App.jsx:671-745