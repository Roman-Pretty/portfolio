import { ArrowRight } from 'lucide-react';
import img from '../../assets/image.png';

export function Hero() {

    return (
        <div className="hero min-h-[90vh] overflow-hidden pb-0 mt-[5rem]" id='hero'>
            <div className="hero-content flex-col lg:flex-row-reverse h-full pb-0">
                <div className="lg:flex items-end h-full hidden relative w-[20vw]">
                    <img src={img} alt="Hero" className=" transform -scale-x-100 absolute -right-[18vw] min-w-[50vw] overflow-hidden" />
                </div>
                <div className=''>
                    <h1 className="text-5xl md:text-6xl font-bold pb-10">Hey, I'm <span className='text-primary'>Roman Pretty</span></h1>
                    <p className="text-lg pb-10 max-w-3xl text-zinc-600">
                        I'm a second-year Computer Science student at Queen Mary University of London, consistently achieving First Class grades in all completed modules. My career aspiration is to excel in Software Engineering, innovating solutions for practical challenges.</p>
                    <a href="#about" className="btn btn-neutral hover:bg-zinc-700 rounded-md">Find out More <ArrowRight strokeWidth={1.6} /></a>
                </div>
            </div>
        </div>
    )
}
