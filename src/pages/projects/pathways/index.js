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

export const Pathways = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <div className="d-flex column g-1 col-10 col-xmd-8 col-ipp-10 col-xlg-6 margin-center py-2 py-md-3 py-xmd-4 py-ipp-3 py-lg-5">
            <Title>PATHWAYS</Title>
            <Heading1>The logo, graphic elements and printables.</Heading1>
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
                        Pathways is the brand created for a life coach. He is about to launch a blog and conducts multiple
                        workshops. The logo for a brand like this had to give off a positive and hopeful vibe.
                    </ProjectParagraph>
                </div>
            </div>
        </div>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Pathways/pathways_BC_MRhGxkJ7Y.png?tr=w-1000" />
        <div className="d-flex column g-1 col-10 col-xmd-8 col-ipp-10 col-xlg-6 margin-center py-2 py-md-3 py-xmd-4 py-ipp-3 py-lg-5">
            <ProjectHeading4>DESIGN APPROACH</ProjectHeading4>
            <ProjectParagraph>
                While conceptualizing the logo, I tried to collect pictures of things that were positive. This includes pictures of people smiling, flowers blooming,
                kittens, meadows, the sun, grass etc. What I noticed is that nature was something that was present in most of these pictures and so was sunshine.
                Thus, the final logo had elements of both. The logo is divided in two parts, a green meadow and the yellow sunshine. The perspectives are such that
                the meadow looks like a path into the sun. I also created a pamphlet for workshop advertisements that have illustrations of small flowers. The kind
                that you would find in a meadow.
            </ProjectParagraph>
        </div>
        <div className="d-flex column xmd-row col-12">
            <Banner className="col-xmd-6" src="https://ik.imagekit.io/bizwem110d/inkling/Pathways/Pathways_brochure-01_5cJUs0Wqe.jpg?tr=w-1000" />
            <Banner className="col-xmd-6" src="https://ik.imagekit.io/bizwem110d/inkling/Pathways/Pathways_brochure-02_Jp_R82pGxS.jpg?tr=w-1000" />
        </div>
        <NavButtons prev="Aadhiyaran Agrarian Services" pName="agrarian" next="klm" nName="KLM Royal Dutch Airlines" />
    </Fragment>
}