import AboutContainer from "./AboutContainer";
import TechonologiesContainer from "./TechonologiesContainer";
import ProjectsContainer from "./ProjectsContainer";
import '../styles/components/maincontent.sass';


const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer/>
      <TechonologiesContainer/>
      <ProjectsContainer/>
    </main>
  )
}

export default MainContent