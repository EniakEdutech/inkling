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

export const AadhiyaranAgrarianServices = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <div className="d-flex column g-1 col-10 col-xmd-8 col-ipp-10 col-xlg-6 margin-center py-2 py-md-3 py-xmd-4 py-ipp-3 py-lg-5">
            <Title>AADHIYARAN AGRARIAN SERVICES</Title>
            <Heading1>Unbox Zindagi</Heading1>
            <div className="d-flex column xmd-row ipp-column col-12 g-1">
                <div className="d-flex column col-xmd-3 col-ipp-12">
                    <ProjectHeading4>Services</ProjectHeading4>
                    <ImportantText>
                        Branding, Stationary, Print Material.
                    </ImportantText>
                </div>
                <div className="d-flex column col-xmd-9 col-ipp-12">
                    <ProjectHeading4>Context</ProjectHeading4>
                    <ProjectParagraph>
                        Aadhiyaran’s vision is to improve the overall quality of life for the socially, economically disadvantaged
                        small &amp; marginal scale farmers in India. This they want to achieve by getting farmers to work together
                        and use sustainable agricultural practices.
                    </ProjectParagraph>
                </div>
            </div>
        </div>
        <div className="d-flex column xmd-row col-12">
            <Banner className="col-xmd-4" src="https://ik.imagekit.io/bizwem110d/inkling/Aadhiyaran_Agrarian_Services/Aadhiyaran_logo_tu13sSJID.png" />
            <Banner className="col-xmd-8" src="https://ik.imagekit.io/bizwem110d/inkling/Aadhiyaran_Agrarian_Services/Aadhiyaran_cards_v1HcYI1_Q.png?tr=w-1000" />
        </div>
        <div className="d-flex column lg-row col-10 col-xlg-6 margin-center g-1 my-2 my-md-3 my-lg-4">
            <Heading1 className="flex-lg-3">The sustainable farming community</Heading1>
            <div className="d-flex column center flex-lg-7 r-g-1">
                <ProjectHeading4>Design Brief</ProjectHeading4>
                <ProjectParagraph>
                    The meaning of Aadhiyaran in Tamil is ‘Protector of Nature’. The logo had to be one that could represent
                    that very obviously. The logo also had to look natural and give off a positive and hopeful vibe.
                </ProjectParagraph>
            </div>
        </div>
        <div className="d-flex column xmd-row">
            <Banner className="col-xmd-6" src="https://ik.imagekit.io/bizwem110d/inkling/Aadhiyaran_Agrarian_Services/Aadhiyaran_tshirt_0rd-EmIk2.png?tr=w-1000" />
            <div className="d-flex column xmd-center col-10 col-xmd-6 col-lg-4 margin-center py-2 px-xmd-4 r-g-1">
                <ProjectHeading4>DESIGN APPROACH</ProjectHeading4>
                <ProjectParagraph>
                    Time and again the bee has been associated with healthy farms and healthy plant life and
                    thus in the final logo that was designed, the bee represents protector of nature. The wings
                    of the bee also look like leaves. It gives the appearance of a bee carrying the burden and
                    blessing that is nature on its back and grain on its feet. The upward trajectory of the bee
                    can be associated with hope and positivity.
                </ProjectParagraph>
            </div>
        </div>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Aadhiyaran_Agrarian_Services/Aadhiyaran_bags_rus2TC8D5.png?tr=w-1000" />
        <NavButtons prev="snapdeal" pName="Snapdeal" next="pathwayslc" nName="Pathways" />
    </Fragment>
}