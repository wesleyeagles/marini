import { useState } from "react";

import { Box, Container, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { BannerResidenciais } from "../components/BannerResidenciais"
import { Footer } from "../components/Footer"
import { StyledEmpreendimentosResidencias } from "../styledcomponents/StyledEmpreendimentosResidenciais"
import { StyledH3, StyledP, StyledStrong } from "../styledcomponents/Typograph"
import {Helmet} from "react-helmet";
import {motion} from "framer-motion"

import { Swiper, SwiperSlide } from "swiper/react";

import { MapPin } from 'tabler-icons-react';


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import StyledButton from "../styledcomponents/Button";

export const EmpreendimentosResidenciais = () => {

    const [thumbsSwiper2, setThumbsSwiper2] = useState<any>(null);
    const [thumbsSwiper3, setThumbsSwiper3] = useState<any>(null);
    const [thumbsSwiper4, setThumbsSwiper4] = useState<any>(null);
    const [thumbsSwiper5, setThumbsSwiper5] = useState<any>(null);
    const [thumbsSwiper6, setThumbsSwiper6] = useState<any>(null);


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
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1.6}}} exit={{opacity: 0, transition: {duration: 0.1} }}>
        <StyledEmpreendimentosResidencias>
            <BannerResidenciais />
            <Box paddingTop='97px' paddingBottom='187px'>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <StyledH3>
                    Confira nossos empreendimentos residenciais
                </StyledH3>
            
            <Box marginTop='47px' display='flex' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>
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
                        <StyledP black>
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
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Garagem:</StyledStrong>
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
                        <a target='_blank' href="https://api.whatsapp.com/send?phone=5554999106006&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20casa%20de%20alto%20padr%C3%A3o%20localizada%20na%20Rua%20das%20flores%2C%20Bairro%20tamandar%C3%A9%20Garibaldi%20-%20RS">
                        <StyledButton outlined>
                            Entrar em contato
                        </StyledButton>
                        </a>

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

            <Box marginTop='120px' display='flex' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>
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
                        <img src="images/casa-1-image-1.png" />
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
                                    <img src="images/casa-1-image-1-thumb.png" />
                                </SwiperSlide>
                            </Swiper>
                            </Box>
                </Box>

                <Box w={{lg: '53%', xl: '57%'}}>
                    <Box bg='#3E5481' w='100%' paddingBlock={{sm: '14px', lg: '5px', xl: '14px'}} paddingLeft='12px' borderRadius='0px 0px 30px 0px'>
                        <Text as='h4' fontSize={{sm: '1.5rem', lg: '1.3rem', xl: '1.5rem'}} fontWeight='400' color='#F0F0F0'>
                            Casa
                        </Text>
                    </Box>
                    <Box marginTop='18px' w={{md: '90%', lg: '100%'}}>
                        <StyledP black>
                        Casa localizada no Caminhos da Eulália em Bento Gonçalves/RS.
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
                        <a target='_blank' href="https://api.whatsapp.com/send?phone=5554999106006&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Casa%20localizada%20no%20Caminhos%20da%20Eul%C3%A1lia%20em%20Bento%20Gon%C3%A7alves%2FRS.">
                        <StyledButton outlined>
                            Entrar em contato
                        </StyledButton>
                        </a>
                    </Box>
                </Box>
            </Box>

            <Box marginTop='120px' display='flex' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>
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
                        <img src="images/casa-2-image-1.png" />
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
                                    <img src="images/casa-2-image-1-thumb.png" />
                                </SwiperSlide>
                            </Swiper>
                            </Box>
                </Box>

                <Box w={{lg: '53%', xl: '57%'}}>
                    <Box bg='#3E5481' w='100%' paddingBlock={{sm: '14px', lg: '5px', xl: '14px'}} paddingLeft='12px' borderRadius='0px 0px 30px 0px'>
                        <Text as='h4' fontSize={{sm: '1.5rem', lg: '1.3rem', xl: '1.5rem'}} fontWeight='400' color='#F0F0F0'>
                            Casa
                        </Text>
                    </Box>
                    <Box marginTop='18px' w={{md: '90%', lg: '100%'}}>
                        <StyledP black>
                        Casa de Alto Padrão localizada no Bairro Santa Marta em Bento Gonçalves/RS.
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
                        <a target='_blank' href="https://api.whatsapp.com/send?phone=5554999106006&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Casa%20de%20Alto%20Padr%C3%A3o%20localizada%20no%20Bairro%20Santa%20Marta%20em%20Bento%20Gon%C3%A7alves%2FRS.">
                        <StyledButton outlined>
                            Entrar em contato
                        </StyledButton>
                        </a>

                        <Box display='flex' marginTop={{sm: '15px', md: '0px'}} flexDirection={{lg: 'column', xl: 'row'}} alignItems={{lg: 'center', xl: 'start'}}>
                            <Box marginRight={{xl: '6px'}} marginBottom={{lg: '2px', xl: '0px'}}>
                                <MapPin />
                            </Box>
                            <Text w={{sm: '240px', lg: '185px', xl: '175px'}} textAlign='center' fontWeight='400px' fontSize='14px' color='#000'>
                            Bairro Santa Marta Bento Gonçalves - RS
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box marginTop='120px' display='flex' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>
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
                        <img src="images/casa-3-image-1.png" />
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
                                    <img src="images/casa-3-image-1-thumb.png" />
                                </SwiperSlide>
                            </Swiper>
                            </Box>
                </Box>

                <Box w={{lg: '53%', xl: '57%'}}>
                    <Box bg='#3E5481' w='100%' paddingBlock={{sm: '14px', lg: '5px', xl: '14px'}} paddingLeft='12px' borderRadius='0px 0px 30px 0px'>
                        <Text as='h4' fontSize={{sm: '1.5rem', lg: '1.3rem', xl: '1.5rem'}} fontWeight='400' color='#F0F0F0'>
                            Casa
                        </Text>
                    </Box>
                    <Box marginTop='18px' w={{md: '90%', lg: '100%'}}>
                        <StyledP black>
                        Casa localizada no Bairro Santa Marta em Bento Gonçalves/RS.
                        </StyledP>
                    </Box>
                    <Box w='100%' marginTop={{sm: '20px', lg: '20px', xl: '40px'}} display='flex' justifyContent='space-between'>
                        <Box marginRight={{sm: '40px', md: '0px'}}>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Churrasqueira:</StyledStrong>
                                        1
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Rebaixo em Gesso:</StyledStrong>
                                        Em todo apto
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Localização privilegiada:</StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}} paddingRight={{xl: '55px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Energia solar:</StyledStrong>
                                        Sim
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Espera para split:</StyledStrong>
                                        1
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
                    </Box>
                    <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} justifyContent='space-between' marginTop={{sm: '25px', lg: '25px', xl: '50px'}} alignItems='center'>
                        <a target='_blank' href="https://api.whatsapp.com/send?phone=5554999106006&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Casa%20localizada%20no%20Bairro%20Santa%20Marta%20em%20Bento%20Gon%C3%A7alves%2FRS.">
                        <StyledButton outlined>
                            Entrar em contato
                        </StyledButton>
                        </a>

                        <Box display='flex' marginTop={{sm: '15px', md: '0px'}} flexDirection={{lg: 'column', xl: 'row'}} alignItems={{lg: 'center', xl: 'start'}}>
                            <Box marginRight={{xl: '6px'}} marginBottom={{lg: '2px', xl: '0px'}}>
                                <MapPin />
                            </Box>
                            <Text w={{sm: '240px', lg: '185px', xl: '175px'}} textAlign='center' fontWeight='400px' fontSize='14px' color='#000'>
                            Bairro Santa Marta Bento Gonçalves - RS
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box marginTop='120px' display='flex' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>
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
                        <img src="images/casa-4-image-1.png" />
                    </SwiperSlide>
                    <SwiperSlide className="andamento__slide">
                        <img src="images/casa-4-image-2.png" />
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
                                    <img src="images/casa-4-image-1-thumb.png" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="images/casa-4-image-2-thumb.png" />
                                </SwiperSlide>
                            </Swiper>
                            </Box>
                </Box>

                <Box w={{lg: '53%', xl: '57%'}}>
                    <Box bg='#3E5481' w='100%' paddingBlock={{sm: '14px', lg: '5px', xl: '14px'}} paddingLeft='12px' borderRadius='0px 0px 30px 0px'>
                        <Text as='h4' fontSize={{sm: '1.5rem', lg: '1.3rem', xl: '1.5rem'}} fontWeight='400' color='#F0F0F0'>
                            Casa
                        </Text>
                    </Box>
                    <Box marginTop='18px' w={{md: '90%', lg: '100%'}}>
                        <StyledP black>
                        Casa localizada no Bairro Alto das Videiras em Bento Gonçalves/RS.
                        </StyledP>
                    </Box>
                    
                    <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} justifyContent='space-between' marginTop={{sm: '25px', lg: '25px', xl: '50px'}} alignItems='center'>
                        <a target='_blank' href="https://api.whatsapp.com/send?phone=5554999106006&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Casa%20localizada%20no%20Bairro%20Alto%20das%20Videiras%20em%20Bento%20Gon%C3%A7alves%2FRS.">
                        <StyledButton outlined>
                            Entrar em contato
                        </StyledButton>
                        </a>

                        <Box display='flex' marginTop={{sm: '15px', md: '0px'}} flexDirection={{lg: 'column', xl: 'row'}} alignItems={{lg: 'center', xl: 'start'}}>
                            <Box marginRight={{xl: '6px'}} marginBottom={{lg: '2px', xl: '0px'}}>
                                <MapPin />
                            </Box>
                            <Text w={{sm: '240px', lg: '185px', xl: '175px'}} textAlign='center' fontWeight='400px' fontSize='14px' color='#000'>
                            Bairro Alto das Videiras Bento Gonçalves - RS
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box marginTop='120px' display='flex' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>
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
                        <img src="images/casa-5-image-1.png" />
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
                                    <img src="images/casa-5-image-1-thumb.png" />
                                </SwiperSlide>
                            </Swiper>
                            </Box>
                </Box>

                <Box w={{lg: '53%', xl: '57%'}}>
                    <Box bg='#3E5481' w='100%' paddingBlock={{sm: '14px', lg: '5px', xl: '14px'}} paddingLeft='12px' borderRadius='0px 0px 30px 0px'>
                        <Text as='h4' fontSize={{sm: '1.5rem', lg: '1.3rem', xl: '1.5rem'}} fontWeight='400' color='#F0F0F0'>
                            Casa
                        </Text>
                    </Box>
                    <Box marginTop='18px' w={{md: '90%', lg: '100%'}}>
                        <StyledP black>
                            Casa localizada nos Caminhos da Eulália em Bento Gonçalves/RS.
                        </StyledP>
                    </Box>
                    <Box w='100%' marginTop={{sm: '20px', lg: '20px', xl: '40px'}} display='flex' justifyContent='space-between'>
                        <Box marginRight={{sm: '40px', md: '0px'}}>
                            <UnorderedList spacing={{sm: '11px', lg: '11px', xl: '13px'}}>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Área Total: </StyledStrong>
                                        70m²
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Garagem:</StyledStrong>
                                        01 veículo
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontSize={{lg: '15px', xl: '17px'}}>
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Dormitórios:</StyledStrong>
                                        2
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
                                        60m²
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
                                        <StyledStrong semibold display='block' margin='0px 4px 0px 0px'>Rebaixo em gesso:</StyledStrong>
                                        Em todo apto
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} justifyContent='space-between' marginTop={{sm: '25px', lg: '25px', xl: '50px'}} alignItems='center'>
                        <a target='_blank' href="https://api.whatsapp.com/send?phone=5554999106006&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Casa%20localizada%20nos%20Caminhos%20da%20Eul%C3%A1lia%20em%20Bento%20Gon%C3%A7alves%2FRS.">
                        <StyledButton outlined>
                            Entrar em contato
                        </StyledButton>
                        </a>

                        <Box display='flex' marginTop={{sm: '15px', md: '0px'}} flexDirection={{lg: 'column', xl: 'row'}} alignItems={{lg: 'center', xl: 'start'}}>
                            <Box marginRight={{xl: '6px'}} marginBottom={{lg: '2px', xl: '0px'}}>
                                <MapPin />
                            </Box>
                            <Text w={{sm: '240px', lg: '185px', xl: '190px'}} textAlign='center' fontWeight='400px' fontSize='14px' color='#000'>
                            Bairro Caminhos da Eulália Bento Gonçalves - RS
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>


            </Container>
            </Box>
            <Footer />
        </StyledEmpreendimentosResidencias>
        </motion.div>
        </>
    )
}