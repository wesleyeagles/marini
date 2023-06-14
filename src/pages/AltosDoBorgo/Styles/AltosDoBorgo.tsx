import { Box, Button, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
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
		</div>
	);
};

export default AltosDoBorgo;
