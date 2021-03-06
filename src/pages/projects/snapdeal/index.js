import { Fragment } from 'react'
// special component
import ScrollToTopOnMount from '../../../atoms/scrollToTop'
// components
import { NavButtons } from '../../../molecules/navbuttons'
import { Title } from '../../../atoms/title'
import { ProjectHeading1 } from '../../../atoms/heading1'
import { ProjectHeading4 } from '../../../atoms/heading4'
import { ProjectText } from '../../../atoms/text'
import { ProjectParagraph } from '../../../atoms/paragraph'
import { Banner } from '../../../atoms/banner'
import { BIContainer } from '../../../atoms/bicontainer'

export const Snapdeal = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/mobile_backgrounds_redone/Snapdeal_1_4LzUO-JXA.png" position="top right" size="cover"
            desImage="https://ik.imagekit.io/bizwem110d/inkling/itk_web_1_c5WE0exdx.png">
            <div className="d-flex column g-2 col-6 col-md-8 margin-center py-5 py-md-7 py-xmd-5 py-ipp-7 py-lg-5">
                <div className="d-flex column">
                    <Title>SNAPDEAL</Title>
                    <ProjectHeading1>Unbox Zindagi</ProjectHeading1>
                </div>
                <div className="d-flex column xmd-row ipp-column col-12 r-g-2 c-g-1">
                    <div className="d-flex column r-g-1 col-xmd-3 col-ipp-12">
                        <ProjectHeading4>Services</ProjectHeading4>
                        <ProjectText>Branding, Illustration, Packaging.</ProjectText>
                    </div>
                    <div className="d-flex column r-g-1 col-xmd-9 col-ipp-12">
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
        </BIContainer>
        <Banner contain className="" alt="snapdeal-main-image" src="https://ik.imagekit.io/bizwem110d/inkling/Snapdeal/snapdeal_main_u7Cns0O-3.png" />
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/mobile_backgrounds_redone/Snapdeal_2_fXjQe1xVE.png" position="right" size="cover">
            <div className="d-flex center align-center col-6 col-md-8 margin-center r-g-2 c-g-1 py-3 py-md-4 py-xmd-5">
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
        </BIContainer>
        <Banner contain className="" alt="snapdeal-box1-image" src="https://ik.imagekit.io/bizwem110d/inkling/Snapdeal/snapdeal_box2_40ieBuCTN.png?tr=w-1000" />
        <Banner contain className="" alt="snapdeal-box2-image" src="https://ik.imagekit.io/bizwem110d/inkling/Snapdeal/snapdeal_box1_3KfhaxJVc.png?tr=w-1000" />
        <NavButtons prev="allspace-ventures" pName="AllSpace Ventures" next="aadhiyaran-agrarian-services" nName="Aadhiyaran Agrarian Services" />
    </Fragment>
}