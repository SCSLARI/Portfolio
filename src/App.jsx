import Sidebar from './components/sidebar';
import MainContent from './components/MainContent';
import './styles/components/app.sass';



function App() {

  return (
    <div id="portfolio">
      <h1>Larissa Spinelli</h1>
      <Sidebar/>
      <MainContent/>
    </div>
  )
}

export default App
