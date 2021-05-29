import { Fragment } from 'react'
// special components
import ScrollToTopOnMount from '../../../atoms/scrollToTop'
import { NavButtons } from '../../../molecules/navbuttons'
import { Title } from '../../../atoms/title'
import { Heading1 } from '../../../atoms/heading1'
import { ProjectHeading4 } from '../../../atoms/heading4'
import { ImportantText } from '../../../atoms/importantText'
import { ProjectParagraph } from '../../../atoms/paragraph'
import { Banner } from '../../../atoms/banner'

export const Itk = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <div className="d-flex column r-g-1 col-10 col-xlg-6 margin-center my-2 my-xmd-4 my-lg-5">
            <div className="d-flex column lg-row">
                <Title className="flex-lg-3">ITK</Title>
                <Heading1 className="flex-lg-7">Bringing computational thinking to school children.</Heading1>
            </div>
            <div className="d-flex column lg-row r-g-1">
                <div className="flex-lg-3 d-flex column r-g-1">
                    <ProjectHeading4>Services</ProjectHeading4>
                    <ImportantText>Branding, Illustration, E-mail Marketing, Signage, Print, Stationary, Social.
                    </ImportantText>
                </div>
                <div className="flex-lg-7 d-flex column r-g-1">
                    <ProjectHeading4>Context</ProjectHeading4>
                    <ProjectParagraph>
                        ITK or Information technology kindergarten is a sub-brand to Eniak that is bringing computational
                        thinking to children in schools. ITK plans to make children understand the importance of this through
                        a unique and simplified approach to coding and programming. Through a bunch of unplugged (offline)
                        and plugged (online) activities the child will get exposed to the vast sector of coding using ITK’s
                        own software.
                </ProjectParagraph>
                </div>
            </div>
            <NavButtons prev="" next="" />
        </div>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/ITK_project/ITK_illustration_RFbw68B8k.png" />
        <div className="d-flex column col-10 col-xlg-6 margin-center g-1 my-2 my-md-3 my-lg-4">
            <ProjectHeading4>Design Brief</ProjectHeading4>
            <ProjectParagraph>
                To stand alone as a product of Eniak, ITK needed its own logo that could symbolize coding in a very obvious manner but also be playful.
                Besides the logo, several other deliverables such as t-shirts, calendars, pamphlets etc. For this purpose, a suitable illustration was needed
                as a graphic element to be replicated in various ways. We also had to create a user friendly software to package the quality curriculum. It
                needed to be playful enough for a child to find exciting but also intuitive enough for a teacher to manage the student learning easily
            </ProjectParagraph>
        </div>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/ITK_project/ITK_Calendar_MydHJPR4-.png?tr=w1000" />
        <div className="d-flex column xmd-row">
            <div className="d-flex column xmd-center col-10 col-xmd-6 col-lg-4 margin-center py-2 px-xmd-4 r-g-1">
                <ProjectHeading4>Design Brief</ProjectHeading4>
                <ProjectParagraph>
                    The angle brackets in the ITK logo is an obvious and common symbol used to define a piece of computer code.
                    This helps to associate the brand with code or information technology very instantly. To associate the brand with
                    children was a simple case of using the right colors.
                </ProjectParagraph>
            </div>
            <Banner className="col-xmd-6" src="https://ik.imagekit.io/bizwem110d/inkling/ITK_project/ITK_tshirt_bcfqQOk5N.png?tr=w-1000" />
        </div>
        <div className="d-flex column-reverse xmd-row">
            <Banner className="col-xmd-6" src="https://ik.imagekit.io/bizwem110d/inkling/ITK_project/ITK_brochure_ewW0HXvhx.png?tr=w-1000" />
            <div className="d-flex column xmd-center col-10 col-xmd-6 col-lg-4 margin-center py-2 px-xmd-4 r-g-1">
                <ProjectParagraph>
                    The ITK software has been designed in such a manner that a child can browse
                    through it with as much ease as an adult. The fundamental portion of the software are
                    the labs. Through a whole lot of practical yet simplified application of code, these labs will
                    help the child learn concept after concept with a sense of ease and freedom. There are four
                    different labs that the child must venture through to pick up the essential skills of coding.
                    These include the maze lab, story lab, game lab and app lab.
                </ProjectParagraph>
            </div>
        </div>
    </Fragment>
}