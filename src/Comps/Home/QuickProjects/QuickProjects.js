import './QuickProjects.css'    
import projects_img from '../../../images/projects_img.png'
import { useNavigate } from 'react-router-dom'


const QuickProjects = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/projects')
    }
    return (
        <div className="quick-proj-div" onClick={handleClick}>
                <img src={projects_img} alt="Code Base" className="quick-proj-img" />
                <p className="quick-proj-text">Projects</p>
        </div>
    );
}
 
export default QuickProjects;