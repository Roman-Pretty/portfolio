export function About() {
  return (
    <section
      id="about"
      className="hero px-2 lg:px-24 min-h-screen flex flex-col items-center bg-base-200/50"
    >
      <h2 className="text-3xl font-bold text-center py-10">About</h2>
      <p className="text-lg pb-10 max-w-3xl text-center text-zinc-600">
        Alongside my studies and work, I actively
        seek out new opportunities to deepen my knowledge and expertise through
        online courses, workshops, and personal projects.
      </p>

      <div className="card bordered shadow-lg bg-base-100 w-full">
        <div className="card-body">
          <h3 className="card-title">Education</h3>
          <ul className="steps steps-vertical lg:steps-horizontal items-start">
            <li className="step step-primary px-2">
              Graduated Sheringham High school with 10 GCSEs
            </li>
            <li className="step step-primary px-2">
              Graduated Wymondham College with A*A*A
            </li>
            <li className="step step-primary px-2 ">
              Achieved grade 8 LAMDA exam and an A in the extended project
              qualification
            </li>
            <li className="step step-primary px-2">
              Studying Computer Science MSCi at Queen Mary University of London
            </li>
            <li className="step px-2">
              Graduating in April 2026, on track for a first
            </li>
          </ul>
        </div>
      </div>

      <div className="card bordered shadow-lg bg-base-100 mt-10  mb-4 w-full">
        <div className="card-body">
          <h3 className="card-title">Career</h3>
          <ul className="steps steps-vertical lg:steps-horizontal items-start">
            <li className="step step-secondary px-2">
              Martial arts instructor at Tsunami Martial Arts
            </li>
            <li className="step step-secondary px-2">
              Store Clerk at Starlings of Sheringham
            </li>
            <li className="step step-secondary px-2">
              <div className="flex lg:flex-col lg:items-center justify-between gap-4">
                Video Game Mod Developer for CurseForge with over 15 million
                users
              </div>
            </li>
            <li className="step step-secondary px-2">
              <div className="flex lg:flex-col lg:items-center justify-between gap-4">
                Demonstrator Teaching Assistant at Queen Mary University of
                London{" "}
              </div>
            </li>
            <li className="step step-secondary px-2">
              <div className="flex lg:flex-col lg:items-center justify-between gap-4">
                Activity Leader at MCS Projects Ltd
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
