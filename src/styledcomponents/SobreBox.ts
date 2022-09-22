import { Box } from '@chakra-ui/react'
import styled from 'styled-components'

export const SobreBox = styled(Box)`
    display: flex;
    justify-content: space-between;

    .sobre__slide {

        width: 100%!important;
        padding-inline: 10%;
    }

    .swiper-button-next {
        background-image: url(images/arrow-right.svg)!important;
        background-repeat: no-repeat;
        background-position: center;
        right: 0;
    }

    .swiper-button-prev {
        background-image: url(images/arrow-right.svg)!important;
        transform: rotate(180deg);
        background-repeat: no-repeat;
        background-position: center;
        left: 0;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        content: '';
    }

    .sobre__single {
        border: solid 1px #74747420;
        width: 384px;
        height: 227px;
        border-radius: 5px;
        padding-top: 26px;
        padding-left: 27px;
        padding-right: 48px;
        

        .sobre__icon {
            width: 45px;
            height: 45px;
            border-radius: 9999px;
            border: solid 2px #5686BF30;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .sobre__title {
            margin-top: 16px;
            margin-bottom: 8px;
        }
        
        @media screen and (max-width: 1280px) {
            width: 300px;
            height: 240px;
            padding-right: 24px;
        }

        @media screen and (max-width: 960px) {
            width: 100%;
        }
    }
`