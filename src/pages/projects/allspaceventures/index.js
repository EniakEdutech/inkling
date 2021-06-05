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

export const AllSpaceVentures = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/mobile_backgrounds_redone/Allspace_1_5_LYdUT9p.png" position="right" size="cover"
            desImage="https://ik.imagekit.io/bizwem110d/inkling/Allspace_web_1_viXWlIEBI.png">
            <div className="d-flex column g-2 col-6 col-md-8 margin-center py-5 py-md-7 py-xmd-5 py-ipp-7 py-lg-5">
                <div className="d-flex column">
                    <Title>ALLSPACE VENTURES</Title>
                    <ProjectHeading1>Design for all their social media content.</ProjectHeading1>
                </div>
                <div className="d-flex column xmd-row ipp-column col-12 r-g-2 c-g-1">
                    <div className="d-flex column r-g-1 col-xmd-3 col-ipp-12">
                        <ProjectHeading4>Services</ProjectHeading4>
                        <ProjectText>
                            Social Media posts, Illustration.
                        </ProjectText>
                    </div>
                    <div className="d-flex column r-g-1 col-xmd-9 col-ipp-12">
                        <ProjectHeading4>Context</ProjectHeading4>
                        <ProjectParagraph>
                            AllSpace Ventures is a real estate company that has a unique proposal. They sell single properties to a
                            bunch of stakeholders such that they can all enjoy the property as a vacation home at different times.
                            This is a concept called fractional ownership.
                        </ProjectParagraph>
                    </div>
                </div>
            </div>
        </BIContainer>
        <Banner contain className="" src="https://ik.imagekit.io/bizwem110d/inkling/AllSpace_Ventures/AllSpace_fb_WBb0QZ2dg.png?tr=w-1000" />
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/mobile_backgrounds_redone/AllSpace_2_0xt_76KAt.png" position="right top" size="cover"
            desImage="https://ik.imagekit.io/bizwem110d/inkling/Allspace_web_2_3vKr-PhaSJ.png">
            <div className="d-flex center align-center col-6 col-md-8 margin-center py-5 py-md-7 py-xmd-5 py-ipp-7 py-lg-5">
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
        </BIContainer>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/AllSpace_Ventures/AllSpace_insta_JnP_iTILu.png?tr=w-1000" />
        <NavButtons prev="armor-security" pName="Armor Security" next="snapdeal" nName="Snapdeal" />
    </Fragment>
}