import styled from 'styled-components'

const StyledH4 = styled.h4`
font-size: 17px;

@media (min-width: 768px) {
    font-size: 25px;
}

@media screen and (min-width: 992px) {
    font-size: 21px;
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    font-size: 25px;
}

@media (min-width: 1200px) {
    font-size: 22px;
}
`

export const Heading3 = props => {
    return <StyledH4 {...props}>{props.children}</StyledH4>
}