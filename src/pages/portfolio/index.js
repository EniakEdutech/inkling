import { Component } from 'react'
import styled from 'styled-components'
// components
import { Button } from '../../atoms/button'
import { Project } from '../../organisms/project'

const ContainerDiv = styled.div`
min-height: var(--small-screen-100vh);
@media screen and (min-width: 768px) {
    min-height: var(--tablet-screen-100vh);
}

@media screen and (min-width: 992px) {
    min-height: var(--small-desktop-screen-100vh);
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    min-height: var(--ipadpro-screen-100vh);
}

@media screen and (min-width: 2560x) {
    min-height: var( --extra-large-screen-100vh);
}
`

const CategoryContainerDiv = styled.div`
margin: 50px 5px 20px 5px;
background-color: var(--primary-text);
overflow-x: auto;
white-space: nowrap;

@media screen and (min-width: 768px) {
    justify-content: center;
}
`

const CategoryDiv = styled.div`
padding: 10px 30px;
border: 1px solid var(--primary-light-variant);
color: var(--primary-light-variant);
cursor: pointer;

&:hover {
    color: var(--primary-dark-variant);
}

&.selected {
    border: 1px solid var(--primary-dark-variant);
    background-color: var(--primary-dark-variant);
    color: var(--primary-text);
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
        return <ContainerDiv className="flex column w-100 w-md-80 w-xlg-50 margin-center">
            <CategoryContainerDiv className="flex">
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
            <div className="flex wrap">
                {this.state.showProjects.map((project, index) => <Project
                    height={window.outerHeight < "992px" ? "25vh" : "40vh"}
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image + '?tr=w-500,h-250,fo-center'}
                    alt={project.alt}
                    link={"/portfolio/" + project.link} />)}
            </div>
            {this.state.count < this.state.projects.length &&
                <div className="flex center" style={{ margin: "50px" }}>
                    <Button onClick={this.increaseCount} showmore>Show more</Button>
                </div>
            }
        </ContainerDiv>
    }
}