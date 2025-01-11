import React, { useEffect, useState } from "react";
import "./style.css";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import fetchData from "../../../Utils/fetchData";

export default function MainSlider() {
  const [sliders, setSliders] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetchData("slider");
      setSliders(response.data);
    })();
  }, []);
  const items = sliders?.map((e, index) => <SwiperSlide key={index}><img src={import.meta.env.VITE_BASE_URL+e.image} alt={e.title} /></SwiperSlide>);

  return (
    <Box height={"80vh"}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="home-slider"
      >
        {items}
      </Swiper>
    </Box>
  );
}
// console.log('Fetching slider data...');
// useEffect(() => {
//   (async () => {
//     try {
//       const response = await fetchData("slider");
//       console.log('Slider data fetched:', response.data);
//       setSliders(response.data);
//     } catch (error) {
//       console.error('Error fetching slider data:', error);
//     }
//   })();
// }, []);
// console.log('Sliders:', sliders);