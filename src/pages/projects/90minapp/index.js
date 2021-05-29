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

export const Ninetyminapp = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <div className="d-flex column g-1 col-10 col-xmd-8 col-ipp-10 col-xlg-6 margin-center py-2 py-md-3 py-xmd-4 py-ipp-3 py-lg-5">
            <Title>90MIN APP CHALLENGE</Title>
            <Heading1>The logo, graphic elements and printables.</Heading1>
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
                        One of ITK’s main marketing tools is the 90 Min App Challenge. The intention of creating this
                        was to share a fast preview of what we offer through the course and to make users more aware
                        about the benefits of using “Block based programming”. Here the child uses code blocks that
                        are like puzzle pieces and sets them in a logical order to create an App.
                    </ProjectParagraph>
                </div>
            </div>
        </div>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/90_Min_App_Challenge/90min_logo_LwfeKLTs-.png" />
        <div className="d-flex column xmd-row col-10 col-xlg-6 margin-center g-1 py-2 py-md-3 py-xmd-4">
            <Heading1 className="flex-xmd-3">Create amazing Apps&nbsp;in 90 mins.</Heading1>
            <div className="d-flex column flex-xmd-7 r-g-1">
                <ProjectHeading4>Design Brief</ProjectHeading4>
                <ProjectParagraph>
                    Apps and Games are an exciting output. The fact that a child can create one so fast was important.
                    Therefore the wordmark for 90min App Challenge had to highlight the word ‘App’. The wordmark also
                    needed to be flashy.
                </ProjectParagraph>
                <ProjectHeading4>Design Approach</ProjectHeading4>
                <ProjectParagraph>
                    The word-mark created we used the zero as a representation of a phone flooded with apps that are
                    being shared. The font used is not clean and classic but more retro.
                </ProjectParagraph>
            </div>
        </div>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/90_Min_App_Challenge/90min_pamphlet_f4S5mNkYr.png?tr=w-1000" />
        <NavButtons prev="codeforall" pName="Code For All" next="doolally" nName="Doolally" />
    </Fragment>
}