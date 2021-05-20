import { Component, Fragment } from 'react'
import styled from 'styled-components'
// components
import ScrollToTopOnMount from '../../atoms/scrollToTop'
import { Button } from '../../atoms/button'
import { Project } from '../../organisms/project'

const ParentContainer = styled.div`
background-image: url('https://ik.imagekit.io/bizwem110d/inkling/Projects_web_FvBoVS1BU.png?tr=w-400');
background-size: cover;

min-height: var(--small-screen-100vh);
@media screen and (min-width: 768px) {
    min-height: var(--tablet-screen-100vh);
    background-image: url('https://ik.imagekit.io/bizwem110d/inkling/Projects_web_FvBoVS1BU.png?tr=w-768');
}

@media screen and (min-width: 992px) {
    min-height: var(--small-desktop-screen-100vh);
    background-image: url('https://ik.imagekit.io/bizwem110d/inkling/Projects_web_FvBoVS1BU.png?tr=w-992');
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    min-height: var(--ipadpro-screen-100vh);
    background-image: url('https://ik.imagekit.io/bizwem110d/inkling/Projects_web_FvBoVS1BU.png?tr=w-1024');
}

@media screen and (min-width: 2560x) {
    min-height: var( --extra-large-screen-100vh);
    background-image: url('https://ik.imagekit.io/bizwem110d/inkling/Projects_web_FvBoVS1BU.png');
}
`

const CategoryContainerDiv = styled.div`
background-color: var(--primary-text);
overflow-x: auto;
white-space: nowrap;

@media screen and (min-width: 768px) {
    justify-content: center;
}
`

const CategoryDiv = styled.div`
padding: 10px 30px;
margin: 0 5px;
border-radius: 5px;
color: var(--primary-text);
background-color: var(--primary-lighter-variant);
cursor: pointer;
box-shadow: 5px 5px 5px 0px var(--primary-lightest-variant);

&:hover {
    background-color: var(--primary-lightest-variant);
    color: var(--primary-light-variant);
    box-shadow: 10px 10px 10px 0px var(--primary-light-variant);
}

&.selected {
    background-color: var(--primary-light-variant);
    box-shadow: 2px 2px 2px 0px var(--primary-lightest-variant);
}

&.selected:hover {
    color: var(--primary-text);
}
`

const ProjectDiv = styled.div`
row-gap: 1em;
@media screen and (hover:hover) {
    row-gap: 0;
}
`

export class Portfolio extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {
                    title: "Eniak",
                    description: "Eniak description",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/Eniak_project_images/Phone_5zgidaNEt.png",
                    alt: "Eniak",
                    link: "eniak",
                    category: ['Design', 'Development']
                },
                {
                    title: "Main Bhi Ambani",
                    description: "Spoofing the oligarch",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/Main_bhi_Ambani/mainbhiambani-banner-1_iLApmpYn2.png",
                    alt: "Main bhi ambani",
                    link: "mainbhiambani",
                    category: ['Development']
                },
                {
                    title: "Thakur College Feedback System",
                    description: "Feedback management system",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/TCSC_Feedback/tcsc-banner-1_mAiOSZvKY.png",
                    alt: "TCSC Feedback",
                    link: "tcscfeedback",
                    category: ['Development']
                },
                {
                    title: "ITK",
                    description: "Bringing computational thinking to school children.",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/ITK_project/ITK_illustration_RFbw68B8k.png",
                    alt: "ITK",
                    link: "itk",
                    category: ['Development', 'Curriculum Design']
                }
            ],
            showProjects: [],
            count: 6,
            category: 'all'
        }
    }

    componentDidMount() {
        this.categorySelector('all')
    }

    categorySelector = category => {
        if (category === 'all') {
            this.setState({
                showProjects: this.state.projects.slice(0, this.state.count),
                category: 'all'
            })
        } else {
            let showProjectList = []
            this.state.projects.map(project => {
                if (project.category.includes(category)) {
                    showProjectList.push(project)
                }
                return null
            })
            showProjectList.slice(0, this.state.count)
            this.setState({
                showProjects: showProjectList,
                category: category,
            })
        }
    }

    increaseCount = async () => {
        await this.setState({
            count: this.state.count + 6
        })
        this.categorySelector(this.state.category)
    }

    render() {
        return <Fragment>
            <ScrollToTopOnMount />
            <ParentContainer>
                <div className="flex column w-100 w-md-80 w-xlg-50 margin-center">
                    <CategoryContainerDiv className="flex py-2 py-md-3">
                        <CategoryDiv
                            onClick={() => this.categorySelector('all')}
                            className={this.state.category === 'all' && "selected"}>
                            All Projects
                    </CategoryDiv>
                        <CategoryDiv
                            onClick={() => this.categorySelector('Design')}
                            className={this.state.category === 'Design' && "selected"}>
                            Design
                    </CategoryDiv>
                        <CategoryDiv
                            onClick={() => this.categorySelector('Development')}
                            className={this.state.category === 'Development' && "selected"}>
                            Development
                    </CategoryDiv>
                        <CategoryDiv
                            onClick={() => this.categorySelector('Curriculum Design')}
                            className={this.state.category === 'Curriculum Design' && "selected"}>
                            Curriculum Design
                    </CategoryDiv>
                    </CategoryContainerDiv>
                    <ProjectDiv className="flex wrap">
                        {this.state.showProjects.map((project, index) => <Project
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image + '?tr=w-500,h-250,fo-center'}
                            alt={project.alt}
                            link={"/portfolio/" + project.link} />)}
                    </ProjectDiv>
                    {this.state.count < this.state.projects.length &&
                        <div className="flex center" style={{ margin: "50px" }}>
                            <Button onClick={this.increaseCount} showmore>Show more</Button>
                        </div>
                    }
                </div>
            </ParentContainer>
        </Fragment>
    }
}