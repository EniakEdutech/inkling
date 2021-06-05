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

export const AadhiyaranAgrarianServices = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/mobile_backgrounds_redone/Aadhiyaran_1_Jyg2RW6wO.png" position="right" size="cover"
            desImage="https://ik.imagekit.io/bizwem110d/inkling/Aadhiyaran_web_1_b6emWag8y.png">
            <div className="d-flex column g-2 col-6 col-md-8 margin-center py-5 py-md-7 py-xmd-5 py-ipp-7 py-lg-5">
                <div className="d-flex column">
                    <Title>AADHIYARAN AGRARIAN SERVICES</Title>
                    <ProjectHeading1>Design for the community’s brand identity.</ProjectHeading1>
                </div>
                <div className="d-flex column xmd-row ipp-column col-12 r-g-2 c-g-1">
                    <div className="d-flex column r-g-1 col-xmd-3 col-ipp-12">
                        <ProjectHeading4>Services</ProjectHeading4>
                        <ProjectText>
                            Branding, Stationary, Print Material.
                        </ProjectText>
                    </div>
                    <div className="d-flex column r-g-1 col-xmd-9 col-ipp-12">
                        <ProjectHeading4>Context</ProjectHeading4>
                        <ProjectParagraph>
                            Aadhiyaran’s vision is to improve the overall quality of life for the socially, economically disadvantaged
                            small &amp; marginal scale farmers in India. This they want to achieve by getting farmers to work together
                            and use sustainable agricultural practices.
                    </ProjectParagraph>
                    </div>
                </div>
            </div>
        </BIContainer>
        <div className="d-flex column xmd-row col-12 col-xlg-8 margin-center">
            <Banner className="col-xmd-4" src="https://ik.imagekit.io/bizwem110d/inkling/Aadhiyaran_Agrarian_Services/Aadhiyaran_logo_tu13sSJID.png" />
            <Banner className="col-xmd-8" src="https://ik.imagekit.io/bizwem110d/inkling/Aadhiyaran_Agrarian_Services/Aadhiyaran_cards_v1HcYI1_Q.png?tr=w-1000" />
        </div>
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/mobile_backgrounds_redone/Aadhiyaran_2_K1kjCH-zK.png" size="cover"
            desImage="https://ik.imagekit.io/bizwem110d/inkling/Aadhiyaran_web_2_PisLaVXB4.png">
            <div className="d-flex column lg-row col-6 col-md-8 margin-center r-g-2 c-g-1 py-3 py-md-4 py-xmd-5">
                <ProjectHeading1 className="flex-lg-3">The sustainable farming community</ProjectHeading1>
                <div className="d-flex column center flex-lg-7 r-g-1">
                    <ProjectHeading4>Design Brief</ProjectHeading4>
                    <ProjectParagraph>
                        The meaning of Aadhiyaran in Tamil is ‘Protector of Nature’. The logo had to be one that could represent
                        that very obviously. The logo also had to look natural and give off a positive and hopeful vibe.
                    </ProjectParagraph>
                </div>
            </div>
        </BIContainer>
        <div className="d-flex column xmd-row col-xlg-8 xlg-margin-center">
            <Banner className="col-xmd-6" src="https://ik.imagekit.io/bizwem110d/inkling/Aadhiyaran_Agrarian_Services/Aadhiyaran_tshirt_0rd-EmIk2.png?tr=w-1000" />
            <BIContainer className=""
                desImage="https://ik.imagekit.io/bizwem110d/inkling/Aadhiyaran_web_3_-_wfjhJKw.png" size="cover" position="right top">
                <div className="d-flex column xmd-center col-6 col-md-8 h-md-100 margin-center py-4 px-xmd-4 r-g-1">
                    <ProjectHeading4>DESIGN APPROACH</ProjectHeading4>
                    <ProjectParagraph>
                        Time and again the bee has been associated with healthy farms and healthy plant life and
                        thus in the final logo that was designed, the bee represents protector of nature. The wings
                        of the bee also look like leaves. It gives the appearance of a bee carrying the burden and
                        blessing that is nature on its back and grain on its feet. The upward trajectory of the bee
                        can be associated with hope and positivity.
                </ProjectParagraph>
                </div>
            </BIContainer>
        </div>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Aadhiyaran_Agrarian_Services/Aadhiyaran_bags_rus2TC8D5.png?tr=w-1000" />
        <NavButtons prev="snapdeal" pName="Snapdeal" next="pathways" nName="Pathways" />
    </Fragment>
}