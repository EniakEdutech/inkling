import styled from "styled-components"

const StyledH6 = styled.h6`
font-size: 15px;

@media (min-width: 768px) {
    font-size: 17px;
}

@media (min-width: 1200px) {
    font-size: 15px;
}
`

export const Heading5 = props => {
    return <StyledH6 {...props}>{props.children}</StyledH6>
}