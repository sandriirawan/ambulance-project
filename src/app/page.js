"use client"
import Home from "../app/components/moleculs/Home"
import Service from "../app/components/moleculs/Service"
import About from "../app/components/moleculs/About"
import Footer from "../app/components/atoms/Footer"
import { animateScroll } from "react-scroll";
import NavbarComponent from "./components/atoms/navbar"


export default function App() {


  const options = {
    duration: 500,
    smooth: true,
    containerId: "1",
  };

  const scrollTo = () => {
    animateScroll.scrollTo(1000, options);
  };
  return (
    <>
      <main className="overflow-x-hidden">
        <NavbarComponent />
        <div className='flex w-screen h-screen bg-background' id="1">
          <Home />
        </div>
        <div className='flex w-screen h-auto' id="2">
          <Service />
        </div>
        <div className='w-screen h-screen bg-white-300' id="3">
          <About />
        </div>
        <div>

        </div>
      </main >
      <footer className="overflow-x-hidden" id="4">
        <Footer />
      </footer>
    </>
  )
}
