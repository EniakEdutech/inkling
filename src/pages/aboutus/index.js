import { Fragment } from "react"
import styled from "styled-components"
// Components
import ScrollToTopOnMount from '../../atoms/scrollToTop'
import { Heading2 } from "../../atoms/heading2"
import { Paragraph } from '../../atoms/paragraph'
import { Heading1 } from "../../atoms/heading1"
import { TeamMember } from '../../organisms/teammember'

const AboutUsDiv = styled.div`
background-image: url("https://ik.imagekit.io/bizwem110d/inkling/Backgrounds_for_mobile/about_mob_2_VbDMbVr9F.png");
background-size: contain;
background-position: 0%;

@media screen and (min-width: 768px) {
    background-position: 60%;
}

@media screen and (min-width: 992px) {
    background-image: url("https://ik.imagekit.io/bizwem110d/inkling/About_web_2_UEel0P6InS.png");
    background-size: contain;
    background-position: 0%;
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    background-image: url("https://ik.imagekit.io/bizwem110d/inkling/Backgrounds_for_mobile/about_mob_2_VbDMbVr9F.png");
    background-size: contain;
    background-position: 0%;
}

@media screen and (min-width: 1200px) {
    background-size: cover;
}
`

const StyledContainer = styled.div`
min-height: var(--small-screen-navmenu-100vh);
background-image: url("https://ik.imagekit.io/bizwem110d/inkling/Backgrounds_for_mobile/aboutus_mob_01_bzuWWwmm5.png");
background-size: contain;
background-position: center;

@media screen and (min-width: 768px) {
    min-height: var(--tablet-navmenu-100vh);
}

@media screen and (min-width: 992px) {
    background-image: url("https://ik.imagekit.io/bizwem110d/inkling/About_web_1_LR9BY0fa3.png");
    background-size: cover;
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    background-image: url("https://ik.imagekit.io/bizwem110d/inkling/Backgrounds_for_mobile/aboutus_mob_01_bzuWWwmm5.png");
    background-size: contain;
}

@media screen and (min-width: 2560x) {
    min-height: var(--extra-large-navmenu-100vh);
}
`

const StyledParent1 = styled.div`
background-color: var(--primary-text);
color: var(--primary-dark-variant);
box-shadow: 10px 10px 20px 0px var(--primary-lightest-variant);
border-radius: 5px;
`

const StyledParent2 = styled.div`
background-color: var(--primary-text);
color: var(--primary-dark-variant);
border-left: 2px solid var(--primary-dark-variant);
`

const StyledHeading2 = styled(Heading2)`
font-weight: 700;
letter-spacing: 0px;
`

const SectionDiv = styled.div`
background-color: white;
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
    width: 20%;
    border-bottom: 1px solid var(--primary-dark-variant);
}
`

export const AboutUs = () => {
    return <Fragment>
        <ScrollToTopOnMount />
        <StyledContainer className="flex align-center center">
            <div className="flex column md-center w-xlg-50 margin-center r-g-2 r-g-md-4 r-g-xlg-5 py-3 px-2 px-md-3 px-lg-5">
                <StyledParent1 className="flex column r-g-1 self-align-start w-75 w-lg-66 w-xlg-50 py-2 px-2 py-ipp-3 px-ipp-3 py-lg-4 px-lg-4 py-xlg-5 px-xlg-5">
                    <StyledHeading2>We help you create an impact! </StyledHeading2>
                    <Paragraph>
                        Design creates an impression on your user. Be it the brand identity
                        which is what the user associates with your company or the user
                        interface of your company website or app, which is what helps the user
                        navigate with ease.
                </Paragraph>
                </StyledParent1>
                <StyledParent2 className="flex w-75 w-lg-66 w-xlg-50 self-align-end py-1 px-1 py-ipp-2 px-ipp-2 py-lg-4 px-lg-4 py-xlg-5 px-xlg-5">
                    <StyledHeading2>We will help you create that impact with aesthetic and system design. </StyledHeading2>
                </StyledParent2>
            </div>
        </StyledContainer>
        <AboutUsDiv>
            <SectionDiv className="flex column w-80 w-lg-75 w-xlg-50 margin-center px-1 py-3 pb-5">
                <SectionHeading1 className="my-1 pb-1">Our Team</SectionHeading1>
                <div className="flex wrap r-g-4 my-2">
                    <TeamMember
                        name="jasprit sudan"
                        designation="Business Strategist"
                        info="Experience with consulting for businesses and creating efficient marketing strategies to make their brands grow."
                        colour1="#4490E3" colour2="#014898">
                        <source srcSet="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapan_v_Uq408TK.png" />
                        <source srcSet="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapanx2_tv-UGMr4j.png" media="(min-width: 992px)" />
                        <img src="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapanx2_tv-UGMr4j.png" alt="team" title="team" />
                    </TeamMember>
                    <TeamMember
                        name="prabjyot sudan"
                        designation="business strategist &amp; developer"
                        info="Proficient in building software products and services along with core content creation and strategy in advertising."
                        colour1="#F6CD5E" colour2="#F09402">
                        <source srcSet="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapan_v_Uq408TK.png" />
                        <source srcSet="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapanx2_tv-UGMr4j.png" media="(min-width: 992px)" />
                        <img src="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapanx2_tv-UGMr4j.png" alt="team" title="team" />
                    </TeamMember>
                    <TeamMember
                        name="utkarsh mehta"
                        designation="automations engineer"
                        info="Here only for the benefits"
                        colour1="#51DB90" colour2="#0F7E40">
                        <source srcSet="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapan_v_Uq408TK.png" />
                        <source srcSet="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapanx2_tv-UGMr4j.png" media="(min-width: 992px)" />
                        <img src="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapanx2_tv-UGMr4j.png" alt="team" title="team" />
                    </TeamMember>
                    <TeamMember
                        name="anushka menon"
                        designation="design director"
                        info="Experience freelancing as a graphic designer and working as a content developer in the education sector."
                        colour1="#E52543" colour2="#680303">
                        <source srcSet="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapan_v_Uq408TK.png" />
                        <source srcSet="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapanx2_tv-UGMr4j.png" media="(min-width: 992px)" />
                        <img src="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapanx2_tv-UGMr4j.png" alt="team" title="team" />
                    </TeamMember>
                    <TeamMember
                        name="rishab mehta"
                        designation="developer"
                        info="Meticulous Web developer responsible for developing user friendly end to end dynamic web &amp; mobile services with firm."
                        colour1="#14AFA6" colour2="#126877">
                        <source srcSet="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapan_v_Uq408TK.png" />
                        <source srcSet="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapanx2_tv-UGMr4j.png" media="(min-width: 992px)" />
                        <img src="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapanx2_tv-UGMr4j.png" alt="team" title="team" />
                    </TeamMember>
                    <TeamMember
                        name="Tapan Desai"
                        designation="Business Strategist"
                        info="Proficient in building software products and services along with core content creation and strategy in advertising."
                        colour1="#FF8D2B" colour2="#C12509">
                        <source srcSet="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapan_v_Uq408TK.png" />
                        <source srcSet="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapanx2_tv-UGMr4j.png" media="(min-width: 992px)" />
                        <img src="https://ik.imagekit.io/bizwem110d/inkling/aboutus/team/tapanx2_tv-UGMr4j.png" alt="team" title="team" />
                    </TeamMember>
                </div>
            </SectionDiv>
        </AboutUsDiv>
    </Fragment>
}