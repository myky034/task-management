import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProject from './components/NoProject';
import SideBar from './components/SideBar';

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  };

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return{
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  let content;

  if(projectState.selectedProjectId === null) {
    content = <NewProject />
  } else if(projectState.selectedProjectId === undefined) {
    content = <NoProject />
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <SideBar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  )
}

export default App
