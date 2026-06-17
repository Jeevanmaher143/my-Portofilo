import React, { useState } from "react";
import { Box } from "@mui/material";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";

import AutomationHero from "./components/automation/AutomationHero";
import AutomationSkills from "./components/automation/AutomationSkills";
import AutomationProjects from "./components/automation/AutomationProjects";
import AutomationExperience from "./components/automation/AutomationExperience";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("manual");

  return (
    <Box>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <CustomCursor activeTab={activeTab} />

      <main style={{ paddingTop: 64 }}>
        {activeTab === "manual" && (
          <>
            <div id="home">       <Hero />       </div>
            <div id="skills">     <Skills />     </div>
            <div id="experience"> <Experience /> </div>
            <div id="projects">   <Projects />   </div>
            <div id="about">      <About />      </div>
            <div id="contact">    <Contact />    </div>
          </>
        )}

        {activeTab === "automation" && (
          <>
            <div id="home">       <AutomationHero />       </div>
            <div id="skills">     <AutomationSkills />     </div>
            <div id="experience"> <AutomationExperience /> </div>
            <div id="projects">   <AutomationProjects />   </div>
            <div id="contact">    <Contact variant="automation" /> </div>
          </>
        )}
      </main>

      <Footer activeTab={activeTab} />
    </Box>
  );
}

export default App;
