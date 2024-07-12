import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

import "./styles/vale-dos-vinhedos.scss";
import Terrace from "./icons/Terrace";

export default function VilaDosVinhedos() {
    return (
        <Box className="vale-dos-vinhedos">
            <Navbar />
            <header>
                    <Grid templateColumns={"repeat(12, 1fr)"} gridTemplateRows={"repeat(12, 1fr)"}>
                        <GridItem colSpan={{sm: 12, md: 7, lg: 7,  xl: 8}} rowSpan={12} backgroundSize='cover' backgroundPosition={{sm: 'center center', md: 'auto'}} backgroundImage={"/images/lp/bela-vista-da-regiao-de-bento-goncalves.webp"} backgroundRepeat='no-repeat' paddingBlock={{sm: 24, md: 0}}>
                            <Box display='flex' flexDirection='column' justifyContent='center' height='100%' paddingLeft={{ sm: '2rem', lg: '3rem', xl: '10rem', '2xl': '13rem'}} w='100%'>
                                <Text as='h2' color='white' fontFamily='Helvetica' textTransform='uppercase' fontWeight='bold' fontSize={{ sm: 'md', lg: 'lg'}}>Vale dos vinhedos</Text>
                                <Text as='h1' lineHeight={1.2} width={{sm: '24rem', md: '25rem', lg: '30rem', xl: '40rem'}} marginTop={'1.5rem'} marginBottom={'2rem'} color='white' fontFamily='Helvetica' textTransform='uppercase' fontWeight='medium' fontSize={{ sm: '3xl', lg: '4xl', xl: '5xl'}}>Invista na região mais bela do brasil</Text>
                                <Text width={{sm: '22rem', md: '22rem', lg:'28rem'}} as='p' color="white" fontSize={{md: 'sm', lg: 'md'}}>Aproveite o potencial de crescimento e a qualidade de vida que <Text as='strong'>Bento Gonçalves</Text> oferece.</Text>
                                <Box display='flex' marginTop={{sm: '2rem', lg: '4rem'}} gap={{sm: 4, lg: 8}}>
                                    <Button fontSize={{md: 'sm', lg: 'md'}} backgroundColor='#860A10' color='#FFF' borderRadius='none' padding={{md: 4, lg: 8}} _hover={{ backgroundColor: '#860A1090' }}>Conheça a região</Button>
                                    <Button fontSize={{md: 'sm', lg: 'md'}} backgroundColor='#FFF' color='#000' borderRadius='none' padding={{md: 4, lg: 8}}>Conheça a Terrace</Button>
                                </Box>
                            </Box>
                        </GridItem>
                        
                        <GridItem display={{sm: 'none', md: 'block'}} colSpan={{sm: 0, md: 5, lg: 5, xl: 4}} rowSpan={{md: 11, lg: 10, xl: 11}}>
                            <Image width='100%' height='100%' objectFit='cover' src="/images/lp/vista-da-frente-do-predio-da-terrace.png" alt="Vista da frente do predio da Terrace" />
                        </GridItem>

                        <GridItem display={{sm: 'none', md: 'flex'}} justifyContent='center' alignItems='center' backgroundColor='#000' colSpan={{sm: 5, lg: 5, xl: 4}} rowSpan={{md: 1, lg: 2, xl: 1}}>
                            <Image width={{md: '120px', 'lg': '180px', 'xl': '120px', '2xl': '150px'}} src="/images/lp/logo-da-terrace.png" alt='Logo da Terrace' />
                        </GridItem>
                    </Grid>
            </header>
        </Box>
    )
}