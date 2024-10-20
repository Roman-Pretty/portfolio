import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react/';
import CVImage from "./assets/resume.png";
import CV from "./assets/roman-pretty-resume.pdf";
import { About } from './components/about/About';
import Header from "./components/header/Header";
import { Hero } from './components/hero/Hero';
import { Projects } from './components/projects/Projects';

function App() {


  return (
    <main className='grainy'>
      <div className='absolute inset-0 h-screen  z-0 overflow-hidden'>
      <svg
        className="h-full "
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 800 380"
        opacity="0.41"
      >
            <defs>
              <filter
                id="bbblurry-filter"
                x="-100%"
                y="-100%"
                width="400%"
                height="400%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feGaussianBlur
                  stdDeviation="104"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="SourceGraphic"
                  edgeMode="none"
                  result="blur"
                ></feGaussianBlur>
              </filter>
            </defs>
            <g filter="url(#bbblurry-filter)">
              <ellipse
                rx="232"
                ry="150"
                cx="477.95324750645455"
                cy="310.1803669830523"
                fill="hsl(37, 99%, 67%)"
              ></ellipse>
              <ellipse
                rx="232"
                ry="150"
                cx="276.76577670527007"
                cy="527.0428622245029"
                fill="hsl(316, 73%, 52%)"
              ></ellipse>
              <ellipse
                rx="232"
                ry="150"
                cx="319.8900740790177"
                cy="173.5929888036854"
                fill="hsl(185, 100%, 57%)"
              ></ellipse>
            </g>
          </svg>
          </div>

      <Hero />
      <Header />
      <About />
      <Projects />
      <section id='resume' className="hero min-h-[90vh] bg-base-200/50">
        <div className="hero-content flex-col-reverse lg:flex-row gap-16">
            <div className="mockup-phone hidden lg:grid">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1 bg-base-100">
                  <div className='flex flex-col items-center text-center'>
                    <img src={CVImage} className='max-w-full max-h-full'></img>
                  </div>

                </div>
              </div>
            </div>
          <div className=''>
            <h1 className="text-5xl font-bold pb-10">Resume</h1>
            <p className="text-lg pb-10 max-w-3xl text-zinc-600">
              I'm always looking for new opportunities and challenges. Download my resume for a concise overview of my skills and experience.
            </p>
            <a href={CV} download={true} className="btn btn-neutral rounded-md hover:bg-zinc-700">Download<ArrowDown /></a>
          </div>
        </div>
      </section>

      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end items-center">
          <a href='https://www.linkedin.com/in/roman-pretty-054800209/' target="_blank" rel="noopener noreferrer"><Linkedin /></a>
          <a href='https://www.github.com/Roman-Pretty' target="_blank" rel="noopener noreferrer"><Github /></a>
          <a href='mailto:romanjjpretty@gmail.com'><Mail /></a>
          <a href='tel:+447493402029'><Phone /></a>
          <a href='mailto:romanjjpretty@gmail.com' className="btn btn-secondary rounded-md">
            Contact Me
            <ArrowRight />
          </a>
        </nav>
      </footer>
    </main>
  )
}

export default App
