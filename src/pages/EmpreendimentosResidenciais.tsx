import { useState } from "react";

import { Box, Button, Container, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { BannerResidenciais } from "../components/BannerResidenciais"
import { Footer } from "../components/Footer"
import { StyledEmpreendimentosResidencias } from "../styledcomponents/StyledEmpreendimentosResidenciais"
import { StyledH3, StyledP, StyledStrong } from "../styledcomponents/Typograph"
import {Helmet} from "react-helmet";

import { Swiper, SwiperSlide } from "swiper/react";

import { MapPin } from 'tabler-icons-react';


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import StyledButton from "../styledcomponents/Button";

export const EmpreendimentosResidenciais = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [thumbsSwiper2, setThumbsSwiper2] = useState<any>(null);
    const [thumbsSwiper3, setThumbsSwiper3] = useState<any>(null);
    const [thumbsSwiper4, setThumbsSwiper4] = useState<any>(null);
    const [thumbsSwiper5, setThumbsSwiper5] = useState<any>(null);
    const [thumbsSwiper6, setThumbsSwiper6] = useState<any>(null);
    const [thumbsSwiper7, setThumbsSwiper7] = useState<any>(null);
    const [thumbsSwiper8, setThumbsSwiper8] = useState<any>(null);
    const [thumbsSwiper9, setThumbsSwiper9] = useState<any>(null);
    const [thumbsSwiper10, setThumbsSwiper10] = useState<any>(null);

    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                behavior: 'smooth',
                top: 0
            })  
        }, 200) 
    }


    return (
        <>
        <Helmet>
        {/* charset */}
        <meta charSet="utf-8" />

        {/* url */}
        <meta content="http://www.mariniconstrucoes.com.br/empreendimentos-em-residênciais" property="og:url" />
        <link href="http://www.mariniconstrucoes.com.br/empreendimentos-em-residênciais" rel="canonical" />

        {/* title */}
        <title>Marini | Empreendimentos residênciais</title>
        <meta content="Marini | Empreendimentos residênciais" property="og:title" />
        <meta content="Marini | Empreendimentos residênciais" property="og:site_name" />

        {/* description */}
        <meta content="Empreendimentos residênciais, casas, casas de alto padrão, casas de luxo" name="description" />
        <meta content="Empreendimentos residênciais, casas, casas de alto padrão, casas de luxo" property="og:description" />

        {/* keyword */}
        <meta name='keywords' content='construção civíl, empreendimentos, obras, prédios, casas, apartamentos, casas de luxo, projetos de casa, obras residenciais' />
    
        {/* og type */} 
        <meta content="website" property="og:type" />
    
        {/* og lang */} 
        <meta content="pt_BR" property="og:locale" />
        </Helmet>
        <Navbar />
        <div>
        <StyledEmpreendimentosResidencias>
            <BannerResidenciais />
            <Box paddingTop='97px' paddingBottom='187px'>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <StyledH3>
                    Confira nossos empreendimentos entregues
                </StyledH3>

                <Box marginTop={{sm: '45px', md: '120px'}} display='flex' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>
                <Box w={{sm: '100%', lg: '45%', xl: '40%'}} marginTop={{sm: '32px', lg: '0px'}}>
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
                            </Swiper>
                            </Box>
                </Box>

                <Box w={{lg: '53%', xl: '57%'}}>
                    <Box bg='#3E5481' w='100%' paddingBlock={{sm: '14px', lg: '5px', xl: '14px'}} paddingLeft='12px' borderRadius='0px 0px 30px 0px'>
                        <Text as='h4' fontSize={{sm: '1.5rem', lg: '1.3rem', xl: '1.5rem'}} fontWeight='400' color='#F0F0F0'>
                            Residencial Jardim San Paulo
                        </Text>
                    </Box>
                    <Box marginTop='18px' w={{md: '90%', lg: '100%'}}>
                        <StyledP black='true'>
                        São apartamentos que priorizam o bem estar, buscando valorização das unidades com excelentes orientações solares em perfeito contato com a natureza.                     
                        </StyledP>
                    </Box>
                    <Box marginTop={{sm: '20px', lg: '20px', xl: '40px'}}>
                    <Text>
                        <StyledStrong display='block' margin='0px 4px 0px 0px'>
                            Área Construída:
                        </StyledStrong>
                            13400m²
                    </Text>
                    </Box>
                    <Box w='100%' marginTop={{sm: '20px', lg: '20px', xl: '40px'}} display='flex' justifyContent='space-between'>
                        <Box marginRight={{sm: '40px', md: '0px'}}>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Área Privativa:</StyledStrong>
                                        Apartamentos de 49,92m² até 53,54m²
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Localização Previlegiada:</StyledStrong>
                                        01 ou 02 vagas
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Salão de Festas:</StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Esquadrias:</StyledStrong>
                                        Aluminio
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Espera Água Quente:</StyledStrong>
                                        2
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}} paddingRight={{xl: '55px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Dormitórios:</StyledStrong>
                                        02
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Porcelanato:</StyledStrong>
                                        Nas áreas sociais
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Localização Privilegiada:</StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} justifyContent='space-between' marginTop={{sm: '25px', lg: '25px', xl: '50px'}} alignItems='center'>
                        <Box display='flex' marginTop={{sm: '15px', md: '0px'}} flexDirection={{lg: 'column', xl: 'row'}} alignItems={{lg: 'center', xl: 'start'}}>
                            <Box marginRight={{xl: '6px'}} marginBottom={{lg: '2px', xl: '0px'}}>
                                <MapPin />
                            </Box>
                            <Text w={{sm: '240px', lg: '185px', xl: '285px'}} textAlign='center' fontWeight='400px' fontSize='14px' color='#000'>
                            Rua Marcelino Champagnat, 540 - Bairro Borgo - Bento Gonçalves - RS
                            </Text>
                        </Box>

                        <Link to='/san-paulo'>
                            <StyledButton marginTop={{sm: '15px', md: '0px'}} marginRight="24px" onClick={scrollToTop}>Saber mais</StyledButton>
                        </Link>
                    </Box>
                </Box>
            </Box>
            





                <Box marginTop={{sm: '45px', md: '120px'}} display='flex' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>
                <Box w={{sm: '100%', lg: '45%', xl: '40%'}} marginTop={{sm: '32px', lg: '0px'}}>
                <Swiper

                breakpoints={{
                    768: {
                        centerInsufficientSlides: false,
                        centeredSlides: true
                    }
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper7 && !thumbsSwiper7.destroyed ? thumbsSwiper7 : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                centeredSlides={true}
                >
                    <SwiperSlide className="andamento__slide">
                        <img src="images/diamond-image-1.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/diamond-image-2.png" />
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
                            onSwiper={setThumbsSwiper7}
                            spaceBetween={20}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            >
                                <SwiperSlide>
                                    <img src="images/diamond-thumb-image-1.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/diamond-thumb-image-2.png" />
                                </SwiperSlide>
                            </Swiper>
                            </Box>
                </Box>

                <Box w={{lg: '53%', xl: '57%'}}>
                    <Box bg='#3E5481' w='100%' paddingBlock={{sm: '14px', lg: '5px', xl: '14px'}} paddingLeft='12px' borderRadius='0px 0px 30px 0px'>
                        <Text as='h4' fontSize={{sm: '1.5rem', lg: '1.3rem', xl: '1.5rem'}} fontWeight='400' color='#F0F0F0'>
                            Residencial Diamond
                        </Text>
                    </Box>
                    <Box marginTop='18px' w={{md: '90%', lg: '100%'}}>
                        <StyledP black='true'>
                        São apartamentos de 01 e 02 dormitórios, numa excelente localização. Um lugar perfeito para morar com funcionalidade e bem estar. Localizado no Bairro Humaitá em Bento Gonçalves/RS.
                        </StyledP>
                    </Box>
                    <Box marginTop={{sm: '20px', lg: '20px', xl: '40px'}}>
                    <Text>
                        <StyledStrong display='block' margin='0px 4px 0px 0px'>
                            Área Construída:
                        </StyledStrong>
                            2200m²
                    </Text>
                    </Box>
                    <Box w='100%' marginTop={{sm: '20px', lg: '20px', xl: '40px'}} display='flex' justifyContent='space-between'>
                        <Box marginRight={{sm: '40px', md: '0px'}}>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Área Total:</StyledStrong>
                                        125,93m²
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Localização Previlegiada:</StyledStrong>
                                        01 ou 02 vagas
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Laminado:</StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Esquadrias:</StyledStrong>
                                        PVC
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Espera Água Quente:</StyledStrong>
                                        2
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}} paddingRight={{xl: '55px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Dormitórios:</StyledStrong>
                                        01 e 02
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Área Privativa:</StyledStrong>
                                        83,74m²
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Porcelanato:</StyledStrong>
                                        Nas áreas sociais
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Localização Privilegiada:</StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} justifyContent='space-between' marginTop={{sm: '25px', lg: '25px', xl: '50px'}} alignItems='center'>

                        <Box display='flex' marginTop={{sm: '15px', md: '0px'}} flexDirection={{lg: 'column', xl: 'row'}} alignItems={{lg: 'center', xl: 'start'}}>
                            <Box marginRight={{xl: '6px'}} marginBottom={{lg: '2px', xl: '0px'}}>
                                <MapPin />
                            </Box>
                            <Text w={{sm: '240px', lg: '185px', xl: '235px'}} textAlign='center' fontWeight='400px' fontSize='14px' color='#000'>
                            Rua  Armindo Schenatto, 120 - Bairro Humaitá Bento Gonçalves - RS
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box marginTop={{sm: '45px', md: '120px'}} display='flex' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>
                <Box w={{sm: '100%', lg: '45%', xl: '40%'}} marginTop={{sm: '32px', lg: '0px'}}>
                <Swiper

                breakpoints={{
                    768: {
                        centerInsufficientSlides: false,
                        centeredSlides: true
                    }
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper8 && !thumbsSwiper8.destroyed ? thumbsSwiper8 : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                centeredSlides={true}
                >
                    <SwiperSlide className="andamento__slide">
                        <img src="images/turquesa-image-1.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/turquesa-image-2.png" />
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
                            onSwiper={setThumbsSwiper8}
                            spaceBetween={20}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            >
                                <SwiperSlide>
                                    <img src="images/turquesa-thumb-image-1.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/turquesa-thumb-image-2.png" />
                                </SwiperSlide>
                            </Swiper>
                            </Box>
                </Box>

                <Box w={{lg: '53%', xl: '57%'}}>
                    <Box bg='#3E5481' w='100%' paddingBlock={{sm: '14px', lg: '5px', xl: '14px'}} paddingLeft='12px' borderRadius='0px 0px 30px 0px'>
                        <Text as='h4' fontSize={{sm: '1.5rem', lg: '1.3rem', xl: '1.5rem'}} fontWeight='400' color='#F0F0F0'>
                            Residencial Turquesa
                        </Text>
                    </Box>
                    <Box marginTop='18px' w={{md: '90%', lg: '100%'}}>
                        <StyledP black='true'>
                        São 4 apartamentos por andar, churrasqueiras em todos os apartamentos e a combinação perfeita de tudo que significa morar bem.
                        </StyledP>
                    </Box>
                    <Box marginTop={{sm: '20px', lg: '20px', xl: '40px'}}>
                    <Text>
                        <StyledStrong display='block' margin='0px 4px 0px 0px'>
                            Área Construída:
                        </StyledStrong>
                            3500m²
                    </Text>
                    </Box>
                    <Box w='100%' marginTop={{sm: '20px', lg: '20px', xl: '40px'}} display='flex' justifyContent='space-between'>
                        <Box marginRight={{sm: '40px', md: '0px'}}>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Área Total:</StyledStrong>
                                        82,55mm²
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Localização Previlegiada:</StyledStrong>
                                        01 ou 02 vagas
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Churrasqueira:</StyledStrong>
                                        1
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Esquadrias:</StyledStrong>
                                        Alumínio
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Espera Água Quente:</StyledStrong>
                                        2
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}} paddingRight={{xl: '55px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Dormitórios:</StyledStrong>
                                        02
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Área Privativa:</StyledStrong>
                                        83,74m²
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Porcelanato:</StyledStrong>
                                        Nas áreas sociais
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Localização Privilegiada:</StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} justifyContent='space-between' marginTop={{sm: '25px', lg: '25px', xl: '50px'}} alignItems='center'>

                        <Box display='flex' marginTop={{sm: '15px', md: '0px'}} flexDirection={{lg: 'column', xl: 'row'}} alignItems={{lg: 'center', xl: 'start'}}>
                            <Box marginRight={{xl: '6px'}} marginBottom={{lg: '2px', xl: '0px'}}>
                                <MapPin />
                            </Box>
                            <Text w={{sm: '240px', lg: '185px', xl: '235px'}} textAlign='center' fontWeight='400px' fontSize='14px' color='#000'>
                            Rua Amabile Campagnolo, Borgo Bento Gonçalves - RS
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box marginTop={{sm: '45px', md: '120px'}} display='flex' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>
                <Box w={{sm: '100%', lg: '45%', xl: '40%'}} marginTop={{sm: '32px', lg: '0px'}}>
                <Swiper

                breakpoints={{
                    768: {
                        centerInsufficientSlides: false,
                        centeredSlides: true
                    }
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper9 && !thumbsSwiper9.destroyed ? thumbsSwiper9 : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                centeredSlides={true}
                >
                    <SwiperSlide className="andamento__slide">
                        <img src="images/verdes-image-1.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/verdes-image-2.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/verdes-image-3.png" />
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
                            onSwiper={setThumbsSwiper9}
                            spaceBetween={20}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            >
                                <SwiperSlide>
                                    <img src="images/verdes-thumb-image-1.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/verdes-thumb-image-2.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/verdes-thumb-image-3.png" />
                                </SwiperSlide>
                            </Swiper>
                            </Box>
                </Box>

                <Box w={{lg: '53%', xl: '57%'}}>
                    <Box bg='#3E5481' w='100%' paddingBlock={{sm: '14px', lg: '5px', xl: '14px'}} paddingLeft='12px' borderRadius='0px 0px 30px 0px'>
                        <Text as='h4' fontSize={{sm: '1.5rem', lg: '1.3rem', xl: '1.5rem'}} fontWeight='400' color='#F0F0F0'>
                            Residencial Verdes Campos
                        </Text>
                    </Box>
                    <Box marginTop='18px' w={{md: '90%', lg: '100%'}}>
                        <StyledP black='true'>
                        O Residencial Verdes Campos são conjugamos duplex, localizado no Loteamento Bertolini em Bento Gonçalves/RS.
                        </StyledP>
                    </Box>
                    <Box w='100%' marginTop={{sm: '20px', lg: '20px', xl: '40px'}} display='flex' justifyContent='space-between'>
                        <Box marginRight={{sm: '40px', md: '0px'}}>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Espera Água Quente:</StyledStrong>
                                        2
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}} paddingRight={{xl: '55px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Localização Privilegiada:</StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} justifyContent='space-between' marginTop={{sm: '25px', lg: '25px', xl: '50px'}} alignItems='center'>

                        <Box display='flex' marginTop={{sm: '15px', md: '0px'}} flexDirection={{lg: 'column', xl: 'row'}} alignItems={{lg: 'center', xl: 'start'}}>
                            <Box marginRight={{xl: '6px'}} marginBottom={{lg: '2px', xl: '0px'}}>
                                <MapPin />
                            </Box>
                            <Text w={{sm: '240px', lg: '185px', xl: '135px'}} textAlign='center' fontWeight='400px' fontSize='14px' color='#000'>
                            Bento Gonçalves - RS
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
            
            <Box marginTop={{sm: '45px', md: '120px'}} display='flex' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>
                <Box w={{sm: '100%', lg: '45%', xl: '40%'}} marginTop={{sm: '32px', lg: '0px'}}>
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

                <Box w={{lg: '53%', xl: '57%'}}>
                    <Box bg='#3E5481' w='100%' paddingBlock={{sm: '14px', lg: '5px', xl: '14px'}} paddingLeft='12px' borderRadius='0px 0px 30px 0px'>
                        <Text as='h4' fontSize={{sm: '1.5rem', lg: '1.3rem', xl: '1.5rem'}} fontWeight='400' color='#F0F0F0'>
                            Casa de alto padrão
                        </Text>
                    </Box>
                    <Box marginTop='18px' w={{md: '90%', lg: '100%'}}>
                        <StyledP black='true'>
                        Mais do que um projeto, uma obra pensada, planejada e construída com toda funcionalidade de forma diferenciada e com 860m² do mais alto padrão. 
                        Um projeto de Arquiteta Valéria Ferreira que acompanha a qualidade e o acabamento das realizações da Marini Construções.
                        </StyledP>
                    </Box>
                    <Box marginTop={{sm: '20px', lg: '20px', xl: '40px'}}>
                    <Text>
                        <StyledStrong display='block' margin='0px 4px 0px 0px'>
                            Área Construída:
                        </StyledStrong>
                            860m²
                    </Text>
                    </Box>
                    <Box w='100%' marginTop={{sm: '20px', lg: '20px', xl: '40px'}} display='flex' justifyContent='space-between'>
                        <Box marginRight={{sm: '40px', md: '0px'}}>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Área Total:</StyledStrong>
                                        1.100m²
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Localização Previlegiada:</StyledStrong>
                                        04 veículos
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Laminado:</StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Esquadrias:</StyledStrong>
                                        PVC
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Espera Água Quente:</StyledStrong>
                                        2
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}} paddingRight={{xl: '55px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Dormitórios:</StyledStrong>
                                        04
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Área Privativa:</StyledStrong>
                                        860m²
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Porcelanato:</StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Localização Privilegiada:</StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} justifyContent='space-between' marginTop={{sm: '25px', lg: '25px', xl: '50px'}} alignItems='center'>

                        <Box display='flex' marginTop={{sm: '15px', md: '0px'}} flexDirection={{lg: 'column', xl: 'row'}} alignItems={{lg: 'center', xl: 'start'}}>
                            <Box marginRight={{xl: '6px'}} marginBottom={{lg: '2px', xl: '0px'}}>
                                <MapPin />
                            </Box>
                            <Text w={{sm: '240px', lg: '185px', xl: '235px'}} textAlign='center' fontWeight='400px' fontSize='14px' color='#000'>
                            Rua das flores, Bairro tamandaré Garibaldi - RS
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box marginTop={{sm: '45px', md: '120px'}} display='flex' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>
                <Box w={{sm: '100%', lg: '45%', xl: '40%'}} marginTop={{sm: '32px', lg: '0px'}}>
                <Swiper

                breakpoints={{
                    768: {
                        centerInsufficientSlides: false,
                        centeredSlides: true
                    }
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper3 && !thumbsSwiper3.destroyed ? thumbsSwiper3 : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                centeredSlides={true}
                >
                    <SwiperSlide className="andamento__slide">
                        <img src="images/habvita-image-1.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/habvita-image-2.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/habvita-image-3.png" />
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
                            onSwiper={setThumbsSwiper3}
                            spaceBetween={20}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            >
                                <SwiperSlide>
                                    <img src="images/habvita-image--thumb-1.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/habvita-image--thumb-2.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/habvita-image--thumb-3.png" />
                                </SwiperSlide>
                            </Swiper>
                            </Box>
                </Box>

                <Box w={{lg: '53%', xl: '57%'}}>
                    <Box bg='#3E5481' w='100%' paddingBlock={{sm: '14px', lg: '5px', xl: '14px'}} paddingLeft='12px' borderRadius='0px 0px 30px 0px'>
                        <Text as='h4' fontSize={{sm: '1.5rem', lg: '1.3rem', xl: '1.5rem'}} fontWeight='400' color='#F0F0F0'>
                            Clinica Habvita
                        </Text>
                    </Box>
                    <Box marginTop='18px' w={{md: '90%', lg: '100%'}}>
                        <StyledP black='true'>
                        Clinica de Repouso da Melhor Idade, localizada no Bairro São Roque em Bento Gonçalves/RS.
                        </StyledP>
                    </Box>
                    <Box w='100%' marginTop={{sm: '20px', lg: '20px', xl: '40px'}} display='flex' justifyContent='space-between'>
                        <Box marginRight={{sm: '40px', md: '0px'}}>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Área Total:</StyledStrong>
                                        420m²
                                    </Text>
                                </ListItem>

                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Espera Água Quente:</StyledStrong>
                                        2
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}} paddingRight={{xl: '55px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Localização Privilegiada:</StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} justifyContent='space-between' marginTop={{sm: '25px', lg: '25px', xl: '50px'}} alignItems='center'>

                        <Box display='flex' marginTop={{sm: '15px', md: '0px'}} flexDirection={{lg: 'column', xl: 'row'}} alignItems={{lg: 'center', xl: 'start'}}>
                            <Box marginRight={{xl: '6px'}} marginBottom={{lg: '2px', xl: '0px'}}>
                                <MapPin />
                            </Box>
                            <Text w={{sm: '240px', lg: '165px', xl: '135px'}} textAlign='center' fontWeight='400px' fontSize='14px' color='#000'>
                            Bairro São Roque Bento Gonçalves - RS
                            </Text>
                        </Box>
                        </Box>
                </Box>
            </Box>

            <Box marginTop={{sm: '45px', md: '120px'}} display='flex' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>
                <Box w={{sm: '100%', lg: '45%', xl: '40%'}} marginTop={{sm: '32px', lg: '0px'}}>
                <Swiper

                breakpoints={{
                    768: {
                        centerInsufficientSlides: false,
                        centeredSlides: true
                    }
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper4 && !thumbsSwiper4.destroyed ? thumbsSwiper4 : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                centeredSlides={true}
                >
                    <SwiperSlide className="andamento__slide">
                        <img src="images/central-image-1.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/central-image-2.png" />
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
                            onSwiper={setThumbsSwiper4}
                            spaceBetween={20}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            >
                                <SwiperSlide>
                                    <img src="images/central-image-thumb-1.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/central-image-thumb-2.png" />
                                </SwiperSlide>
                            </Swiper>
                            </Box>
                </Box>

                <Box w={{lg: '53%', xl: '57%'}}>
                    <Box bg='#3E5481' w='100%' paddingBlock={{sm: '14px', lg: '5px', xl: '14px'}} paddingLeft='12px' borderRadius='0px 0px 30px 0px'>
                        <Text as='h4' fontSize={{sm: '1.5rem', lg: '1.3rem', xl: '1.5rem'}} fontWeight='400' color='#F0F0F0'>
                            Sala Comercial Central
                        </Text>
                    </Box>
                    <Box marginTop='18px' w={{md: '90%', lg: '100%'}}>
                        <StyledP black='true'>
                            Sala Comercial situada no centro da Cidade em Bento Gonçalves/RS.
                        </StyledP>
                    </Box>
                    <Box w='100%' marginTop={{sm: '20px', lg: '20px', xl: '40px'}} display='flex' justifyContent='space-between'>
                        <Box marginRight={{sm: '40px', md: '0px'}}>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Área total:</StyledStrong>
                                        280m²
                                    </Text>
                                </ListItem>

                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Porcelanato:</StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}} paddingRight={{xl: '55px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Localização Previlegiada:</StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>

                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Espera Água Quente:</StyledStrong>
                                        2
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} justifyContent='space-between' marginTop={{sm: '25px', lg: '25px', xl: '50px'}} alignItems='center'>

                        <Box display='flex' marginTop={{sm: '15px', md: '0px'}} flexDirection={{lg: 'column', xl: 'row'}} alignItems={{lg: 'center', xl: 'start'}}>
                            <Box marginRight={{xl: '6px'}} marginBottom={{lg: '2px', xl: '0px'}}>
                                <MapPin />
                            </Box>
                            <Text w={{sm: '240px', lg: '165px', xl: '135px'}} textAlign='center' fontWeight='400px' fontSize='14px' color='#000'>
                            Bairro Centro Bento Gonçalves - RS
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box marginTop={{sm: '45px', md: '120px'}} display='flex' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>
                <Box w={{sm: '100%', lg: '45%', xl: '40%'}} marginTop={{sm: '32px', lg: '0px'}}>
                <Swiper

                breakpoints={{
                    768: {
                        centerInsufficientSlides: false,
                        centeredSlides: true
                    }
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper5 && !thumbsSwiper5.destroyed ? thumbsSwiper5 : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                centeredSlides={true}
                >
                    <SwiperSlide className="andamento__slide">
                        <img src="images/gasperi-image-1.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/gasperi-image-2.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/gasperi-image-3.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/gasperi-image-4.png" />
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
                            onSwiper={setThumbsSwiper5}
                            spaceBetween={20}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            >
                                <SwiperSlide>
                                    <img src="images/gasperi-image-thumb-1.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/gasperi-image-thumb-2.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/gasperi-image-thumb-3.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/gasperi-image-thumb-4.png" />
                                </SwiperSlide>
                            </Swiper>
                            </Box>
                </Box>

                <Box w={{lg: '53%', xl: '57%'}}>
                    <Box bg='#3E5481' w='100%' paddingBlock={{sm: '14px', lg: '5px', xl: '14px'}} paddingLeft='12px' borderRadius='0px 0px 30px 0px'>
                        <Text as='h4' fontSize={{sm: '1.5rem', lg: '1.3rem', xl: '1.5rem'}} fontWeight='400' color='#F0F0F0'>
                            Clínica De Gasperi
                        </Text>
                    </Box>
                    <Box marginTop='18px' w={{md: '90%', lg: '100%'}}>
                        <StyledP black='true'>
                        A nova Clínica De Gasperi foi totalmente projetada e construída para a realização exclusiva de cirurgias plásticas oferecendo o mais alto padrão de qualidade, conforto e segurança, atendendo e superando a todas as exigências da ANVISA.
                        </StyledP>
                    </Box>
                    <Box w='100%' marginTop={{sm: '20px', lg: '20px', xl: '40px'}} display='flex' justifyContent='space-between'>
                        <Box marginRight={{sm: '40px', md: '0px'}}>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Área Total:</StyledStrong>
                                        1000m²
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Espera Água Quente:</StyledStrong>
                                        2
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}} paddingRight={{xl: '55px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Área Privativa:</StyledStrong>
                                        900m²
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} justifyContent='space-between' marginTop={{sm: '25px', lg: '25px', xl: '50px'}} alignItems='center'>

                        <Box display='flex' marginTop={{sm: '15px', md: '0px'}} flexDirection={{lg: 'column', xl: 'row'}} alignItems={{lg: 'center', xl: 'start'}}>
                            <Box marginRight={{xl: '6px'}} marginBottom={{lg: '2px', xl: '0px'}}>
                                <MapPin />
                            </Box>
                            <Text w={{sm: '240px', lg: '185px', xl: '135px'}} textAlign='center' fontWeight='400px' fontSize='14px' color='#000'>
                            Bairro Planalto Bento Gonçalves - RS
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box marginTop={{sm: '45px', md: '120px'}} display='flex' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>
                <Box w={{sm: '100%', lg: '45%', xl: '40%'}} marginTop={{sm: '32px', lg: '0px'}}>
                <Swiper

                breakpoints={{
                    768: {
                        centerInsufficientSlides: false,
                        centeredSlides: true
                    }
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper6 && !thumbsSwiper6.destroyed ? thumbsSwiper6 : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                centeredSlides={true}
                >
                    <SwiperSlide className="andamento__slide">
                        <img src="images/ever-image-1.png" />
                    </SwiperSlide>
                    <SwiperSlide className="andamento__slide">
                        <img src="images/ever-image-2.png" />
                    </SwiperSlide>
                    <SwiperSlide className="andamento__slide">
                        <img src="images/ever-image-3.png" />
                    </SwiperSlide>
                    <SwiperSlide className="andamento__slide">
                        <img src="images/ever-image-4.png" />
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
                            onSwiper={setThumbsSwiper6}
                            spaceBetween={20}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            >
                                <SwiperSlide>
                                    <img src="images/ever-image-thumb-1.png" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="images/ever-image-thumb-2.png" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="images/ever-image-thumb-3.png" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="images/ever-image-thumb-4.png" />
                                </SwiperSlide>
                            </Swiper>
                            </Box>
                </Box>

                <Box w={{lg: '53%', xl: '57%'}}>
                    <Box bg='#3E5481' w='100%' paddingBlock={{sm: '14px', lg: '5px', xl: '14px'}} paddingLeft='12px' borderRadius='0px 0px 30px 0px'>
                        <Text as='h4' fontSize={{sm: '1.5rem', lg: '1.3rem', xl: '1.5rem'}} fontWeight='400' color='#F0F0F0'>
                            Ever Brasil
                        </Text>
                    </Box>
                    <Box marginTop='18px' w={{md: '90%', lg: '100%'}}>
                        <StyledP black='true'>
                            Ever Brasil empresa de insumos para a indústria de alimentos e bebidas, localizada na Garibaldina em Garibaldi/RS
                        </StyledP>
                    </Box>

                    <Box marginTop={{sm: '20px', lg: '20px', xl: '40px'}}>
                    <Text>
                        <StyledStrong display='block' margin='0px 4px 0px 0px'>
                            Área Construída:
                        </StyledStrong>
                            1200m²
                    </Text>
                    </Box>
                    <Box w='100%' marginTop={{sm: '20px', lg: '20px', xl: '40px'}} display='flex' justifyContent='space-between'>
                        <Box marginRight={{sm: '40px', md: '0px'}}>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Área Total:</StyledStrong>
                                        1.200m²
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Localização Previlegiada:</StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}} paddingRight={{xl: '55px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Churrasqueira:</StyledStrong>
                                        1
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Espera Água Quente:</StyledStrong>
                                        2
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    
                    <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} justifyContent='space-between' marginTop={{sm: '25px', lg: '25px', xl: '50px'}} alignItems='center'>

                        <Box display='flex' marginTop={{sm: '15px', md: '0px'}} flexDirection={{lg: 'column', xl: 'row'}} alignItems={{lg: 'center', xl: 'start'}}>
                            <Box marginRight={{xl: '6px'}} marginBottom={{lg: '2px', xl: '0px'}}>
                                <MapPin />
                            </Box>
                            <Text w={{sm: '240px', lg: '185px', xl: '155px'}} textAlign='center' fontWeight='400px' fontSize='14px' color='#000'>
                            Bairro Garibaldina Bento Gonçalves - RS
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box marginTop={{sm: '45px', md: '120px'}} display='flex' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>
                <Box w={{sm: '100%', lg: '45%', xl: '40%'}} marginTop={{sm: '32px', lg: '0px'}}>
                <Swiper

                breakpoints={{
                    768: {
                        centerInsufficientSlides: false,
                        centeredSlides: true
                    }
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper6 && !thumbsSwiper6.destroyed ? thumbsSwiper6 : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                centeredSlides={true}
                >
                    <SwiperSlide className="andamento__slide">
                        <img src="images/zanini-image-1.png" />
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
                            onSwiper={setThumbsSwiper6}
                            spaceBetween={20}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            >
                                <SwiperSlide>
                                    <img src="images/zanini-image-thumb-1.png" />
                                </SwiperSlide>
                            </Swiper>
                            </Box>
                </Box>

                <Box w={{lg: '53%', xl: '57%'}}>
                    <Box bg='#3E5481' w='100%' paddingBlock={{sm: '14px', lg: '5px', xl: '14px'}} paddingLeft='12px' borderRadius='0px 0px 30px 0px'>
                        <Text as='h4' fontSize={{sm: '1.5rem', lg: '1.3rem', xl: '1.5rem'}} fontWeight='400' color='#F0F0F0'>
                            Sala Comercial Zanini
                        </Text>
                    </Box>
                    <Box marginTop='18px' w={{md: '90%', lg: '100%'}}>
                        <StyledP black='true'>
                            Sala Comercial Zanini, localizada no Bairro São Roque em Bento Gonçalves/RS.
                        </StyledP>
                    </Box>
                    <Box w='100%' marginTop={{sm: '20px', lg: '20px', xl: '40px'}} display='flex' justifyContent='space-between'>
                        <Box marginRight={{sm: '40px', md: '0px'}}>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Área Total: </StyledStrong>
                                        900m²
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Porcelanato:</StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Espera água quente:</StyledStrong>
                                        2
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}} paddingRight={{xl: '55px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Área privativa:</StyledStrong>
                                        700m²
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Laminado:</StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} justifyContent='space-between' marginTop={{sm: '25px', lg: '25px', xl: '50px'}} alignItems='center'>

                        <Box display='flex' marginTop={{sm: '15px', md: '0px'}} flexDirection={{lg: 'column', xl: 'row'}} alignItems={{lg: 'center', xl: 'start'}}>
                            <Box marginRight={{xl: '6px'}} marginBottom={{lg: '2px', xl: '0px'}}>
                                <MapPin />
                            </Box>
                            <Text w={{sm: '240px', lg: '185px', xl: '150px'}} textAlign='center' fontWeight='400px' fontSize='14px' color='#000'>
                            Bairro São Roque Bento Gonçalves - RS
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box marginTop={{sm: '45px', md: '120px'}} display='flex' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>
                <Box w={{sm: '100%', lg: '45%', xl: '40%'}} marginTop={{sm: '32px', lg: '0px'}}>
                <Swiper

                breakpoints={{
                    768: {
                        centerInsufficientSlides: false,
                        centeredSlides: true
                    }
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper10 && !thumbsSwiper10.destroyed ? thumbsSwiper10 : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                centeredSlides={true}
                >
                    <SwiperSlide className="andamento__slide">
                        <img src="images/xingu-image-1.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/xingu-image-2.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/xingu-image-3.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/xingu-image-4.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/xingu-image-5.png" />
                    </SwiperSlide>

                    <SwiperSlide className="andamento__slide">
                        <img src="images/xingu-image-6.png" />
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
                            onSwiper={setThumbsSwiper10}
                            spaceBetween={20}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            >
                                <SwiperSlide>
                                    <img src="images/xingu-image-thumb-1.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/xingu-image-thumb-2.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/xingu-image-thumb-3.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/xingu-image-thumb-4.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/xingu-image-thumb-5.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="images/xingu-image-thumb-6.png" />
                                </SwiperSlide>
                            </Swiper>
                            </Box>
                </Box>

                <Box w={{lg: '53%', xl: '57%'}}>
                    <Box bg='#3E5481' w='100%' paddingBlock={{sm: '14px', lg: '5px', xl: '14px'}} paddingLeft='12px' borderRadius='0px 0px 30px 0px'>
                        <Text as='h4' fontSize={{sm: '1.5rem', lg: '1.3rem', xl: '1.5rem'}} fontWeight='400' color='#F0F0F0'>
                            Bar Xingú
                        </Text>
                    </Box>
                    <Box marginTop='18px' w={{md: '90%', lg: '100%'}}>
                        <StyledP black='true'>
                            Bar localizado na Rua Xingú, 862 - Bairro São Bento - Bento Gonçalves/RS.
                        </StyledP>
                    </Box>
                    <Box w='100%' marginTop={{sm: '20px', lg: '20px', xl: '40px'}} display='flex' justifyContent='space-between'>
                        <Box marginRight={{sm: '40px', md: '0px'}}>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Localização Previlegiada: </StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>                               
                            </UnorderedList>
                        </Box>
                        <Box>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}} paddingRight={{xl: '55px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Espera água quente:</StyledStrong>
                                        2
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} justifyContent='space-between' marginTop={{sm: '25px', lg: '25px', xl: '50px'}} alignItems='center'>

                        <Box display='flex' marginTop={{sm: '15px', md: '0px'}} flexDirection={{lg: 'column', xl: 'row'}} alignItems={{lg: 'center', xl: 'start'}}>
                            <Box marginRight={{xl: '6px'}} marginBottom={{lg: '2px', xl: '0px'}}>
                                <MapPin />
                            </Box>
                            <Text w={{sm: '240px', lg: '185px', xl: '150px'}} textAlign='center' fontWeight='400px' fontSize='14px' color='#000'>
                                Rua Xingú, 862 - Bairro São Bento - Bento Gonçalves - RS
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>


            </Container>
            </Box>
            <Footer />
        </StyledEmpreendimentosResidencias>
        </div>
        </>
    )
}