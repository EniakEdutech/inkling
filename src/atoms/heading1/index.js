import styled from "styled-components"

const StyledH2 = styled.h2`
font-size: 30px;
font-family: 'Poppins', sans-serif;
font-weight: 400;

@media (min-width: 768px) {
    font-size: 35px;
}

@media (min-width: 1200px) {
    font-size: 32px;
}
`

export const Heading1 = props => {
    return <StyledH2 {...props}>{props.children}</StyledH2>
}