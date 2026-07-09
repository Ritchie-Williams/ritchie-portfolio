import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import JournalPage from "./pages/JournalPage";
import ProjectsPage from "./pages/ProjectsPage";
import SpotifyPage from "./pages/SpotifyPage";
import TimelinePage from "./pages/TimelinePage";
import CredentialsPage from "./pages/CredentialsPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/spotify" element={<SpotifyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/credentials" element={<CredentialsPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;