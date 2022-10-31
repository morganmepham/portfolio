import './ProjectsHeader.css'
import Github from '../../Home/Github/Github'
import githubW_icon from '../../../images/githubW_icon.png'

const ProjectsHeader = () => {
    return (
        <div className="project-header-div">
            <h2 className="project-header-title">Take a look at some of my work</h2>
            <a className='proj-header-link' href='https://github.com/morganmepham' target='_blank'>
            <div className="proj-github-link">
                <p className="proj-github-link-text">morganmepham</p>
                <img src={githubW_icon} alt="Github Icon" className="github-link-icon" />
            </div>
            </a>
        </div>
    );
}
 
export default ProjectsHeader;