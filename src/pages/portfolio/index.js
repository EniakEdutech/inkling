import { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'
// statics
import dropdown from '../../assets/dropdown.svg'
import allProjects from '../../assets/allProjects.svg'
import design from '../../assets/design.svg'
import development from '../../assets/development.svg'
import cDesign from '../../assets/curriculumDesign.svg'
// components
import ScrollToTopOnMount from '../../atoms/scrollToTop'
import { Button } from '../../atoms/button'
import { Project } from '../../organisms/project'
import { ImportantText } from '../../atoms/importantText'

import { Image } from '../../atoms/image'

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

const CategoryDiv = styled.div`
box-shadow: 0px 0px 10px 0px var(--primary-lighter-variant);
border-radius: 5px;
top: 5em;
position: absolute;
z-index: 2;
background-color: white;
${props => props.toggleShow ? css`
display: flex;
` : css`
display: none;
`}

@media screen and (min-width: 992px) {
    display: flex;
    position: unset;
    box-shadow: none;
    border-radius: 0px;
    overflow-x: auto;
    white-space: nowrap;
}
`

const Category = styled.div`
cursor: pointer;
padding: 10px 0;
&>img {
    width: 15px;
}

@media screen and (min-width: 992px) {
    &>img {
        width: 20px;
    }
}

@media screen and (min-width: 1200px) {
    &>img {
        width: 30px;
    }
}
`

const CategoryImpText = styled(ImportantText)`
font-family: 'Montserrat', sans-serif;
color: var(--primary-light-variant);
text-transform: capitalize;
font-size: 13px;
letter-spacing: 1px;

&.selected {
    position: relative;
    padding-bottom: 5px;
}

&.selected::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40%;
    height: 1px;
    border-bottom: 1px solid black;
}

@media screen and (min-width: 992px) {
    &.selected::before {
        left: 20%;
        bottom: -10px;
    }
}
`

const CategoryMenuDiv = styled.div`
@media screen and (min-width: 992px) {
    display: none;
}
`

const CategoryMenu = styled(CategoryImpText)`
font-size: 16px;
text-transform: uppercase;
font-weight: 400;
letter-spacing: 0px;

&.screen {
    display: none;
}

@media screen and (min-width: 992px) {
    position: relative;
    padding: 1em 0;

    &.screen {
        display: flex;
    }

    &::before {
        content: '';
        position: absolute;
        left: 20%;
        width: 60%;
        bottom: 10px;
        height: 1px;
        border-bottom: 1px solid black;
    }
}
`

const CategoryDropdown = styled(Image)`
width: 15px;
transition: .5s ease;

${props => props.show && css`
transform: rotateZ(180deg);
`}
`

const ProjectDiv = styled.div`
z-index: 1;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-gap: 3em;
`

const StyledPortfolioLink = styled(Button)`
box-shadow: none;
border-radius: 0px;
color: var(--primary-light-variant);
padding: 15px 30px;
border: transparent;
font-size: 17px;
font-family: 'Montserrat', san-serif;
font-weight: 700;
letter-spacing: 2px;
position: relative;
cursor: pointer;

&:before {
    content: '';
    position: absolute;
    top: 0;
    border-top: 1px solid var(--primary-light-variant);
    width: 50%;
    transition: .5s ease;
}

&:after {
    content: '';
    position: absolute;
    bottom: 0;
    border-top: 1px solid var(--primary-light-variant);
    width: 30%;
    transition: .5s ease;
}

&:hover {
    text-decoration: none;
    box-shadow: none;

    &:before {
        width: 30%;
    }

    &:after {
        width: 50%;
    }
}

&:active {
    box-shadow: none;
}
`

export class Portfolio extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {
                    title: "Eniak",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/Eniak_project_images/small-01_ZFX3FoFYE.png?tr=w-500,h-500",
                    alt: "Eniak",
                    link: "eniak",
                    category: ['Design', 'Development'],
                    cardType: "square"
                },
                {
                    title: "ITK",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/ITK_project/ITK_illustration_RFbw68B8k.png",
                    alt: "ITK",
                    link: "itk",
                    category: ['Development', 'Curriculum Design'],
                    cardType: "tall"
                },
                {
                    title: "90min app challenge",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/90_Min_App_Challenge/90min_logo_LwfeKLTs-.png?tr=w-800,h-500",
                    alt: "90 min app challenge",
                    link: "90minapp",
                    category: ['Development', 'Curriculum Design'],
                    cardType: "square"
                },
                {
                    title: "Code for All",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/Code_for_all/CFA_logo_FRqV2ki7NB.png?tr=h-500",
                    alt: "code for all",
                    link: "codeforall",
                    category: ['Development', 'Curriculum Design'],
                    cardType: "square"
                },
                {
                    title: "AllSpace Ventures",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/AllSpace_Ventures/AllSpace_insta_JnP_iTILu.png?tr=h-500",
                    alt: "all space ventures",
                    link: "allspace",
                    category: ['Design'],
                    cardType: "square"
                },
                {
                    title: "Aadhiyaran Agrarian Services",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/Aadhiyaran_Agrarian_Services/Aadhiyaran_cards_v1HcYI1_Q.png?tr=h-500",
                    alt: "aadhiyaran agrarian services",
                    link: "agrarian",
                    category: ['Design'],
                    cardType: "tall"
                },
                {
                    title: "Doolally",
                    image: "https://ik.imagekit.io/bizwem110d/inkling/Doolally/Doolally_finalposter1-01_RV2jbJUMj.png?tr=h-500",
                    alt: "doolally",
                    link: "doolally",
                    category: ['Design'],
                    cardType: "large"
                }
            ],
            showProjects: [],
            count: 5,
            category: 'all',
            showCat: true,
        }
    }

    componentDidMount() {
        this.categorySelector('all')
    }

    toggleCategories = () => {
        this.setState(prevState => {
            return {
                showCat: !prevState.showCat
            }
        })
    }

    categorySelector = async (category) => {
        if (category === 'all') {
            this.setState({
                showProjects: this.state.projects.slice(0, this.state.count),
                category: 'all'
            })
            this.toggleCategories()
        } else {
            let showProjectList = []
            this.state.projects.map(project => {
                if (project.category.includes(category)) {
                    showProjectList.push(project)
                }
                return null
            })
            this.setState({
                showProjects: showProjectList.slice(0, this.state.count),
                category: category,
            })
            this.toggleCategories()
        }
    }

    increaseCount = async () => {
        await this.setState({
            count: this.state.count + 5
        })
        this.categorySelector(this.state.category)
    }

    render() {
        return <Fragment>
            <ScrollToTopOnMount />
            <ParentContainer>
                <div className="flex column w-80 w-xlg-50 margin-center py-3 relative">
                    <CategoryMenuDiv className="flex align-center c-g-1 pb-3">
                        <CategoryMenu onClick={this.toggleCategories}>Categories</CategoryMenu>
                        <CategoryDropdown src={dropdown} alt="dropdown" show={this.state.showCat} />
                    </CategoryMenuDiv>
                    <div className="flex center">
                        <CategoryMenu className="screen py-2">Categories</CategoryMenu>
                    </div>
                    <CategoryDiv className="column xmd-row xmd-space-between lg-space-evenly w-80 w-md-50 w-xmd-80 w-xlg-50 margin-center pl-2 py-2 px-xmd-unset" toggleShow={this.state.showCat}>
                        <Category className="flex align-center c-g-1" onClick={() => this.categorySelector('all')}>
                            <Image src={allProjects} alt="all projects" />
                            <CategoryImpText
                                className={this.state.category === 'all' && "selected"}>All Projects</CategoryImpText>
                        </Category>
                        <Category className="flex align-center c-g-1" onClick={() => this.categorySelector('Design')}>
                            <Image src={design} alt="design" />
                            <CategoryImpText
                                className={this.state.category === 'Design' && "selected"}>Design</CategoryImpText>
                        </Category>
                        <Category className="flex align-center c-g-1" onClick={() => this.categorySelector('Development')}>
                            <Image src={development} alt="development" />
                            <CategoryImpText
                                className={this.state.category === 'Development' && "selected"}>Development</CategoryImpText>
                        </Category>
                        <Category className="flex align-center c-g-1" onClick={() => this.categorySelector('Curriculum Design')}>
                            <Image src={cDesign} alt="curriculum" />
                            <CategoryImpText
                                className={this.state.category === 'Curriculum Design' && "selected"}>Curriculum Design</CategoryImpText>
                        </Category>
                    </CategoryDiv>
                    <ProjectDiv>
                        {this.state.showProjects.map((project, index) => <Project
                            key={index}
                            title={project.title}
                            image={project.image}
                            alt={project.alt}
                            link={"/portfolio/" + project.link}
                            cardType={project.cardType} />)}
                    </ProjectDiv>
                    {this.state.count < this.state.projects.length &&
                        <div className="flex center" style={{ margin: "50px" }}>
                            <StyledPortfolioLink onClick={this.increaseCount} className="flex center align-center my-2">view more</StyledPortfolioLink>
                        </div>
                    }
                </div>
            </ParentContainer>
        </Fragment>
    }
}