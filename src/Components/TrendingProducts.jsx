import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const TrendingProducts = (props) => {
    console.log(props)

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            modules={[Autoplay, Navigation]}
            navigation={true}
            autoplay={{
                delay: 5000,
                pauseOnMouseEnter: true
            }}
        >
            {
                props.data.map((ele, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <img src={ele.thumbnail} alt="" />
                            <p>{ele.title}</p>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default TrendingProducts