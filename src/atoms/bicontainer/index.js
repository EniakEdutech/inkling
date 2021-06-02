import styled from "styled-components"

const StyledDiv = styled.div`
background-image: url(${props => props.image + '?tr=500'});
background-size: ${props => props.size || 'contain'};
background-position: ${props => props.position || 'center'};

@media screen and (min-width:992px) {
    background-image: url(${props => props.desImage + '?tr=w-1000' || props.image + '?tr=w-500'});
    background-size: ${props => props.desSize || props.size};
    background-position: ${props => props.desPosition || props.position};
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    background-image: url(${props => props.image + '?tr=w-700'});
    background-size: ${props => props.size || 'contain'};
    background-position: ${props => props.position || 'center'};
}
`

export const BIContainer = props => <StyledDiv {...props} className={`col-12 col-xlg-8 xlg-margin-center ${props.className}`}>
    {props.children}
</StyledDiv>