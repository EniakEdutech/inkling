import styled from "styled-components"

const StyledContainer = styled.div`
min-height: calc(100vh - 70.93px);
background-image: url(${props => props.background});
background-size: cover;
background-attachment: fixed;
background-position: center;
@media screen and (min-width: 768px) {
    min-height: calc(100vh - 83px);
}
@media screen and (min-width: 2560x) {
    min-height: calc(100vh - 88.98px);
}
`

export const ContactUs = props => {
    return <StyledContainer background="https://ik.imagekit.io/bizwem110d/inkling/home-background_HK4W1i-Jg.png"></StyledContainer>
}