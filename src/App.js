import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SectionContainer from "./pages/SectionContainer";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dev-portfolio" exact element={<SectionContainer/>}/>
        <Route path="/dev-portfolio/projects/:urlKey" element={<ProjectPage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
