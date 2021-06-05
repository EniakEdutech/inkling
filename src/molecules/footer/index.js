import styled from "styled-components"
import { NavLink } from 'react-router-dom'
// static
import footerSvg from '../../assets/inkling-white.svg'
// Component
import { Anchor } from '../../atoms/anchor'
import { Picture } from '../../atoms/picture'
import { CallIcon, MailIcon } from '../../molecules/contactusicons'

const StyledContainer = styled.div`
padding: 2em 0;
background-color: var(--primary-dark-variant);
color: var(--primary-text);

@media screen and (min-width: 992px) {
    padding: 1em 0;
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    padding: 2em 0;
}

`

// const StyledParent = styled.div``

const StyledFooterLogo = styled(Picture)`
width: 120px;

> * {
    width: 120px;
}

@media screen and (min-width: 768px) {
   width: 160px;

   > * {
       width: 160px;
   }
}

@media screen and (min-width: 992px) {
    width: 200px;

    > * {
        width: 200px;
    }
}
`

const StyledNavLinkDiv = styled.div`
border-top: 1px solid var(--primary-lightest-variant);
border-bottom: 1px solid var(--primary-lightest-variant);

> a {
    font-size: 12px;
    font-family: 'Poppins',sans-serif;
    text-transform: uppercase;
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
        font-size: 13px;
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
`

export const Footer = props => {

    return <StyledContainer className="col-12 d-flex center">
        <div className="d-flex column xmd-row align-center center g-2 col-10 col-xmd-11 col-lg-10 col-xlg-6 py-xmd-2">
            <StyledFooterLogo className="col-12 col-xmd-3 col-xlg-4">
                <img src={footerSvg} alt="logo" title="Inkling" />
            </StyledFooterLogo>
            <StyledNavLinkDiv className="d-flex row xmd-align-center space-evenly xlg-space-around md-center c-g-md-1 col-12 col-xmd-6 col-xlg-4 py-2 px-xmd-none py-xmd-none">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/aboutus">About Us</NavLink>
                <NavLink to="/portfolio">Projects</NavLink>
                <NavLink to="/contactus">Contact Us</NavLink>
            </StyledNavLinkDiv>
            <div className="d-flex column xmd-align-start g-1 col-12 col-xmd-3 col-xlg-4">
                <div className="d-flex align-center center c-g-1">
                    <MailIcon />
                    <Anchor href="mailto:inklingbyeniak@gmail.com">inklingbyeniak@gmail.com</Anchor>
                </div>
                <div className="d-flex align-center center c-g-1">
                    <CallIcon />
                    <div className="d-flex column">
                        <Anchor href="tel:+917900897894">+91 79008-97894</Anchor>
                        <Anchor href="tel:+917900134918">+91 79001-34918</Anchor>
                    </div>
                </div>
            </div>
        </div>
    </StyledContainer>
}