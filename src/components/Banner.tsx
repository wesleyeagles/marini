import { Box, useDisclosure } from "@chakra-ui/react";
import { StyledBanner } from "../styledcomponents/StyledBanner";

import { Seeding } from 'tabler-icons-react';
import { StyledH2, StyledP, StyledSmall, StyledStrong } from "../styledcomponents/Typograph";
import StyledButton from "../styledcomponents/Button";

import { HiOutlineArrowRight } from 'react-icons/hi'
import { ContactModal } from "./ContactModal";





export function Banner() {
    const { isOpen, onOpen, onClose } = useDisclosure()



    return (
        <StyledBanner>
            <Box className="banner__image" w={{sm: '100%', md: '40%', lg:'50%'}}>
                <Box display='flex' flexDirection='column' justifyContent='center' borderRadius={{sm: '10px', md: '0'}} alignItems='center' position='absolute' left={{sm: '20px', md: 'auto'}} right={{md: '0'}} bottom={{sm: '-60px', md: '0'}} w={{sm: '170px', md: '215px'}} h={{sm: '120px', md: '159px'}} bg='#FFF'>
                    <Box display='flex' justifyContent='center' alignItems='center' w='50px' h='55px' bg='#5686BF10' borderRadius='5px'>
                    <Seeding color="#3E5481" size={35}/>
                    </Box>
                    <StyledSmall color="#606060" textAlign='center' margin="6px">
                        Modelo de construção <StyledStrong>sustentável</StyledStrong> e limpo.
                    </StyledSmall>
                </Box>
            </Box>
            <Box className="banner_gradient" w={{sm: '100%', md: '60%', lg:'50%'}} h='100%'>
                <StyledH2 w={{xl: '420px'}} white='true'>
                    Beleza, tecnologia e sustentabilidade
                </StyledH2>
                <StyledP w={{lg: '390px', xl: '450px'}} marginTop='40px' marginBottom='56px'>
                    Nossos empreendimentos além de encantar com sua beleza, possuem características modernas com a tecnologia a favor da qualidade de vida, e também se preocupam com a sustentabilidade e o meio ambiente.
                </StyledP>
                <StyledButton onClick={onOpen} transparent='true' rightIcon={<HiOutlineArrowRight size={19}/>}>
                    Entrar em contato
                </StyledButton>
            </Box>

            <ContactModal Open={onOpen} Close={onClose} isModalOpen={isOpen}/>
        </StyledBanner>
    )
}