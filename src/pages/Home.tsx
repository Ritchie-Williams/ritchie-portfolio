import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";

function Home() {
    return (
        <>
            <Hero />
            <div id="about">
            <About />
            </div>
            <div id="skills">
            <Skills />
            </div>
        </>
    );
}

export default Home;