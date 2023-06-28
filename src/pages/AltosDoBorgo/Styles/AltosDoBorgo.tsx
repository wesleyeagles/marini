import { Box, Button, Image, ListItem, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, UnorderedList } from "@chakra-ui/react";
import "./AltosDoBorgo.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Facebook from "../../../svgs/altos/Facebook";
import Instagram from "../../../svgs/altos/Instagram";
import ZoomImage from "../../../components/Altos/ZoomImage";
import Pin from "../../../svgs/altos/Pin";
import Lazer from "../../../svgs/altos/Lazer";
import Selo from "../../../svgs/altos/Selo";
import Slider from "../../../components/Altos/Slider/Slider";
import Padaria from "../../../svgs/altos/Padaria";
import Car from "../../../svgs/altos/Car";
import Mercado from "../../../svgs/altos/Mercado";
import Posto from "../../../svgs/altos/Posto";
import Farmacia from "../../../svgs/altos/Farmacia";
import Hospital from "../../../svgs/altos/Hospital";
import Escola from "../../../svgs/altos/Escola";
import Shopping from "../../../svgs/altos/Shopping";
import { Mail } from "tabler-icons-react";
import Phone from "../../../svgs/altos/Phone";
import PinMap from "../../../svgs/altos/PinMap";
import BackToTopArrow from "../../../svgs/altos/BackToTopArrow";
import { Link } from "react-router-dom";

import { animated, useSpring } from "react-spring";
import ScrollToTopBtn from "../../../components/Altos/ScrollToTopBtn";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

