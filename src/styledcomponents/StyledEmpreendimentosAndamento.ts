import { Box } from '@chakra-ui/react'
import styled from 'styled-components'

export const StyledEmpreendimentosAndamento = styled(Box)`
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

    @media screen and (max-width: 968px) {
        .andamento__slide {
            width: 100%;
            justify-content: center;
            display: flex;

        }

        .swiper-button-next {
        background-image: url(images/arrow-right.svg)!important;
        background-repeat: no-repeat;
        background-position: center;
        right: 10px;
    }

    .swiper-button-prev {
        background-image: url(images/arrow-right.svg)!important;
        transform: rotate(180deg);
        background-repeat: no-repeat;
        background-position: center;
        left: 10px;
    }

    }

    @media screen and (max-width: 540px) {
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
    }

    
`