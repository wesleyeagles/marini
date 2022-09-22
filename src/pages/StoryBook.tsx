import { Box, Stack } from "@chakra-ui/react";
import StyledButton from "../styledcomponents/Button";

import { AiFillMail } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { StyledH1, StyledP, StyledStrong } from "../styledcomponents/Typograph";

export function StoryBook() {
    return (
        <Box w='100%' h='100vh' bg='black' paddingLeft={6} paddingTop={6}>
        <StyledH1>
        Especialistas em construções de alta qualidade
        </StyledH1>
        <StyledP>
        O que construímos vai muito além de concreto, <StyledStrong>construímos confiança</StyledStrong> com nossos clientes.
        </StyledP>
        <Box display='flex' gap={6} marginTop={6}>
            <StyledButton>
                Default
            </StyledButton>
            <StyledButton primary>
                Primary
            </StyledButton>
            <StyledButton outlined>
                Outlined
            </StyledButton>

            <StyledButton white>
                Outlined White
            </StyledButton>
            
            <StyledButton transparent rightIcon={<AiOutlineArrowRight size={18}/>} >
            Transparent
            </StyledButton>

            <Stack direction='row' spacing={4}>
            <StyledButton leftIcon={<AiFillMail size={18}/>} >
            Icon Left
            </StyledButton>
            <StyledButton primary rightIcon={<AiOutlineArrowRight size={18}/>} >
            Icon Right
            </StyledButton>
            </Stack>
        </Box>
        </Box>
    )
}