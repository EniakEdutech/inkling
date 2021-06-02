import { Fragment } from 'react'
// special component
import ScrollToTopOnMount from '../../../atoms/scrollToTop'
// components
import { NavButtons } from '../../../molecules/navbuttons'
import { Title } from '../../../atoms/title'
import { ProjectHeading1 } from '../../../atoms/heading1'
import { ProjectHeading4 } from '../../../atoms/heading4'
import { ImportantText } from '../../../atoms/importantText'
import { ProjectParagraph } from '../../../atoms/paragraph'
import { Banner } from '../../../atoms/banner'
import { BIContainer } from '../../../atoms/bicontainer'

export const ArmorSecurity = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/Backgrounds_for_mobile/Armor_mob_1_kOOJVzGwj.png" position="right top" size="cover"
            desImage="https://ik.imagekit.io/bizwem110d/inkling/Armor_web_1_k3Ivpu6BW.png">
            <div className="d-flex column g-2 col-6 col-xmd-8 col-ipp-6 col-xlg-8 margin-center py-5 py-md-7 py-xmd-5 py-ipp-7 py-lg-5">
                <Title>ARMOR SECURITY</Title>
                <ProjectHeading1>Creation of the entire brand identity.</ProjectHeading1>
                <div className="d-flex column xmd-row ipp-column col-12 r-g-2 c-g-1">
                    <div className="d-flex column r-g-1 col-xmd-3 col-ipp-12">
                        <ProjectHeading4>Services</ProjectHeading4>
                        <ImportantText>
                            Branding, E-mail Marketing, Signage, Print, Stationary, Social.
                    </ImportantText>
                    </div>
                    <div className="d-flex column r-g-1 col-xmd-9 col-ipp-12">
                        <ProjectHeading4>Context</ProjectHeading4>
                        <ProjectParagraph>
                            Armor Intelligence and escort services specializes in providing customized and cost effective security
                            solutions. They provide various aspects of security ranging from assessing security needs, security
                            systems through physical presence and electronic surveillance and monitoring systems.
                    </ProjectParagraph>
                    </div>
                </div>
            </div>
        </BIContainer>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Armor_Security/Armor_security_business_15M0dy-DrO.png?tr=w-1000" />
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/Backgrounds_for_mobile/Armor_mob_2_lMeNuqv1K.png" position="right top" size="cover"
            desImage="https://ik.imagekit.io/bizwem110d/inkling/doolally_web_1_k2Jvm2Ma2.png">
            <div className="d-flex center align-center col-6 col-xmd-8 col-ipp-6 col-xlg-8 margin-center py-3 py-md-4 py-xmd-5 py-ipp-4 py-lg-6">
                <div className="d-flex column r-g-2 col-12">
                    <div className="d-flex column r-g-1">
                        <ProjectHeading4>DESIGN BRIEF</ProjectHeading4>
                        <ProjectParagraph>
                            Inkling handled all the artwork work for Armor security including their logo, buisness cards, brochures and other collaterals. They needed
                            a logo and brand identity that was strong and powerful and a clear representation of security.
                </ProjectParagraph>
                    </div>
                    <div className="d-flex column r-g-1">
                        <ProjectHeading4>DESIGN APPROACH</ProjectHeading4>
                        <ProjectParagraph>
                            Their logo is a representation of a shield that depicts safety and has the emblem of a hawk that depicts security. The hawk was inspired by
                            the popular expression ‘hawk-eyed’. The colours are strong and bold to go well with the theme and feel of a security based brand.
                </ProjectParagraph>
                    </div>
                </div>
            </div>
        </BIContainer>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Armor_Security/Free_Landscape_Brochure_Mockup_05_4st2A3-2MD.png?tr=w-1000" />
        <NavButtons prev="doolally" pName="Doolally" next="allspace" nName="AllSpace Ventures" />
    </Fragment>
}