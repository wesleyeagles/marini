import styled, { css } from 'styled-components'
import  { Heading, Text } from '@chakra-ui/react'

type Props = {
    semibold?: boolean
    marginLeft?: string
    display?: string
    margin?: string
    width?: string
    mdWidth?: string
    textAlign?: string
}

export const StyledH1 = styled(Heading)`
   color: #FFF;
   font-size: 3.5rem!important;
   font-weight: 500!important;

   ${props => props.secondary && css`
      font-size: 3rem!important;
      font-weight: 400!important;
   `}

   @media screen and (max-width: 768px) {
      font-size: 2.5rem!important;
   }
`

export const StyledH2 = styled(Heading)`
   color: #252525;
   font-size: 2.5rem!important;
   font-weight: 500!important;

   ${props => props.white && css`
    color: #FFF;
   `}

   @media screen and (max-width: 768px) {
      font-size: 2.3rem!important;
   }
`

export const StyledH3 = styled(Heading)`
   color: #252525;
   font-weight: 500;
   font-size: 2rem;
`

export const StyledP = styled(Text)`
   color: #F0F0F0!important;
   font-size: 1.063rem!important;
   font-weight: 300!important;

   margin-top: ${props => props.marginTop? props.marginTop : '0px'};
   margin-bottom: ${props => props.marginBottom? props.marginBottom : '0px'};
   margin-left: ${props => props.marginLeft? props.marginLeft : '0px'};
   margin-right: ${props => props.marginRight? props.marginRight : '0px'};

   ${props => props.black && css`
    color: #606060!important;
   `}

`

export const StyledStrong = styled.strong <Props>`
   font-weight: 700!important;
   color: ${props => props.color? props.color : '#000'};
   margin: ${props => props.margin? props.margin : '0px'};

   ${props => props.semibold && css`
    font-weight: 500!important;
   `}
`

export const StyledSmall = styled.small <Props>`
   display: ${props => props.display? props.display : 'auto'};
   width: ${props => props.width? props.width : '100%'};
   font-weight: 300!important;
   font-size: 0.938rem!important;
   color: ${props => props.color? props.color : '#FFF'};
   margin: ${props => props.margin? props.margin : '0px'};
   text-align: ${props => props.textAlign? props.textAlign : 'start'};

   @media screen and (max-width: 960px) {
      width: ${props => props.mdWidth? props.mdWidth : '100%'};
   }
`

export const NavLink = styled(Text)`
   font-size: 0.875rem;
   font-weight: 500;
   color: #252525;
   cursor: pointer;

   @media screen and (max-width: 960px) {
      font-size: 1.2rem;
   }

`

export const StyledSpan = styled.span`
   display: block;
   font-weight: 500;
   font-size: 18px;
   color: #252525;
`
