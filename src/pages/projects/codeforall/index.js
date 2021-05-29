import { Fragment } from 'react'
// special components
import ScrollToTopOnMount from '../../../atoms/scrollToTop'
// components
import { NavButtons } from '../../../molecules/navbuttons'
import { Title } from '../../../atoms/title'
import { Heading1 } from '../../../atoms/heading1'
import { ProjectHeading4 } from '../../../atoms/heading4'
import { ImportantText } from '../../../atoms/importantText'
import { ProjectParagraph } from '../../../atoms/paragraph'
import { Banner } from '../../../atoms/banner'

export const CodeForAll = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <div className="d-flex column xmd-row ipp-column r-g-1 col-10 col-xmd-8 col-ipp-10 col-xlg-6 g-3 margin-center my-2 my-xmd-4 my-ipp-2 my-lg-5">
            <Title className="col-12 col-xmd-3 col-ipp-12">CODE FOR ALL</Title>
            <div className="d-flex column r-g-2 col-12 col-xmd-9 col-ipp-12">
                <Heading1>
                    The entire campaing brand image with logo and social media presence.
                </Heading1>
                <div className="d-flex column r-g-1">
                    <ProjectHeading4>SERVICES</ProjectHeading4>
                    <ImportantText>
                        Branding, Illustration, E-mail Marketing, Signage, Print, Stationary, Social.
                </ImportantText>
                </div>
                <div className="d-flex column r-g-1">
                    <ProjectHeading4>CONTEXT</ProjectHeading4>
                    <ProjectParagraph>
                        ITK needed help to pass on the message that coding is important. Therefore “Code for all” was
                        created as a campaign to share that message. It is a campaign that is trying to spread awareness
                        about what coding is and how it is going to be beneficial to everyone from every profession in
                        the near future.
                    </ProjectParagraph>
                </div>
            </div>
        </div>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Code_for_all/CFA_brochure_FerSKwt23.png?tr=h-1000" />
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Code_for_all/cfa_horizontal_image_ZNJBiqQbR.png" />
        <div className="d-flex column xmd-row col-12">
            <div className="d-flex center align-center col-12 col-xmd-6">
                <div className="d-flex column col-10 col-xmd-8 py-3 r-g-1">
                    <ProjectHeading4>DESIGN BRIEF</ProjectHeading4>
                    <ProjectParagraph>
                        For the campaign, I had to create a logo that can be easy to replicate on social media platforms and a brochure
                        to send out to people. The colours needed to remain the ITK colors such that it would be easy to associate the
                        campaign with the product, but the graphics needed to stand out on its own.
                    </ProjectParagraph>
                    <ProjectHeading4>DESIGN APPROACH</ProjectHeading4>
                    <ProjectParagraph>
                        The logo needed to be easily identified with code, therefore we decided to create a wordmork rather than create another
                        symbol. To make it more obvious, the font used is one that is regularly used to code. The highlighted word and the underscore
                        mark add to the visual language of writing code.
                    </ProjectParagraph>
                    <ProjectParagraph>
                        For the brochure we created a graphic element that represent blocks. Block based programming is an integral part to the ITK way
                        of learning code. It simplifies code into code blocks such that the user just needs to understand arrange them in a logical order. This
                        makes code more fun, approacheable and conceptual and less about the details and syntax. The small illustrations on top of the blocks
                        represent the different benefits of code such as logical thinking, understanding technology etc.
                    </ProjectParagraph>
                </div>
            </div>
            <Banner className="col-12 col-xmd-6" src="https://ik.imagekit.io/bizwem110d/inkling/Code_for_all/CFA_insta_Z0AQIkQYC.png?tr=h-500" />
        </div>
        <div className="d-flex col-10 col-xlg-6 margin-center my-2 my-xmd-4 my-lg-5">
            <NavButtons prev="/portfolio/mainbhiambani" next="/portfolio/tcscfeedback" />
        </div>
    </Fragment>
}