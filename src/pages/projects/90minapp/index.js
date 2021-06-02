import { Fragment } from 'react'
// special component
import ScrollToTopOnMount from '../../../atoms/scrollToTop'
// components
import { NavButtons } from '../../../molecules/navbuttons'
import { Title } from '../../../atoms/title'
import { ProjectHeading1 } from '../../../atoms/heading1'
import { ProjectHeading4 } from '../../../atoms/heading4'
import { ImportantText } from '../../../atoms/importantText'
import { ProjectParagraph } from '../../../atoms/paragraph'
import { Banner } from '../../../atoms/banner'
import { BIContainer } from '../../../atoms/bicontainer'

export const Ninetyminapp = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/Backgrounds_for_mobile/90min_mob_1_xzHbYh10S.png" position="right" size="cover"
            desImage="https://ik.imagekit.io/bizwem110d/inkling/90min_web_1_6bw0GjrlZ.png">
            <div className="d-flex column g-2 col-6 col-md-8 margin-center py-5 py-md-7 py-xmd-5 py-ipp-7 py-lg-5">
                <Title>90MIN APP CHALLENGE</Title>
                <ProjectHeading1>The logo, graphic elements and printables.</ProjectHeading1>
                <div className="d-flex column xmd-row ipp-column col-12 g-2">
                    <div className="d-flex column r-g-1 col-xmd-3 col-ipp-12">
                        <ProjectHeading4>Services</ProjectHeading4>
                        <ImportantText>
                            Branding, E-mail Marketing, Signage, Print, Stationary, Social.
                            </ImportantText>
                    </div>
                    <div className="d-flex column r-g-1 col-xmd-9 col-ipp-12">
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
        </BIContainer>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/90_Min_App_Challenge/90min_logo_LwfeKLTs-.png" />
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/Backgrounds_for_mobile/90min_mob_2_VwtGdwbt5.png" size="cover" position="right"
            desImage="https://ik.imagekit.io/bizwem110d/inkling/90min_web_2_aIT4E6CKyL.png">
            <div className="d-flex column xmd-row col-6 col-md-8 margin-center r-g-2 c-g-1 py-3 py-md-4 py-xmd-5">
                <ProjectHeading1 className="flex-xmd-3">Create amazing Apps&nbsp;in 90 mins.</ProjectHeading1>
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
        </BIContainer>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/90_Min_App_Challenge/90min_pamphlet_f4S5mNkYr.png?tr=w-1000" />
        <NavButtons prev="code-for-all" pName="Code For All" next="doolally" nName="Doolally" />
    </Fragment>
}