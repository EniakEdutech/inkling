import { Fragment, Component } from 'react'
import styled from 'styled-components'
// components
import { NavMenu } from '../../molecules/navmenu'
import { Project } from '../../organisms/project'

const CategoryContainerDiv = styled.div`
margin: 20px 0;
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
                    image: "https://ik.imagekit.io/bizwem110d/default-image.jpg",
                    alt: "Eniak",
                    // link="/eniak",
                    category: ['Design', 'Development']
                },
                {
                    title: "ITK",
                    description: "Information Technology Kindergarden",
                    image: "https://ik.imagekit.io/bizwem110d/default-image.jpg",
                    alt: "ITK",
                    category: ['Design', 'Curriculum Design']
                },
                {
                    title: "90 min",
                    description: "90 minute application challenge",
                    image: "https://ik.imagekit.io/bizwem110d/default-image.jpg",
                    alt: "90min",
                    category: ['Development']
                },
                {
                    title: "Code for all",
                    description: "Code for all",
                    image: "https://ik.imagekit.io/bizwem110d/default-image.jpg",
                    alt: "Code for all",
                    category: ['Curriculum Design']
                }
            ],
            showProjects: [],
            category: 'all'
        }
    }

    componentDidMount() {
        this.categorySelector('all')
    }

    categorySelector = category => {
        if (category === 'all') {
            this.setState({
                showProjects: this.state.projects,
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
            this.setState({
                showProjects: showProjectList,
                category: category,
            })
        }
    }

    render() {
        return <Fragment>
            <NavMenu />
            <div className="flex column w-100 w-md-80 w-xlg-50 margin-center">
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
                    {this.state.showProjects.map(project => <Project key={project.title} title={project.title} description={project.description} image={project.image} alt={project.alt} />)}
                </div>
            </div>
        </Fragment>
    }
}