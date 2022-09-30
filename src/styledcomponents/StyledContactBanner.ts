import { Box } from '@chakra-ui/react'
import styled from 'styled-components'

export const StyledContactBanner = styled(Box)`
    width: 100%;
    height: 602px;
    background-size: cover;
    background-position: center;
    background-image: url(/images/contact-banner.png);
    display: flex;
    align-items: center;

    @media screen and (max-width: 1556px) {
        height: 402px;
    }
`