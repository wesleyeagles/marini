import { Box } from '@chakra-ui/react'
import styled from 'styled-components'

export const StyledFooter = styled(Box)`
    background-color: #0F0F0F;
    height: 446px;
    width: 100%;
    padding-top: 74px;
    padding-bottom: 35px;

    @media screen and (max-width: 960px) {
        height: 720px;
    }

    @media screen and (max-width: 768px) {
        height: max-content;
    }
`