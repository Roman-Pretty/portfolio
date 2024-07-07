import { ArrowDown, ArrowRight } from "lucide-react";
import img from "../../assets/image.png";
import CV from "../../assets/roman-pretty-resume.pdf";

export function Hero() {
  return (
    
    <div className="hero min-h-screen overflow-hidden pb-0" id="hero">
      <div className="hero-content flex-col lg:flex-row-reverse h-full pb-0 ">
        <div className="lg:flex items-end h-full hidden relative w-[20vw]">
          <img
            src={img}
            alt="Hero"
            className=" transform -scale-x-100 absolute -right-[18vw] min-w-[50vw] overflow-hidden"
          />
        </div>
        <div className="">
          <h1 className="text-5xl md:text-6xl text-center md:text-start font-bold pb-10">
            <span className="font-light">Hey,</span> I'm Roman Pretty
          </h1>
          {/* <div className="flex flex-row items-center">
          <div className="h-0.5 flex-1 bg-black"/>
          <Sparkle fill="#000" size={64} className="mx-2"/>
          </div> */}
          <p className="text-lg pb-10 max-w-3xl text-center md:text-start text-zinc-600">
            I'm a third-year Computer Science student at Queen Mary University
            of London, consistently achieving First Class grades in all
            completed modules. My career aspiration is to excel in Software
            Engineering, innovating solutions for practical challenges.
          </p>
          <div className="flex-row flex items-end justify-center md:justify-start">
            <a
              href="#about"
              className="btn btn-neutral rounded-full hover:bg-zinc-700"
            >
              Find out More <ArrowRight strokeWidth={1.6} />
            </a>
            <a
              href={CV}
              download={true}
              className="inline-flex ml-10 border-b-2 border-black pb-2 "
            >
              Download CV <ArrowDown strokeWidth={1.6} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
