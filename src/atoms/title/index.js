import styled from 'styled-components'

const StyledH1 = styled.h1`
font-size: 40px;
font-family: 'Merriweather', 'Open Sans', 'Helvetica Neue', sans-serif;
letter-spacing: 5px;
text-transform: uppercase;

@media (min-width: 768px) {
    font-size: 50px;
}

@media (min-width: 1200px) {
    font-size: 45px;
}
`

export const Title = props => {
    return <StyledH1 {...props}>{props.children}</StyledH1>
}