import Book from "./icons/book.jsx";
import Lightbulb from "./icons/lightbulb.jsx";
import LinkedIn from "./icons/linkedin.jsx";
import MapPin from "./icons/map-pin.jsx";
import Megaphone from "./icons/megaphone.jsx";
import frclogo from "./FRC-Logo.png";
import { useRef } from "react";

function App() {
  const experience = useRef();
  const interests = useRef();
  const volunteering = useRef();

  return (
    <div className="bg-dark-blue-gray p-12 text-gray-200 font-bricolagegrotesque flex flex-row justify-center">
      <div className="w-[1500px] max-w-[1500px]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col">
            <h1 className="font-pacifico text-5xl pb-8 bg-gradient-to-r bg-no-repeat from-pink-700 via-yellow-500 to-sky-500 text-transparent bg-clip-text bg-800% animate-gradient">
              Morgan York
            </h1>
            <h2 className="text-3xl">Senior Software Engineer</h2>
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
            <div className="flex flex-row flex-wrap gap-4 md:gap-0">
              <div className="w-full md:w-1/4">
                <h4 className="text-xl leading-8">Optum</h4>
                <div className="flex flex-col leading-5">
                  <span>June 2021 - Present</span>
                  <span>Remote</span>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h5 className="text-lg font-bold mb-1">
                  Senior Software Engineer
                </h5>
                <ul className="list-disc ml-6 break-normal mb-4">
                  <li>
                    Delivered a new custom content-management tool for an
                    internal training platform using Next.js, increasing
                    administrator productivity through detailed user interviews
                  </li>
                  <li>
                    Enabled the development of new content-management tool
                    through automatic GraphQL API generation, based on defined
                    record types
                  </li>
                  <li>
                    Adopted an engineer-facing training application,
                    collaborating with business stakeholders, users, and other
                    engineers in an agile fashion to improve site functionality
                    and the user experience
                  </li>
                  <li>
                    Presented completed work, proposals for solutions, and
                    opportunities for improvement to business stakeholders in a
                    clear and concise manager, practicing a zero-distance
                    mindset
                  </li>
                </ul>
                <div className="flex flex-row flex-wrap gap-2">
                  <div className="rounded-3xl bg-pink-800 hover:bg-pink-900 cursor-default px-3 py-1">
                    GraphQL
                  </div>
                  <div className="rounded-3xl bg-pink-800 hover:bg-pink-900 cursor-default px-3 py-1">
                    Next.js
                  </div>
                  <div className="rounded-3xl bg-pink-800 hover:bg-pink-900 cursor-default px-3 py-1">
                    React
                  </div>
                  <div className="rounded-3xl bg-pink-800 hover:bg-pink-900 cursor-default px-3 py-1">
                    Azure
                  </div>
                  <div className="rounded-3xl bg-pink-800 hover:bg-pink-900 cursor-default px-3 py-1">
                    MongoDB
                  </div>
                  <div className="rounded-3xl bg-pink-800 hover:bg-pink-900 cursor-default px-3 py-1">
                    Figma
                  </div>
                  <div className="rounded-3xl bg-yellow-600 hover:bg-yellow-700 cursor-default px-3 py-1">
                    Requirement Collection
                  </div>
                  <div className="rounded-3xl bg-yellow-600 hover:bg-yellow-700 cursor-default px-3 py-1">
                    Stakeholder Engagement
                  </div>
                  <div className="rounded-3xl bg-yellow-600 hover:bg-yellow-700 cursor-default px-3 py-1">
                    Agile Development
                  </div>
                  <div className="rounded-3xl bg-blue-800 hover:bg-blue-900 cursor-default px-3 py-1">
                    Communication
                  </div>
                  <div className="rounded-3xl bg-blue-800 hover:bg-blue-900 cursor-default px-3 py-1">
                    Mentorship
                  </div>
                  <div className="rounded-3xl bg-blue-800 hover:bg-blue-900 cursor-default px-3 py-1">
                    Public Speaking
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-4 md:gap-0">
              <div className="w-full md:w-1/4">
                <h4 className="text-xl leading-8">Key to Escape</h4>
                <div className="flex flex-col leading-5">
                  <span>April 2018 - April 2021</span>
                  <span>Statesville, NC</span>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h5 className="text-lg font-bold mb-1">
                  Internet of Things (IoT) Engineer
                </h5>
                <ul className="list-disc ml-6 break-normal mb-4">
                  <li>
                    Collaborated with hardware engineers to develop solutions
                    for escape room entertainment, particularly props
                  </li>
                  <li>
                    Consulted on technical and non-technical solutions that
                    helped make this a top-100 worldwide rated escape room,
                    including methods to increase immersion, management, and
                    maintenance
                  </li>
                </ul>
                <div className="flex flex-row flex-wrap gap-2">
                  <div className="rounded-3xl bg-pink-800 hover:bg-pink-900 cursor-default px-3 py-1">
                    Arduino
                  </div>
                  <div className="rounded-3xl bg-pink-800 hover:bg-pink-900 cursor-default px-3 py-1">
                    Javascript
                  </div>
                  <div className="rounded-3xl bg-pink-800 hover:bg-pink-900 cursor-default px-3 py-1">
                    C++
                  </div>
                  <div className="rounded-3xl bg-yellow-600 hover:bg-yellow-700 cursor-default px-3 py-1">
                    Customer Interaction
                  </div>
                  <div className="rounded-3xl bg-blue-800 hover:bg-blue-900 cursor-default px-3 py-1">
                    Problem-Solving
                  </div>
                </div>
              </div>
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

  function NavLink({ text, scroll }) {
    console.log(scroll);
    return (
      <button
        onClick={() => {
          scroll.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="bg-gray-700 px-4 py-2 rounded-2xl text-center hover:bg-gray-800 cursor-pointer"
      >
        {text}
      </button>
    );
  }
}

export default App;
