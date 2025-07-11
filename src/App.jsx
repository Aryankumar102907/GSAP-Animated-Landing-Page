// import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";
import Menu from "./components/Menu.jsx";
import Contact from "./components/Contact.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
      // <div className="flex-center h-[100vh]">
      //     <h1 className="text-3xl text-indigo-300">Hello GSAP!</h1>
      // </div>
      <main>
        <Navbar />
        <Hero />
        {/* Scroll Testing */}
        {/* <div className="h-dvh bg-black" /> */}
        <Cocktails />
        <About />
        <Art />
        {/* <div className="h-dvh bg-black" /> */}
        <Menu />
        <Contact />
      </main>
    );
};

export default App;