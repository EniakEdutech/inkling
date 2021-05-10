import styled from "styled-components"

const StyledH3 = styled.h3`
font-size: 25px;
font-family: 'Work Sans', sans-serif;
font-weight: 300;
letter-spacing: 2px;

@media (min-width: 768px) {
    font-size: 30px;
}

@media (min-width: 1200px) {
    font-size: 26px;
}
`

export const Heading2 = props => {
    return <StyledH3 {...props}>{props.children}</StyledH3>
}