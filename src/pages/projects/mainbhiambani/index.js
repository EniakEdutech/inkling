import { Fragment } from 'react'
// special components
import ScrollToTopOnMount from '../../../atoms/scrollToTop'
// components
import { NavButtons, StickyNavButtons } from '../../../molecules/navbuttons'
import { Title } from '../../../atoms/title'
import { Heading4 } from '../../../atoms/heading4'
import { ImportantText } from '../../../atoms/importantText'
import { Text } from '../../../atoms/text'
import { Paragraph } from '../../../atoms/paragraph'
import { UnorderedList } from '../../../atoms/unorderedList'
import { ListItem } from '../../../atoms/listItem'
import { Banner } from '../../../atoms/banner'

export const MainBhiAmbani = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <div class="flex column r-g-1 w-80 w-xlg-50 margin-center my-2 my-lg-5">
            <Title>Main Bhi Ambani</Title>
            <div className="flex column lg-row r-g-1">
                <div className="flex-lg-3 flex column r-g-1">
                    <Heading4>Services</Heading4>
                    <ImportantText>Web Development, Data Collection strategy, Cloud Architecture.
                    </ImportantText>
                </div>
                <div className="flex-lg-7 flex column r-g-1">
                    <Heading4>Context</Heading4>
                    <Paragraph>
                        We consulted a major social influencer on a social experiment called “Mai Bhi Ambani”. It is a web
                        app that allows one to metaphorically place oneself into the ownership of the staggering net worth
                        of Mr. Mukesh Ambani (40,000.000,000,000 INR) and browse through a list of items they wish to buy
                        using that wealth.
                </Paragraph>
                </div>
            </div>
            <NavButtons prev="/portfolio/eniak" next="/portfolio/tcscfeedback" />
        </div>
        <Banner src="https://ik.imagekit.io/bizwem110d/inkling/Main_bhi_Ambani/mainbhiambani-banner-1_iLApmpYn2.png" />
        <StickyNavButtons prev="/portfolio/eniak" next="/portfolio/tcscfeedback" />
        <div className="flex column lg-row g-1 w-80 w-xlg-50 margin-center my-2 my-lg-5">
            <div className="flex column r-g-1 flex-lg-1">
                <Heading4>Goal</Heading4>
                <Paragraph>
                    The goal of the experiment was to understand what would
                    people hypothetically buy when they have that kind of
                    staggering wealth.
                </Paragraph>
                <Heading4>Research</Heading4>
                <Text>Experiment Stages:</Text>
                <UnorderedList>
                    <ListItem>Defining the data structure</ListItem>
                    <ListItem>Data collection strategy - Application Layer</ListItem>
                    <ListItem>Analyzing</ListItem>
                    <ListItem>Distilling the data.</ListItem>
                </UnorderedList>
            </div>
            <div className="flex column r-g-1 flex-lg-1">
                <Heading4>Challenges</Heading4>
                <UnorderedList>
                    <ListItem>Multi-Lingual (As the target market’s primary language as Hindi)</ListItem>
                    <ListItem>Robust Server Architecture because of the existing social capital of the Influencer</ListItem>
                </UnorderedList>
                <Heading4>Learnings</Heading4>
                <Paragraph>
                    The question comes first. The questions define the structure
                    of the data, which enables the insights to be generated.
                </Paragraph>
            </div>
        </div>
        <Banner src="https://ik.imagekit.io/bizwem110d/inkling/Main_bhi_Ambani/Main_bhi_Ambani_aVzqkXzCy.png" />
    </Fragment>
}