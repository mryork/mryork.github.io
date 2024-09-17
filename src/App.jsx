import Book from "./icons/book.jsx";
import Lightbulb from "./icons/lightbulb.jsx";
import LinkedIn from "./icons/linkedin.jsx";
import MapPin from "./icons/map-pin.jsx";
import Megaphone from "./icons/megaphone.jsx";
import frclogo from "./FRC-Logo.png";
import { useRef } from "react";
import NavLink from "./components/NavLink.jsx";
import Experience from "./components/Experience.jsx";

import optum from './data/optum.js';
import keytoescape from "./data/keytoescape.js";

function App() {
  const experience = useRef();
  const interests = useRef();
  const volunteering = useRef();
  
  const experienceData = [optum, keytoescape];

  return (
    <div className="bg-dark-blue-gray p-12 text-gray-200 font-bricolagegrotesque flex flex-row justify-center">
      <div className="w-[1500px] max-w-[1500px]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col">
            <h1 className="font-pacifico text-5xl pb-8 bg-gradient-to-r bg-no-repeat from-pink-700 via-yellow-500 to-sky-500 text-transparent bg-clip-text bg-800% animate-gradient">
              Morgan York
            </h1>
            <h2 className="text-3xl">Lead Software Engineer</h2>
          </div>
          <div className="md:ml-auto">
            <div className="flex flex-col gap-2 items-start">
              <div className="flex flex-row gap-2 items-center">
                <MapPin />
                Raleigh, NC
              </div>
              <div className="flex flex-row gap-2 items-center">
                <LinkedIn />
                <a
                  href="https://www.linkedin.com/in/mryorkunc/"
                  className="relative after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  /mryorkunc
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav className="flex flex-row gap-4 pt-4 pb-8 border-b-2 border-gray-800">
          <NavLink text="Experience" scroll={experience} />
          <NavLink text="Interests" scroll={interests} />
          <NavLink text="Volunteering" scroll={volunteering} />
        </nav>
        <div className="pb-12 border-b-2 border-gray-800">
          <div
            className="pt-8 w-full flex flex-col gap-8 mb-16"
            ref={experience}
          >
            <h3 className="text-2xl font-bold">Experience</h3>
            <div className="flex flex-row flex-wrap gap-4 md:gap-10">
              {experienceData.map((data) => (
                <Experience
                  employer={data.name}
                  bullets={data.bullets}
                  position={data.position}
                  skills={data.skills}
                  location={data.location}
                  timeframe={data.timeframe}
                />
              ))}
            </div>
          </div>
          <div className="pt-8 w-full flex flex-col gap-8" ref={interests}>
            <h3 className="text-2xl font-bold">Interests</h3>
            <div className="flex flex-col lg:flex-row px-8 items-center gap-8 justify-center">
              <div className="flex flex-col items-center gap-3 text-center">
                <Lightbulb />
                <h4 className="text-xl font-bold">Mentorship</h4>
                <p>
                  In STEM fields, the ability to effectively communicate with
                  others is critical, and can be the difference between a
                  high-functioning team and a team who needs support. Previous
                  experience has taught me how I can act as a mediator in
                  situations where communication may break down. Working with
                  others on developing these skills is important to me.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <Megaphone />
                <h4 className="text-xl font-bold">Advocacy</h4>
                <p>
                  As a member of the LGBTQ+ community, I know through lived and
                  learned experiences that advocacy is critical. Maintaining a
                  healthy work environment is only possible when there is a
                  level of respect towards all members of a team. Advocating for
                  equitable treatment for any marginalized group is something I
                  am passionate about.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <Book />
                <h4 className="text-xl font-bold">Learning</h4>
                <p>
                  Lifelong learning allows for the development of new skills,
                  new perspectives, and a better understanding of our world.
                  Learning of all types: through traditional education,
                  job-training, or even just by working with others on their
                  hobbies, are exciting to me to continue to grow as a person.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-12 w-full flex flex-col gap-8" ref={volunteering}>
            <h3 className="text-2xl font-bold">Volunteering</h3>
            <div className="flex flex-col md:flex-row ml-3 gap-4 md:gap-12 items-center">
              <div className="md:border-r-2 md:border-gray-800 pr-12">
                <img
                  src={frclogo}
                  className="min-w-[100px] w-[150px]"
                  alt="FIRST Robotics Competition logo"
                />
              </div>
              <div className>
                <h4 className="text-xl font-bold">
                  <i>FIRST</i> &reg; Volunteer
                </h4>
                <h5 className="text-lg">
                  <i>FIRST</i> Technical Advisor Assistant, Control System
                  Advisor, Robot Inspector
                </h5>
                <p>
                  As an alumnus of this program, I have first-hand experience in
                  how it can help students grow as individuals: not only in STEM
                  skills, but also through communication, problem-solving, and
                  collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          Designed in Raleigh, NC using{" "}
          <a href="https://tailwindcss.com/">Tailwind CSS</a>,{" "}
          <a href="https://vitejs.dev/">Vite</a>,{" "}
          <a href="https://react.dev/">React</a> and{" "}
          <a href="https://heroicons.com/">HeroIcons</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
