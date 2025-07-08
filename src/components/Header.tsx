import { HashLink } from "react-router-hash-link";
import { Box, Button, Container, Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaUserTie, FaHome } from 'react-icons/fa';
import StyledButton from "../styledcomponents/Button";
import { StyledH1, StyledP, StyledStrong } from "../styledcomponents/Typograph";
import { StyledHeader } from "../styledcomponents/StyledHeader";

import { HiOutlineArrowRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import predio from '../pages/Villagio/images/predio-1.png'
import background from '../pages/Villagio/images/Background.png'
import logoVillagio from '../pages/Villagio/images/logo-villagio-banner.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

export function Header() {
	const navigate = useNavigate()
	function removeHash() {
		setTimeout(() => {
			history.pushState("", document.title, window.location.pathname + window.location.search);
		}, 100);
	}

	return (
		<StyledHeader>
			<Swiper navigation={true} modules={[Navigation]} centeredSlides={true}>

				<SwiperSlide>
					<Box display="flex" alignItems="center" className="bg-header" h={{ sm: "420px", md: "577px", lg: "577px", "2xl": "800px" }}>
						<Container maxW={{ sm: "93%", md: "738px", lg: "960px", xl: "1247px", "2xl": "1247px" }}>
							<Box>
								<Box w={{ lg: "570px", "2xl": "590px" }}>
									<StyledH1>Especialistas em construções de alta qualidade</StyledH1>
								</Box>
								<Box marginTop={{ sm: "15px", md: "30px" }} w={{ md: "410px", lg: "410px", "2xl": "447px" }}>
									<StyledP>
										O que construímos vai muito além de concreto, <StyledStrong color="#FFF">construímos confiança</StyledStrong> com nossos clientes.
									</StyledP>
								</Box>

								<Box marginTop={{ sm: "30px", "2xl": "55px" }}>
									<HashLink onClick={removeHash} smooth to="#empreendimentos">
										<StyledButton outlined="true" white="true" rightIcon={<HiOutlineArrowRight size={19} />}>
											VER EMPREENDIMENTOS
										</StyledButton>
									</HashLink>
								</Box>
							</Box>
						</Container>
					</Box>
				</SwiperSlide>


				<SwiperSlide>
					<Box bgRepeat='no-repeat' bgSize='cover' className="text-white flex" position="relative" h={{ sm: "420px", md: "577px", lg: "577px", "2xl": "800px" }}>
						<Image src={background} width={'100%'} height={'100%'} position='absolute' zIndex={-1} />
						<Container maxW={{ sm: "93%", md: "738px", lg: "960px", xl: "1247px", "2xl": "1247px" }} margin='auto'>
							<Text sx={{ fontFamily: "Lexend", fontWeight: 'medium' }} width={'max-content'} marginBottom='40px' fontSize="sm" className="uppercase tracking-wide text-white font-semibold bg-[#FFFFFF32] p-2 rounded-full">
								🔥 Lançamento
							</Text>
							<Image src={logoVillagio} />
							<Box borderLeft="2px solid #fff" pl={4} marginTop={{sm: '50px', lg: '40px'}}>
								<Text sx={{ fontFamily: "Lexend Giga", fontWeight: 'bold' }} fontSize="sm" className="uppercase font-bold">
									UM NOVO MARCO PARA VIVER <br /> COM ESTILO E CONFORTO
								</Text>
								<Text sx={{ fontFamily: "Lexend", fontWeight: '400' }} fontSize="sm" className="text-[#FFFFFF56] mt-2" marginBlock={{ base: '15px', lg: '30px'}}>
									Design moderno e funcionalidade em uma <br /> localização privilegiada.
								</Text>
								<Button sx={{ fontFamily: "Lexend", fontWeight: 'medium', bg: '#EADED5', color: '#092B20', borderRadius: '100px' }} variant="outline" p={{base: 6, lg: 8}} onClick={() => navigate('/villagio-di-borgo')}>
								Ver empreendimento
							</Button>
							</Box>

							
						</Container>

						<Image src={predio} alt="Prédio Villaggio" position='absolute' width={{base: 0, xl: 780, "2xl": 1020}} objectFit="cover" zIndex={2} right={-40} />
							
					</Box>
				</SwiperSlide>

				<SwiperSlide>
					<Box display="flex" justifyContent="space-between" alignItems="center" className="bg-altos" h={{ sm: "420px", md: "577px", lg: "577px", "2xl": "800px" }}>
						<Box w="100%" h="100%" display="flex" alignItems="center" justifyContent="space-between">
							<Box paddingInline={{ sm: "40px", md: "0" }} display="flex" justifyContent="space-between" w="100%">
								<Box marginLeft={{ lg: "40px", "2xl": "300px" }} w="max-content">
									<Box>
										<Image src="/images/title-altos-banner.png" />
									</Box>
									<Box marginTop={{ sm: "15px", md: "35px" }} w={{ md: "410px", lg: "410px", "2xl": "497px" }}>
										<Text textAlign="center">
											Pensado com excelência do terraço ao hall de entrada para o <StyledStrong color="#000">bem-estar</StyledStrong> dos moradores e{" "}
											<StyledStrong color="#000">conexão com a cidade</StyledStrong>
										</Text>
									</Box>

									<Box marginTop={{ sm: "30px", "2xl": "40px" }} display="flex" justifyContent="center" alignItems="center">
										<HashLink onClick={removeHash} smooth to="/altos-do-borgo">
											<Button className="btn-altos-banner">VER EMPREENDIMENTO</Button>
										</HashLink>
									</Box>
								</Box>
								<Box display={{ sm: "none", md: "block" }} w="max-content" marginBottom="60px" justifySelf="right" flex="none" position="relative" right="-265px">
									<Image maxW="80%" w="80%" src="/images/bullet-banner.png" />
									<Image maxW="80%" w="80%" marginTop="40px" src="/images/bullet-banner-2.png" />
									<Image maxW="80%" w="80%" marginTop="40px" src="/images/bullet-banner-3.png" />
								</Box>
							</Box>
							<Box display={{ sm: "none", md: "flex" }} flex="none" h="100%" alignItems="end" position="relative" right="80px">
								<Image w="100%" overflow="hidden" src="/images/predio-banner.png" />
							</Box>
						</Box>
					</Box>
				</SwiperSlide>
			</Swiper>
		</StyledHeader>
	);
}
