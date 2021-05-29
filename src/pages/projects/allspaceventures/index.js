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

export const AllSpaceVentures = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <div className="d-flex column g-1 col-10 col-xmd-8 col-ipp-10 col-xlg-6 margin-center py-2 py-md-3 py-xmd-4 py-ipp-3 py-lg-5">
            <Title>ALLSPACE VENTURES</Title>
            <Heading1>Design for all their social media content.</Heading1>
            <div className="d-flex column xmd-row ipp-column col-12 g-1">
                <div className="d-flex column col-xmd-3 col-ipp-12">
                    <ProjectHeading4>Services</ProjectHeading4>
                    <ImportantText>
                        Social Media posts, Illustration.
                    </ImportantText>
                </div>
                <div className="d-flex column col-xmd-9 col-ipp-12">
                    <ProjectHeading4>Context</ProjectHeading4>
                    <ProjectParagraph>
                        AllSpace Ventures is a real estate company that has a unique proposal. They sell single properties to a
                        bunch of stakeholders such that they can all enjoy the property as a vacation home at different times.
                        This is a concept called fractional ownership.
                    </ProjectParagraph>
                </div>
            </div>
        </div>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/AllSpace_Ventures/AllSpace_fb_WBb0QZ2dg.png?tr=w-1000" />
        <div className="d-flex center align-center col-10 col-xmd-8 col-ipp-10 col-xlg-6 margin-center py-2 py-md-3 py-xmd-4 py-ipp-3 py-lg-5">
            <div className="d-flex column r-g-2 col-12">
                <div className="d-flex column r-g-1">
                    <ProjectHeading4>DESIGN BRIEF</ProjectHeading4>
                    <ProjectParagraph>
                        AllSpace needed me to create their social media posts to share all this information over Instagram, Facebook, Linked in and Twitter. They wanted
                        to maintain clean minimalistic posts either with photographs of their properties or with simple illustrations.
                </ProjectParagraph>
                </div>
                <div className="d-flex column r-g-1">
                    <ProjectHeading4>DESIGN APPROACH</ProjectHeading4>
                    <ProjectParagraph>
                        The AllSpace logo was quite bright and up until Inkling intervened, the colour palate was also limited. We chose to add three more colours besides
                        the red to give each social media post more visual interest. Besides this we added some graphic elements to the posts that blend into the background
                        without disturbing the content but also make the post more interesting. The overall posts are clean and simple such that the matter stands out.
                </ProjectParagraph>
                </div>
            </div>
        </div>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/AllSpace_Ventures/AllSpace_insta_JnP_iTILu.png?tr=w-1000" />
        <NavButtons prev="armor" pName="Armor Security" next="snapdeal" nName="Snapdeal" />
    </Fragment>
}