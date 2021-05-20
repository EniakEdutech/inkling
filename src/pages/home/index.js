import { Fragment } from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom'
// components
import ScrollToTopOnMount from '../../atoms/scrollToTop'
import { Heading1 } from '../../atoms/heading1'
import { Heading3 } from '../../atoms/heading3'
import { Paragraph } from '../../atoms/paragraph'
import { Client } from "../../molecules/client"
import { Image } from "../../atoms/image"
import { HomeProject } from '../../organisms/homeproject'


const StyledDivContainer = styled.div`
min-height: var(--small-screen-navmenu-100vh);
background-image: url("https://ik.imagekit.io/bizwem110d/inkling/home-background_HK4W1i-Jg.png");
background-size: cover;

@media screen and (min-width: 768px) {
    min-height: var(--tablet-navmenu-100vh);
}

@media screen and (min-width: 2560x) {
    min-height: var(--extra-large-navmenu-100vh);
}
`

const StyledDivParent = styled.div`
background-color: var(--primary-dark-variant);
color: var(--primary-text);
box-shadow: 5px 5px 10px 0px var(--primary-light-variant);
border-radius: 10px;
@media screen and (min-width: 992px) {
    border-radius: 15px;
}
`

const StyledDivChild = styled.div`
border-left: 2px solid var(--primary-lightest-variant);
`

const StyledHeading1 = styled(Heading1)`
@media screen and (min-width: 992px) {
    font-size: 27px;
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    font-size: 35px;
}
`

const StyledHeading3 = styled(Heading3)`
font-weight: 300;

@media screen and (max-width: 767.98px) {
    font-size: 15px;
}
`

const StypedParagraph = styled(Paragraph)`
@media screen and (min-width: 1200px) {
    border-left: 2px solid var(--primary-dark-variant);
}
`

const WhatwedoHeading1 = styled(Heading1)`
text-transform: uppercase;

@media screen and (max-width: 1199.98px) {
    position: relative;
    padding-bottom: 10px;

    &:before {
        content: "";
        position: absolute;
        left: 0%;
        bottom: 0;
        height: 1px;
        width: 140%;
        border-bottom: 2px solid var(--primary-dark-variant);
    }
}

@media screen and (min-width: 1200px) {
    text-align: right;
}
`

const StyledClientsDiv = styled.div`
background-image: url('https://ik.imagekit.io/bizwem110d/inkling/Home_web_2_lSAOxGnC5.png');
background-size: contain;
background-position: center;

@media screen and (min-width: 992px) {
    background-size: cover;
    background-repeat: no-repeat;
}
`

const ClientHeading1 = styled(Heading1)`
position: relative;
padding-bottom: 20px;
text-transform: uppercase;

&:before {
    content: "";
    position: absolute;
    left: 30%;
    bottom: 0;
    height: 1px;
    width: 40%;
    border-bottom: 2px solid var(--primary-dark-variant);
}
`
const StyledLink = styled(Link)`
background-color: var(--disabled);
box-shadow: none;
border-radius: 0px;
color: var(--primary-light-text);
padding: 15px 30px;
border: transparent;
font-size: 17px;

&:hover {
    text-decoration: none;
    background-color: var(--primary-light-variant);
    color: var(--primary-text);
}

@media screen and (min-width: 768px) {
    font-size: 25px;
}


@media screen and (min-width: 1200px) {
    font-size: 30px;
}
`

