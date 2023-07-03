import { HashLink } from "react-router-hash-link";
import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import StyledButton from "../styledcomponents/Button";
import { StyledH1, StyledP, StyledStrong } from "../styledcomponents/Typograph";
import { StyledHeader } from "../styledcomponents/StyledHeader";

import { HiOutlineArrowRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export function Header() {
	function removeHash() {
		setTimeout(() => {
			history.pushState("", document.title, window.location.pathname + window.location.search);
		}, 100);
	}

	return (
		<StyledHeader>
			<Swiper navigation={true} modules={[Navigation]} centeredSlides={true}>
				<SwiperSlide>
					<Box display="flex" justifyContent="space-between" alignItems="center" className="bg-altos" h={{ sm: "420px", md: "577px", lg: "577px", "2xl": "800px" }}>
						<Box w="100%" h="100%" display="flex" alignItems="center" justifyContent="space-between">
                            <Box display="flex" justifyContent="space-between" w="100%">
							<Box marginLeft="300px" w="max-content">
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
							<Box w="max-content" marginBottom="60px" justifySelf="right" flex="none" position="relative" right="-265px">
								<Image maxW="80%" w="80%" src="/images/bullet-banner.png" />
								<Image maxW="80%" w="80%" marginTop="40px" src="/images/bullet-banner-2.png" />
								<Image maxW="80%" w="80%" marginTop="40px" src="/images/bullet-banner-3.png" />
							</Box>
                            </Box>
							<Box flex="none" h="100%" display="flex" alignItems="end" position="relative" right="80px">
								<Image w="100%" overflow="hidden" src="/images/predio-banner.png" />
							</Box>
						</Box>
					</Box>
				</SwiperSlide>

				<SwiperSlide>
					<Box display="flex" alignItems="center" className="bg-terrace" h={{ sm: "420px", md: "577px", lg: "577px", "2xl": "800px" }}>
						<Container maxW={{ sm: "93%", md: "738px", lg: "960px", xl: "1247px", "2xl": "1247px" }}>
							<Box>
								<Box w={{ lg: "570px", "2xl": "590px" }}>
									<StyledH1>Lançamento Terrace Residence</StyledH1>
								</Box>
								<Box marginTop={{ sm: "15px", md: "30px" }} w={{ md: "410px", lg: "410px", "2xl": "447px" }}>
									<StyledP>
										O que construímos vai muito além de concreto, <StyledStrong color="#FFF">construímos confiança</StyledStrong> com nossos clientes.
									</StyledP>
								</Box>

								<Box marginTop={{ sm: "30px", "2xl": "55px" }}>
									<HashLink onClick={removeHash} smooth to="/terrace">
										<StyledButton outlined="true" white="true" rightIcon={<HiOutlineArrowRight size={19} />}>
											VER EMPREENDIMENTO
										</StyledButton>
									</HashLink>
								</Box>
							</Box>
						</Container>
					</Box>
				</SwiperSlide>

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
			</Swiper>
		</StyledHeader>
	);
}
