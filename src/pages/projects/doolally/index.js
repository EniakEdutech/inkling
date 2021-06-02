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

export const Doolally = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/Backgrounds_for_mobile/doolally_mob_1_YIP8MiGaG.png" position="right top" size="cover"
            desImage="https://ik.imagekit.io/bizwem110d/inkling/doolally_web_1_k2Jvm2Ma2.png">
            <div className="d-flex column g-1 col-6 col-xmd-8 col-ipp-6 col-xlg-8 margin-center py-5 py-md-7 py-xmd-5 py-ipp-7 py-lg-5">
                <Title>DOOLALLY</Title>
                <ProjectHeading1>Illustration and Poster design.</ProjectHeading1>
                <div className="d-flex column xmd-row ipp-column col-12 g-1">
                    <div className="d-flex column col-xmd-3 col-ipp-12">
                        <ProjectHeading4>Services</ProjectHeading4>
                        <ImportantText>
                            E-mail Marketing, Posters, Illustration.
                    </ImportantText>
                    </div>
                    <div className="d-flex column col-xmd-9 col-ipp-12">
                        <ProjectHeading4>Context</ProjectHeading4>
                        <ProjectParagraph>
                            Doolally Taproom is a microbrewery in Bandra, Andheri and Kemp’s corner in Mumbai. They are
                            known for their brilliant range of beers and for their amazing house fries. The place has a very casual
                            vibe where people can chat, play board games and read. The ambience of the place is spacious and
                            brighter than regular beer joints. It is decorated with a bunch of cool and quirky posters about each
                            of their beers.
                    </ProjectParagraph>
                    </div>
                </div>
            </div>
        </BIContainer>
        <div className="d-flex column xmd-row col-12 col-xlg-8 xlg-margin-center">
            <Banner className="col-xmd-6" src="https://ik.imagekit.io/bizwem110d/inkling/Doolally/Doolally_poster2_irR3RpwEN.png?tr=w-1000" />
            <Banner className="col-xmd-6" src="https://ik.imagekit.io/bizwem110d/inkling/Doolally/Doolally_poster1_TK4TOmsmw.png?tr=w-1000" />
        </div>
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/Backgrounds_for_mobile/doolally_mob_2_vFlrw_2Ap.png" position="right" size="cover"
            desImage="https://ik.imagekit.io/bizwem110d/inkling/doolally_web_2_T6Zdc3Y4D.png">
            <div className="d-flex column xmd-row col-6 col-md-8 margin-center g-1 py-3 py-md-4 py-xmd-5">
                <ProjectHeading1 className="flex-xmd-3">A beer created by Belgian monks in secret.</ProjectHeading1>
                <div className="d-flex column flex-xmd-7 r-g-1">
                    <ProjectHeading4>Design Brief</ProjectHeading4>
                    <ProjectParagraph>
                        One of the beers at Doolally is called ‘Abbey Blonde’. This beer was originally created by Belgian monks
                        in secret. I had to create a quirky illustration for the beer that hinted at  the word Belgium or Blonde in
                        some way. The illustration style had to black line art.
                </ProjectParagraph>
                    <ProjectHeading4>Design Approach</ProjectHeading4>
                    <ProjectParagraph>
                        There were two illustrations that were shortlisted. In the first one, I tried to take the word blonde and use
                        it quite literally to be a blonde haired woman. I imagined the woman to be some sort of mermaid in the beer.
                        Her hair would be the froth and her body would sit aligned with the beer mug. The second illustration was
                        traditional Belgian Abbey with closed windows with secretive monks creating the beer inside. After several
                        discussions, the illustration finally chosen was that of the Abbey.
                </ProjectParagraph>
                </div>
            </div>
        </BIContainer>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Doolally/Doolally_finalposter1-01_RV2jbJUMj.png?tr=w-1000" />
        <NavButtons prev="90-min-app" pName="90min App Challenge" next="armor" nName="Armor Security" />
    </Fragment>
}