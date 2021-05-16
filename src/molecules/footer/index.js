import { useEffect } from 'react'
import styled from "styled-components"

const StyledContainer = styled.div`
position: fixed;
bottom: 0;
padding-top: 5px;
background-color: var(--primary-dark-variant);
color: var(--primary-text);
`

const StyledParent = styled.div`

`

// position: ${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] === 'contactus' ? 'fixed' : 'sticky'};

export const Footer = props => {

    useEffect(() => {
        console.log(props.path);
        console.log(window.document.body.offsetHeight)
    }, [props.path]);
    
    return <StyledContainer className="w-100 flex center">
        <div className="flex align-center center w-lg-80 w-xlg-50">
            Footer
        </div>
    </StyledContainer>
}