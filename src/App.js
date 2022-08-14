import NavComponent from "./Components/Navigation/Nav";
// import Login from "./Components/Auth/Login";
import ProjectPage from "./Components/ProjectCategories/ProjectsPage";


function App() {
  return (
    <div className="App">
      <h1>Smart City Extravaganza !</h1>
      <NavComponent />
      <ProjectPage />
    </div>
  );
}

export default App;
