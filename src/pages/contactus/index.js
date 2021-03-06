import styled from "styled-components"
// special component
import ScrollToTopOnMount from '../../atoms/scrollToTop'
// Component
import { Heading1 } from '../../atoms/heading1'
import { Button } from "../../atoms/button"
import { Fragment } from "react"

const StyledContainer = styled.div`
min-height: var(--small-screen-navmenu-100vh);
background-image: url("https://ik.imagekit.io/bizwem110d/inkling/Projects_web_FvBoVS1BU.png");
background-size: cover;
background-position: top;
@media screen and (min-width: 768px) {
    min-height: var(--tablet-navmenu-100vh);
}

@media screen and (min-width: 2560x) {
    min-height: var(--extra-large-navmenu-100vh);
}
`

const SectionHeading1 = styled(Heading1)`
position: relative;
text-transform: uppercase;
font-weight: 700;

&:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 50%;
    border-bottom: 2px solid var(--primary-dark-variant);
}
`

const StyledInput = styled.input`
padding: 1em;
border: none;
border-bottom: 1px solid var(--primary-light-variant);
font-family: 'Work Sans', sans-serif;
`

const StyledTextArea = styled.textarea`
padding: 1em;
border: none;
border-bottom: 1px solid var(--primary-light-variant);
font-family: 'Work Sans', sans-serif;
`

export const ContactUs = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <StyledContainer className="d-flex center align-center">
            <div className="d-flex column start align-center r-g-2 col-10 col-md-8 col-xmd-10 col-ipp-8 col-lg-8 col-tv-6 col-xlg-4 p-1" style={{backgroundColor: "white"}}>
                <SectionHeading1 className="self-align-start pb-half">Contact Us</SectionHeading1>
                <div className="d-flex column xmd-row r-g-2 c-g-1 col-12">
                    <StyledInput className="col-12" placeholder="Name" type="text" />
                    <StyledInput className="col-12" placeholder="Email" type="email" />
                </div>
                <StyledTextArea className="col-12" rows="2" placeholder="Write to us" />
                <Button className="self-align-start py-1 px-3" primary>Submit</Button>
            </div>
        </StyledContainer>
    </Fragment>
}