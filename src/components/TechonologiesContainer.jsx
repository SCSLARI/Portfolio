import {
    DiHtml5,
    DiCss3,
    DiSass,
    DiJsBadge,
    DiReact,
    DiMysql,

} from 'react-icons/di'

import "../styles/components/technologiescontainer.sass";


const tecnhologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "sass", name: "Sass", icon: <DiSass /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "mysql", name: "MySql", icon: <DiMysql /> },

]

function TechonologiesContainer() {
    return (<section className='technologies-container'>
        <h2>Tecnologias</h2>
        <div className='technologies-grid'>
            {tecnhologies.map((tech) => (
                <div className='technologies-card' id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className='technology-info'>
                        <h3>{tech.name}</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
    )

}

export default TechonologiesContainer