import { Fragment } from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom'
// components
import ScrollToTopOnMount from '../../atoms/scrollToTop'
import { Button } from '../../atoms/button'
import { Heading1 } from '../../atoms/heading1'
import { Heading3 } from '../../atoms/heading3'
import { Client } from "../../molecules/client"
import { Image } from "../../atoms/image"
import { HomeProject } from '../../organisms/homeproject'
import { Service } from '../../organisms/service'
import { ListItem } from '../../atoms/listItem'
import { UnorderedList } from "../../atoms/unorderedList"


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
font-weight: 700;
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
const StyledServicessDiv = styled.div`
background-image: url('https://ik.imagekit.io/bizwem110d/inkling/Projects_web_FvBoVS1BU.png');
background-size: contain;
background-position: bottom;

@media screen and (min-width: 992px) {
    background-size: cover;
    background-repeat: no-repeat;
}
`

const SectionHeading1 = styled(Heading1)`
position: relative;
padding-bottom: 20px;
text-transform: uppercase;
font-weight: 700;

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

const ClientImagesDiv = styled.div`
overflow-x: auto;
white-space: nowrap;
background-color: var(--primary-text);

`

const StyledPortfolioLink = styled(Link)`
box-shadow: none;
border-radius: 0px;
color: var(--primary-light-variant);
padding: 15px 30px;
border: transparent;
font-size: 17px;
font-family: 'Montserrat', san-serif;
font-weight: 700;
letter-spacing: 2px;
position: relative;

&:before {
    content: '';
    position: absolute;
    top: 0;
    border-top: 1px solid var(--primary-light-variant);
    width: 50%;
    transition: .5s ease;
}

&:after {
    content: '';
    position: absolute;
    bottom: 0;
    border-top: 1px solid var(--primary-light-variant);
    width: 30%;
    transition: .5s ease;
}

&:hover {
    text-decoration: none;

    &:before {
        width: 30%;
    }

    &:after {
        width: 50%;
    }
}
`

const ServiceSectionHeading1 = styled(SectionHeading1)`
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

const StyledUList = styled(UnorderedList)``

const StyledListItem = styled(ListItem)`
font-family: 'Montserrat', sans-serif;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 1px;
padding: 3px 0;
font-size: .9em;

@media screen and (min-width: 992px) {
    font-size: .7em;
}
`

