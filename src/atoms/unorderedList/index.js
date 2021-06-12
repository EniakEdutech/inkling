import styled from "styled-components";

const StyledUl = styled.ul`
padding-inline-start: 20px;
list-style: ${props => props.liststyle || 'disk'}
`

export const UnorderedList = props => {
    return <StyledUl {...props}>{props.children}</StyledUl>
}