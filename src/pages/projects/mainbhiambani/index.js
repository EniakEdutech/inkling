import { Fragment } from 'react'
// special components
import ScrollToTopOnMount from '../../../atoms/scrollToTop'
// components
import { NavButtons } from '../../../molecules/navbuttons'
import { Title } from '../../../atoms/title'
import { ProjectHeading4 } from '../../../atoms/heading4'
import { ImportantText } from '../../../atoms/importantText'
import { Text } from '../../../atoms/text'
import { ProjectParagraph } from '../../../atoms/paragraph'
import { UnorderedList } from '../../../atoms/unorderedList'
import { ListItem } from '../../../atoms/listItem'
import { Banner } from '../../../atoms/banner'

export const MainBhiAmbani = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <div className="d-flex column r-g-1 col-10 col-xlg-6 margin-center my-2 my-lg-5">
            <Title>Main Bhi Ambani</Title>
            <div className="d-flex column lg-row r-g-1">
                <div className="flex-lg-3 d-flex column r-g-1">
                    <ProjectHeading4>Services</ProjectHeading4>
                    <ImportantText>Web Development, Data Collection strategy, Cloud Architecture.
                    </ImportantText>
                </div>
                <div className="flex-lg-7 d-flex column r-g-1">
                    <ProjectHeading4>Context</ProjectHeading4>
                    <ProjectParagraph>
                        We consulted a major social influencer on a social experiment called “Mai Bhi Ambani”. It is a web
                        app that allows one to metaphorically place oneself into the ownership of the staggering net worth
                        of Mr. Mukesh Ambani (40,000.000,000,000 INR) and browse through a list of items they wish to buy
                        using that wealth.
                </ProjectParagraph>
                </div>
            </div>
            <NavButtons prev="/portfolio/eniak" next="/portfolio/tcscfeedback" />
        </div>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Main_bhi_Ambani/mainbhiambani-banner-1_iLApmpYn2.png" />
        <div className="d-flex column lg-row g-1 col-10 col-xlg-6 margin-center my-2 my-lg-5">
            <div className="d-flex column r-g-1 flex-lg-1">
                <ProjectHeading4>Goal</ProjectHeading4>
                <ProjectParagraph>
                    The goal of the experiment was to understand what would
                    people hypothetically buy when they have that kind of
                    staggering wealth.
                </ProjectParagraph>
                <ProjectHeading4>Research</ProjectHeading4>
                <Text>Experiment Stages:</Text>
                <UnorderedList>
                    <ListItem>Defining the data structure</ListItem>
                    <ListItem>Data collection strategy - Application Layer</ListItem>
                    <ListItem>Analyzing</ListItem>
                    <ListItem>Distilling the data.</ListItem>
                </UnorderedList>
            </div>
            <div className="d-flex column r-g-1 flex-lg-1">
                <ProjectHeading4>Challenges</ProjectHeading4>
                <UnorderedList>
                    <ListItem>Multi-Lingual (As the target market’s primary language as Hindi)</ListItem>
                    <ListItem>Robust Server Architecture because of the existing social capital of the Influencer</ListItem>
                </UnorderedList>
                <ProjectHeading4>Learnings</ProjectHeading4>
                <ProjectParagraph>
                    The question comes first. The questions define the structure
                    of the data, which enables the insights to be generated.
                </ProjectParagraph>
            </div>
        </div>
        <Banner className="" src="https://ik.imagekit.io/bizwem110d/inkling/Main_bhi_Ambani/Main_bhi_Ambani_aVzqkXzCy.png" />
    </Fragment>
}