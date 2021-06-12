import styled from "styled-components"

const StyledH6 = styled.h6`
font-size: 12px;
`

export const Heading6 = props => {
    return <StyledH6 {...props}>{props.children}</StyledH6>
}