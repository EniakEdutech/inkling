import styled from "styled-components"

const StyledH5 = styled.h5`
font-size: 16px;

@media (min-width: 768px) {
    font-size: 21px;
}

@media (min-width: 1200px) {
    font-size: 19px;
}
`

export const Heading4 = props => {
    return <StyledH5 {...props}>{props.children}</StyledH5>
}