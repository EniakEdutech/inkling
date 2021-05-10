import styled from "styled-components"

const StyledImage = styled.img`
width: ${props => props.width || "100%"};
height: ${props => props.height || 'auto'};
`

export const Image = props => {
    return <StyledImage {...props} src="https://ik.imagekit.io/bizwem110d/default-image.jpg" alt="test image" />
}