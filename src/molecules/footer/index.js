import styled from "styled-components"
import { NavLink } from 'react-router-dom'
// static
import footerSvg from '../../assets/inkling-white.svg'
// Component
// import { Image } from '../../atoms/image'
import { ImportantText } from '../../atoms/importantText'
import { Picture } from '../../atoms/picture'

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

const StyledImportantText = styled(ImportantText)`
font-size: 6px;
left: 0;
bottom: 6px;

@media screen and (min-width: 768px) {
    font-size: 8px;
}

@media screen and (min-width: 992px) {
    font-size: 10px;
    left: 0;
    bottom: 10px;
}
`

const StyledNavLinkDiv = styled.div`
border-left: 1px solid var(--primary-lightest-variant);

> a {
    font-size: 12px;
    margin-bottom: 1em;
}

> a.active {
    text-decoration: underline;
}

@media screen and (min-width: 768px) {
    > a {
        font-size: 14px;
        margin-bottom: 0;
    }

    > a:hover {
        text-decoration: none;
        color: var(--primary-lighter-variant);
    }
    
    > a.active {
        text-decoration: none;
        padding-bottom: 0.5em;
        border-bottom: 1px solid var(--primary-lightest-variant);
    }
}
`

const CircleDiv = styled.div`
display: none;

@media screen and (min-width: 768px) {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: var(--primary-lightest-variant);
    margin-left: 2em;
    margin-right: 2em;
}    
`

export const Footer = props => {

    return <StyledContainer className="w-100 flex center">
        <div className="flex align-center center c-g-1 w-lg-80 w-xlg-50 py-md-2">
            <div className="relative">
                <StyledFooterLogo>
                    <img src={footerSvg} alt="logo" title="Inkling" />
                </StyledFooterLogo>
                <StyledImportantText className="absolute">By ENIAK EDUTECH PVT LTD</StyledImportantText>
            </div>
            <StyledNavLinkDiv className="flex column md-row md-align-center pl-2 py-md-2 r-g-md-2">
                <NavLink to="/" exact>Home</NavLink>
                <CircleDiv />
                <NavLink to="/aboutus">About Us</NavLink>
                <CircleDiv />
                <NavLink to="/portfolio">Portfolio</NavLink>
                <CircleDiv />
                <NavLink to="/contactus">Contact Us</NavLink>
            </StyledNavLinkDiv>
        </div>
    </StyledContainer>
}