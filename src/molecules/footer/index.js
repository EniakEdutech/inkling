// import { useEffect } from 'react'
import styled from "styled-components"
// static
import footerLogo from '../../assets/inkling_footer.png'
import footerLogox2 from '../../assets/inkling_footerx2.png'
// Component
// import { Image } from '../../atoms/image'
import { ImportantText } from '../../atoms/importantText'
import { NavLink } from 'react-router-dom'

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

const StyledFooterLogo = styled.picture`
width: 100px;

> * {
    width: 100px;
}

@media screen and (min-width: 768px) {
   width: 140px;

   > * {
       width: 140px;
   }
}

@media screen and (min-width: 992px) {
    width: 170px;

    > * {
        width: 170px;
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
border-left: 1px solid var(--primary-light-variant);
padding-left: 40px;
gap: 10px;

> a {
    font-size: 12px;
}

> a.active {
    padding-bottom: 2px;
    border-bottom: 1px solid var(--primary-lightest-variant);
}

@media screen and (min-width: 768px) {
    padding-left: 20px;
    > a {
        font-size: 14px;
    }
}

@media screen and (min-width: 1200px) {
    gap: 30px;
}
`

// position: ${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] === 'contactus' ? 'fixed' : 'sticky'};

export const Footer = props => {

    // useEffect(() => {
    //     console.log(props.path);
    //     console.log(window.document.body.offsetHeight)
    // }, [props.path]);

    return <StyledContainer className="w-100 flex center">
        <div className="flex align-center center c-g-1 w-lg-80 w-xlg-50">
            <div className="relative">
                <StyledFooterLogo>
                    <source srcSet={footerLogo} media="min-width: 768px)"></source>
                    <source srcSet={footerLogox2} media="(min-width: 992px)"></source>
                    <img src={footerLogo} alt="logo" title="Inkling" />
                </StyledFooterLogo>
                <StyledImportantText className="absolute">By ENIAK EDUTECH PVT LTD</StyledImportantText>
            </div>
            <StyledNavLinkDiv className="flex column md-row">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/aboutus">About Us</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contactus">Contact Us</NavLink>
            </StyledNavLinkDiv>
        </div>
    </StyledContainer>
}