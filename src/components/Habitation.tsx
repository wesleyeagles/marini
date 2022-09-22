import { Box, Container } from "@chakra-ui/react";
import { StyledHabitation } from "../styledcomponents/StyledHabitation";
import { StyledH2, StyledP, StyledSmall, StyledStrong } from "../styledcomponents/Typograph";

import { BrandFacebook } from 'tabler-icons-react';
import { BrandInstagram } from 'tabler-icons-react';
import { Gift } from 'tabler-icons-react';



export function Habitation() {
    return (
        <StyledHabitation>
            <Container maxW={{sm: '93%', md: '738px', lg: '960px', xl: '1247px', '2xl' : '1247px'}}>
            <Box display='flex' flexDirection={{sm: 'column', lg: 'row'}} justifyContent={{lg: 'space-between'}}>
                <Box>
                    <StyledH2 w={{lg: '510px'}}>
                        Proporcionar habitação e bem estar
                    </StyledH2>

                    <StyledP marginTop='40px' marginBottom='32px' w={{lg: '430px'}} black>
                        Acreditamos que as pessoas e sua interação fazem o seu e o nosso negócio. Esse é nosso jeito de fazer, com tecnologia, funcionalidade, simplicidade e inovação.
                    </StyledP>

                    <StyledP w={{lg: '430px'}} black>
                        Nossa colaboração consiste em proporcionar <StyledStrong color="#3E5481">habitação e bem estar.</StyledStrong>
                    </StyledP>

                    <Box marginTop='56px' display='flex'>
                        <a href="https://www.facebook.com/mariniconstrucoes" target='_blank'>
                        <Box marginRight='8px' w='36px' h='36px' borderRadius='5px' border='solid 2px #5686BF30' display='flex' justifyContent='center' alignItems='center'>
                            <BrandFacebook color='#3E5481'/>
                        </Box>
                        </a>

                        <a href="https://www.instagram.com/mariniconstrucoes/" target='_blank'>
                        <Box w='36px' h='36px' borderRadius='5px' border='solid 2px #5686BF30' display='flex' justifyContent='center' alignItems='center'>
                            <BrandInstagram color='#3E5481'/>
                        </Box>
                        </a>
                    </Box>
                </Box>

                <Box position='relative' marginTop={{sm: '60px', lg: '0'}}>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' borderRadius='4px' left='44px' top={{sm: '20px', lg: '-19px'}} paddingInline={{sm: '20px', md: '0'}} position='absolute' w={{sm: '143px', md: '173px'}} h={{sm: '120px', md: '159px'}} bg='#FFF' boxShadow='0px 4px 15px 0px #00000015'>
                        <Box display='flex' justifyContent='center' alignItems='center' borderRadius='5px' w='50px' h='50px' bg='#5686BF10'>
                            <Gift color='#3E5481' size={33}/>
                        </Box>
                        <StyledSmall margin="8px" textAlign='center' color='#606060'>
                            Viva o que você sempre sonhou
                        </StyledSmall>
                    </Box>
                    <img src="/images/habitation-image.png" alt="" />
                </Box>
            </Box>
            </Container>
        </StyledHabitation>
    )
}