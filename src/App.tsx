import { Projects } from './components/projects/Projects';
import { About } from './components/about/About';
import { Hero } from './components/hero/Hero';
import Header from "./components/header/Header"
import { Download, ArrowRight, Linkedin, Mail, Github, Phone } from 'lucide-react/';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <section id='resume' className="hero min-h-[90vh] bg-base-200">
        <div className="hero-content flex-col-reverse lg:flex-row gap-16">
            <div className="mockup-phone hidden lg:grid">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1 bg-base-100">
                  <div className='flex flex-col items-center text-center'>
                    {/* Put screenshot of CV here! */}
                  </div>

                </div>
              </div>
            </div>
          <div className=''>
            <h1 className="text-5xl font-bold pb-10">Resume</h1>
            <p className="text-lg pb-10 max-w-3xl">
              I'm always looking for new opportunities and challenges. Feel free to download my resume for a concise overview of my skills and experience.
            </p>
            <a href="" className="btn btn-primary">Download<Download /></a>
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
          <a className="btn btn-primary">
            Contact
            <ArrowRight />
          </a>
        </nav>
      </footer>
    </>
  )
}

export default App
