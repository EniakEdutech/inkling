// Use the below link to create a responsive and reactive hamburger icon
// https://javascript.plainenglish.io/create-your-own-hamburger-menu-using-react-hooks-typescript-and-styled-components-4b2797c4d193

import styled, { css } from 'styled-components'

const StyledHamburger = styled.div`
top: 30px;
right: 10%;
transition: .25s ease-in-out;

${props => props.show && css`
top: 35px;
`}

@media screen and (min-width: 768px) {
    display: none;
}
`

const StyledHamburgerLine = styled.div`
height: 1px;
background-color: var(--primary-light-variant);
margin-bottom: 4px;
width: 25px;
opacity: 1;
-webkit-transform: rotate(0deg);
-moz-transform: rotate(0deg);
-o-transform: rotate(0deg);
transform: rotate(0deg);
-webkit-transition: .25s ease-in-out;
-moz-transition: .25s ease-in-out;
-o-transition: .25s ease-in-out;
transition: .25s ease-in-out;

${props => props.show && css`
margin-bottom: 0px;
&:nth-child(1) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

&:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

&:nth-child(3) {
    opacity: 0;
}
`}
`

export const Hamburger = props => {
    return <StyledHamburger className="fixed" onClick={props.click} show={props.show} >
        <StyledHamburgerLine show={props.show}></StyledHamburgerLine>
        <StyledHamburgerLine show={props.show}></StyledHamburgerLine>
        <StyledHamburgerLine show={props.show}></StyledHamburgerLine>
    </StyledHamburger>
}