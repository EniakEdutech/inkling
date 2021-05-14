import { Fragment } from "react"
import styled from "styled-components"
// components
import { NavMenu } from '../../molecules/navmenu'
import { Heading1 } from '../../atoms/heading1'
import { Heading3 } from '../../atoms/heading3'
import { ImportantText } from '../../atoms/importantText'
import { Image } from '../../atoms/image'
import { Link } from "react-router-dom"
import { Client } from "../../molecules/client"


const StyledDivContainer = styled.div`
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

const StyledDivParent = styled.div`
background-color: var(--primary-dark-variant);
color: var(--primary-text);
box-shadow: 5px 5px 10px 0px var(--primary-light-variant);
@media screen and (min-width: 992px) {
    padding: 100px;
    border-radius: 15px;
}

@media screen and (min-width: 2560px) {
    padding: 200px;
}
`

const StyledDivChild = styled.div`
border-left: 2px solid var(--primary-light-variant);
@media screen and (min-width: 992px) {
    padding-left: 50px;
}
@media screen and (min-width: 2560px) {
    padding: 100px;
}
`

const StyledHeading3 = styled(Heading3)`
font-weight: 300;
`

const StyledImportantText = styled(ImportantText)`
@media screen and (min-width: 992px) {
    border-left: 2px solid var(--primary-light-variant);
    padding-left: 50px;
}
`

const StyledPortfolioDiv = styled.div`
&>a {
    background-color: var(--disabled);
    color: var(--disabled-text);
    padding: 20px 0;
    font-size: 30px;
}
&>a:hover {
    text-decoration: none;
    background-color: var(--primary-light-variant);
    color: var(--disabled)
}
`

const ClientHeading1 = styled(Heading1)`
position: relative;
padding-bottom: 20px;

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

export const Home = props => {
    return <Fragment>
        <NavMenu />
        <StyledDivContainer className="flex center align-center" background="https://ik.imagekit.io/bizwem110d/inkling/home-background_HK4W1i-Jg.png">
            <StyledDivParent className="w-xmd-75 w-lg-66 w-xlg-50">
                <StyledDivChild className="w-100">
                    <Heading1>From elegant systems to beautiful designs...</Heading1>
                    <StyledHeading3>
                        Our team of skilled designers and developers can help build your
                        entire brand and create strategies to manage it efficiently.
                    </StyledHeading3>
                </StyledDivChild>
            </StyledDivParent>
        </StyledDivContainer>
        <div className="flex column lg-row align-center center g-1 margin-center w-80 w-lg-75 w-xlg-50 my-2 my-md-3 my-lg-4">
            <Heading1 className="flex-lg-2">What we&nbsp;do</Heading1>
            <StyledImportantText className="flex-lg-8">
                Our team creates outcome oriented solutions for your brand. The process involves research,
                strategy, creatives, development and execution. We take into account the end users needs and
                then approach the project accordingly.
            </StyledImportantText>
        </div>
        <div className="flex lg-row w-xlg-75 margin-center">
            <div className="flex lg-column flex-lg-6">
                <Image className="flex-lg-1"
                    src="https://ik.imagekit.io/bizwem110d/inkling/Snapdeal/snapdeal_box1_3KfhaxJVc.png?tr=w-500,h-250" />
                <Image className="flex-lg-1"
                    src="https://ik.imagekit.io/bizwem110d/inkling/90_Min_App_Challenge/90min_pamphlet_f4S5mNkYr.png?tr=w-500,h-250" />
            </div>
            <StyledPortfolioDiv className="flex lg-column flex-lg-4">
                <Image className="flex-lg-10"
                    src="https://ik.imagekit.io/bizwem110d/inkling/Doolally/Doolally_poster2_irR3RpwEN.png?tr=w-250,h-500" />
                <Link to="/portfolio" className="w-100 flex center align-center flex-lg-2">view more &rarr;</Link>
            </StyledPortfolioDiv>
        </div>
        <div className="flex lg-column r-g-2 w-lg-80 margin-center my-lg-4 align-center">
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
    </Fragment>
}