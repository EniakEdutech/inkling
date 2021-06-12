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

export const Pathways = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/mobile_backgrounds_redone/Pathways_1_aAdB-Xx9y.png" position="right" size="cover"
            desImage="https://ik.imagekit.io/bizwem110d/inkling/Armor_web_1_k3Ivpu6BW.png">
            <div className="d-flex column r-g-2 col-6 col-md-8 margin-center py-5 py-md-7 py-xmd-5 py-ipp-7 py-lg-5">
                <div className="d-flex column">
                    <Title>PATHWAYS</Title>
                    <ProjectHeading1>The logo, graphic elements and printables.</ProjectHeading1>
                </div>
                <div className="d-flex column xmd-row ipp-column col-12 r-g-2 c-g-1">
                    <div className="d-flex column r-g-1 col-xmd-3 col-ipp-12">
                        <ProjectHeading4>Services</ProjectHeading4>
                        <ProjectText>Branding, Illustration, Packaging.</ProjectText>
                    </div>
                    <div className="d-flex column r-g-1 col-xmd-9 col-ipp-12">
                        <ProjectHeading4>Context</ProjectHeading4>
                        <ProjectParagraph>
                            Pathways is the brand created for a life coach. He is about to launch a blog and conducts multiple
                            workshops. The logo for a brand like this had to give off a positive and hopeful vibe.
                    </ProjectParagraph>
                    </div>
                </div>
            </div>
        </BIContainer>
        <Banner className="" alt="pathways-image" src="https://ik.imagekit.io/bizwem110d/inkling/Pathways/pathways_BC_MRhGxkJ7Y.png?tr=w-1000" />
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/mobile_backgrounds_redone/Pathways_2_BWDoskqw4.png" position="top right" size="cover"
            desImage="https://ik.imagekit.io/bizwem110d/inkling/eniakproject_web_1_RwutNliMs.png">
            <div className="d-flex column xmd-row col-6 col-md-8 margin-center r-g-1 c-g-2 py-3 py-md-4 py-xmd-5">
                <ProjectHeading4>DESIGN APPROACH</ProjectHeading4>
                <ProjectParagraph>
                    While conceptualizing the logo, I tried to collect pictures of things that were positive. This includes pictures of people smiling, flowers blooming,
                    kittens, meadows, the sun, grass etc. What I noticed is that nature was something that was present in most of these pictures and so was sunshine.
                    Thus, the final logo had elements of both. The logo is divided in two parts, a green meadow and the yellow sunshine. The perspectives are such that
                    the meadow looks like a path into the sun. I also created a pamphlet for workshop advertisements that have illustrations of small flowers. The kind
                    that you would find in a meadow.
                </ProjectParagraph>
            </div>
        </BIContainer>
        <div className="d-flex column xmd-row col-12 col-xlg-8 xlg-margin-center">
            <Banner contain className="col-xmd-6" alt="pathways-brochure-image" src="https://ik.imagekit.io/bizwem110d/inkling/Pathways/Pathways_brochure-01_5cJUs0Wqe.jpg?tr=w-1000" />
            <Banner contain className="col-xmd-6" alt="pathways-brochure-image" src="https://ik.imagekit.io/bizwem110d/inkling/Pathways/Pathways_brochure-02_Jp_R82pGxS.jpg?tr=w-1000" />
        </div>
        <NavButtons prev="aadhiyaran-agrarian-services" pName="Aadhiyaran Agrarian Services" next="klm" nName="KLM Royal Dutch Airlines" />
    </Fragment>
}