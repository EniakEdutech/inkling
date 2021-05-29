import { Fragment } from 'react'
// special components
import ScrollToTopOnMount from '../../../atoms/scrollToTop'
// components
import { NavButtons } from '../../../molecules/navbuttons'
import { Title } from '../../../atoms/title'
import { ProjectHeading4 } from '../../../atoms/heading4'
import { ImportantText } from '../../../atoms/importantText'
import { ProjectParagraph } from '../../../atoms/paragraph'
import { UnorderedList } from '../../../atoms/unorderedList'
import { ListItem } from '../../../atoms/listItem'
import { Image } from '../../../atoms/image'

export const TCSCFeedback = props => {
    return <Fragment>
        <ScrollToTopOnMount />
        <div className="d-flex column r-g-1 col-10 col-xlg-6 margin-center my-2 my-lg-5">
            <Title>Thakur College Feedback System</Title>
            <div className="d-flex column lg-row r-g-1">
                <div className="flex-lg-3 d-flex column r-g-1">
                    <ProjectHeading4>Services</ProjectHeading4>
                    <ImportantText>
                        Web Development, Data Collection strategy, Cloud Architecture.
                    </ImportantText>
                </div>
                <div className="flex-lg-7 d-flex column r-g-1">
                    <ProjectHeading4>Context</ProjectHeading4>
                    <ProjectParagraph>
                        Thakur College Of Science and Commerce used to implement a tedious and time-consuming
                        process of manually collecting feedback, managing that data and creating reports.
                    </ProjectParagraph>
                </div>
            </div>
            <div className="d-flex column lg-row r-g-1">
                <div className="flex-lg-3 d-flex column r-g-1">
                    <ProjectHeading4>Tools &amp; Tech</ProjectHeading4>
                    <UnorderedList liststyle="none">
                        <ListItem>MySQL - Database</ListItem>
                        <ListItem>Web Server - Apache</ListItem>
                        <ListItem>Backend - PHP</ListItem>
                        <ListItem>Frontend - HTML, CSS, Javascript, AJAX</ListItem>
                    </UnorderedList>
                </div>
                <div className="flex-lg-7 d-flex column r-g-1">
                    <ProjectHeading4>Goal</ProjectHeading4>
                    <ProjectParagraph>
                        Design and Develop a system that reduced the time consumed, erased the possibility of human
                        error, and made management of the entered data, and generation of reports – digital, automated
                        and convenient.
                    </ProjectParagraph>
                </div>
            </div>
            <NavButtons prev="/portfolio/eniak" next="/portfolio/mainbhiambani" />
        </div>
        <div className="d-flex column lg-row g-2 col-10 col-xlg-6 my-1 my-md-3 my-lg-5 margin-center">
            <Image src="https://ik.imagekit.io/bizwem110d/inkling/TCSC_Feedback/tcsc-banner-1_mAiOSZvKY.png" className="flex-lg-1" />
            <div className="d-flex column center r-g-3 col-12 my-1 my-md-2 my-lg-3 margin-center flex-lg-1">
                <ProjectHeading4>Research</ProjectHeading4>
                <ProjectParagraph>
                    We identified a few errors within the system through personal experience. To
                    further understand the system’s shortcomings, we conducted multiple interviews with
                    Mr.Mahesh Gurunani who is currently a senior faculty member of the college. The goal was
                    to understand the requirements, identify and define the scope of the problem and get an
                    idea of the limitations of the current system.
                </ProjectParagraph>
                <ProjectHeading4>MVP</ProjectHeading4>
                <ProjectParagraph>
                    A completely centralized and convenient web app for feedback, data storage and automated
                    report generation for teachers and students.The first version of the web app included the
                    following features:
                </ProjectParagraph>
                <UnorderedList>
                    <ListItem>
                        Allowing students to anonymously give feedback about their overall student
                        experience within the college.
                    </ListItem>
                    <ListItem>
                        Enabling admin(s) to:
                        <UnorderedList>
                            <ListItem>
                                Define course structure
                            </ListItem>
                            <ListItem>
                                Generate reports and also directly convert the reports into different data formats for
                                additional analysis.
                            </ListItem>
                            <ListItem>
                                Uniformly define the structure and the questions that will be asked during the
                                feedback process.
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                </UnorderedList>
            </div>
        </div>
    </Fragment>
}