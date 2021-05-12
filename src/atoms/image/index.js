import styled from "styled-components"

const StyledImage = styled.img`
width: ${props => props.width || "100%"};
height: ${props => props.height || 'auto'};
`

export const Image = props => {
    return <StyledImage {...props} src={props.src} alt={props.alt} />
}