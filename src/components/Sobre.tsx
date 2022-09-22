import { Box, Container } from "@chakra-ui/react";
import StyledButton from "../styledcomponents/Button";
import { StyledH2, StyledP, StyledSmall, StyledSpan, StyledStrong } from "../styledcomponents/Typograph";

import HouseIcon from '../svgs/houseicon'
import GraphicIcon from '../svgs/graphicicon'
import { SobreBox } from "../styledcomponents/SobreBox";

import { Shield } from 'tabler-icons-react';
import { Check } from 'tabler-icons-react';
import { Star } from 'tabler-icons-react';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

export function Sobre() {
    return (
        <Box display='flex' alignItems='center' bg='#FFF' h={{sm: '1480px', md: '1680px', lg: '1520px', xl: '1000px', '2xl': '1180px'}}>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <Box display='flex' alignItems={{xl: 'flex-end'}} flexDirection={{sm: 'column', xl: 'row'}} justifyContent={{xl: 'space-between'}}>
                    <Box>
                        <StyledH2 w={{lg: '520px'}}>
                            Transformamos sonhos em projetos de vida
                        </StyledH2>
                        <StyledP w={{xl: '460px'}} marginTop='48px' marginBottom='32px' black>
                            Somos uma empresa com foco em projetos residenciais, com novas tecnologias, novos sistemas que 
                            <StyledStrong color='#3E5481'> proporcionam mais conforto e segurança</StyledStrong> para as pessoas. 
                        </StyledP>
                        <StyledP w={{xl: '460px'}} black>
                            Trabalhamos para oferecer mais qualidade de vida e acreditamos que todos merecem um lar para morar. 
                        </StyledP>
                        <StyledButton marginTop='51px' marginBottom='64px'>
                            VER EMPREENDIMENTOS
                        </StyledButton>
                        <StyledSmall width='460px' color='#606060' display='block'>
                            Esse é nosso serviço, proporcionamos as pessoas a capacidade de <StyledStrong color='#3E5481'>transformar sonhos em projetos de vida.</StyledStrong>
                        </StyledSmall>
                    </Box>

                    <Box marginTop={{sm: '80px', xl: '20px'}}>
                        <Box display='flex' alignItems={{sm: 'flex-end', md: 'center'}} justifyContent={{sm: 'center', lg: 'start'}}>
                            <Box display='flex' flexDirection='column' alignItems='flex-end'>
                                <Box w='55px' h='55px' boxShadow='0px 4px 4px 0px #00000025' marginBottom='16px '>
                                <HouseIcon />
                                </Box>
                                <img src="images/sobre-primeira-foto.png" alt="" />
                            </Box>
                            <Box marginLeft='24px' position='relative'>
                                <img src="images/sobre-segunda-foto.png" alt="" />
                                <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' boxShadow='0px 4px 15px 0px #00000016' position='absolute' w={{sm: '152px', md: '179px'}} h={{sm: '142px', md: '159px'}} bg='#FFF' borderRadius='4px' bottom={{sm: '-60px', md:'-30px'}} right={{sm: '12px', md:'25px'}}>
                                    <GraphicIcon />
                                    <StyledSmall margin="8px auto" width="140px" display='block' textAlign="center" color="#606060">
                                        São + de <StyledStrong color='#3E5481'>21 anos</StyledStrong> de experiência
                                    </StyledSmall>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <SobreBox marginTop='105px'>
                    <Box w='100%' display={{sm: 'none', lg: 'flex'}} justifyContent='space-between'>
                    <div className="sobre__single">
                        <div className="sobre__icon">
                            <Shield size={25} color="#3E5481"/>
                        </div>
                        <StyledSpan className="sobre__title">
                            Segurança
                        </StyledSpan>
                        <StyledSmall color='#606060' display="block">
                            Investimos em novas tecnologias, novos sistemas que proporcionam maior conforto e segurança para as pessoas
                        </StyledSmall>
                    </div>

                    <div className="sobre__single">
                        <div className="sobre__icon">
                            <Check size={25} color="#3E5481"/>
                        </div>
                        <StyledSpan className="sobre__title">
                            Qualidade de vida
                        </StyledSpan>
                        <StyledSmall color='#606060' display="block">
                            Trabalhamos para oferecer aos clientes uma maior qualidade de vida
                        </StyledSmall>
                    </div>

                    <div className="sobre__single">
                        <div className="sobre__icon">
                            <Star size={25} color="#3E5481"/>
                        </div>
                        <StyledSpan className="sobre__title">
                            Requinte e sofisticação
                        </StyledSpan>
                        <StyledSmall color='#606060' display="block">
                            Ambientes integrados visando melhor convívio e o máximo aproveitamento
                        </StyledSmall>
                    </div>
                    </Box>

                    <Box w='100%' display={{lg: 'none'}}>
                        <Swiper
                        centeredSlides={true}
                        centerInsufficientSlides={true}
                        navigation={true}
                        modules={[Navigation]}
                        spaceBetween={0}
                        
                        >
                            <Box w='600px'>
                            <SwiperSlide className="sobre__slide">
                            <div className="sobre__single">
                                <div className="sobre__icon">
                                    <Shield size={25} color="#3E5481"/>
                                </div>
                                <StyledSpan className="sobre__title">
                                    Segurança
                                </StyledSpan>
                                <StyledSmall color='#606060' display="block">
                                    Investimos em novas tecnologias, novos sistemas que proporcionam maior conforto e segurança para as pessoas
                                </StyledSmall>
                            </div>
                            </SwiperSlide>

                            <SwiperSlide className="sobre__slide">
                            <div className="sobre__single">
                                <div className="sobre__icon">
                                    <Check size={25} color="#3E5481"/>
                                </div>
                                <StyledSpan className="sobre__title">
                                    Qualidade de vida
                                </StyledSpan>
                                <StyledSmall color='#606060' display="block">
                                    Trabalhamos para oferecer aos clientes uma maior qualidade de vida
                                </StyledSmall>
                            </div>
                            </SwiperSlide>

                            <SwiperSlide className="sobre__slide">
                            <div className="sobre__single">
                                <div className="sobre__icon">
                                    <Star size={25} color="#3E5481"/>
                                </div>
                                <StyledSpan className="sobre__title">
                                    Requinte e sofisticação
                                </StyledSpan>
                                <StyledSmall color='#606060' display="block">
                                    Ambientes integrados visando melhor convívio e o máximo aproveitamento
                                </StyledSmall>
                            </div>
                            </SwiperSlide>
                            </Box>
                        </Swiper>
                    </Box>
                </SobreBox>
            </Container>
        </Box>
    )
}