export const Home = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <StyledDivContainer className="flex center align-center">
            <StyledDivParent className="w-80 w-xmd-75 w-lg-66 w-xlg-33 py-6 px-3 py-md-5 px-md-4 py-ipp-7 py-xmd-4 px-xmd-6">
                <StyledDivChild className="flex column r-g-2 w-100 pl-2">
                    <StyledHeading1>From elegant systems to beautiful designs...</StyledHeading1>
                    <StyledHeading3>
                        Our team of skilled designers and developers can help build your
                        entire brand and create strategies to manage it efficiently.
                    </StyledHeading3>
                </StyledDivChild>
            </StyledDivParent>
        </StyledDivContainer>
        <div className="flex column lg-row align-center center g-1 margin-center w-80 w-lg-75 w-xlg-50 my-2 my-md-3 my-lg-5">
            <WhatwedoHeading1 className="flex-lg-2 pr-lg-1 self-align-start">What<br />we&nbsp;do</WhatwedoHeading1>
            <StypedParagraph className="flex-lg-8 pl-lg-3 py-lg-1">
                Our team creates outcome oriented solutions for your brand. The process involves research,
                strategy, creatives, development and execution. We take into account the end users needs and
                then approach the project accordingly.
            </StypedParagraph>
        </div>
        <div className="flex column xmd-row ipp-column w-xlg-66 margin-center">
            <div className="flex column flex-xmd-6 flex-ipp-1">
                <HomeProject className="flex-xmd-1" to="/portfolio/snapdeal" title="Snapdeal" description="Unbox Zindagi">
                    <Image width="inherit" height="inherit" src="https://ik.imagekit.io/bizwem110d/inkling/Snapdeal/snapdeal_box1_3KfhaxJVc.png" alt={props.alt} />
                </HomeProject>
                <HomeProject className="flex-xmd-1" to="/portfolio/90min" title="90 minute app challenge" description="Coding is a superpower">
                    <Image width="inherit" height="inherit" src="https://ik.imagekit.io/bizwem110d/inkling/90_Min_App_Challenge/90min_pamphlet_f4S5mNkYr.png?tr=w-500,h-270" alt={props.alt} />
                </HomeProject>
            </div>
            <div className="flex column flex-xmd-4 flex-ipp-1">
                <HomeProject className="flex-xmd-12" to="/portfolio/doolally" title="Doolally">
                    <source srcSet="https://ik.imagekit.io/bizwem110d/inkling/Doolally/Doolally_poster2_irR3RpwEN.png?tr=h-500,w-350" media="(min-width: 992px)" />
                    <source
                        srcSet="https://ik.imagekit.io/bizwem110d/inkling/Doolally/Doolally_poster2_irR3RpwEN.png"
                        media="(min-device-width: 1024px and max-device-width: 1366px and orientation: portrait)" />
                    <Image width="inherit" height="inherit" src="https://ik.imagekit.io/bizwem110d/inkling/Doolally/Doolally_poster2_irR3RpwEN.png" alt={props.alt} />
                </HomeProject>
                <StyledLink to="/portfolio" className="flex center align-center flex-ipp-2 flex-xmd-1">view more &rarr;</StyledLink>
            </div>
        </div>
        <StyledClientsDiv className="py-2 py-md-3 py-xmd-4 py-lg-5">
            <div className="flex column r-g-2 w-md-80 margin-center align-center">
                <ClientHeading1>Our Clients</ClientHeading1>
                <div className="flex wrap">
                    <Client src="https://ik.imagekit.io/bizwem110d/inkling/Snapdeal/snapdeal_box1_3KfhaxJVc.png?tr=w-200,h-100" />
                    <Client src="https://ik.imagekit.io/bizwem110d/inkling/Snapdeal/snapdeal_box1_3KfhaxJVc.png?tr=w-200,h-100" />
                    <Client src="https://ik.imagekit.io/bizwem110d/inkling/Snapdeal/snapdeal_box1_3KfhaxJVc.png?tr=w-200,h-100" />
                    <Client src="https://ik.imagekit.io/bizwem110d/inkling/Snapdeal/snapdeal_box1_3KfhaxJVc.png?tr=w-200,h-100" />
                    <Client src="https://ik.imagekit.io/bizwem110d/inkling/Snapdeal/snapdeal_box1_3KfhaxJVc.png?tr=w-200,h-100" />
                    <Client src="https://ik.imagekit.io/bizwem110d/inkling/Snapdeal/snapdeal_box1_3KfhaxJVc.png?tr=w-200,h-100" />
                </div>
            </div>
        </StyledClientsDiv>
    </Fragment>
}