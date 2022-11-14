import { Box, Container, Divider, Image, Text, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { StyledFooter } from "../styledcomponents/StyledFooter";
import { ContactModal } from "./ContactModal";

import Logo from '../svgs/logofooter'
import Facebook from '../svgs/facebookicon'
import Instagram from '../svgs/instagramicon'
import Linkedin from '../svgs/linkedinicon'
import Youtube from '../svgs/youtubeicon'
import Eagles from '../svgs/eagleslogo'
import { HashLink } from "react-router-hash-link";


export function Footer() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                behavior: 'smooth',
                top: 0
            })
        }, 200) 
    }

    function removeHash () { 
        setTimeout(() => {
            history.pushState("", document.title, window.location.pathname + window.location.search)
        }, 100)  
    }


    return (
        <StyledFooter>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
                <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} flexWrap={{md: 'wrap', lg: 'nowrap'}} justifyContent={{md: 'space-between'}}>
                    <Box display={{sm: 'flex', md: 'none', xl: 'block'}} marginRight={{md: '94px'}} justifyContent='center'>
                        <Image src='images/terrace/logo-branca.png' alt='logo-branca'/>
                    </Box>

                    <Box w={{md:'45%', lg: '130px'}} flex='none' marginRight={{lg: '100px'}} marginTop={{sm: '60px', md: '0'}}>
                        <Text w='max-content' as='span' display='block' fontWeight='500' fontSize='17px' color='#ABABAB'>
                            Navegue
                        </Text>
                        <Link onClick={scrollToTop} to='/'>
                            <Text w='max-content' marginTop='24px' fontSize='15px' fontWeight='400' color='#ABABAB'>
                                Início
                            </Text>
                        </Link>

                        <HashLink onClick={removeHash} smooth to='/#sobre'>
                        <Text w='max-content' cursor='pointer' marginTop='24px' fontSize='15px' fontWeight='400' color='#ABABAB'>
                            Sobre nós
                        </Text>
                        </HashLink>

                        <HashLink onClick={removeHash} smooth to='/#empreendimentos'>
                        <Text w='max-content' cursor='pointer' marginTop='24px' fontSize='15px' fontWeight='400' color='#ABABAB'>
                            Empreendimentos
                        </Text>
                        </HashLink>

                        <Text onClick={onOpen} w='max-content' cursor='pointer' marginTop='24px' fontSize='15px' fontWeight='400' color='#ABABAB'>
                            Contato
                        </Text>
                    </Box>

                    <Box w={{md:'45%', lg:'256px'}} flex='none' marginRight={{lg: '50px'}} marginTop={{sm: '60px', md: '0'}}>
                        <Text w='max-content' as='span' display='block' fontWeight='500' fontSize='17px' color='#ABABAB'>
                            Fale conosco
                        </Text>

                        <a href="mailto:imoveis@mariniconstrucoes.com.br"> 
                            <Text marginTop='24px' fontSize='15px' fontWeight='400' color='#ABABAB'>
                            imoveis@marini construcoes.com.br
                            </Text>
                        </a>

                        <a href="tel:555434522244">
                        <Text w='max-content' cursor='pointer' marginTop='24px' fontSize='15px' fontWeight='400' color='#ABABAB'>
                            54 3452.2244
                        </Text>
                        </a>

                        <a target='_blank' href="https://www.google.com/maps/place/R.+Fernandes+Vi%C3%AAira,+146+-+Cidade+Alta,+Bento+Gon%C3%A7alves+-+RS,+95700-000/@-29.172232,-51.5185428,17z/data=!3m1!4b1!4m5!3m4!1s0x951c3cb39197ce8f:0xefc4cf54df6c6d50!8m2!3d-29.172232!4d-51.5185428">
                        <Text cursor='pointer' marginTop='24px' fontSize='15px' fontWeight='400' color='#ABABAB'>
                            Rua Ferndes Viêira, 146<br/> Sala 03 - Cidade Alta,<br/> Bento Gonçalves - RS, 95700-372
                        </Text>
                        </a>
                    </Box>

                    <Box marginTop={{sm: '60px', lg: '0'}} flex='none' marginRight={{lg: '50px'}} w={{md: '45%', lg: '175px'}}>
                        <Text w='max-content' as='span' display='block' fontWeight='500' fontSize='17px' color='#ABABAB'>
                            Funcionamento
                        </Text>
                            <Text marginTop='24px' fontSize='15px' fontWeight='400' color='#ABABAB'>
                            08h às 11:30h, 13h às 17h
                            de segunda a sexta
                        </Text>
                    </Box>

                    <Box marginTop={{sm: '60px', lg: '0'}} w={{md: '45%', lg: 'auto'}} flex='none'>
                        <Text w='max-content' as='span' display='block' fontWeight='500' fontSize='17px' color='#ABABAB'>
                            Siga nas redes
                        </Text>
                        <Box marginTop='24px' w='max-content'>
                            <a href="https://www.facebook.com/mariniconstrucoes" target='_blank'>
                                <Box display='flex' alignItems='center'>
                                <Box marginRight='13px'>
                                    <Facebook />
                                </Box>
                                <Box>
                                    <Text color='#ABABAB' fontSize='15px' fontWeight='400'>
                                        Facebook
                                    </Text>
                                </Box>
                                </Box>
                            </a>
                        </Box>

                        <Box marginTop='18px' w='max-content'>
                            <a href="https://www.instagram.com/mariniconstrucoes/" target='_blank'>
                                <Box display='flex' alignItems='center'>
                                <Box marginRight='13px'>
                                    <Instagram />
                                </Box>
                                <Box>
                                    <Text color='#ABABAB' fontSize='15px' fontWeight='400'>
                                        Instagram
                                    </Text>
                                </Box>
                                </Box>
                            </a>
                        </Box>

                        <Box marginTop='18px' w='max-content'>
                            <a href="https://www.linkedin.com/company/81654841" target='_blank'>
                                <Box display='flex' alignItems='center'>
                                <Box marginRight='13px'>
                                    <Linkedin />
                                </Box>
                                <Box>
                                    <Text color='#ABABAB' fontSize='15px' fontWeight='400'>
                                        Linkedin
                                    </Text>
                                </Box>
                                </Box>
                            </a>
                        </Box>

                        <Box marginTop='18px' w='max-content'>
                            <a href="https://www.youtube.com/channel/UCNNFhpYk8jbn5fU_9kmbSMQ" target='_blank'>
                                <Box display='flex' alignItems='center'>
                                <Box marginRight='13px'>
                                    <Youtube />
                                </Box>
                                <Box>
                                    <Text color='#ABABAB' fontSize='15px' fontWeight='400'>
                                        Youtube
                                    </Text>
                                </Box>
                                </Box>
                            </a>
                        </Box>
                    </Box>
                </Box>
                <Divider marginTop='60px' marginBottom='40px' color='#FFFFFF10' opacity='0.1'/>

                <Box display='flex' flexDirection={{sm: 'column', md: 'row'}} justifyContent='space-between' alignItems='center'>
                    <Box>
                        <Text textAlign={{sm: 'center', md: 'start'}} color='#ABABAB' fontSize='15px' fontWeight='400'>
                            © 2022 Marini construções. Todos os direitos reservados
                        </Text>
                    </Box>

                    <Box display='flex' alignItems='center' marginTop={{sm: '30px', md: '0'}}>
                        <Text marginRight='10px' color='#ABABAB' fontSize='15px' fontWeight='400'>
                            Desenvolvido por:
                        </Text>
                        <a href="https://www.eaglesx.com/" target='_blank'>
                        <Eagles />
                        </a>
                    </Box>
                </Box>
            </Container>
            <ContactModal Open={onOpen} Close={onClose} isModalOpen={isOpen}/>
        </StyledFooter>
    )
}