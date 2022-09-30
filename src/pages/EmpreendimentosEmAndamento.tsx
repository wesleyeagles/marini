import React, { useRef, useState } from "react";

import { Box, Container, Text } from "@chakra-ui/react";
import { BannerAndamento } from "../components/BannerAndamento";
import { Swiper, SwiperSlide } from "swiper/react";
import {Helmet} from "react-helmet";
import {motion} from "framer-motion"


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { StyledEmpreendimentosAndamento } from "../styledcomponents/StyledEmpreendimentosAndamento";
import { StyledP, StyledStrong } from "../styledcomponents/Typograph";

import { MapPin } from 'tabler-icons-react';
import StyledButton from "../styledcomponents/Button";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function EmpreendimentosEmAndamento() {

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <>
        <Helmet>
        {/* charset */}
        <meta charSet="utf-8" />

        {/* url */}
        <meta content="http://www.mariniconstrucoes.com.br/empreendimentos-em-andamento" property="og:url" />
        <link href="http://www.mariniconstrucoes.com.br/empreendimentos-em-andamento" rel="canonical" />

        {/* title */}
        <title>Marini | Empreendimentos em andamento</title>
        <meta content="Marini | Empreendimentos em andamento" property="og:title" />
        <meta content="Marini | Empreendimentos em andamento" property="og:site_name" />

        {/* description */}
        <meta content="Residencial Jardim San Paulo está sendo construído no charmoso Bairro Borgo. O novo empreendimento conta com uma planta funcional e bem dividida de apartamentos que priorizam o bem estar, buscando valorização das unidades com excelentes orientações solares em perfeito contato com a natureza. A fachada busca conectar as torres entre si por elementos geométricos, dando ao empreendimento um caráter de sofisticação e valorização." name="description" />
        <meta content="Residencial Jardim San Paulo está sendo construído no charmoso Bairro Borgo. O novo empreendimento conta com uma planta funcional e bem dividida de apartamentos que priorizam o bem estar, buscando valorização das unidades com excelentes orientações solares em perfeito contato com a natureza. A fachada busca conectar as torres entre si por elementos geométricos, dando ao empreendimento um caráter de sofisticação e valorização." property="og:description" />

        {/* keyword */}
        <meta name='keywords' content='residencial, residencial jardim san paulo, san paulo, jardim san paulo, bairro borgo, novo empreendimento, apartamento san paulo' />
    
        {/* og type */} 
        <meta content="website" property="og:type" />
    
        {/* og lang */} 
        <meta content="pt_BR" property="og:locale" />
        </Helmet>
        <Navbar />
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1.6}}} exit={{opacity: 0, transition: {duration: 0.1} }}>
        <StyledEmpreendimentosAndamento>
        <BannerAndamento />
        <Box paddingTop='72px' paddingBottom='124px'>
            <Box display='flex' justifyContent='center'>
                <img src="images/jardimsanpaulo-logo.png" alt="" />
            </Box>

            <Box>
                <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                    <Box marginTop='72px' display='flex' flexDirection={{sm: 'column', lg: 'row'}} justifyContent={{lg: 'space-between'}}>
                        <Box w={{sm: '100%', lg: '45%', xl: '40%'}}>
                            <Swiper

                            breakpoints={{
                                768: {
                                    centerInsufficientSlides: false,
                                    centeredSlides: true
                                }
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            centeredSlides={true}
                            >
                                <SwiperSlide className="andamento__slide">
                                    <img src="images/sanpaulo-image-1.png" />
                                </SwiperSlide>

                                <SwiperSlide className="andamento__slide">
                                    <img src="images/sanpaulo-image-2.png" />
                                </SwiperSlide>

                                <SwiperSlide className="andamento__slide">
                                    <img src="images/sanpaulo-image-3.png" />
                                </SwiperSlide>

                                <SwiperSlide className="andamento__slide">
                                    <img src="images/sanpaulo-image-4.png" />
                                </SwiperSlide>

                                <SwiperSlide className="andamento__slide">
                                    <img src="images/sanpaulo-image-5.png" />
                                </SwiperSlide>

                                <SwiperSlide className="andamento__slide">
                                    <img src="images/sanpaulo-image-6.png" />
                                </SwiperSlide>

                                <SwiperSlide className="andamento__slide">
                                    <img src="images/sanpaulo-image-7.png" />
                                </SwiperSlide>

                                <SwiperSlide className="andamento__slide">
                                    <img src="images/sanpaulo-image-8.png" />
                                </SwiperSlide>

                                <SwiperSlide className="andamento__slide">
                                    <img src="images/sanpaulo-image-9.png" />
                                </SwiperSlide>

                                <SwiperSlide className="andamento__slide">
                                    <img src="images/sanpaulo-image-10.png" />
                                </SwiperSlide>

                                <SwiperSlide className="andamento__slide">
                                    <img src="images/sanpaulo-image-11.png" />
                                </SwiperSlide>

                                <SwiperSlide className="andamento__slide">
                                    <img src="images/sanpaulo-image-12.png" />
                                </SwiperSlide>

                                <SwiperSlide className="andamento__slide">
                                    <img src="images/sanpaulo-image-13.png" />
                                </SwiperSlide>

                                <SwiperSlide className="andamento__slide">
                                    <img src="images/sanpaulo-image-14.png" />
                                </SwiperSlide>

                                <SwiperSlide className="andamento__slide">
                                    <img src="images/sanpaulo-image-15.png" />
                                </SwiperSlide>

                                <SwiperSlide className="andamento__slide">
                                    <img src="images/sanpaulo-image-16.png" />
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
                            onSwiper={setThumbsSwiper}
                            spaceBetween={20}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            >
                                <SwiperSlide>
                                    <img src="images/sanpaulo-image-thumb-1.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/sanpaulo-image-thumb-2.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/sanpaulo-image-thumb-3.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/sanpaulo-image-thumb-4.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/sanpaulo-image-thumb-5.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/sanpaulo-image-thumb-6.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/sanpaulo-image-thumb-7.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/sanpaulo-image-thumb-8.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/sanpaulo-image-thumb-9.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/sanpaulo-image-thumb-10.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/sanpaulo-image-thumb-11.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/sanpaulo-image-thumb-12.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/sanpaulo-image-thumb-13.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/sanpaulo-image-thumb-14.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/sanpaulo-image-thumb-15.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/sanpaulo-image-thumb-16.png" />
                                </SwiperSlide>
                            </Swiper>
                            </Box>
                        </Box>

                        <Box marginTop={{sm: '32px', lg: '0'}} w={{sm: '100%', lg: '53%', xl: '56%'}}>
                            <Box marginBottom='72px'>
                                <StyledP black='true'>
                                Residencial Jardim San Paulo está sendo construído no charmoso Bairro Borgo.
                                O novo empreendimento conta com uma planta funcional e bem dividida de apartamentos que priorizam o bem estar, buscando valorização das unidades com excelentes orientações solares em perfeito contato com a natureza.
                                A fachada busca conectar as torres entre si por elementos geométricos, dando ao empreendimento um caráter de sofisticação e valorização.
                                </StyledP>
                            </Box>

                            <a href="https://www.google.com/maps/place/R.+Marcelino+Champagnat,+540+-+Borgo,+Bento+Gon%C3%A7alves+-+RS,+95700-000/data=!4m2!3m1!1s0x951c24af2f425d1f:0x1edaf1c897ec0d94?sa=X&ved=2ahUKEwjbnIzr06v6AhVKqpUCHcbyARUQ8gF6BAgUEAE" target='_blank'>
                            <Box display='flex' w='100%'>
                                <Box marginRight='8px'>
                                    <MapPin />
                                </Box>
                                <Text as='span' w='60%' color='#252525' fontWeight='400'>
                                Rua Marcelino Champagnat, 540 - Bairro Borgo Bento Gonçalves - RS
                                </Text>
                            </Box>
                            </a>

                            <Box marginTop='72px'>
                                <Text>
                                    <StyledStrong display='block' margin='0px 4px 0px 0px'>
                                        Data de início:
                                    </StyledStrong>
                                        20/08/2020
                                </Text>
                                <Text marginTop='3px'>
                                    <StyledStrong display='block' margin='0px 4px 0px 0px'>
                                        Data de entrega:
                                    </StyledStrong>
                                        Torre A = 20/09/2023 e Torre B = 20/12/2024
                                </Text>
                                <Text marginTop='3px'>
                                    <StyledStrong display='block' margin='0px 4px 0px 0px'>
                                        Área construída:
                                    </StyledStrong>
                                        13.409,51m²
                                </Text>
                                <Text marginTop='3px'>
                                    <StyledStrong display='block' margin='0px 4px 0px 0px'>
                                        Alvará de construção:
                                    </StyledStrong>
                                        119/2020
                                </Text>
                                <Text marginTop='3px'>
                                    <StyledStrong display='block' margin='0px 4px 0px 0px'>
                                        Registro de Incorporação:
                                    </StyledStrong>
                                        R10-44.051
                                </Text>
                            </Box>

                            <Box marginTop='88px'>
                                <a href="http://www.jardimsanpaulo.com.br/" target='_'>
                                <StyledButton>
                                    conheça o empreendimento
                                </StyledButton>
                                </a>
                            </Box>
                           
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
        <Footer />
        </StyledEmpreendimentosAndamento>
        </motion.div>
        </>
    )
}