import styled from "styled-components"

const StyledAnchor = styled.a`
font-family: 'Poppins', sans-serif;
`

export const Anchor = props => {
    return <StyledAnchor href={props.link}>{props.children}</StyledAnchor>
}