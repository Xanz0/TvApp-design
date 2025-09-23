// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./designs/swiper.css"; // yangi CSS fayl

// const slides = [
//   {
//     img: "https://picsum.photos/id/1018/900/500",
//     title: "Tabiat manzarasi",
//     description: "Go‘zal tog‘lar va yashil o‘rmonlar."
//   },
//   {
//     img: "https://picsum.photos/id/1025/900/500",
//     title: "It rasmi",
//     description: "Chiroyli itning yaqin suratga olingan rasmi."
//   },
//   {
//     img: "https://picsum.photos/id/1042/900/500",
//     title: "Ko‘l bo‘yida",
//     description: "Sokin ko‘l va tonggi quyosh manzarasi."
//   }
// ];

// function SwiperComponent() {
//   return (
//     <div className="swiper-container">
//       <Swiper
//         modules={[Pagination, Autoplay, Navigation]}
//         spaceBetween={30}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         navigation
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
            
//               <div className="slide-card">
//                 <a href="https://youtu.be/UV0mhY2Dxr0?si=90yzDFbCbPEgqSag" target="_blank" rel="noopener noreferrer">
//                 <img src={slide.img} alt={slide.title} className="slide-image" /> </a>
//                 <div className="slide-info">
//                   <h3>{slide.title}</h3>
//                   <p>{slide.description}</p>
//                 </div>
//               </div>
            
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default SwiperComponent;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./designs/swiper.css";

function SwiperComponent() {
  const { t } = useTranslation();

  // matnlarni i18n orqali olamiz
  const slides = [
    {
      img: "https://s3.storage.servisoft.uz/navoi-council/photo_2025-09-22_19-13-10.jpg",
      title: t("swiper.slide1.title"),
      description: t("swiper.slide1.description"),
    },
    {
      img: "https://s3.storage.servisoft.uz/navoi-council/photo_2025-09-22_19-26-10.jpg",
      title: t("swiper.slide2.title"),
      description: t("swiper.slide2.description"),
    },
    {
      img: "https://s3.storage.servisoft.uz/navoi-council/photo_2025-09-22_19-26-23.jpg",
      title: t("swiper.slide3.title"),
      description: t("swiper.slide3.description"),
    }
  ];

  return (
    <div className="swiper-container">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-card">
                <img src={slide.img} alt={slide.title} className="slide-image" />
              <div className="slide-info">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperComponent;
