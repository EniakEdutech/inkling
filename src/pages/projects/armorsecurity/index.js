import { Fragment } from 'react'
// special component
import ScrollToTopOnMount from '../../../atoms/scrollToTop'
// components
import { NavButtons } from '../../../molecules/navbuttons'
import { Title } from '../../../atoms/title'
import { Heading1 } from '../../../atoms/heading1'
import { ProjectHeading4 } from '../../../atoms/heading4'
import { ImportantText } from '../../../atoms/importantText'
import { ProjectParagraph } from '../../../atoms/paragraph'
import { Banner } from '../../../atoms/banner'

export const ArmorSecurity = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <div className="d-flex column g-1 col-10 col-xmd-8 col-ipp-10 col-xlg-6 margin-center py-2 py-md-3 py-xmd-4 py-ipp-3 py-lg-5">
            <Title>ARMOR SECURITY</Title>
            <Heading1>Creation of the entire brand identity.</Heading1>
            <div className="d-flex column xmd-row ipp-column col-12 g-1">
                <div className="d-flex column col-xmd-3 col-ipp-12">
                    <ProjectHeading4>Services</ProjectHeading4>
                    <ImportantText>
                        Branding, E-mail Marketing, Signage, Print, Stationary, Social.
                    </ImportantText>
                </div>
                <div className="d-flex column col-xmd-9 col-ipp-12">
                    <ProjectHeading4>Context</ProjectHeading4>
                    <ProjectParagraph>
                        Armor Intelligence and escort services specializes in providing customized and cost effective security
                        solutions. They provide various aspects of security ranging from assessing security needs, security
                        systems through physical presence and electronic surveillance and monitoring systems.
                    </ProjectParagraph>
                </div>
            </div>
        </div>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Armor_Security/Armor_security_business_15M0dy-DrO.png?tr=w-1000" />
        <div className="d-flex center align-center col-10 col-xmd-8 col-ipp-10 col-xlg-6 margin-center py-2 py-md-3 py-xmd-4 py-ipp-3 py-lg-5">
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
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Armor_Security/Free_Landscape_Brochure_Mockup_05_4st2A3-2MD.png?tr=w-1000" />
        <NavButtons prev="doolally" pName="Doolally" next="allspace" nName="AllSpace Ventures" />
    </Fragment>
}