import { Box } from '@chakra-ui/react'
import styled from 'styled-components'

export const StyledHeader = styled(Box)`
    .swiper-button-next {
        background-image: url(images/arrow-white-right.svg)!important;
        background-repeat: no-repeat;
        background-position: center;
        right: 10px;
    }

    .swiper-button-prev {
        background-image: url(images/arrow-white-right.svg)!important;
        transform: rotate(180deg);
        background-repeat: no-repeat;
        background-position: center;
        left: 10px;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        content: '';
    }
`