export const Home = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <StyledDivContainer className="flex column center align-center r-g-3 r-g-md-5">
            <StyledDivParent className="w-75 w-lg-66 w-xlg-33 py-4 pl-3 pr-2 py-md-5 px-md-4 py-ipp-7 py-xmd-4 px-xmd-6">
                <StyledDivChild className="flex column r-g-2 w-100 pl-1 pl-md-2">
                    <StyledHeading1>From elegant systems to<br />beautiful designs...</StyledHeading1>
                    <StyledHeading3>
                        Our team of skilled designers and developers can help build your
                        entire brand and create strategies to manage it efficiently.
                    </StyledHeading3>
                </StyledDivChild>
            </StyledDivParent>
            <Link to="/contactus"><Button className="px-6 py-1" primary capital>Contact Us</Button></Link>
        </StyledDivContainer>
        <div className="py-2 py-md-3 py-xmd-4 py-lg-5">
            <div className="flex column w-md-80 margin-center align-center">
                <SectionHeading1 className="my-1">Our Clients</SectionHeading1>
                <ClientImagesDiv className="flex align-center c-g-3 c-g-md-4 w-100 pl-2 py-2 mr-2 px-md-unset mx-md-unset">
                    <Client src="https://ik.imagekit.io/bizwem110d/inkling/home/clients/klm_Je65JneOCu.svg" />
                    <Client src="https://ik.imagekit.io/bizwem110d/inkling/home/clients/snapdeal_9xyblg8qbh.svg" small />
                    <Client src="https://ik.imagekit.io/bizwem110d/inkling/home/clients/itk_SfoaOfIWfN.svg" small />
                    <Client src="https://ik.imagekit.io/bizwem110d/inkling/home/clients/allspace_ibaKJp0yN.svg" />
                    <Client src="https://ik.imagekit.io/bizwem110d/inkling/home/clients/doolally_vMe_bCB3z.svg" />
                </ClientImagesDiv>
            </div>
        </div>
        <div className="flex column align-center">
            <SectionHeading1 className="my-1">Featured Projects</SectionHeading1>
            <div className="flex column xmd-row ipp-column w-xmd-80 w-ipp-100 w-xlg-66 my-2 margin-center">
                <div className="flex column flex-xmd-5 flex-ipp-1">
                    <HomeProject className="flex-xmd-1 p-xmd-1 p-ipp-unset" to="/portfolio/snapdeal" title="Snapdeal">
                        <Image width="inherit" height="inherit" src="https://ik.imagekit.io/bizwem110d/inkling/Snapdeal/snapdeal_box1_3KfhaxJVc.png" alt={props.alt} />
                    </HomeProject>
                    <HomeProject className="flex-xmd-1 p-xmd-1 p-ipp-unset" to="/portfolio/90min" title="90 minute app challenge">
                        <Image width="inherit" height="inherit" src="https://ik.imagekit.io/bizwem110d/inkling/90_Min_App_Challenge/90min_pamphlet_f4S5mNkYr.png?tr=ar-16-9,w-1000" alt={props.alt} />
                    </HomeProject>
                </div>
                <div className="flex column flex-xmd-5 flex-ipp-1">
                    <HomeProject className="flex-xmd-12 p-xmd-1 p-ipp-unset" to="/portfolio/doolally" title="Doolally">
                        <source srcSet="https://ik.imagekit.io/bizwem110d/inkling/Doolally/Doolally_poster2_irR3RpwEN.png?tr=h-600,w-500" media="(min-width: 992px)" />
                        <source
                            srcSet="https://ik.imagekit.io/bizwem110d/inkling/Doolally/Doolally_poster2_irR3RpwEN.png"
                            media="(min-device-width: 1024px and max-device-width: 1366px and orientation: portrait)" />
                        <Image width="inherit" height="inherit" src="https://ik.imagekit.io/bizwem110d/inkling/Doolally/Doolally_poster2_irR3RpwEN.png" alt={props.alt} />
                    </HomeProject>
                </div>
            </div>
            <StyledPortfolioLink to="/portfolio" className="flex center align-center my-2">view more &rarr;</StyledPortfolioLink>
        </div>
        <StyledServicessDiv>
            <div className="flex column align-center w-80 w-xlg-50 margin-center py-3 pb-10">
                <ServiceSectionHeading1 className="flex my-3 self-align-start">Our Services</ServiceSectionHeading1>
                <div className="flex wrap row r-g-2">
                    <Service
                        heading="design"
                        body="We have designers who ensure your company has a unique brand identity and can translate that onto digital platforms."
                        src="https://ik.imagekit.io/bizwem110d/inkling/aboutus/services/digitalDesign_VPGRt3UnG2.svg" alt="services" title="services">
                        <div className="flex column lg-row c-g-1">
                            <StyledUList>
                                <StyledListItem>print design</StyledListItem>
                                <StyledListItem>digital design</StyledListItem>
                                <StyledListItem>user experience</StyledListItem>
                                <StyledListItem>user interface</StyledListItem>
                            </StyledUList>
                            <StyledUList>
                                <StyledListItem>brand strategy</StyledListItem>
                                <StyledListItem>brand positioning</StyledListItem>
                                <StyledListItem>prototyping</StyledListItem>
                                <StyledListItem>curriculum design</StyledListItem>
                            </StyledUList>
                        </div>
                    </Service>
                    <Service
                        heading="development"
                        body="Technology is a brilliant tool. From creating apps and websites to market yourself to creating management systems, we can help you do it all."
                        src="https://ik.imagekit.io/bizwem110d/inkling/aboutus/services/webDevelopment_HyfTru1XVP.svg" alt="services" title="services">
                        <div className="flex column lg-row c-g-1">
                            <StyledUList>
                                <StyledListItem>web development</StyledListItem>
                                <StyledListItem>app development</StyledListItem>
                                <StyledListItem>machine learning</StyledListItem>
                                <StyledListItem>automation</StyledListItem>
                            </StyledUList>
                            <StyledUList>
                                <StyledListItem>tech consulting</StyledListItem>
                                <StyledListItem>qa &amp; testing</StyledListItem>
                                <StyledListItem>maintenance</StyledListItem>
                                <StyledListItem>software creation</StyledListItem>
                            </StyledUList>
                        </div>
                    </Service>
                    <Service
                        heading="analytics"
                        body="Experience with consulting for businesses and creating efficient marketing strategies to make their brands grow."
                        src="https://ik.imagekit.io/bizwem110d/inkling/aboutus/services/machineLearning_VZY73dIsDv.svg" alt="services" title="services">
                        <div className="flex column lg-row c-g-1">
                            <StyledUList>
                                <StyledListItem>analytics measurement plan</StyledListItem>
                                <StyledListItem>analytics ecosystem</StyledListItem>
                                <StyledListItem>conversion rate optimisation</StyledListItem>
                                <StyledListItem>root cause analysis</StyledListItem>
                            </StyledUList>
                        </div>
                    </Service>
                </div>
            </div>
        </StyledServicessDiv>
    </Fragment>
}