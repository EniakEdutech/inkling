import { Fragment } from 'react'
// special components
import ScrollToTopOnMount from '../../../atoms/scrollToTop'
// components
import { NavButtons } from '../../../molecules/navbuttons'
import { Title } from '../../../atoms/title'
import { ProjectHeading4 } from '../../../atoms/heading4'
import { ProjectText } from '../../../atoms/text'
import { Text } from '../../../atoms/text'
import { ProjectParagraph } from '../../../atoms/paragraph'
import { UnorderedList } from '../../../atoms/unorderedList'
import { ListItem } from '../../../atoms/listItem'
import { Banner } from '../../../atoms/banner'
import { BIContainer } from '../../../atoms/bicontainer'

export const MainBhiAmbani = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/mobile_backgrounds_redone/Mainbhi_1_sB-LGL4Am.png" position="right" size="cover"
            desImage="https://ik.imagekit.io/bizwem110d/inkling/Armor_web_1_k3Ivpu6BW.png">
            <div className="d-flex column r-g-2 col-6 col-md-8 margin-center py-5 py-md-7 py-xmd-5 py-ipp-7 py-lg-5">
                <Title>Main Bhi Ambani</Title>
                <div className="d-flex column xmd-row ipp-column r-g-2 c-g-1">
                    <div className="flex-xmd-3 flex-ipp-1 d-flex column r-g-1">
                        <ProjectHeading4>Services</ProjectHeading4>
                        <ProjectText>Web Development, Data Collection strategy, Cloud Architecture.</ProjectText>
                    </div>
                    <div className="flex-xmd-7 flex-ipp-1 d-flex column r-g-1">
                        <ProjectHeading4>Context</ProjectHeading4>
                        <ProjectParagraph>
                            We consulted a major social influencer on a social experiment called “Mai Bhi Ambani”. It is a web
                            app that allows one to metaphorically place oneself into the ownership of the staggering net worth
                            of Mr. Mukesh Ambani (40,000.000,000,000 INR) and browse through a list of items they wish to buy
                            using that wealth.
                </ProjectParagraph>
                    </div>
                </div>
            </div>
        </BIContainer>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Main_bhi_Ambani/mainbhiambani-banner-1_iLApmpYn2.png" />
        <BIContainer className=""
            image="https://ik.imagekit.io/bizwem110d/inkling/mobile_backgrounds_redone/Mainbhi_2_XssJVku0h.png" position="top left" size="cover">
            <div className="d-flex column xmd-row g-2 col-6 col-md-8 margin-center py-5 py-md-7 py-xmd-5 py-ipp-7 py-lg-5">
                <div className="d-flex column r-g-2 flex-xmd-1">
                    <div className="d-flex column r-g-1">
                        <ProjectHeading4>Goal</ProjectHeading4>
                        <ProjectParagraph>
                            The goal of the experiment was to understand what would
                            people hypothetically buy when they have that kind of
                            staggering wealth.
                </ProjectParagraph>
                    </div>
                    <div className="d-flex column r-g-1">
                        <ProjectHeading4>Research</ProjectHeading4>
                        <div className="d-flex column">
                            <Text>Experiment Stages:</Text>
                            <UnorderedList>
                                <ListItem>Defining the data structure</ListItem>
                                <ListItem>Data collection strategy - Application Layer</ListItem>
                                <ListItem>Analyzing</ListItem>
                                <ListItem>Distilling the data.</ListItem>
                            </UnorderedList>
                        </div>
                    </div>
                </div>
                <div className="d-flex column r-g-2 flex-xmd-1">
                    <div className="d-flex column r-g-1">
                        <ProjectHeading4>Challenges</ProjectHeading4>
                        <UnorderedList>
                            <ListItem>Multi-Lingual (As the target market’s primary language as Hindi)</ListItem>
                            <ListItem>Robust Server Architecture because of the existing social capital of the Influencer</ListItem>
                        </UnorderedList>
                    </div>
                    <div className="d-flex column r-g-1">
                        <ProjectHeading4>Learnings</ProjectHeading4>
                        <ProjectParagraph>
                            The question comes first. The questions define the structure
                            of the data, which enables the insights to be generated.
                    </ProjectParagraph>
                    </div>
                </div>
            </div>
        </BIContainer>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Main_bhi_Ambani/Main_bhi_Ambani_aVzqkXzCy.png" />
        <NavButtons prev="klm" pName="KLM Royal Dutch Airlines" next="eniak" nName="Eniak" />
    </Fragment>
}