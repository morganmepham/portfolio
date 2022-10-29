import './Github.css'
import github_icon from '../../../images/github_icon.png'
import githubW_icon from '../../../images/githubW_icon.png'

const Github = () => {
    return ( 
        <div className="github-div">
            <a className='github-link' href='https://github.com/morganmepham' target='_blank'>
            <img src={github_icon} alt="GithubIcon" className="github-icon" />
            <img src={githubW_icon} alt="GithubIcon" className="github-icon github-white" />
            <p className="github-text">Github</p>
            </a>
        </div>
    );
}
 
export default Github;