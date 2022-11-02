import './ProjectsGrid.css'

import html_icon from '../../../images/html_icon.png'
import css_icon from '../../../images/css_icon.png'
import js_icon from '../../../images/js_icon.png'
import react_icon from '../../../images/react_icon.png'
import jest_icon from '../../../images/jest_icon.png'
import chartjs_icon from '../../../images/chartjs_icon.png'
import githubW_icon from '../../../images/githubW_icon.png'
import live_icon from '../../../images/live_icon.png'

import money_tracker from '../../../images/money_tracker.PNG'
import movie_review from '../../../images/movie_review.PNG'
import dyson_cyclone from '../../../images/dyson_cyclone.PNG'
import freelance from '../../../images/freelance.PNG'
import pokedex from '../../../images/Pokedex.PNG'

const ProjectsGrid = () => {
    const projects = [
        {title: 'Money Tracker', techStack: ['React', 'Javascript', 'ChartJs', 'CSS', 'HTML', 'Jest'], disc: 'This is a web application to help track your money. Features include, adding contacts, monitoring transactions, setting a budget and more! The bulk of the app uses local storage data, which I found would work best for me in this case due to my need to store multiple user accounts and transaction data between contacts. In addition, I branched out and used to ChartJs Library to incorporate an analytics page.', imgSrc: money_tracker, git: 'https://github.com/morganmepham/money-tracker', live: 'https://morgan-moneytracker.netlify.app/'},

        {title: 'Pokemon Database', techStack: ['React', 'Javascript', 'CSS', 'HTML'], disc: 'This project fulfilled a childhood dream of mine, building my very own Pokedex. I used the PokeAPI for this project as it provided all the data I needed and most importantly, the ability to call as many results in one call as i like. The site allows you to search through the original 151 Pokemon and click on each pokemon to display unique information. ', imgSrc: pokedex, git: 'https://github.com/morganmepham/pokemon_database', live: 'https://pokedex-morgan.netlify.app/'},

        {title: 'Movie Reviews', techStack: ['Javascript', 'CSS', 'HTML'], disc: 'In this application I worked with The Movie Database API to allow users to search through millions of Movies and TV shows. The API allowed me to receive data on the title such as revenue and runtime and display this for the user. I took this further with the ability to leave reviews and add to a watch list. Reviews are displayed on a leaderboard with filter options between Movies, TV shows, and TV shows as seasons.', imgSrc: movie_review, git: 'https://github.com/morganmepham/Media-Rating-App', live: 'https://movieapp-review.netlify.app/'},

        {title: 'Dyson Cyclone landing page', techStack: ['Javascript', 'CSS', 'HTML'], disc: 'The purpose of the application was to demonstaright responsive design aross all devices. I chose to design a site for the Dyson Cyclone v10 product with slight interactivty. Features include, an image carousel, product stats, and mobile sidebar navigation.', imgSrc: dyson_cyclone, git: 'https://github.com/morganmepham/Dyson-Cyclone-v10-Responsive-design', live: 'https://dyson-cyclone.netlify.app/'},

        {title: 'Freelance work', techStack: ['React', 'Javascript', 'CSS', 'HTML'], disc: 'I have done a small amout of freelance work in order to further my technical skills as well as my ability to turn a clients ideas and instuctions into final product. This example is a Private Tutoring site for the purpose of highlighting the tutuors teaching sunjects and rates.', imgSrc: freelance, git: 'https://github.com/morganmepham/rhi-portfolio', live: 'https://rhi-website.netlify.app/'}
    ]

    return (
        <div className="proj-grid-div">

            {projects.map((proj) => {
                return <div className="proj-gird-item" key={proj.title}>
                <h3 className="proj-item-title">{proj.title}</h3>

                <div className="tech-stack-div">
                    <p className="tech-stack-title">Tech Stack</p>
                    {proj.techStack.map((tech) => {
                        return <p className="tech-stack-name" key={tech}>{tech}</p>
                    })}
                </div>

                <p className="proj-item-disc">{proj.disc}</p>

                <img src={proj.imgSrc} alt="Project Preview" className="proj-item-img" />

                <div className="proj-item-buttons-div">
                    <a className='proj-link' href={proj.live} target= '_blank'>
                    <div className="live-button">
                        <p className="live-button-text">Live Site</p>
                        <img src={live_icon} alt="Live Icon" className="live-icon" />
                    </div>
                    </a>

                    <a className='proj-link' href={proj.git} target= '_blank'>
                    <div className="git-button">
                        <p className="git-button-text">Source Code</p>
                        <img src={githubW_icon} alt="Github Icon" className="git-icon" />
                    </div>
                    </a>
                </div>
            </div>
            })}

        </div>
    );
}
 
export default ProjectsGrid;