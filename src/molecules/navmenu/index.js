import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
// Components
import { Hamburger } from '../../atoms/hamburger'
// static
import logo2x from '../../assets/inkling.png'
import logo4x from '../../assets/inkling@2x.png'

const StyledNav = styled.nav`
position: sticky;
top: 0;
z-index: 100;
background-color: var(--primary-text);
box-shadow: 5px 0 10px 0px var(--primary-light-variant);
`

const StyledParentDiv = styled.div`
width: 90%;

@media screen and (min-width: 1900px) {
    width: 70%;
}

@media screen and (min-width:2560px) {
    width: 50%;
}
`

const StyledLogo = styled.picture`
margin: 8px 0;
align-self: flex-start;
height: auto;
width: 120px;

> * {
    height: auto;
    width: 120px;
}

@media screen and (min-width: 768px) {
    align-self: center;
    width: 160px;
    margin: 0;
    > * {
        width: 160px;
        margin: 0;
    }
}

@media screen and (min-width: 1900px) {
    width: 200px;
    > * {
        width: 200px;
    }
}
`
// TODO: add animations to open and closing of menu items on mobile
// const slideInMenuItems = keyframes`
// from {
//     display: none;
// }
// to {
//     display: flex;
// }
// `

// const slideOutMenuItems = keyframes`
// from {
//     display: flex;
// }
// to {
//     display: none;
// }
// `

const StylesNavigationItems = styled.div`
text-align: center;
${props => props.toggleShow ? css`
display: flex;
` : css`
display: none;
`}

>a {
    display: block;
    padding: 12px 0px;
    margin: 10px 0;
    font-family: 'Poppins',sans-serif;
}

>a.active {
    border-bottom: none;
    background-color: var(--primary);
    color: var(--primary-text);
}

@media screen and (min-width: 768px) {
    display: flex;
    >a {
        display: inline-block;
        margin: 25px 20px;
        padding: 5px 0px;
    }
    >a.active:hover, >a:hover {
        text-decoration: none;
        color: var(--primary-light-variant);
    }
    >a.active {
        background-color: var(--primary-text);
        color: var(--primary-dark-variant);
        position: relative;
    }
    >a.active:before {
        content: "";
        position: absolute;
        left: 30%;
        bottom: 0;
        height: 1px;
        width: 40%;
        border-bottom: 1px solid var(--primary-dark-variant);
    }
}
`

export const NavMenu = props => {
    const [show, setShow] = useState(false)
    return <StyledNav>
        <StyledParentDiv className="flex column space-between align-center margin-center md-row">
            <StyledLogo>
                <source srcSet={logo2x} media="(min-width: 768px)" ></source>
                <source srcSet={logo4x} media="(min-width: 1900px)" ></source>
                <img src={logo2x} alt="logo" title="Inkling" />
            </StyledLogo>
            <StylesNavigationItems className="column md-row w-100 w-md-unset" toggleShow={show}>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/aboutus">About Us</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contactus">Contact Us</NavLink>
            </StylesNavigationItems>
            <Hamburger click={() => setShow(!show)} show={show} />
        </StyledParentDiv>
    </StyledNav>
}