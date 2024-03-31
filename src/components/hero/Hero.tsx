import { Zap } from 'lucide-react';

export function Hero() {

    return (
        <div className="hero min-h-[90vh] bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className=''>
                    <h1 className="text-5xl font-bold pb-10">Hey, I'm Roman Pretty</h1>
                    <p className="text-lg pb-10 max-w-3xl">
                        I'm a second-year Computer Science student at Queen Mary University of London, consistently achieving First Class grades in all completed modules. My career aspiration is to excel in Software Engineering, innovating solutions for practical challenges.</p>
                    <a href="#about" className="btn btn-neutral btn-outline">Find out More <Zap strokeWidth={1.6} /></a>
                </div>
            </div>
        </div>
    )
}
