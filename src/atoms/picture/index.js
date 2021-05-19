import styled from "styled-components"

const StyledPicture = styled.picture`
width: 100%;
height: 100%;

> * {
    height: 100%;
    display: block;
    object-fit: cover;
}
`

export const Picture = props => {
    return <StyledPicture {...props}>
        {props.children}
    </StyledPicture>
}