import { Fragment } from 'react'
// special components
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

export const Eniak = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/mobile_backgrounds_redone/eniak_1_dn30D-RFXG.png" position="right top" size="cover"
            desImage="https://ik.imagekit.io/bizwem110d/inkling/eniakproject_web_1_RwutNliMs.png">
            <div className="d-flex column g-2 col-6 col-md-8 margin-center py-5 py-md-7 py-xmd-5 py-ipp-7 py-lg-5">
                <div className="d-flex column xmd-row ipp-column c-g-1">
                    <Title className="flex-xmd-3 flex-ipp-1">Eniak</Title>
                    <ProjectHeading1 className="flex-xmd-7 flex-ipp-1">Making educational and technological reform.</ProjectHeading1>
                </div>
                <div className="d-flex column xmd-row r-g-2 c-g-1">
                    <div className="flex-xmd-3 d-flex column r-g-1">
                        <ProjectHeading4>Services</ProjectHeading4>
                        <ProjectText>
                            Branding, E-mail Marketing, Signage, Print, Stationary, Social.
                        </ProjectText>
                    </div>
                    <div className="flex-xmd-7 d-flex column r-g-1">
                        <ProjectHeading4>Context</ProjectHeading4>
                        <ProjectParagraph>
                            Eniak (Educational network of information and knowledge) works in the EduTech sector creating
                            innovative and unique products/services for greater educational and technological reform. Eniak
                            is a parent company to its pilot product ITK that explores education and technology. Not only is
                            Eniak venturing into improving technological literacy for younger children but also for college
                            children and graduates.
                        </ProjectParagraph>
                    </div>
                </div>
            </div>
        </BIContainer>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Eniak_project_images/tiny2-01_tOFi8YDp3.png" />
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/mobile_backgrounds_redone/eniak_2_mxu69tiKvw.png" position="right top" size="cover"
            desImage="https://ik.imagekit.io/bizwem110d/inkling/eniakproject_web_2_xkkLzr-7c.png" desPosition="left bottom">
            <div className="d-flex column xmd-row ipp-column col-6 col-md-8 margin-center r-g-2 c-g-1 py-3 py-md-4 py-xmd-5">
                <ProjectHeading1 className="flex-xmd-3 flex-ipp-1">A revolutionary way&nbsp;to approach education.</ProjectHeading1>
                <div className="d-flex column flex-xmd-7 flex-ipp-1 r-g-2">
                    <div className="d-flex column r-g-1">
                        <ProjectHeading4>Design Brief</ProjectHeading4>
                        <ProjectParagraph>Eniak as a parent company needs to encompass all its different components (products and
                        services) which together forms a revolutionary way to approach education.
                        </ProjectParagraph>
                    </div>
                    <div className="d-flex column r-g-1">
                        <ProjectHeading4>Design Approach</ProjectHeading4>
                        <ProjectParagraph>
                            The eniak logo is a representation of something  called a fractal which is the smallest unit
                            of a pattern that when repeated in large numbers always remains the same. The fractal is in
                            perspective to represent momentum. A fractal in motion seemed to represent the different
                            components of eniak and the revolutionary aspect.
                        </ProjectParagraph>
                    </div>
                </div>
            </div>
        </BIContainer>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Eniak_project_images/small-01_ZFX3FoFYE.png" />
        <Banner contain className="" src="https://ik.imagekit.io/bizwem110d/inkling/Eniak_project_images/ENIAK_ClWusekxn.png" />
        <NavButtons prev="main-bhi-ambani" pName="Main Bhi Ambani" next="itk" nName="I.T. Kindergarden" />
    </Fragment>
}