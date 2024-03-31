export function About() {
    return (
        <section id='about' className="hero px-2 lg:px-24 min-h-screen flex flex-col items-center bg-base-200">
            <h2 className="text-3xl font-bold text-center py-10">My Story</h2>
            <p className="text-lg pb-10 max-w-3xl text-center">My dedication to learning extends beyond the classroom, as I actively seek out opportunities to deepen my knowledge and expertise through online courses, workshops, and personal projects.</p>
            <div className="card bordered shadow-lg bg-base-100">
                <div className="card-body">
                    <h3 className="card-title">Education</h3>
                    <ul className="steps steps-vertical lg:steps-horizontal items-start">
                        <li className="step step-primary">Graduated Sheringham High school with 10 GCSEs</li>
                        <li className="step step-primary">Graduated Wymondham College with A*A*A</li>
                        <li className="step step-primary">Achieved grade 8 LAMDA exam and an A in the extended project qualification</li>
                        <li className="step step-primary">Studying an integrated MSCi in Computer Science at Queen Mary University of London</li>
                        <li className="step">Graduating with a honours in April 2026, on track for a first</li>
                    </ul>
                </div>
            </div>
            <div className="card bordered shadow-lg bg-base-100 mt-10">
                <div className="card-body">
                    <h3 className="card-title">Career</h3>
                    <ul className="steps steps-vertical lg:steps-horizontal items-start">
                        <li className="step step-secondary">Martial arts instructor at Tsunami Martial Arts</li>
                        <li className="step step-secondary">Store Clerk at Starlings of Sheringham</li>
                        <li className="step step-secondary"><div className='flex lg:flex-col lg:items-center justify-between gap-4'>Video Game Mod Developer for CurseForge with over 15 million users<span className="font-semibold badge text-primary-content badge-lg bg-gradient-to-r from-yellow-100 to-sky-300 hidden sm:flex">Current</span></div></li>
                        <li className="step step-secondary"><div className='flex lg:flex-col lg:items-center justify-between gap-4'>Demonstrator Teaching Assistant at Queen Mary University of London <span className="font-semibold badge text-primary-content badge-lg bg-gradient-to-r from-yellow-100 to-sky-300 hidden sm:flex">Current</span></div></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
