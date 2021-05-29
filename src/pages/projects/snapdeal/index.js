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

export const Snapdeal = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <div className="d-flex column g-1 col-10 col-xmd-8 col-ipp-10 col-xlg-6 margin-center py-2 py-md-3 py-xmd-4 py-ipp-3 py-lg-5">
            <Title>SNAPDEAL</Title>
            <Heading1>Unbox Zindagi</Heading1>
            <div className="d-flex column xmd-row ipp-column col-12 g-1">
                <div className="d-flex column col-xmd-3 col-ipp-12">
                    <ProjectHeading4>Services</ProjectHeading4>
                    <ImportantText>
                        Branding, Illustration, Packaging.
                    </ImportantText>
                </div>
                <div className="d-flex column col-xmd-9 col-ipp-12">
                    <ProjectHeading4>Context</ProjectHeading4>
                    <ProjectParagraph>
                        Snapdeal is an Indian e-commerce company. After their rebranding, Snapdeal selected a bunch
                        of illustrators and designers to design a limited edition box for them based on their main tag line,
                        “Unbox Zindagi”. The concept could be anything that could be under this over arching idea of
                        unboxing life.
                    </ProjectParagraph>
                </div>
            </div>
        </div>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Snapdeal/snapdeal_main_u7Cns0O-3.png" />
        <div className="d-flex center align-center col-10 col-xmd-8 col-ipp-10 col-xlg-6 margin-center py-2 py-md-3 py-xmd-4 py-ipp-3 py-lg-5">
            <div className="d-flex column r-g-1 col-12">
                <ProjectHeading4>DESIGN APPROACH</ProjectHeading4>
                <ProjectParagraph>
                    After a few iterations, the final concept that we chose to work with is “Freedom to experience”. The design starts at the bottom of the box
                    where you will notice some birds taking off from some boxes with little people on them holding on to their snapdeal logo. The front side of
                    the box then shows a top view perspective of the same scene that focuses on an enthusiastic boy. Finally the top of the box is a bottom view
                    perspective of the birds flying overhead.
                </ProjectParagraph>
            </div>
        </div>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Snapdeal/snapdeal_box2_40ieBuCTN.png?tr=w-1000" />
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Snapdeal/snapdeal_box1_3KfhaxJVc.png?tr=w-1000" />
        <NavButtons prev="allspace" pName="AllSpace Ventures" next="agrarian" nName="Aadhiyaran Agrarian Services" />
    </Fragment>
}