import { ArrowDown, ArrowRight } from "lucide-react";
import img from "../../assets/image.jpeg";
import CV from "../../assets/roman-pretty-resume.pdf";

export function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={img} className="lg:max-w-sm sm:max-w-xs max-w-32 object-contain overflow-hidden rounded-full shadow-2xl" />
        <div>
          <h1 className="text-5xl md:text-6xl text-center md:text-start font-bold pb-10">
            <span className="font-light">Hey,</span> I'm Roman Pretty
          </h1>
          <p className="text-lg pb-10 max-w-3xl text-center md:text-start text-zinc-600">
        I'm a third-year Computer Science student at Queen Mary University of
        London, consistently achieving First Class grades in all completed
        modules. My career aspiration is to excel in Software Engineering,
        innovating solutions for practical challenges.
      </p>
      <div className="flex-row flex items-end justify-center md:justify-start">
        <a
          href="#about"
          className="btn btn-neutral rounded-md hover:bg-zinc-700"
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
