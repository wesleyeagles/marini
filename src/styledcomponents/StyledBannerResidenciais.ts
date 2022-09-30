import { Box } from '@chakra-ui/react'
import styled from 'styled-components'

export const StyledBannerResidenciais = styled(Box)`
    background-image: url(images/banner-residenciais.png);
    display: flex;
    align-items: center;
    height: 633px;
    background-size: cover;
    background-position: center;
    

    @media screen and (max-width: 1556px) {
        height: 400px;
    }
`