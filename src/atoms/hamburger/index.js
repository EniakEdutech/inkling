// Use the below link to create a responsive and reactive hamburger icon
// https://javascript.plainenglish.io/create-your-own-hamburger-menu-using-react-hooks-typescript-and-styled-components-4b2797c4d193

import styled from 'styled-components'

const StyledHamburger = styled.div`
top: 25px;
right: 10%;

@media screen and (min-width: 768px) {
    display: none;
}
`

const StyledHamburgerLine = styled.div`
height: 1px;
background-color: var(--primary-light-variant);
margin-bottom: 6px;
width: 25px;
`

export const Hamburger = props => {
    return <StyledHamburger className="fixed" onClick={props.click}>
        <StyledHamburgerLine></StyledHamburgerLine>
        <StyledHamburgerLine></StyledHamburgerLine>
        <StyledHamburgerLine></StyledHamburgerLine>
    </StyledHamburger>
}