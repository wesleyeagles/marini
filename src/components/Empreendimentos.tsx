import { useContext } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { StyledEmpreendimentos } from "../styledcomponents/StyledEmpreendimentos";
import { StyledH2, StyledSmall, StyledStrong } from "../styledcomponents/Typograph";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { Context } from "../App";

export function Empreendimentos() {
    const AnchorEmpreendimentos = useContext(Context)

    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                behavior: 'smooth',
                top: 0
            })
        }, 200) 
    }

    return (
        <StyledEmpreendimentos id='empreendimentos'>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <Box ref={AnchorEmpreendimentos} display='flex' flexDirection={{sm: 'column', lg: 'row'}} alignItems={{lg: 'center'}} justifyContent={{lg: 'space-between'}} marginTop={{sm: '320px', md: '0'}}>
                    <Box w={{lg: '45%', xl: '60%'}}>
                    <StyledH2>
                        Nossos empreendimentos
                    </StyledH2>
                    </Box>

                    <Box marginTop={{sm: '30px', lg: '0'}} w={{sm: '90%', md: '80%', lg: '50%', xl: '40%'}}>
                    <StyledSmall color="#606060" display='block'>
                        Esse é nosso serviço, proporcionamos as pessoas a capacidade de <StyledStrong>transformar sonhos em projetos de vida.</StyledStrong>
                    </StyledSmall>
                    </Box>
                </Box>

                <Box display={{sm: 'none', lg: 'flex'}} marginTop='80px'>
                    <Link to='' onClick={scrollToTop}>
                    <Box className="empreendimentos__single">
                        <Box className="empreendimentos__title_box">
                            <Text className="empreendimentos__title">
                                O ÚLTIMO LANÇAMENTO
                            </Text>
                        </Box>
                        <img className="empreendimentos__img" src="/images/lancamento.png" alt="" />
                    </Box>
                    </Link>

                    <Link to='/empreendimentos-em-andamento' onClick={scrollToTop}>
                    <Box className="empreendimentos__single">
                        <Box className="empreendimentos__title_box">
                            <Text className="empreendimentos__title">
                                EM ANDAMENTO
                            </Text>
                        </Box>
                        <img className="empreendimentos__img" src="/images/andamento.png" alt="" />
                    </Box>
                    </Link>

                    <Link to='/empreendimentos-em-resid%C3%AAnciais' onClick={scrollToTop}>
                    <Box className="empreendimentos__single">
                        <Box className="empreendimentos__title_box">
                            <Text className="empreendimentos__title">
                                OBRAS RESIDÊNCIAIS
                            </Text>
                        </Box>
                        <img className="empreendimentos__img" src="/images/residenciais.png" alt="" />
                    </Box>
                    </Link>
                </Box>

                <Box display={{lg: 'none'}} marginTop='80px'>
                    <Swiper
                        centeredSlides={true}
                        centerInsufficientSlides={true}
                        navigation={true}
                        modules={[Navigation]}
                        spaceBetween={0}
                        
                        >
                        <SwiperSlide className="empreendimentos__slide">
                        <Link to=''>
                        <Box className="empreendimentos__single">
                            <Box className="empreendimentos__title_box">
                                <Text className="empreendimentos__title">
                                    O ÚLTIMO LANÇAMENTO
                                </Text>
                            </Box>
                            <img className="empreendimentos__img" src="/images/lancamento.png" alt="" />
                        </Box>
                        </Link>
                        </SwiperSlide>

                        <SwiperSlide className="empreendimentos__slide">
                        <Link to='/empreendimentos-em-andamento' onClick={scrollToTop}>
                        <Box className="empreendimentos__single">
                        <Box className="empreendimentos__title_box">
                            <Text className="empreendimentos__title">
                                    EM ANDAMENTO
                            </Text>
                        </Box>
                            <img className="empreendimentos__img" src="/images/andamento.png" alt="" />
                        </Box>
                        </Link>
                        </SwiperSlide>

                        <SwiperSlide className="empreendimentos__slide">
                        <Link to='/empreendimentos-em-resid%C3%AAnciais' onClick={scrollToTop}>
                        <Box className="empreendimentos__single">
                            <Box className="empreendimentos__title_box">
                                <Text className="empreendimentos__title">
                                    OBRAS RESIDÊNCIAIS
                                </Text>
                            </Box>
                            <img className="empreendimentos__img" src="/images/residenciais.png" alt="" />
                        </Box>
                        </Link>
                        </SwiperSlide>
                    </Swiper>
                </Box>


            </Container>
        </StyledEmpreendimentos>
    )
}