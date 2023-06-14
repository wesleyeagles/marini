import { Box, Button, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from "@chakra-ui/react";
import "./AltosDoBorgo.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Facebook from "../../../svgs/altos/Facebook";
import Instagram from "../../../svgs/altos/Instagram";
import ZoomImage from "../../../components/Altos/ZoomImage";

const AltosDoBorgo = () => {
	return (
		<div className="altos-container">
			<div className="section-one">
				<div className="navigation">
					<div className="logo"><Image w="90%" src="./images/altos/logo.png" /></div>
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
											<MenuItem w="max-content"><Facebook /></MenuItem>
											<MenuItem w="50%"><Instagram /></MenuItem>
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
				<ZoomImage legend="Acesso salas comerciais" sublegend="Rua Amadéo Zambon" w={{"sm": "100%", "md": "45%"}} src="./images/altos/foto-rua-amadeo.png" />
				<ZoomImage legend="Acesso Residencial" sublegend="Rua Antônio Picolli" w={{"sm": "100%", "md": "45%"}} src="./images/altos/foto-rua-antonio.png" />
				</Box>
				
			</div>
			<div className="section-three">
				<Box display="flex" flexDirection={{sm: "column", "lg2": "row"}} justifyContent="space-between" gap={{sm: "2rem", "lg2": 0}}>
					<Text width={{"lg2": "21rem"}} lineHeight="120%" fontFamily="Anisver" fontSize="2.5rem" as="h2">SOBRE O EMPREENDIMENTO</Text>
					<Text w={{"lg2": "30rem", xl: "44rem"}} fontSize="1.2rem" as="p">O Altos do borgo residencial oferece um local aconchegante para morar com tranquilidade, com uma vista incrível da cidade, podendo apreciar o pôr do sol do alto do prédio através do Rooftop</Text>
				</Box>
			</div>
		</div>
	);
};

export default AltosDoBorgo;
