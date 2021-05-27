import { Fragment } from 'react'
// special components
import ScrollToTopOnMount from '../../../atoms/scrollToTop'
// components
import { NavButtons, StickyNavButtons } from '../../../molecules/navbuttons'
import { Title } from '../../../atoms/title'
import { Heading1 } from '../../../atoms/heading1'
import { Heading4 } from '../../../atoms/heading4'
import { ImportantText } from '../../../atoms/importantText'
import { Paragraph } from '../../../atoms/paragraph'
import { Banner } from '../../../atoms/banner'

export const Eniak = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <div class="d-flex column r-g-1 col-10 col-xlg-6 margin-center my-2 my-xmd-4 my-lg-5">
            <div className="d-flex column lg-row">
                <Title className="flex-lg-3">Eniak</Title>
                <Heading1 className="flex-lg-7">Making educational and technological reform.</Heading1>
            </div>
            <div className="d-flex column lg-row r-g-1">
                <div className="flex-lg-3 d-flex column r-g-1">
                    <Heading4>Services</Heading4>
                    <ImportantText>Branding, E-mail Marketing, Signage, Print, Stationary, Social.
                    </ImportantText>
                </div>
                <div className="flex-lg-7 d-flex column r-g-1">
                    <Heading4>Context</Heading4>
                    <Paragraph>
                        Eniak (Educational network of information and knowledge) works in the EduTech sector creating
                        innovative and unique products/services for greater educational and technological reform. Eniak
                        is a parent company to its pilot product ITK that explores education and technology. Not only is
                        Eniak venturing into improving technological literacy for younger children but also for college
                        children and graduates.
                </Paragraph>
                </div>
            </div>
            <NavButtons prev="/portfolio/mainbhiambani" next="/portfolio/tcscfeedback" />
        </div>
        <Banner src="https://ik.imagekit.io/bizwem110d/inkling/Eniak_project_images/tiny2-01_tOFi8YDp3.png" />
        <StickyNavButtons prev="/portfolio/mainbhiambani" next="/portfolio/tcscfeedback" />
        <div class="d-flex column lg-row col-10 col-xlg-6 margin-center g-1 my-2 my-md-3 my-lg-4">
            <Heading1 className="d-flex-lg-3">A revolutionary way&nbsp;to approach education.</Heading1>
            <div className="d-flex column flex-lg-7 r-g-1">
                <Heading4>Design Brief</Heading4>
                <Paragraph>Eniak as a parent company needs to encompass all its different components (products and
                services) which together forms a revolutionary way to approach education.
                </Paragraph>
                <Heading4>Design Approach</Heading4>
                <Paragraph>
                    The eniak logo is a representation of something  called a fractal which is the smallest unit
                    of a pattern that when repeated in large numbers always remains the same. The fractal is in
                    perspective to represent momentum. A fractal in motion seemed to represent the different
                    components of eniak and the revolutionary aspect.
                </Paragraph>
            </div>
        </div>
        <Banner src="https://ik.imagekit.io/bizwem110d/inkling/Eniak_project_images/small-01_ZFX3FoFYE.png" />
        <Banner src="https://ik.imagekit.io/bizwem110d/inkling/Eniak_project_images/ENIAK_ClWusekxn.png" />
    </Fragment>
}