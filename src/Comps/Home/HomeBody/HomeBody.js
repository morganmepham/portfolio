import LinkedIn from '../LinkedIn/LinkedIn';
import Github from '../Github/Github'
import TopSkills from '../TopSkills/TopSkills';
import HomeText from '../HomeText/HomeText'
import './HomeBody.css'
import QuickProjects from '../QuickProjects/QuickProjects';
import QuickAbout from '../QuickAbout/QuickAbout';

const HomeBody = () => {
    return (
        <div className="home-body-div">
            <h3 className="home-name">Morgan Mepham</h3>
            <HomeText />
            <TopSkills />
            <QuickProjects />
            <QuickAbout />
            <LinkedIn />
            <Github />
        </div>
    );
}
 
export default HomeBody;