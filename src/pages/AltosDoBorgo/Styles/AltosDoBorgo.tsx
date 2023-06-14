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

const AltosDoBorgo = () => {
	return (
		<div className="altos-container">
			<div className="section-one">
				<div className="navigation">
					<div className="logo">
						<Image w="90%" src="./images/altos/logo.png" />
					</div>
					<div className="anchors-links">
						<div className="anchors">
							<ul>
								<li>Características</li>
								<li>Áreas do empreendimento</li>
								<li>Localização</li>
							</ul>
						</div>
						<div className="links">
							<ul>
								<li>
									<a target="_blank" href="">
										<Facebook />
									</a>
								</li>
								<li>
									<a target="_blank" href="">
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
										<MenuItem>Características</MenuItem>
										<MenuItem>Áreas do empreendimento</MenuItem>
										<MenuItem>Localização</MenuItem>
										<MenuDivider marginInline={3} />
										<Box display="flex">
											<MenuItem w="max-content">
												<Facebook />
											</MenuItem>
											<MenuItem w="50%">
												<Instagram />
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
					<h3>Pensado com excelência do terraço ao hall de entrada para o bem-estar dos moradores e conexão com a cidade</h3>
				</div>
				<div className="btns">
					<Button>Fale Conosco</Button>
					<Button className="outlined">Características</Button>
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
				<Box display="flex" flexDirection={{ sm: "column", lg2: "row" }} justifyContent="space-between" gap={{ sm: "2rem", lg2: 0 }} paddingInline={24}>
					<Text width={{ lg2: "21rem" }} lineHeight="120%" fontFamily="Anisver" fontSize="2.5rem" as="h2">
						SOBRE O EMPREENDIMENTO
					</Text>
					<Text w={{ lg2: "30rem", xl: "44rem" }} fontSize="1.2rem" as="p">
						O Altos do borgo residencial oferece um local aconchegante para morar com tranquilidade, com uma vista incrível da cidade, podendo apreciar o pôr do sol do alto do prédio
						através do Rooftop
					</Text>
				</Box>
				<Box display="flex" flexWrap={{ sm: "wrap", xl: "nowrap" }} gap={7} marginTop={{ sm: "60px", md: "136px" }} justifyContent={{ md: "center", xl: "start" }} paddingInline={24}>
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
				<Box display="flex" flexDirection={{ sm: "column", xl: "row" }} justifyContent={{ lg2: "space-between" }} marginTop={{ sm: "80px", md: "160px" }} paddingInline={24}>
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
				<Box position="relative" marginTop="160px">
					<Box display="flex" justifyContent="space-between" paddingInline={24} alignItems="end">
						<Box>
							<Box display="flex" alignItems="center" gap={8}>
								<Text fontFamily="Anisver" fontSize="3rem" as="h2">
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
							<Slider imageArray={["./images/altos/salao-1.png", "./images/altos/salao-2.png", "./images/altos/salao-3.png", "./images/altos/salao-4.png", "./images/altos/salao-5.png"]} />
						</Box>
						<Box>
							<Box display="flex" alignItems="center" gap={8}>
								<Text fontFamily="Anisver" fontSize="3rem" as="h2">
								ROOFTOP
								</Text>
								<Box border="1px solid #BA381F" borderRadius="100px" display="flex" justifyContent="center" alignItems="center" paddingInline={3} paddingBlock={1}>
									<Text>Com fireplace</Text>
								</Box>
							</Box>
							<Slider imageArray={["./images/altos/Rooftop - 01.png", "./images/altos/Rooftop - 02.png", "./images/altos/Rooftop - 03.png", "./images/altos/Rooftop - 04.png", "./images/altos/Rooftop - 05.png", "./images/altos/Rooftop - 06.png", "./images/altos/Rooftop - 07.png"]} />
						</Box>
					</Box>
					<Box position="absolute" bottom={-24} backgroundImage={`url("./images/altos/texture-section-3.png")`} backgroundSize="cover" w="100%" height="400px" />
				</Box>
			</div>
		</div>
	);
};

export default AltosDoBorgo;
