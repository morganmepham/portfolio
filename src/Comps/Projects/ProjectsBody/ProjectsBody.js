import ProjectsGrid from '../ProjectsGrid/ProjectsGrid';
import ProjectsHeader from '../ProjectsHeader/ProjectsHeader';
import './ProjectsBody.css'

const ProjectsBody = () => {
    return (
        <div className="projects-body-div">
            <ProjectsHeader />
            <ProjectsGrid />
        </div>
    );
}
 
export default ProjectsBody;