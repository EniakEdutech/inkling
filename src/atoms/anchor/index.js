import styled from "styled-components"

const StyledAnchor = styled.a`
font-family: 'Poppins', sans-serif;

&:hover {
    cursor: pointer;
}
`

export const Anchor = props => {
    return <StyledAnchor {...props}>{props.children}</StyledAnchor>
}