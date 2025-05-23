import { Box, Button, FormControl, Image, ListItem, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalOverlay, Progress, Tab, TabList, TabPanel, TabPanels, Tabs, Text, UnorderedList, useDisclosure } from "@chakra-ui/react";
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
import { Link as LinkChakra } from "@chakra-ui/react";

import { animated, useSpring } from "react-spring";
import ScrollToTopBtn from "../../../components/Altos/ScrollToTopBtn";
import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { Helmet } from "react-helmet";
import { StyledH2 } from "../../../styledcomponents/Typograph";

import { ModalCloseButton } from "@chakra-ui/react";
import { StyledP, StyledSmall, StyledStrong } from "../../../styledcomponents/Typograph";

import MailIcon from "../../../svgs/mailicon";
import PhoneIcon from "../../../svgs/phoneicon";
import WhatsIcon from "../../../svgs/whatsicon";
import PinIcon from "../../../svgs/pinicon";
import ClockIcon from "../../../svgs/clockicon";
import { FormModal } from "../../../components/FormModal";
import ImageMagnifier from "../../../components/ImageMagnifier";
import ProgressBar from "../ProgressBar";

const AltosDoBorgo = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const textAnimaOpacity = useSpring({
		config: { duration: 1000 },
		from: { opacity: 0 },
		to: { opacity: 1 },
	});

	const scrollToSection = (id: string) => {
		const element: any = document.getElementById(id);
		element.scrollIntoView({ behavior: "smooth" });
	};

	const { isOpen, onOpen, onClose } = useDisclosure();

	const [inView, setInView] = useState(false);

	return (
		<animated.div style={textAnimaOpacity}>
			<Helmet>
				<meta charSet="utf-8" />
				<meta name="author" content="Eagles" />
				<meta name="keywords" content="Bento Gonçalves, Empreendimento, Localização Privilegiada, Borgo, Marini, Altos do Borgo, Apartamento, prédio." />
				<meta name="description" content="O Altos do Borgo é empreendimento em Bento Gonçalves pensado para o bem-estar dos moradores, com vista e localização privilegiada." />
				<title>Altos do Borgo | Marini Construções</title>
				<link rel="canonical" href="https://www.mariniconstrucoes.com.br/altos-do-borgo" />
			</Helmet>
			<div className="altos-container">
				<div className="section-one">
					<div className="navigation">
						<div className="logo">
							<Image w="90%" src="./images/altos/logo.png" alt="logo" />
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
						<h1>ALTOS DO BORGO RESIDENCIAL</h1>
						<h3>Um empreendimento em Bento Gonçalves pensado para o bem-estar dos moradores, com vista e localização privilegiada</h3>
					</div>
					<div className="btns">
						<Button onClick={() => onOpen()}>Fale Conosco</Button>
						<Button className="outlined" onClick={() => scrollToSection("caracteristicas")}>
							Características
						</Button>
					</div>
					<Image className="sun" src="./images/altos/sun.png" alt="sun" />
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
							O Altos do Borgo residencial oferece uma experiência de moradia elevada para quem deseja viver com mais qualidade de vida na cidade do vinho.
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
									Salão de festas, churrasqueira e áreas de convivência para diversão e lazer
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
							<Image margin={{ sm: "0 auto", lg2: "0" }} src="./images/altos/rosa.png" alt="rosas" />
							<Text marginTop={{ sm: "20px", md: 0 }} margin={{ sm: "0 auto", lg2: "0" }} textAlign={{ sm: "center", lg2: "start" }} w={{ sm: "80%", md: "60%", lg: "100%" }} as="p">
								A arquitetura traz conforto através de iluminação natural para áreas pessoais como varanda e áreas de lazer como salão de festas.
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
								<Text className="apto-desc">01 Dormitório</Text>
							</Box>
							<Box>
								<Text className="apto-title">Aptos. Final 05</Text>
								<Text className="apto-subtitle">48,92m² Privativos</Text>
								<Text className="apto-desc">02 Dormitórios</Text>
							</Box>
							<Box>
								<Text className="apto-title">Aptos. Final 06</Text>
								<Text className="apto-subtitle">48,89m² Privativos</Text>
								<Text className="apto-desc">02 Dormitórios</Text>
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
				<div className="andamento-das-obras">
					<Box paddingInline={{ xl: 12 }}>
						<Text w={{ lg2: "85%", "2xl": "35%" }} fontFamily="Anisver" textTransform="uppercase" textAlign="center" fontSize={{ sm: "2.5rem", md: "3rem" }} as="h2">
							ANDAMENTO DAS OBRAS
						</Text>

						<Box paddingInline={{ xl: 10 }} marginTop={16}>
							<Tabs>
								<TabList className="tablist-altos">
									<Tab className="tab-altos">Fotos</Tab>
									<Tab className="tab-altos">Vídeos</Tab>
								</TabList>

								<TabPanels className="tabpanels-altos">
									<TabPanel className="tab-panel-fotos">
										<ImageMagnifier smallImageUrl="./images/galeria-fotos/altos/imagem-1.png" largeImageUrl="./images/galeria-fotos/altos/imagem-large-1.png" />
										<ImageMagnifier smallImageUrl="./images/galeria-fotos/altos/imagem-2.png" largeImageUrl="./images/galeria-fotos/altos/imagem-large-2.png" />
										<ImageMagnifier smallImageUrl="./images/galeria-fotos/altos/imagem-3.png" largeImageUrl="./images/galeria-fotos/altos/imagem-large-3.png" />
										<ImageMagnifier smallImageUrl="./images/galeria-fotos/altos/imagem-4.png" largeImageUrl="./images/galeria-fotos/altos/imagem-large-4.png" />
										<ImageMagnifier smallImageUrl="./images/galeria-fotos/altos/imagem-5.png" largeImageUrl="./images/galeria-fotos/altos/imagem-large-5.png" />
										<ImageMagnifier smallImageUrl="./images/galeria-fotos/altos/imagem-6.png" largeImageUrl="./images/galeria-fotos/altos/imagem-large-6.png" />
									</TabPanel>

									<TabPanel className="tab-panel-videos">
										<div className="video-1">
											<iframe src="https://www.youtube.com/embed/2Znc5TltqlQ?si=Xzj0YNH-zuHxewUd" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
										</div>
										<div className="video-2">
											<iframe src="https://youtube.com/embed/Sa9HGpm_JfI?si=IG6XdqITVODJwnTi" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
										</div>
										<div className="video-3">
											<iframe src="https://youtube.com/embed/KFYtutNrSiI" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
										</div>
									</TabPanel>
								</TabPanels>
							</Tabs>
						</Box>
					</Box>
				</div>
				<Box maxWidth={{ xl: '88%', '2xl': '91%' }} marginInline={{ xl: "auto" }} marginTop={'5rem'}>
					<div className="bg-progress p-12 py-20">
						<Box flexDirection={{ sm: 'column', lg: 'row', }} className="flex items-center gap-7 mt-20">
							<Box className="flex items-center gap-7">
								<Text fontFamily="Anisver" textTransform='uppercase' fontSize={{ sm: "2.5rem", md: "1.8rem" }} as="h2">Cronograma</Text>
								<div className="bg-[#BA381F] w-[3px] h-[20px] hidden md:block" />
								<Image className="hidden md:block" w={{ sm: "150px", md: "150px" }} src="./images/altos/logo.png" alt="logo" />
							</Box>

							<Box flexDirection={{ sm: 'column', lg: 'row', }} className="flex gap-2 items-center ml-10">
								<Text className="text-[#212121] font-medium">Geral</Text>
								<Text className="text-[#BA3718] font-bold text-lg">46,08%</Text>
								<div>
									<Progress sx={{ borderRadius: '12px', backgroundColor: '#F7BF8A' }} width='200px' value={Number(56.01)} />
								</div>
							</Box>
						</Box>

						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2 gap-y-10 mt-16">
							<ProgressBar value="100" label="Projetos" />
							<ProgressBar value="100" label="Preparação terreno" />
							<ProgressBar value="100" label="Fundações" />
							<ProgressBar value="100" label="Estruturas concreto" />
							<ProgressBar value="100" label="Alvenaria" />
							<ProgressBar value="76.64" label="Revestimentos internos" />
							<ProgressBar value="54.75" label="Instalação hidráulica" />
							<ProgressBar value="32.12" label="Instalação elétrica" />
							<ProgressBar value="21.60" label="Revestimentos externos" />
							<ProgressBar value="16.85" label="Azulejos paredes" />
							<ProgressBar value="7" label="Drywall" />
							<ProgressBar value="0" label="Pisos" />
							<ProgressBar value="0" label="Pinturas" />
							<ProgressBar value="0" label="Paisagismo" />
						</div>
					</div>
				</Box>
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
									<Image w={{ sm: "60%", md: "auto" }} src="./images/altos/marini.png" alt="marini-logo" />
								</Link>
								<Image w={{ sm: "60%", md: "auto" }} src="./images/altos/logo.png" alt="logo" />
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
							<Image src="./images/altos/footer-image.png" alt="footer-image" />
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
									<Image src="./images/altos/eagles.png" alt="eagles" />
								</a>
							</Box>
						</Box>
					</Box>
				</footer>
				<ScrollToTopBtn inView={inView} setInView={setInView} />
			</div>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay backdropFilter="blur(5px) hue-rotate(90deg)" />
				<ModalContent maxW={{ sm: "90%", lg: "940px", xl: "1040px", "2xl": "1140px" }} h={{ lg: "720px" }} overflow="hidden">
					<ModalBody padding={0} overflow="hidden">
						<Box display="flex" flexDirection={{ sm: "column", lg: "row" }}>
							<Box w={{ sm: "100%", lg: "50%" }} h={{ sm: "300px", lg: "720px" }} className="bg-modal-altos">
								<Box h="100%" display="flex" justifyContent="center" alignItems="end" paddingInline={{ md: "60px" }}>
									<Image flex="none" src="/images/altos/contactModal.png" />
								</Box>
							</Box>

							<Box w={{ sm: "100%", lg: "50%" }} h={{ sm: "570px", md: "720px" }} paddingLeft={{ sm: "20px", md: "70px", lg: "0px" }} paddingRight={{ sm: "20px", md: "0px" }}>
								<Box className="close-btn">
									<ModalCloseButton border="2px" borderColor={{ sm: "#FFF", lg: "#3E5481" }} color={{ sm: "#FFF", lg: "#3E5481" }} />
								</Box>

								<Box paddingLeft={{ sm: "0px", md: "60px", lg: "60px", xl: "90px" }} marginTop={{ sm: "30px", md: "78px" }} w={{ sm: "100%", md: "80%", lg: "420px", xl: "455px" }}>
									<Text fontFamily="Anisver" textTransform="uppercase" textAlign="center" fontSize="1.8rem">
										Entre em contato
									</Text>
									<Box marginTop="33px">
										<Text color="#000" textAlign="center">
											<strong>Preencha o formulário abaixo</strong> e aguarde o retorno de nossos especialistas.
										</Text>
									</Box>
									<form action="https://submit-form.com/SMkO0anQ">
										<input type="hidden" name="_email.template.title" value="Formulário de Contato" />
										<input type="hidden" name="_email.template.footer" value="false" />
										<input type="hidden" name="_email.from" value="Marini" />
										<input type="hidden" name="_email.subject" value={`Novo Contato! - Formulário - Altos do Borgo`} />
										<input type="hidden" name="_redirect" value="https://mariniconstrucoes.com.br" />
										<FormControl isRequired marginTop="45px">
											<input className="input-style" type="text" name="Nome" placeholder="Nome" />
										</FormControl>
										<FormControl marginTop="10px" isRequired>
											<input className="input-style" type="email" name="Email" placeholder="Email" />
										</FormControl>
										<FormControl marginTop="10px" isRequired>
											<input className="input-style" type="phone" name="Telefone" placeholder="Telefone" />
										</FormControl>
										<FormControl marginTop="10px" isRequired>
											<textarea className="textarea-style" name="Mensagem" placeholder="Escreva sua mensagem:" />
										</FormControl>
										<Box marginTop="10px" display="flex" justifyContent="flex-end">
											<Button type="submit" backgroundColor="#BA3718" color="#FFF" borderRadius="0" fontWeight="normal" paddingInline={16} paddingBlock={7}>
												ENVIAR
											</Button>
										</Box>
									</form>
								</Box>
							</Box>
						</Box>
					</ModalBody>
				</ModalContent>
			</Modal>
		</animated.div>
	);
};

export default AltosDoBorgo;
