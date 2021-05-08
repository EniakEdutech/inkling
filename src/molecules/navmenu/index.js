import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
// Components
import { Hamburger } from '../../atoms/hamburger'
// static
import logo from '../../assets/inkling.png'

const StyledNav = styled.nav`
top: 0;
left: 0;
right: 0;
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

const StyledLogo = styled.img`
height: auto;
width: 120px;
margin: 8px 0;
align-self: flex-start;

@media screen and (min-width: 768px) {
    width: 160px
    margin: 0;
    align-self: center;
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
        border-bottom: 1px solid var(--primary-dark-variant);
    }    
}
`

export const NavMenu = props => {
    const [show, setShow] = useState(false)
    return <StyledNav className="fixed">
        <StyledParentDiv className="flex column space-between align-center margin-center md-row">
            <StyledLogo src={logo} alt="logo" title="Inkling" />
            <StylesNavigationItems className="column md-row w-100 w-md-unset" toggleShow={show}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/aboutus">About Us</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contactus">Contact Us</NavLink>
            </StylesNavigationItems>
            {/* TODO: animate hamburger icon and toggle between X and - on click */}
            <Hamburger click={() => setShow(!show)} />
        </StyledParentDiv>
    </StyledNav>
}