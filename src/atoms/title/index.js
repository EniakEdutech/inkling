import styled from 'styled-components'

const StyledH1 = styled.h1`
font-size: 20px;
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;

@media (min-width: 768px) {
    font-size: 35px;
    letter-spacing: 2px;
}

@media (min-width: 1200px) {
    font-size: 45px;
}
`

export const Title = props => {
    return <StyledH1 {...props}>{props.children}</StyledH1>
}