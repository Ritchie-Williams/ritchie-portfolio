import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
        </>
    );
}

export default Home;