const AltosDoBorgo = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const h1Animation = useSpring({
		config: { duration: 600 },
		from: { opacity: 0, top: -100 },
		to: { opacity: 1, top: 0 },
	});

	const textAnimaOpacity = useSpring({
		config: { duration: 1000 },
		from: { opacity: 0 },
		to: { opacity: 1 },
	});

	const scrollToSection = (id: string) => {
		const element: any = document.getElementById(id);
		element.scrollIntoView({ behavior: "smooth" });
	};

	const [inView, setInView] = useState(false);

	return (
		<animated.div style={textAnimaOpacity}>
			<div className="altos-container">
				<div className="section-one">
					<div className="navigation">
						<div className="logo">
							<Image w="90%" src="./images/altos/logo.png" />
						</div>
						<div className="anchors-links">
							<div className="anchors">
								<ul>
									<li onClick={() => scrollToSection("caracteristicas")}>Características</li>
									<li onClick={() => scrollToSection("areas")}>Áreas do empreendimento</li>
									<li onClick={() => scrollToSection("localization")}>Localização</li>
								</ul>
							</div>
							<div className="links">
								<ul>
									<li>
										<a target="_blank" href="https://www.facebook.com/mariniconstrucoes">
											<Facebook />
										</a>
									</li>
									<li>
										<a target="_blank" href="https://www.instagram.com/mariniconstrucoes/">
											<Instagram />
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="menu">
							<Menu>
								{({ isOpen }) => (
									<>
										<MenuButton isActive={isOpen} as={Button}>
											{isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
										</MenuButton>
										<MenuList>
											<MenuItem
												onClick={() =>
													setTimeout(() => {
														scrollToSection("caracteristicas");
													}, 100)
												}
											>
												Características
											</MenuItem>
											<MenuItem
												onClick={() =>
													setTimeout(() => {
														scrollToSection("areas");
													}, 100)
												}
											>
												Áreas do empreendimento
											</MenuItem>
											<MenuItem
												onClick={() =>
													setTimeout(() => {
														scrollToSection("localization");
													}, 100)
												}
											>
												Localização
											</MenuItem>
											<MenuDivider marginInline={3} />
											<Box display="flex">
												<MenuItem w="max-content">
													<a href="https://www.facebook.com/mariniconstrucoes" target="_blank">
														<Facebook />
													</a>
												</MenuItem>
												<MenuItem w="50%">
													<a href="https://www.instagram.com/mariniconstrucoes/">
														<Instagram />
													</a>
												</MenuItem>
											</Box>
										</MenuList>
									</>
								)}
							</Menu>
						</div>
					</div>
					<div className="text">
						<animated.div className="text" style={h1Animation}>
							<h1>ALTOS DO BORGO RESIDENCIAL</h1>
						</animated.div>
						<h3>Pensado com excelência do terraço ao hall de entrada para o bem-estar dos moradores e conexão com a cidade</h3>
					</div>
					<div className="btns">
						<Button>Fale Conosco</Button>
						<Button className="outlined" onClick={() => scrollToSection("caracteristicas")}>
							Características
						</Button>
					</div>
					<Image className="sun" src="./images/altos/sun.png" />
				</div>
				<div className="section-two">
					<Box className="box-images">
						<ZoomImage legend="Acesso salas comerciais" sublegend="Rua Amadéo Zambon" w={{ sm: "100%", md: "45%" }} src="./images/altos/foto-rua-amadeo.png" />
						<ZoomImage legend="Acesso Residencial" sublegend="Rua Antônio Picolli" w={{ sm: "100%", md: "45%" }} src="./images/altos/foto-rua-antonio.png" />
					</Box>
				</div>
				<div className="section-three">
					<Box display="flex" flexDirection={{ sm: "column", lg2: "row" }} justifyContent="space-between" gap={{ sm: "2rem", lg2: 0 }} paddingInline={{ sm: 6, md: 24 }}>
						<Text width={{ lg2: "21rem" }} lineHeight="120%" fontFamily="Anisver" fontSize="2.5rem" as="h2">
							SOBRE O EMPREENDIMENTO
						</Text>
						<Text w={{ lg2: "30rem", xl: "44rem" }} fontSize="1.2rem" as="p">
							O Altos do borgo residencial oferece um local aconchegante para morar com tranquilidade, com uma vista incrível da cidade, podendo apreciar o pôr do sol do alto do prédio
							através do Rooftop
						</Text>
					</Box>
					<Box
						display="flex"
						flexWrap={{ sm: "wrap", xl: "nowrap" }}
						gap={7}
						marginTop={{ sm: "60px", md: "136px" }}
						justifyContent={{ md: "center", xl: "start" }}
						paddingInline={{ sm: 6, md: 24 }}
					>
						<Box w={{ md: "300px", lg2: "400px", xl: "100%" }} border="1px solid #F7BF8A" paddingInline={{ sm: 6, "2xl": 14 }} paddingBlock={{ sm: 10, md: 20, "2xl": 20 }}>
							<Box marginBottom={7} className="icon">
								<Pin />
							</Box>
							<Box display="flex" flexDirection="column" gap={5}>
								<Text fontSize="1.25rem" fontWeight="600" as="h3">
									Localização privilegiada
								</Text>
								<Text w={{ "2xl": "90%" }} fontSize="1.1rem" as="p">
									Vista panorâmica deslumbrante de Bento Gonçalves na região elevada do Borgo
								</Text>
							</Box>
						</Box>
						<Box w={{ md: "300px", lg2: "400px", xl: "100%" }} border="1px solid #F7BF8A" paddingInline={{ sm: 6, "2xl": 14 }} paddingBlock={{ sm: 10, md: 20, "2xl": 20 }}>
							<Box marginBottom={7} className="icon">
								<Lazer />
							</Box>
							<Box display="flex" flexDirection="column" gap={5}>
								<Text fontSize="1.25rem" fontWeight="600" as="h3">
									Amplas opções de lazer
								</Text>
								<Text w={{ "2xl": "90%" }} fontSize="1.1rem" as="p">
									Salão de festas, churrasqueira e áreas de convivência para diversão e relaxamento
								</Text>
							</Box>
						</Box>
						<Box w={{ md: "300px", lg2: "400px", xl: "100%" }} border="1px solid #F7BF8A" paddingInline={{ sm: 6, "2xl": 14 }} paddingBlock={{ sm: 10, md: 20, "2xl": 20 }}>
							<Box marginBottom={7} className="icon">
								<Selo />
							</Box>
							<Box display="flex" flexDirection="column" gap={5}>
								<Text fontSize="1.25rem" fontWeight="600" as="h3">
									Selo de qualidade Marini
								</Text>
								<Text w={{ "2xl": "90%" }} fontSize="1.1rem" as="p">
									Garantia de excelência em todas as etapas do projeto, confiança e tranquilidade aos compradores
								</Text>
							</Box>
						</Box>
					</Box>
					<Box
						display="flex"
						flexDirection={{ sm: "column", xl: "row" }}
						justifyContent={{ lg2: "space-between" }}
						marginTop={{ sm: "80px", md: "160px" }}
						paddingInline={{ sm: 6, md: 24 }}
						id="caracteristicas"
						scrollMarginTop="40px"
					>
						<Box w={{ xl: "40%", "2xl": "auto" }}>
							<ZoomImage src="/images/altos/do-empreendimento.png" />
						</Box>
						<Box w={{ "2xl": "45%" }}>
							<Text lineHeight="120%" fontFamily="Anisver" fontSize={{ sm: "2rem", md: "2.4rem" }} as="h2" marginTop={{ sm: 6, xl: 0 }}>
								DO EMPREENDIMENTO
							</Text>
							<Box display={{ md: "flex", xl: "block" }} justifyContent="space-between" marginTop="46px">
								<UnorderedList spacing={6} w={{ md: "43%", xl: "100%" }}>
									<ListItem fontWeight="450">Apartamentos com 2 dormitórios (com ou sem suíte) e um dormitório</ListItem>
									<ListItem fontWeight="450">Acessibilidade: apartamentos adaptados para PNE</ListItem>
									<ListItem fontWeight="450">Captação de água da chuva para jardim</ListItem>
									<ListItem fontWeight="450">Certificação de qualidade conformidade PBQP-H Nível A</ListItem>
									<ListItem fontWeight="450">Churrasqueira em todos os apartamentos (Exceto final 04)</ListItem>
									<ListItem fontWeight="450">Dois elevadores</ListItem>
									<ListItem fontWeight="450">Esquadrias em alumínio (Com persianas nos dormitórios)</ListItem>
									<ListItem fontWeight="450">Espera para TV a cabo e internet</ListItem>
									<ListItem fontWeight="450">Espera de água quente e Split: consulte as opções</ListItem>
								</UnorderedList>
								<UnorderedList spacing={6} marginTop={{ sm: 6, md: 0, xl: 6 }} w={{ md: "43%", xl: "100%" }}>
									<ListItem fontWeight="450">Rebaixo de gesso em todos os ambientes</ListItem>
									<ListItem fontWeight="450">Hall de entrada mobiliado e decorado</ListItem>
									<ListItem fontWeight="450">Interfone com porteiro eletrônico</ListItem>
									<ListItem fontWeight="450">Medidores individuais de água e gás</ListItem>
									<ListItem fontWeight="450">Salão de festas</ListItem>
									<ListItem fontWeight="450">Rooftop</ListItem>
									<ListItem fontWeight="450">Sacadas Abertas</ListItem>
									<ListItem fontWeight="450">Vagas cobertas</ListItem>
								</UnorderedList>
							</Box>
						</Box>
					</Box>
					<Box position="relative" marginTop={{ sm: "40px", md: "160px" }} id="areas" scrollMarginTop="40px">
						<Box
							display="flex"
							flexDirection={{ sm: "column", lg2: "row" }}
							justifyContent={{ sm: "center", lg2: "space-between" }}
							paddingInline={{ sm: 6, md: 24 }}
							alignItems={{ lg2: "end" }}
						>
							<Box>
								<Box display="flex" flexDirection={{ sm: "column", "2xl": "row" }} alignItems={{ sm: "start", "2xl": "center" }} gap={{ sm: 1, "2xl": 8 }}>
									<Text fontFamily="Anisver" fontSize={{ sm: "2.5rem", md: "3rem" }} as="h2">
										SAL
										<span className="box">
											<span className="tio">~</span>
											<span>A</span>
										</span>
										O DE FESTAS
									</Text>
									<Box border="1px solid #BA381F" borderRadius="100px" display="flex" justifyContent="center" alignItems="center" paddingInline={3} paddingBlock={1}>
										<Text>Com brinquedoteca</Text>
									</Box>
								</Box>
								<Slider
									imageArray={["./images/altos/salao-1.png", "./images/altos/salao-2.png", "./images/altos/salao-3.png", "./images/altos/salao-4.png", "./images/altos/salao-5.png"]}
								/>
							</Box>
							<Box marginTop={{ sm: "30px", lg2: 0 }}>
								<Box display="flex" flexDirection={{ sm: "column", "2xl": "row" }} alignItems={{ sm: "start", "2xl": "center" }} gap={{ sm: 1, "2xl": 8 }}>
									<Text fontFamily="Anisver" fontSize={{ sm: "2.5rem", md: "3rem" }} as="h2">
										ROOFTOP
									</Text>
									<Box border="1px solid #BA381F" borderRadius="100px" display="flex" justifyContent="center" alignItems="center" paddingInline={3} paddingBlock={1}>
										<Text>Com fireplace</Text>
									</Box>
								</Box>
								<Slider
									imageArray={[
										"./images/altos/rooftop-1.png",
										"./images/altos/rooftop-2.png",
										"./images/altos/rooftop-3.png",
										"./images/altos/rooftop-4.png",
										"./images/altos/rooftop-5.png",
										"./images/altos/rooftop-6.png",
										"./images/altos/rooftop-7.png",
									]}
								/>
							</Box>
						</Box>
						<Box position="absolute" bottom={-24} backgroundImage={`url("./images/altos/texture-section-3.png")`} backgroundSize="cover" w="100%" height={{ sm: "40vw", lg2: "20vw" }} />
					</Box>
				</div>
				<div className="section-four">
					<Box display="flex" justifyContent="center">
						<Text fontFamily="Anisver" textTransform="uppercase" fontSize={{ sm: "2.5rem", md: "3rem" }} as="h2">
							Planta Baixa
						</Text>
					</Box>
					<Box display="flex" gap={{ sm: "10px", lg2: "100px" }} justifyContent="center" alignItems="center">
						<Text w="5%" as="span" className="horizontal-text">
							RUA ANTÔNIO PICOLLI
						</Text>
						<Box w={{ sm: "80%", md: "70%" }}>
							<ZoomImage size="6xl" src="./images/altos/planta.png" />
						</Box>
						<Text w="5%" as="span" className="horizontal-text">
							RUA AMADÉO ZAMBON
						</Text>
					</Box>
					<Box
						display="flex"
						justifyContent={{ sm: "center", lg: "space-between" }}
						flexDirection={{ sm: "column", lg: "row" }}
						maxWidth="1300px"
						margin="0 auto"
						marginTop="80px"
						paddingInline={{ lg: 16, "2xl": 0 }}
					>
						<Box margin={{ sm: "0 auto", lg2: "0" }} w={{ sm: "100%", lg: "27%" }}>
							<Image margin={{ sm: "0 auto", lg2: "0" }} src="./images/altos/rosa.png" />
							<Text marginTop={{ sm: "20px", md: 0 }} margin={{ sm: "0 auto", lg2: "0" }} textAlign={{ sm: "center", lg2: "start" }} w={{ sm: "80%", md: "60%", lg: "100%" }} as="p">
								O projeto arquitetônico priorizou a posição solar para as áreas de uso íntimo nos mínimos detalhes para acompanhar a vida
							</Text>
						</Box>
						<Box
							display="flex"
							flexWrap="wrap"
							gap={{ sm: 8, md: 16 }}
							alignItems="center"
							w={{ lg: "60%" }}
							justifyContent={{ sm: "center", lg: "start" }}
							marginTop={{ sm: "60px", lg: "0" }}
						>
							<Box>
								<Text className="apto-title">Aptos. Final 01</Text>
								<Text className="apto-subtitle">67,82m² Privativos</Text>
								<Text className="apto-desc">02 Dormitórios com suíte</Text>
							</Box>
							<Box>
								<Text className="apto-title">Aptos. Final 02</Text>
								<Text className="apto-subtitle">69,49m² Privativos</Text>
								<Text className="apto-desc">02 Dormitórios com suíte</Text>
							</Box>
							<Box>
								<Text className="apto-title">Aptos. Final 03</Text>
								<Text className="apto-subtitle">57,08m² Privativos</Text>
								<Text className="apto-desc">02 Dormitórios com suíte</Text>
							</Box>
							<Box>
								<Text className="apto-title">Aptos. Final 04</Text>
								<Text className="apto-subtitle">35,09m² Privativos</Text>
								<Text className="apto-desc">01 Dormitórios com suíte</Text>
							</Box>
							<Box>
								<Text className="apto-title">Aptos. Final 05</Text>
								<Text className="apto-subtitle">48,92m² Privativos</Text>
								<Text className="apto-desc">02 Dormitórios com suíte</Text>
							</Box>
							<Box>
								<Text className="apto-title">Aptos. Final 06</Text>
								<Text className="apto-subtitle">48,89m² Privativos</Text>
								<Text className="apto-desc">02 Dormitórios com suíte</Text>
							</Box>
							<Box>
								<Text className="apto-title">Aptos. Final 07</Text>
								<Text className="apto-subtitle">55,62m² Privativos</Text>
								<Text className="apto-desc">02 Dormitórios com suíte</Text>
							</Box>
						</Box>
					</Box>
					<Box display="flex" justifyContent="center" marginTop="150px">
						<Text w={{ lg2: "85%", "2xl": "35%" }} fontFamily="Anisver" textTransform="uppercase" textAlign="center" fontSize={{ sm: "2.5rem", md: "3rem" }} as="h2">
							AMBIENTES COMPLETOS PARA OS MORADORES
						</Text>
					</Box>
					<Box className="grade-images" maxWidth="90%" margin="0 auto" marginTop="100px">
						<div className="grade-1">
							<ZoomImage
								legendWidth={{ lg2: "190px", "2xl": "240px" }}
								legendHeight={{ lg2: "50px", xl: "60px", "2xl": "80px" }}
								legend="Apto. Final 01"
								sublegend="Sala de estar e jantar"
								src="./images/altos/grade-1.png"
							/>
						</div>
						<div className="grade-2">
							<ZoomImage
								legendWidth={{ lg2: "190px", "2xl": "240px" }}
								legendHeight={{ lg2: "50px", xl: "60px", "2xl": "80px" }}
								legend="Apto. Final 01"
								sublegend="Dormitório"
								src="./images/altos/grade-2.png"
							/>
						</div>
						<div className="grade-3">
							<ZoomImage
								legendWidth={{ lg2: "190px", "2xl": "240px" }}
								legendHeight={{ lg2: "50px", xl: "60px", "2xl": "80px" }}
								legend="Apto. Final 01"
								sublegend="Suíte"
								src="./images/altos/grade-3.png"
							/>
						</div>

						<div className="grade-4">
							<ZoomImage
								legendWidth={{ lg2: "190px", "2xl": "240px" }}
								legendHeight={{ lg2: "50px", xl: "60px", "2xl": "80px" }}
								legend="Apto. Final 02"
								sublegend="Suíte"
								src="./images/altos/grade-4.png"
							/>
						</div>
						<div className="grade-5">
							<ZoomImage
								legendWidth={{ lg2: "190px", "2xl": "240px" }}
								legendHeight={{ lg2: "50px", xl: "60px", "2xl": "80px" }}
								legend="Apto. Final 02"
								sublegend="Sala de estar"
								src="./images/altos/grade-5.png"
							/>
						</div>
						<div className="grade-6">
							<ZoomImage
								legendWidth={{ lg2: "190px", "2xl": "240px" }}
								legendHeight={{ lg2: "50px", xl: "60px", "2xl": "80px" }}
								legend="Apto. Final 02"
								sublegend="Sala de jantar e cozinha"
								src="./images/altos/grade-6.png"
							/>
						</div>

						<div className="grade-7">
							<ZoomImage
								legendWidth={{ lg2: "190px", "2xl": "240px" }}
								legendHeight={{ lg2: "50px", xl: "60px", "2xl": "80px" }}
								legend="Apto. Final 03 e 07"
								sublegend="Dormitório"
								src="./images/altos/grade-7.png"
							/>
						</div>
						<div className="grade-8">
							<ZoomImage
								legendWidth={{ lg2: "190px", "2xl": "240px" }}
								legendHeight={{ lg2: "50px", xl: "60px", "2xl": "80px" }}
								legend="Apto. Final 03 e 07"
								sublegend="Suíte"
								src="./images/altos/grade-8.png"
							/>
						</div>
						<div className="grade-9">
							<ZoomImage
								legendWidth={{ lg2: "190px", "2xl": "240px" }}
								legendHeight={{ lg2: "50px", xl: "60px", "2xl": "80px" }}
								legend="Apto. Final 03 e 07"
								sublegend="Sala de estar e jantar"
								src="./images/altos/grade-9.png"
							/>
						</div>

						<div className="grade-10">
							<ZoomImage
								legendWidth={{ lg2: "190px", "2xl": "240px" }}
								legendHeight={{ lg2: "50px", xl: "60px", "2xl": "80px" }}
								legend="Apto. Final 04"
								sublegend="Dormitório casal"
								src="./images/altos/grade-10.png"
							/>
						</div>
						<div className="grade-11">
							<ZoomImage
								legendWidth={{ lg2: "190px", "2xl": "240px" }}
								legendHeight={{ lg2: "50px", xl: "60px", "2xl": "80px" }}
								legend="Apto. Final 04"
								sublegend="Sala de estar e jantar"
								src="./images/altos/grade-11.png"
							/>
						</div>
						<div className="grade-12">
							<ZoomImage
								legendWidth={{ lg2: "190px", "2xl": "240px" }}
								legendHeight={{ lg2: "50px", xl: "60px", "2xl": "80px" }}
								legend="Apto. Final 04"
								sublegend="Dormitório solteiro"
								src="./images/altos/grade-12.png"
							/>
						</div>

						<div className="grade-13">
							<ZoomImage
								legendWidth={{ lg2: "190px", "2xl": "240px" }}
								legendHeight={{ lg2: "50px", xl: "60px", "2xl": "80px" }}
								legend="Apto. Final 05 e 06"
								sublegend="Sala de estar"
								src="./images/altos/grade-13.png"
							/>
						</div>
						<div className="grade-14">
							<ZoomImage
								legendWidth={{ lg2: "190px", "2xl": "240px" }}
								legendHeight={{ lg2: "50px", xl: "60px", "2xl": "80px" }}
								legend="Apto. Final 05 e 06"
								sublegend="Dormitório casal"
								src="./images/altos/grade-14.png"
							/>
						</div>
						<div className="grade-15">
							<ZoomImage
								legendWidth={{ lg2: "190px", "2xl": "240px" }}
								legendHeight={{ lg2: "50px", xl: "60px", "2xl": "80px" }}
								legend="Apto. Final 05 e 06"
								sublegend="Sala de jantar"
								src="./images/altos/grade-15.png"
							/>
						</div>
					</Box>
					<Box position="absolute" bottom={-24} backgroundImage={`url("./images/altos/texture-section-3.png")`} backgroundSize="cover" w="100%" height={{ sm: "40vw", lg2: "20vw" }} />
				</div>
				<Box marginTop="190px" className="section-five" id="localization" scrollMarginTop="40px">
					<Waypoint onEnter={() => setInView(true)}>
						<Box display="flex" justifyContent="center">
							<Text fontFamily="Anisver" textAlign="center" fontSize={{ sm: "2.5rem", md: "3rem" }} as="h2">
								LOCALIZAÇ
								<span className="box">
									<span className="tio">~</span>
									<span>A</span>
								</span>
								O PRIVILEGIADA
							</Text>
						</Box>
					</Waypoint>
					<Box
						display="flex"
						flexDirection={{ sm: "column-reverse", lg2: "row" }}
						gap={{ sm: "80px", lg2: 0 }}
						justifyContent="space-between"
						paddingInline={{ sm: 4, lg2: 24 }}
						marginTop={{ sm: "60px", lg2: "200px" }}
					>
						<Box>
							<ZoomImage src="./images/altos/map.png" />
						</Box>
						<Box w={{ lg2: "25%" }}>
							<Box display="flex" flexDirection={{ lg2: "column" }} gap={6} flexWrap={{ sm: "wrap", lg2: "nowrap" }} justifyContent="center">
								<Box w={{ sm: "320px", md: "auto" }} display="flex" borderBottom="solid 1px #00000026" lineHeight={10} justifyContent="space-between" gap={{ sm: "30px", lg2: 0 }}>
									<Box display="flex" gap={2} alignItems="center">
										<Padaria /> Padaria
									</Box>
									<Box display="flex" gap={2} alignItems="center">
										<Car /> 1min
									</Box>
								</Box>
								<Box w={{ sm: "320px", md: "auto" }} display="flex" borderBottom="solid 1px #00000026" lineHeight={10} justifyContent="space-between" gap={{ sm: "30px", lg2: 0 }}>
									<Box display="flex" gap={2} alignItems="center">
										<Mercado /> Mercado
									</Box>
									<Box display="flex" gap={2} alignItems="center">
										<Car /> 2min
									</Box>
								</Box>
								<Box w={{ sm: "320px", md: "auto" }} display="flex" borderBottom="solid 1px #00000026" lineHeight={10} justifyContent="space-between" gap={{ sm: "30px", lg2: 0 }}>
									<Box display="flex" gap={2} alignItems="center">
										<Posto /> Posto de gasolina
									</Box>
									<Box display="flex" gap={2} alignItems="center">
										<Car /> 3min
									</Box>
								</Box>
								<Box w={{ sm: "320px", md: "auto" }} display="flex" borderBottom="solid 1px #00000026" lineHeight={10} justifyContent="space-between" gap={{ sm: "30px", lg2: 0 }}>
									<Box display="flex" gap={2} alignItems="center">
										<Farmacia /> Farmácia
									</Box>
									<Box display="flex" gap={2} alignItems="center">
										<Car /> 4min
									</Box>
								</Box>
								<Box w={{ sm: "320px", md: "auto" }} display="flex" borderBottom="solid 1px #00000026" lineHeight={10} justifyContent="space-between" gap={{ sm: "30px", lg2: 0 }}>
									<Box display="flex" gap={2} alignItems="center">
										<Hospital /> Hospital
									</Box>
									<Box display="flex" gap={2} alignItems="center">
										<Car /> 6min
									</Box>
								</Box>
								<Box w={{ sm: "320px", md: "auto" }} display="flex" borderBottom="solid 1px #00000026" lineHeight={10} justifyContent="space-between" gap={{ sm: "30px", lg2: 0 }}>
									<Box display="flex" gap={2} alignItems="center">
										<Escola /> Escola/Creche
									</Box>
									<Box display="flex" gap={2} alignItems="center">
										<Car /> 3min
									</Box>
								</Box>
								<Box w={{ sm: "320px", md: "auto" }} display="flex" borderBottom="solid 1px #00000026" lineHeight={10} justifyContent="space-between" gap={{ sm: "30px", lg2: 0 }}>
									<Box display="flex" gap={2} alignItems="center">
										<Shopping /> Shopping
									</Box>
									<Box display="flex" gap={2} alignItems="center">
										<Car /> 7min
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
				<footer>
					<Box display="flex" justifyContent="space-between" alignItems="end" paddingInline={{ sm: 8, md: 16, xl: 0 }} paddingLeft={{ xl: 24 }} marginTop="150px">
						<Box w={{ xl: "42%" }} marginBottom="80px">
							<Text
								w={{ "2xl": "86%" }}
								fontFamily="Anisver"
								textAlign={{ sm: "center", md: "start" }}
								textTransform="uppercase"
								fontSize={{ sm: "2.5rem", md: "3rem" }}
								as="h2"
								marginBottom={{ sm: "50px", md: "100px" }}
							>
								CONSULTE SEU CORRETOR DE CONFIANÇA
							</Text>
							<Box display="flex" alignItems="center" gap={8} marginBottom={{ sm: "40px", md: "70px" }}>
								<Link to="/">
									<Image w={{ sm: "60%", md: "auto" }} src="./images/altos/marini.png" />
								</Link>
								<Image w={{ sm: "60%", md: "auto" }} src="./images/altos/logo.png" />
							</Box>
							<Text as="p" marginBottom="70px">
								Todas as imagens deste material tem caráter meramente ilustrativo por se tratar de bem a ser construído. Os móveis, equipamentos e utensílios domésticos presentes no
								apartamento decorado e plantas baixas não fazem parte do contrato de aquisição. As áreas de lazer serão entregues conforme memorial descritivo. Os materiais e cores
								poderão sofrer alterações sem aviso prévio em função da disponibilidade dos mesmos no mercado. A assinatura do contrato de financiamento bancário depende de aprovação
								do crédito do cliente pela construtora e pelo agente financeiro. As condições ora indicadas poderão sofrer alterações sem prévia comunicação ou anuência dos
								interessados.{" "}
							</Text>
							<Box display="flex" alignItems="center" gap={2}>
								<Box color="#AA2210">
									<Mail />
								</Box>{" "}
								imoveis@mariniconstruções.com.br
							</Box>
							<Box marginTop="30px" display="flex" alignItems="center" gap={2}>
								<Phone /> 54 3452.2244
							</Box>
							<Box marginTop="30px" display="flex" alignItems="center" gap={2}>
								<Box>
									<PinMap />
								</Box>{" "}
								<Text w={{ xl: "50%" }} as="p">
									R. Fernandes Viêira, 146 - Sala 03 - Cidade Alta, Bento Gonçalves - RS, 95700-372
								</Text>
							</Box>
						</Box>

						<Box w="50%" display={{ sm: "none", xl: "flex" }} alignItems="end" h="100%">
							<Image src="./images/altos/footer-image.png" />
						</Box>
					</Box>
					<Box
						background="#F7BF8A"
						h="100px"
						display="flex"
						flexDirection={{ sm: "column", md: "row" }}
						justifyContent={{ sm: "center", md: "space-between" }}
						gap={{ sm: 6, md: 0 }}
						alignItems="center"
						paddingInline={{ sm: 8, md: 16, xl: 24 }}
					>
						<Text color="#FFF" as="span">
							©2023 Marini. Todos os direitos reservados
						</Text>
						<Box color="#BA3718" display={{ sm: "none", md: "flex" }} alignItems="center" gap={2} onClick={() => scrollToTop()}>
							<Text fontWeight="600">Voltar ao topo</Text>
							<BackToTopArrow />
						</Box>
						<Box display="flex" alignItems="center" gap={2}>
							<Text color="#FFF" as="span">
								Design by:
							</Text>
							<Box>
								<a href="https://eaglesx.com" target="_blank">
									<Image src="./images/altos/eagles.png" />
								</a>
							</Box>
						</Box>
					</Box>
				</footer>
				<ScrollToTopBtn inView={inView} setInView={setInView} />
			</div>
		</animated.div>
	);
};

export default AltosDoBorgo;
