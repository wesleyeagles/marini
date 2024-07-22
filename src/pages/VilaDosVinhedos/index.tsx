import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

import "./styles/vale-dos-vinhedos.scss";
import { Fragment, useEffect, useRef, useState } from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdEmail, MdNoBackpack, MdNordicWalking } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTheaterMasks, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import ReactPlayer from 'react-player/youtube'
import { TbRotateRectangle, TbTrees, TbZoomMoney } from "react-icons/tb";
import { FaLongArrowAltUp } from "react-icons/fa";

import { FaRoute } from "react-icons/fa";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';

import Terrace from "./icons/Terrace";
import TerraceSimbolo from "./icons/TerraceSimbolo";
import NewsletterForm from "./components/NewsletterForm";
import { BiDownload, BiMapPin, BiPhone } from "react-icons/bi";
import ContactForm from "./components/ContactForm";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function VilaDosVinhedos() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 1,
        cssEase: "linear"
    };


    const logosRef = useRef<any>(null);

    useEffect(() => {
        if (logosRef.current) {
            const logosSlide = logosRef.current.querySelector('.logos-slide');
            if (logosSlide) {
                const copy = logosSlide.cloneNode(true);
                logosRef.current.appendChild(copy);
            }
        }
    }, []);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)

        return () => {
            setIsLoading(true);
        }
    }, [])

    return (
        <Fragment>
            <Helmet>
                {/* charset */}
                <meta charSet="utf-8" />

                {/* url */}
                <meta content="http://www.mariniconstrucoes.com.br/vale-dos-vinhedos" property="og:url" />
                <link href="http://www.mariniconstrucoes.com.br/vale-dos-vinhedos" rel="canonical" />

                {/* title */}
                <title>Marini | Vale dos Vinhedos</title>
                <meta content="Marini | Vale dos Vinhedos" property="og:title" />
                <meta content="Marini | Vale dos Vinhedos" property="og:site_name" />

                {/* description */}
                <meta content="Localizado na Serra Gaúcha, o Vale dos Vinhedos se destaca como um destino privilegiado para famílias que desejam visitar e até se estabelecer de forma permanente. A região oferece uma combinação única de paisagens deslumbrantes, vinícolas renomadas, gastronomia requintada e uma forte cultura comunitária." name="description" />
                <meta content="Localizado na Serra Gaúcha, o Vale dos Vinhedos se destaca como um destino privilegiado para famílias que desejam visitar e até se estabelecer de forma permanente. A região oferece uma combinação única de paisagens deslumbrantes, vinícolas renomadas, gastronomia requintada e uma forte cultura comunitária." property="og:description" />

                {/* keyword */}
                <meta name='keywords' content='vale dos vinhedos, bento gonçalves, serra gaúcha, terrace residence, investimento imobiliário, enoturismo, vinícolas, gastronomia italiana, turismo na serra gaúcha, apartamentos de luxo, qualidade de vida, valorização imobiliária, rentabilidade de aluguel, cultura italiana, pontos turísticos bento gonçalves, empreendimento de alto padrão, imóveis na serra gaúcha, oportunidade de investimento, localização estratégica, infraestrutura de lazer, potencial de valorização, baixa vacância imobiliária, retorno sobre investimento, patrimônio imobiliário, moradia de alto padrão' />

                {/* og type */}
                <meta content="website" property="og:type" />

                {/* og lang */}
                <meta content="pt_BR" property="og:locale" />
            </Helmet>
            <ToastContainer />
            <Box animation='linear' transitionDuration='.8s' className="vale-dos-vinhedos" display={isLoading ? 'none' : 'block'}>
                <Navbar />
                <header>
                    <Box
                        position="relative"
                        width="100%"
                        height={{ base: '500px', lg: "850px" }}
                        backgroundImage="url('/images/lp/bela-vista-da-regiao-de-bento-goncalves.webp')"
                        backgroundSize="cover"
                        backgroundPosition={{ base: 'right', md: "start" }}
                    >
                        <Box maxWidth="1280px" marginInline="auto" paddingInline={{ base: 5, md: 10, xl: 0 }} height="100%">
                            <Grid templateColumns={"repeat(12, 1fr)"} gridTemplateRows={"repeat(12, 1fr)"} height="100%">
                                <GridItem colSpan={{ sm: 12, md: 7, lg: 7, xl: 8 }} rowSpan={12} paddingBlock={{ sm: 24, md: 0 }}>
                                    <Box display='flex' flexDirection='column' justifyContent='center' height='100%' w='100%'>
                                        <Text as='h2' color='white' fontFamily='Helvetica' textTransform='uppercase' fontWeight='bold' fontSize={{ sm: 'md', lg: 'lg' }}>Vale dos vinhedos</Text>
                                        <Text as='h1' lineHeight={1.2} width={{ sm: '24rem', md: '25rem', lg: '30rem', xl: '40rem' }} marginTop={'1.5rem'} marginBottom={'2rem'} color='white' fontFamily='Helvetica' textTransform='uppercase' fontWeight='medium' fontSize={{ sm: '3xl', lg: '4xl', xl: '5xl' }}>Invista na região mais bela do brasil</Text>
                                        <Text width={{ sm: '22rem', md: '22rem', lg: '28rem' }} as='p' color="white" fontSize={{ md: 'sm', lg: 'md' }}>Aproveite o potencial de crescimento e a qualidade de vida que <Text as='strong'>Bento Gonçalves</Text> oferece.</Text>
                                        <Box display='flex' marginTop={{ sm: '2rem', lg: '4rem' }} gap={{ sm: 4, lg: 8 }}>
                                            <Button fontSize={{ md: 'sm', lg: 'md' }} backgroundColor='#860A10' color='#FFF' borderRadius='none' padding={{ md: 4, lg: 8 }} _hover={{ backgroundColor: '#860A1090' }}>Conheça a região</Button>
                                            <Button fontSize={{ md: 'sm', lg: 'md' }} backgroundColor='#FFF' color='#000' borderRadius='none' padding={{ md: 4, lg: 8 }}>Conheça a Terrace</Button>
                                        </Box>
                                    </Box>
                                </GridItem>

                                <GridItem position='absolute' right='0' height='100%' width={{ lg: '430px', xl: '600px', '2xl': '750px' }} display={{ base: 'none', lg: 'block' }} colSpan={{ sm: 0, md: 5, lg: 5, xl: 4 }} rowSpan={{ md: 11, lg: 10, xl: 11 }}>
                                    <Image width='100%' height='100%' objectFit='cover' src="/images/lp/vista-da-frente-do-predio-da-terrace.webp" alt="Vista da frente do predio da Terrace" />
                                </GridItem>

                                <GridItem position='absolute' right='0' bottom='0' width={{ lg: '430px', xl: '600px', '2xl': '750px' }} height='100px' display={{ base: 'none', lg: 'flex' }} justifyContent='center' alignItems='center' backgroundColor='#000' colSpan={{ sm: 5, lg: 5, xl: 4 }} rowSpan={{ md: 1, lg: 2, xl: 1 }}>
                                    <Image width={{ md: '120px', 'lg': '180px', 'xl': '200px', '2xl': '200px' }} src="/images/lp/logo-da-terrace.png" alt='Logo da Terrace' />
                                </GridItem>
                            </Grid>
                        </Box>
                    </Box>
                </header>
                <Box background='linear-gradient(to right, #860A10, #200204)' paddingBlock={20}>
                    <Box maxWidth={{ xl: 1280 }} paddingInline={{ base: 5, md: 10, xl: 0 }} marginInline='auto'>
                        <Text as='h3' color='#FFF'>ÍCONES COM OS ATRATIVOS DA REGIÃO</Text>

                        <Box display='grid' gridTemplateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(6, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(5, 1fr)' }} gap={6} marginTop={10} justifyContent="center">
                            <GridItem colSpan={{ md: 2, lg: 'auto' }}>
                                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' border='1px solid #FFFFFF32' padding={{ sm: 8, md: 10, xl: 10 }} gap={4}>
                                    <Box backgroundColor='#DADADA14' padding={4}>
                                        <GiForkKnifeSpoon color='#FFF' size={30} />
                                    </Box>
                                    <Text as='span' color='#FFF' textAlign='center'>Diversidade gastronômica</Text>
                                </Box>
                            </GridItem>

                            <GridItem colSpan={{ md: 2, lg: 'auto' }}>
                                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' border='1px solid #FFFFFF32' padding={{ sm: 8, md: 10, xl: 10 }} gap={4}>
                                    <Box backgroundColor='#DADADA14' padding={4}>
                                        <FaRoute color='#FFF' size={30} />
                                    </Box>
                                    <Text maxWidth={{ lg: '150px', xl: 'auto' }} as='span' color='#FFF' textAlign='center'>Tours e degustações</Text>
                                </Box>
                            </GridItem>

                            <GridItem colSpan={{ md: 2, lg: 'auto' }}>
                                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' border='1px solid #FFFFFF32' padding={{ sm: 8, md: 10, xl: 10 }} gap={4}>
                                    <Box backgroundColor='#DADADA14' padding={4}>
                                        <MdNordicWalking color='#FFF' size={30} />
                                    </Box>
                                    <Text maxWidth={{ sm: '150px', md: 'auto' }} as='span' color='#FFF' textAlign='center'>Passeios por trilhas históricas</Text>
                                </Box>
                            </GridItem>

                            <GridItem gridColumn={{ md: 'span 3 / span 3', lg: 'auto', xl: 'span 1 / span 1' }}>
                                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' border='1px solid #FFFFFF32' padding={{ sm: 8, md: 10, xl: 10 }} gap={4}>
                                    <Box backgroundColor='#DADADA14' padding={4}>
                                        <FaTheaterMasks color='#FFF' size={30} />
                                    </Box>
                                    <Text maxWidth={{ sm: '100px', md: 'auto', lg: '150px', xl: 'auto' }} as='span' color='#FFF' textAlign='center'>Experiências culturais</Text>
                                </Box>
                            </GridItem>

                            <GridItem gridColumn={{ sm: 'span 2 / span 2', md: 'span 3 / span 3', lg: 'span 4 / span 1', xl: 'span 1 / span 1' }}>
                                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' border='1px solid #FFFFFF32' padding={{ sm: 8, md: 10, xl: 10 }} gap={4}>
                                    <Box backgroundColor='#DADADA14' padding={4}>
                                        <TbTrees color='#FFF' size={30} />
                                    </Box>
                                    <Text as='span' color='#FFF' textAlign='center'>Áreas de lazer e natureza</Text>
                                </Box>
                            </GridItem>
                        </Box>
                    </Box>
                </Box>

                <Box maxWidth="1280px" marginInline="auto" paddingInline={{ base: 5, md: 10, xl: 0 }} paddingBlock={20}>
                    <Box display='flex' flexDirection={{ sm: 'column', xl: 'row' }} justifyContent='space-between' marginBottom={24}>
                        <Text as='h2' textTransform='uppercase' color='#252525' fontSize='3xl' maxWidth='480px'>o encontro da cultura italiana com a modernidade</Text>

                        <Text as='p' color='#606060' fontWeight='light' maxWidth={{ lg: '400px', xl: '550px' }} marginTop={{ sm: '1.5rem', lg: 0 }}>A cidade é um destacado polo de enoturismo, atraindo visitantes para suas renomadas vinícolas e degustações, celebrando a rica tradição vinícola da região.</Text>
                    </Box>

                    <Box height={{ sm: '400px', md: '560px' }}>
                        <ReactPlayer width='100%' height='100%' url='https://www.youtube.com/watch?v=_KcgDprpybo' />
                    </Box>

                    <Text className="mt-36 mb-16" as='h2' textTransform='uppercase' color='#252525' fontSize='3xl'>conheça os pontos turísticos</Text>

                    <Box className="h-[600px] justify-between gap-6 hidden lg:flex">
                        <Box className="w-[33%] grid grid-rows-5 gap-6">
                            <Box className="relative row-span-5 lg:row-span-3">
                                <Image width='100%' height='100%' src='images/lp/foto-do-vale-dos-vinhedos.webp' alt='Foto do vale dos vinhedos' />

                                <Text position='absolute' as='span' textTransform='uppercase' color='#FFF' backgroundColor='#860A10' padding={4} bottom='0'>Vale dos Vinhedos</Text>
                            </Box>

                            <Box className="relative row-span-2">
                                <Image width='100%' height='100%' src='images/lp/foto-da-cantina-cabernet.webp' alt='Foto da cantina cabernet' />

                                <Text position='absolute' as='span' textTransform='uppercase' color='#FFF' backgroundColor='#860A10' padding={4} bottom='0'>Cantina Cabernet</Text>
                            </Box>
                        </Box>

                        <Box className="flex flex-grow flex-col h-full">
                            <Box className="relative h-full">
                                <Image width='100%' height='100%' src='images/lp/foto-da-vinicola-aurora.webp' alt='Foto da vinicola aurora' />

                                <Text position='absolute' as='span' textTransform='uppercase' color='#FFF' backgroundColor='#860A10' padding={4} bottom='0'>Vale dos Vinhedos</Text>
                            </Box>
                        </Box>

                        <Box className="w-[40%] grid grid-rows-2 grid-flow-col gap-6">
                            <Box className="relative row-span-1">
                                <Image width='100%' height='100%' src='images/lp/foto-do-caminhos-de-pedra.webp' alt='Foto do caminhos de pedra' />

                                <Text position='absolute' as='span' textTransform='uppercase' color='#FFF' backgroundColor='#860A10' padding={4} bottom='0'>Vale dos Vinhedos</Text>
                            </Box>

                            <Box className="relative row-span-1">
                                <Image width='100%' height='100%' src='images/lp/foto-da-maria-fumaca.webp' alt='Foto da maria fummaça' />

                                <Text position='absolute' as='span' textTransform='uppercase' color='#FFF' backgroundColor='#860A10' padding={4} bottom='0'>Cantina Cabernet</Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="flex flex-col gap-3 lg:hidden">
                        <Box className="relative row-span-5 lg:row-span-3">
                            <Image width='100%' height='100%' src='images/lp/foto-do-vale-dos-vinhedos.webp' alt='Foto do vale dos vinhedos' />

                            <Text position='absolute' as='span' textTransform='uppercase' color='#FFF' backgroundColor='#860A10' padding={4} bottom='0'>Vale dos Vinhedos</Text>
                        </Box>

                        <Box className="relative row-span-2">
                            <Image width='100%' height='100%' src='images/lp/foto-da-cantina-cabernet.webp' alt='Foto da cantina cabernet' />

                            <Text position='absolute' as='span' textTransform='uppercase' color='#FFF' backgroundColor='#860A10' padding={4} bottom='0'>Cantina Cabernet</Text>
                        </Box>

                        <Box className="relative h-full">
                            <Image width='100%' height='100%' src='images/lp/foto-da-vinicola-aurora.webp' alt='Foto da vinicola aurora' />

                            <Text position='absolute' as='span' textTransform='uppercase' color='#FFF' backgroundColor='#860A10' padding={4} bottom='0'>Vale dos Vinhedos</Text>
                        </Box>

                        <Box className="relative row-span-1">
                            <Image width='100%' height='100%' src='images/lp/foto-do-caminhos-de-pedra.webp' alt='Foto do caminhos de pedra' />

                            <Text position='absolute' as='span' textTransform='uppercase' color='#FFF' backgroundColor='#860A10' padding={4} bottom='0'>Vale dos Vinhedos</Text>
                        </Box>

                        <Box className="relative row-span-1">
                            <Image width='100%' height='100%' src='images/lp/foto-da-maria-fumaca.webp' alt='Foto da maria fummaça' />

                            <Text position='absolute' as='span' textTransform='uppercase' color='#FFF' backgroundColor='#860A10' padding={4} bottom='0'>Cantina Cabernet</Text>
                        </Box>
                    </Box>
                </Box>

                <Box maxWidth="1280px" marginInline="auto" paddingInline={{ base: 5, md: 10, xl: 0 }} className="mt-24 flex flex-col-reverse lg:flex-row justify-between items-center pb-16 border-b">
                    <Image src='images/lp/pessoas-sorrindo-em-uma-mesa-de-jantar.webp' alt='Pessoas sorrindo em uma mesa de jantar' />

                    <Box className="flex flex-col">
                        <Text as='h2' textTransform='uppercase' color='#252525' fontSize='3xl' width={{ lg: '360px' }}>para quem Busca Qualidade de Vida e Beleza Natural</Text>

                        <Text as='p' color='#606060' fontWeight='light' width={{ lg: '465px' }} marginTop={{ sm: 6, lg: 12 }}>
                            Localizado na Serra Gaúcha, o Vale dos Vinhedos se destaca como um destino privilegiado para famílias que desejam visitar e até se estabelecer de forma permanente.
                            A região oferece uma combinação única de paisagens deslumbrantes, vinícolas renomadas, gastronomia requintada e uma forte cultura comunitária.
                        </Text>

                        <Button width='max-content' marginTop={{ sm: 8, lg: 16 }} fontSize={{ md: 'sm', lg: 'md' }} marginBottom={{ sm: 12, lg: 0 }} backgroundColor='#860A10' color='#FFF' borderRadius='none' padding={{ md: 4, lg: 8 }} _hover={{ backgroundColor: '#860A1090' }}>Tenho interesse</Button>
                    </Box>
                </Box>

                <Box maxWidth="1280px" marginInline="auto" paddingInline={{ base: 5, md: 10, xl: 0 }} marginTop={{ base: 16, md: 24 }}>
                    <Text as='h3' textTransform='uppercase' color='#969696' fontSize='md' marginBottom={10}>EMPRESAS QUE ESTÃO NA REGIÃO</Text>

                    <div className="mainContainer">
                        <Slider {...settings}>
                            <div className="container">
                                <Image src='images/lp/logotipo-da-miolo.webp' alt='Pessoas sorrindo em uma mesa de jantar' />
                            </div>
                            <div className="container">
                                <Image src='images/lp/logotipo-da-vinicola-aurora.webp' alt='Pessoas sorrindo em uma mesa de jantar' />
                            </div>
                            <div className="container">
                                <Image src='images/lp/logotipo-da-miolo.webp' alt='Pessoas sorrindo em uma mesa de jantar' />
                            </div>
                            <div className="container">
                                <Image src='images/lp/logotipo-da-vinicola-aurora.webp' alt='Pessoas sorrindo em uma mesa de jantar' />
                            </div>
                            <div className="container">
                                <Image src='images/lp/logotipo-da-miolo.webp' alt='Pessoas sorrindo em uma mesa de jantar' />
                            </div>
                            <div className="container">
                                <Image src='images/lp/logotipo-da-vinicola-aurora.webp' alt='Pessoas sorrindo em uma mesa de jantar' />
                            </div>
                            <div className="container">
                                <Image src='images/lp/logotipo-da-miolo.webp' alt='Pessoas sorrindo em uma mesa de jantar' />
                            </div>
                            <div className="container">
                                <Image src='images/lp/logotipo-da-vinicola-aurora.webp' alt='Pessoas sorrindo em uma mesa de jantar' />
                            </div>
                            <div className="container">
                                <Image src='images/lp/logotipo-da-miolo.webp' alt='Pessoas sorrindo em uma mesa de jantar' />
                            </div>
                            <div className="container">
                                <Image src='images/lp/logotipo-da-vinicola-aurora.webp' alt='Pessoas sorrindo em uma mesa de jantar' />
                            </div>
                            <div className="container">
                                <Image src='images/lp/logotipo-da-miolo.webp' alt='Pessoas sorrindo em uma mesa de jantar' />
                            </div>
                            <div className="container">
                                <Image src='images/lp/logotipo-da-vinicola-aurora.webp' alt='Pessoas sorrindo em uma mesa de jantar' />
                            </div>
                        </Slider>
                    </div>
                </Box>

                <Box className="relative w-full h-[500px]  lg:h-[600px] mt-20">
                    <Box className="absolute flex w-full h-full -z-10">
                        <Box background='linear-gradient(to bottom, #860A10, #200204)' className="w-full lg:w-[60%] h-full" />
                        <Image className="w-[40%] hidden lg:block" src='images/lp/vista-da-frente-do-predio-da-terrace-segunda.webp' alt='' />
                    </Box>

                    <Box maxWidth="1280px" marginInline="auto" height='100%' paddingInline={{ base: 5, md: 10, xl: 0 }} paddingTop={24}>
                        <Text as='h2' color='white' textTransform='uppercase' fontSize='4xl' >Terrace Residence</Text>
                        <Text as='p' color='white' className="max-w-[500px]" marginTop={{ sm: 8 }}>O Terrace Residence encontra-se na melhor região de Bento Gonçalves para dispor aos seus moradores mais praticidade e tranquilidade.</Text>
                        <Text as='p' color='white' className="max-w-[500px]" marginTop={{ sm: 6 }}>Localizado no Centro de Bento Gonsalves , o Terrace Residence oferece uma nova concepção em moradia, com completa comodidade sofisticação e qualidade de vida que você sempre sonhou. </Text>

                        <Button borderRadius={0} className="bg-white text-[#000] mt-16 rounded-none" paddingInline={20} paddingBlock={8}>Ver mais</Button>
                    </Box>
                </Box>

                <Box maxWidth="1280px" marginInline="auto" paddingInline={{ base: 5, md: 10, xl: 0 }} className="mt-24 flex flex-col-reverse lg:flex-row justify-between items-center pb-16">
                    <Image src='images/lp/vista-lateral-do-predio.webp' alt='Vista lateral do predio' />

                    <Box className="flex flex-col">
                        <Text as='h2' textTransform='uppercase' color='#252525' fontSize='3xl' width={{ lg: '230px' }}>planejado em cada detalhe</Text>

                        <Text as='p' color='#606060' fontWeight='light' width={{ lg: '465px' }} marginTop={{ sm: 6, lg: 12 }}>
                            O Terrace Residence é um empreendimento exclusivo, com apartamentos confortáveis, ambientes de condomínio modernos e completos e localização privilegiada.
                        </Text>

                        <Text as='p' color='#606060' fontWeight='light' width={{ lg: '465px' }} marginTop={{ sm: 6, lg: 12 }}>
                            Planejado em cada detalhe, é o que de mais elegante e confortável a engenharia pode oferecer para você.
                        </Text>

                        <Button width='max-content' marginTop={{ sm: 8, lg: 16 }} fontSize={{ md: 'sm', lg: 'md' }} marginBottom={{ sm: 12, lg: 0 }} backgroundColor='#860A10' color='#FFF' borderRadius='none' padding={{ md: 4, lg: 8 }} _hover={{ backgroundColor: '#860A1090' }}>Tenho interesse</Button>
                    </Box>
                </Box>

                <Box maxWidth="1280px" marginInline="auto" paddingInline={{ base: 5, md: 10, xl: 0 }} className="mt-24 flex flex-col-reverse lg:flex-row-reverse justify-between pb-16">
                    <NewsletterForm />

                    <Box className="flex flex-col">
                        <Text as='h2' textTransform='uppercase' color='#252525' fontSize='3xl' width={{ lg: '335px' }}>fique por dentro das atualizações do empreendimento</Text>

                        <Text as='p' color='#606060' fontWeight='light' width={{ lg: '375px' }} marginTop={{ sm: 6, lg: 12 }}>
                            Cadastre-se para receber atualizações sobre o empreendimento e fique por dentro de todas as novidades.
                        </Text>
                    </Box>
                </Box>

                <Box background='linear-gradient(to bottom, #860A10, #200204)'>
                    <Box maxWidth="1280px" marginInline="auto" paddingInline={{ base: 5, md: 10, xl: 0 }} className="mt-24 flex flex-col py-16 relative">
                        <Text as='h2' textTransform='uppercase' color='#FFF' fontSize='3xl'>porque investir no terrace?</Text>

                        <Box className="grid grid-cols-1 lg:grid-cols-2 grid-rows-3 gap-8 lg:gap-4 mt-16 max-w-[640px]">
                            <Box className="flex flex-col gap-4">
                                <Text as='h3' color='#FFF' textTransform='uppercase' fontSize='medium'>LOCALIZAÇÃO ESTRETÉGICA</Text>
                                <Text as='p' color='#FFFFFF72' fontWeight='light' className="max-w-[260px]">No coração de Bento Gonçalves, perto de serviços essenciais e atrações turísticas</Text>
                            </Box>

                            <Box className="flex flex-col gap-4">
                                <Text as='h3' color='#FFF' textTransform='uppercase' fontSize='medium'>Potencial de Valorização</Text>
                                <Text as='p' color='#FFFFFF72' fontWeight='light' className="max-w-[260px]">Excelente oportunidade de valorização do imóvel</Text>
                            </Box>

                            <Box className="flex flex-col gap-4">
                                <Text as='h3' color='#FFF' textTransform='uppercase' fontSize='medium'>rentabilidade atraente</Text>
                                <Text as='p' color='#FFFFFF72' fontWeight='light' className="max-w-[260px]">Oportunidade de obter renda com aluguéis.</Text>
                            </Box>

                            <Box className="flex flex-col gap-4">
                                <Text as='h3' color='#FFF' textTransform='uppercase' fontSize='medium'>baixa vacância</Text>
                                <Text as='p' color='#FFFFFF72' fontWeight='light' className="max-w-[260px]">Alta demanda por locações na região.</Text>
                            </Box>

                            <Box className="flex flex-col gap-4">
                                <Text as='h3' color='#FFF' textTransform='uppercase' fontSize='medium'>qualidade de vida</Text>
                                <Text as='p' color='#FFFFFF72' fontWeight='light' className="max-w-[260px]">Infraestrutura completa com áreas de lazer, academia e piscina, oferecendo conforto e bem-estar aos moradores.</Text>
                            </Box>
                        </Box>

                        <Box className="absolute bottom-0 right-0 max-w-max flex justify-end opacity-15 lg:opacity-100">
                            <Image className="w-full lg:w-[70%]" src='images/lp/vista-da-frente-do-predio-com-logo-da-terrace.webp' alt='Vista da frente do predio com logo da Terrace' />
                        </Box>
                    </Box>
                </Box>

                <Box maxWidth="1280px" marginInline="auto" paddingInline={{ base: 5, md: 10, xl: 0 }} className="mt-24 flex flex-col py-16 relative">
                    <Box display='flex' justifyContent='space-between' alignItems={{ lg: 'center' }} flexDirection={{ base: 'column', lg: 'row' }}>
                        <Text as='h2' textTransform='uppercase' color='#252525' fontSize='3xl' width={{ lg: '500px' }}>Oportunidade de Alto Retorno e Valorização Garantida!</Text>

                        <Button width='max-content' marginTop={{ base: 12, lg: 0 }} fontSize={{ md: 'sm', lg: 'md' }} border={'1px solid #25252550'} leftIcon={<BiDownload size={20} />} backgroundColor='transparent' color='#252525' borderRadius='none' padding={6} paddingInline={6} _hover={{ backgroundColor: '#860A10', color: '#FFF' }}>Baixe o infográfico</Button>
                    </Box>

                    <Box className="grid lg:grid-cols-2 lg:grid-rows-2 gap-y-16 gap-x-32 mt-16">
                        <Box className="flex gap-9 border-b pb-16">
                            <Box background='linear-gradient(to bottom, #860A10, #200204)' className="max-w-max h-max p-4 flex justify-center items-center">
                                <TbZoomMoney size={30} color="#FFF" />
                            </Box>

                            <Box className="flex flex-col gap-6">
                                <Text as='h3' color='#252525' textTransform='uppercase' fontSize='medium'>valorização imobiliária</Text>
                                <Text as='p' color='#252525' fontWeight='light' >Nos últimos 5 anos, os imóveis na Serra Gaúcha apresentaram uma valorização média de 15% ao ano.</Text>
                            </Box>
                        </Box>

                        <Box className="flex gap-9 border-b pb-16">
                            <Box background='linear-gradient(to bottom, #860A10, #200204)' className="max-w-max h-max p-4 flex justify-center items-center">
                                <MdNoBackpack size={30} color="#FFF" />
                            </Box>

                            <Box className="flex flex-col gap-6">
                                <Text as='h3' color='#252525' textTransform='uppercase' fontSize='medium'>baixa taxa de vacância</Text>
                                <Text as='p' color='#252525' fontWeight='light' >A Serra Gaúcha possui uma das menores taxas de vacância do país, com índices inferiores a 3%.</Text>
                            </Box>
                        </Box>

                        <Box className="flex gap-9 border-b pb-16 lg:border-none lg:pb-0">
                            <Box background='linear-gradient(to bottom, #860A10, #200204)' className="max-w-max h-max p-4 flex justify-center items-center">
                                <TbRotateRectangle size={30} color="#FFF" />
                            </Box>

                            <Box className="flex flex-col gap-6">
                                <Text as='h3' color='#252525' textTransform='uppercase' fontSize='medium'>rentabilidade de aluguel</Text>
                                <Text as='p' color='#252525' fontWeight='light' >Com a crescente demanda por locações, espera-se que os proprietários do Residencial Terrace obtenham uma rentabilidade mensal de até R$ 10.000</Text>
                            </Box>
                        </Box>

                        <Box className="flex gap-9">
                            <Box background='linear-gradient(to bottom, #860A10, #200204)' className="max-w-max h-max p-4 flex justify-center items-center">
                                <FiTrendingUp size={30} color="#FFF" />
                            </Box>

                            <Box className="flex flex-col gap-6">
                                <Text as='h3' color='#252525' textTransform='uppercase' fontSize='medium'>apreciação do patrimônio</Text>
                                <Text as='p' color='#252525' fontWeight='light' >Com uma projeção de valorização de 50% nos próximos 5 anos, o seu investimento está destinado a crescer substancialmente.</Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="grid grid-cols-12 gap-2 md:gap-8 mt-16 md:mt-32">
                        <Box className="col-span-3 h-[80px] md:h-[200px] lg:h-[320px]">
                            <Image className="w-full h-full" src='images/lp/familia-feliz-sorrindo.webp' alt='Familia feliz sorrindo' />
                        </Box>

                        <Box className="col-span-9 h-[80px] md:h-[200px] lg:h-[320px]">
                            <Image className="w-full h-full" src='images/lp/vista-da-frente-do-terrace.webp' alt='Familia feliz sorrindo' />
                        </Box>
                    </Box>
                </Box>

                <Box background='linear-gradient(to bottom, #860A10, #200204)'>
                    <Box maxWidth="1280px" marginInline="auto" paddingInline={{ base: 5, md: 10, xl: 0 }} className="mt-24 flex flex-col py-16 relative">
                        <Box display='flex' flexDirection={{ base: 'column', lg: 'row' }} justifyContent='space-between'>
                            <Box className="md:w-[500px]">
                                <Text as='h2' color='#FFF' textTransform='uppercase' fontSize='3xl'>entre em contato e fale com um especialista</Text>
                                <Text as='p' color='#FFFFFF72' fontWeight='light' marginTop={8}>Nossos especialistas estão à disposição para esclarecer suas dúvidas e oferecer o suporte necessário.</Text>

                                <Box className="w-28 border-b border-[#FFFFFF72] my-14" />

                                <Box className="grid grid-cols-2 gap-4">
                                    <Box className="flex gap-9 border-b border-[#FFFFFF64] pb-10 col-span-2">
                                        <Box background='#FFFFFF32' className="max-w-max h-max p-2 flex justify-center items-center">
                                            <MdEmail size={25} color="#FFF" />
                                        </Box>

                                        <Box className="flex flex-col gap-2">
                                            <Text as='h3' color='#FFF' textTransform='uppercase' fontSize='medium'>E-MAIL</Text>
                                            <Text as='p' color='#FFFFFF64' fontWeight='light' >email@mariniconstrutora.com.br</Text>
                                        </Box>
                                    </Box>

                                    <Box className="flex border-b border-[#FFFFFF64] pb-8 col-span-2 gap-8 md:gap-0 md:justify-between mt-8">
                                        <Box className="flex flex-col md:flex-row gap-9">
                                            <Box background='#FFFFFF32' className="max-w-max h-max p-2 flex justify-center items-center">
                                                <BiPhone size={25} color="#FFF" />
                                            </Box>

                                            <Box className="flex flex-col gap-2">
                                                <Text as='h3' color='#FFF' textTransform='uppercase' fontSize='medium'>Telefone</Text>
                                                <Text as='p' color='#FFFFFF64' fontWeight='light' >54 99999-9999</Text>
                                            </Box>
                                        </Box>

                                        <Box className="flex flex-col md:flex-row gap-9">
                                            <Box background='#FFFFFF32' className="max-w-max h-max p-2 flex justify-center items-center">
                                                <FaWhatsapp size={25} color="#FFF" />
                                            </Box>

                                            <Box className="flex flex-col gap-2">
                                                <Text as='h3' color='#FFF' textTransform='uppercase' fontSize='medium'>WHATSAPP</Text>
                                                <Text as='p' color='#FFFFFF64' fontWeight='light' >54 99999-9999</Text>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box className="flex gap-9 pb-6 col-span-2 mt-10">
                                        <Box background='#FFFFFF32' className="max-w-max h-max p-2 flex justify-center items-center">
                                            <BiMapPin size={25} color="#FFF" />
                                        </Box>

                                        <Box className="flex flex-col gap-2 max-w-[320px]">
                                            <Text as='h3' color='#FFF' textTransform='uppercase' fontSize='medium'>ENDEREÇO</Text>
                                            <Text as='p' color='#FFFFFF64' fontWeight='light' >R. Fernandes Viêira, 146 - Sala 03 - Cidade Alta, Bento Gonçalves</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                            <Box>
                                <ContactForm />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <footer>
                    <Box className="bg-black">
                        <Box maxWidth="1280px" marginInline="auto" paddingInline={{ base: 5, md: 10, xl: 0 }}>
                            <Box className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-6 items-center gap-6 lg:gap-0">
                                <Box className="flex gap-16 items-center">
                                    <Link to='/' reloadDocument>
                                        <Image src='images/lp/logo-marini.png' alt='Logo Marini' />
                                    </Link>

                                    <Link to='/terrace' reloadDocument>
                                        <Image src='images/lp/logo-terrace.png' alt='Logo Terrace' />
                                    </Link>
                                </Box>

                                <Box className="flex lg:hidden xl:flex justify-center">
                                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 text-[#606060]">Voltar ao topo <FaLongArrowAltUp color="#606060" /></button>
                                </Box>

                                <Box className="flex justify-between">
                                    <Box className="flex items-center gap-3">
                                        <Text as='span' size='sm' color='#606060'>Siga nas redes sociais:</Text>

                                        <Box className="flex items-center gap-3">
                                            <a target="_blank" href='https://www.instagram.com/mariniconstrucoes/'>
                                                <FaInstagram color='#FFF' />
                                            </a>

                                            <a target="_blank" href='https://www.facebook.com/mariniconstrucoes'>
                                                <FaFacebook color='#FFF' />
                                            </a>

                                            <a target="_blank" href='https://www.youtube.com/channel/UCNNFhpYk8jbn5fU_9kmbSMQ'>
                                                <FaYoutube color='#FFF' />
                                            </a>
                                        </Box>
                                    </Box>

                                    <Box className="flex items-center gap-3">
                                        <Text as='span' size='sm' color='#606060'>Design by:</Text>

                                        <Box>
                                            <a target="_blank" href='https://eaglesx.com'>
                                                <Image src='images/lp/eagles.png' alt='Logo da Eagles' />
                                            </a>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </footer>
            </Box>
            {isLoading && (
                <Box width={'100vw'} height='100vh' position='absolute' display='flex' flexDirection={'column'} justifyContent='center' alignItems='center' top='0' backgroundColor={'#000'}>
                    <Box className="rotate-animate">
                        <TerraceSimbolo xs="300px" sm="430px" />
                    </Box>
                    <Terrace xs="250px" sm="450px" />
                </Box>
            )}
        </Fragment>
    )
}