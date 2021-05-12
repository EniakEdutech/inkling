import styled from 'styled-components'

const StyledH4 = styled.h4`
font-size: 17px;

@media (min-width: 768px) {
    font-size: 25px;
}

@media (min-width: 1200px) {
    font-size: 22px;
}
`

export const Heading3 = props => {
    return <StyledH4 {...props}>{props.children}</StyledH4>
}