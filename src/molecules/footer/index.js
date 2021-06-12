import styled from "styled-components"
import { NavLink } from 'react-router-dom'
// static
import footerSvg from '../../assets/inkling-white.svg'
// Component
import { Anchor } from '../../atoms/anchor'
import { Picture } from '../../atoms/picture'
import { CallIcon, MailIcon } from '../../molecules/contactusicons'
import { Text } from '../../atoms/text'

const StyledContainer = styled.div`
background-color: var(--primary-dark-variant);
color: var(--primary-text);
`

const StyledFooterLogo = styled(Picture)`
width: 120px;

> * {
    width: 120px;
}

@media screen and (min-width: 768px) {
   width: 250px;

   > * {
       width: 250px;
   }
}

@media screen and (min-width: 992px) {
    width: 250px;

    > * {
        width: 250px;
    }
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    width: 300px;

   > * {
       width: 300px;
   }
}
`

const StyledNavLinkDiv = styled.div`
border-top: 1px solid var(--primary-lightest-variant);
border-bottom: 1px solid var(--primary-lightest-variant);

> a {
    font-size: 10px;
    font-family: 'Montserrat',sans-serif;
    text-transform: capitalize;
}

> a.active {
    text-decoration: underline;
}

@media screen and (min-width: 992px) {
    border-left: 1px solid var(--primary-lightest-variant);
    border-right: 1px solid var(--primary-lightest-variant);
    border-top: none;
    border-bottom: none;
    > a {
        padding-bottom: 0.5em;
    }

    > a:hover {
        text-decoration: none;
        color: var(--primary-lighter-variant);
    }
    
    > a.active {
        text-decoration: none;
        border-bottom: 1px solid var(--primary-lightest-variant);
    }
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) { 
    border-left: none;
    border-right: none;
    border-top: 1px solid var(--primary-lightest-variant);
    border-bottom: 1px solid var(--primary-lightest-variant);
}
`

const StyledAnchor = styled(Anchor)`
font-family: 'Montserrat',sans-serif;
font-size: 12px;
`

const StyledCopyrightText = styled(Text)`
text-align: center;
font-size: 10px;
color: var(--primary-lighter-variant);
vertical-align: middle;

&::first-letter {
    font-size: 15px;
}
`

export const Footer = props => {
    return <StyledContainer className="col-12 d-flex column align-center r-g-2 py-2 pt-xmd-4 pb-xmd-1">
        <div className="d-flex column xmd-row ipp-column align-center center g-2 c-g-xmd-1 c-g-ipp-2 c-g-tv-3 c-g-xlg-5 col-10 col-ipp-10 col-xmd-11 col-lg-8 col-tv-7 col-xlg-6">
            <StyledFooterLogo className="col-12 col-xmd-5 col-ipp-12 col-lg-6">
                <img src={footerSvg} className="margin-center" alt="logo" title="Inkling" />
            </StyledFooterLogo>
            <StyledNavLinkDiv className="d-flex row xmd-align-center space-evenly c-g-md-1 col-12 col-md-10 col-xmd-8 col-ipp-10 col-lg-7 py-2 px-xmd-1 py-xmd-2 px-ipp-2 py-ipp-2">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/aboutus">About Us</NavLink>
                <NavLink to="/portfolio">Projects</NavLink>
                <NavLink to="/contactus">Contact Us</NavLink>
            </StyledNavLinkDiv>
            <div className="d-flex column ipp-row xmd-align-start ipp-align-center ipp-center g-1 c-g-ipp-2 col-12 col-ipp-12 col-xmd-none col-lg-4">
                <div className="d-flex align-center center c-g-1">
                    <MailIcon />
                    <StyledAnchor href="mailto:inklingbyeniak@gmail.com">inklingbyeniak@gmail.com</StyledAnchor>
                </div>
                <div className="d-flex align-center center c-g-1">
                    <CallIcon />
                    <div className="d-flex column">
                        <StyledAnchor href="tel:+917900897894">+91 79008-97894</StyledAnchor>
                        <StyledAnchor href="tel:+917900134918">+91 79001-34918</StyledAnchor>
                    </div>
                </div>
            </div>
        </div>
        <StyledCopyrightText className="d-inline-block col-8 self-end">&#169; Inkling is a product of Eniak and designs are copyright property of the company</StyledCopyrightText>
    </StyledContainer>
}