// import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

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