import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

import "./styles/vale-dos-vinhedos.scss";
import { Fragment, useEffect, useState } from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdNordicWalking } from "react-icons/md";
import { FaTheaterMasks } from "react-icons/fa";
import { TbTrees } from "react-icons/tb";
import { FaRoute } from "react-icons/fa";

import Terrace from "./icons/Terrace";
import TerraceSimbolo from "./icons/TerraceSimbolo";

export default function VilaDosVinhedos() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)

        return () => {
            setIsLoading(true);
        }
    }, [])

    return (
        <Fragment>
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
                            <GridItem colSpan={{md: 2, lg: 'auto'}}>
                                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' border='1px solid #FFFFFF32' padding={{ sm: 8, md: 10, xl: 10 }} gap={4}>
                                    <Box backgroundColor='#DADADA14' padding={4}>
                                        <GiForkKnifeSpoon color='#FFF' size={30} />
                                    </Box>
                                    <Text as='span' color='#FFF' textAlign='center'>Diversidade gastronômica</Text>
                                </Box>
                            </GridItem>

                            <GridItem colSpan={{md: 2, lg: 'auto'}}>
                                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' border='1px solid #FFFFFF32' padding={{ sm: 8, md: 10, xl: 10 }} gap={4}>
                                    <Box backgroundColor='#DADADA14' padding={4}>
                                        <FaRoute color='#FFF' size={30} />
                                    </Box>
                                    <Text maxWidth={{ lg: '150px', xl: 'auto' }} as='span' color='#FFF' textAlign='center'>Tours e degustações</Text>
                                </Box>
                            </GridItem>

                            <GridItem colSpan={{md: 2, lg: 'auto'}}>
                                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' border='1px solid #FFFFFF32' padding={{ sm: 8, md: 10, xl: 10 }} gap={4}>
                                    <Box backgroundColor='#DADADA14' padding={4}>
                                        <MdNordicWalking color='#FFF' size={30} />
                                    </Box>
                                    <Text maxWidth={{ sm: '150px', md: 'auto'}} as='span' color='#FFF' textAlign='center'>Passeios por trilhas históricas</Text>
                                </Box>
                            </GridItem>

                            <GridItem  gridColumn={{ md: 'span 3 / span 3', lg: 'auto', xl: 'span 1 / span 1' }}>
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
            </Box>
            {isLoading && (
                <Box width={'100vw'} height='100vh' position='absolute' display='flex' flexDirection={'column'} justifyContent='center' alignItems='center' top='0' backgroundColor={'#000'}>
                    <Box className="rotate-animate">
                        <TerraceSimbolo xs="300px" sm="450px" />
                    </Box>
                    <Terrace xs="250px" sm="450px" />
                </Box>
            )}
        </Fragment>
    )
}