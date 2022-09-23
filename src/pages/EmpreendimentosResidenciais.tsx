import React, { useRef, useState } from "react";

import { Box, Container } from "@chakra-ui/react"
import { BannerResidenciais } from "../components/BannerResidenciais"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { StyledEmpreendimentosResidencias } from "../styledcomponents/StyledEmpreendimentosResidenciais"
import { StyledH3 } from "../styledcomponents/Typograph"

import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

export const EmpreendimentosResidenciais = () => {

    const [thumbsSwiper2, setThumbsSwiper2] = useState<any>(null);


    return (
        <StyledEmpreendimentosResidencias>
            <Navbar />
            <BannerResidenciais />
            <Box paddingTop='97px' paddingBottom='187px'>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <StyledH3>
                    Confira nossos empreendimentos residenciais
                </StyledH3>
            
            <Box marginTop='47px' display='flex' justifyContent='space-between'>
                <Box w={{xl: '40%'}}>
                <Swiper

                breakpoints={{
                    768: {
                        centerInsufficientSlides: false,
                        centeredSlides: true
                    }
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper2 && !thumbsSwiper2.destroyed ? thumbsSwiper2 : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                centeredSlides={true}
                >
                    <SwiperSlide className="andamento__slide">
                        <img src="images/casa-de-alto-padrao-image-1.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/casa-de-alto-padrao-image-2.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/casa-de-alto-padrao-image-3.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/casa-de-alto-padrao-image-4.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/casa-de-alto-padrao-image-5.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/casa-de-alto-padrao-image-6.png" />
                    </SwiperSlide>
                </Swiper>

                <Box marginTop='13px'>
                            <Swiper
                            slidesPerView={3}
                            breakpoints={{
                                960: {
                                    slidesPerView: 3
                                },  
                                
                                768: {
                                    slidesPerView: 5
                                    
                                } 
                            }}
                            onSwiper={setThumbsSwiper2}
                            spaceBetween={20}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            >
                                <SwiperSlide>
                                    <img src="images/casa-de-alto-padrao-thumb-image-1.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/casa-de-alto-padrao-thumb-image-2.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/casa-de-alto-padrao-thumb-image-3.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/casa-de-alto-padrao-thumb-image-4.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/casa-de-alto-padrao-thumb-image-5.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/casa-de-alto-padrao-thumb-image-6.png" />
                                </SwiperSlide>
                            </Swiper>
                            </Box>
                </Box>
            </Box>
            </Container>
            </Box>
            <Footer />
        </StyledEmpreendimentosResidencias>
    )
}