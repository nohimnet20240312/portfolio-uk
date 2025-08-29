import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./secs/hero";
import Highlight from "./comps/Highlight";
import DetailsCard from "./comps/DetailsCard";
import Heading from "./comps/Heading";
import Section from "./secs/section";

let immigrationData = {
  Name: "Nohim hasitha weedagama arachchi",
  "Work status": "20 hours per week during term full time during vacation",
  availability: "Flexible shift hours from evening",
  "Visa status": <Highlight color={"green"}>Valid until 30/09/2027</Highlight>,
  "Visa Type": "Student Visa (Tier 4)",
  Nationality: "Sri Lanka",
  Gender: "Male",
};
let studyData = {
  Name: "Nohim hasitha weedagama arachchi",
  University: "University of Hertfordshire",
  Location: "Hatfield hertfordshire united kingdom AL10 9AB",
  "Post Code": "AL10 9AB",
  Study: "Bsc (Hons) Computer Science",
  residency: "Telford court hertfordshire AL10 9UT",
};
let skillData = {
  "Reliability & Punctuality":
    "Arriving on time, consistent attendance, and completing shifts/tasks dependably.",
  "Communication (Verbal & Written)":
    "Clear, polite communication with colleagues, managers and customers; able to write simple messages or reports.",
  Teamwork:
    "Working cooperatively, supporting colleagues, and contributing to a positive team environment.",
  "Time Management & Prioritisation":
    "Balancing study and work, prioritising tasks under busy conditions, and meeting deadlines.",
  "Customer Service":
    "Understanding customer needs, polite interaction, complaint handling and delivering positive experiences.",
  "Adaptability & Flexibility":
    "Willingness to take varied tasks/shifts and adjust quickly to new procedures or busy periods.",
};
let contactData = {
  Email: <a href="mailto:nohim.net@gmail.com">nohim.net@gmail.com</a>,
  "Phone number": "+94 76 272 2301",
  Web: (
    <a href="https://nohimnet20240312.github.io/portfolio-uk/">
      https://nohimnet20240312.github.io/portfolio-uk/
    </a>
  ),
};

let availability = true;
function App() {
  let [scroll, setScroll] = useState("");

  

  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="w-svw m-0 p-0 text-base relative"
        style={{ backgroundColor: "var(--deep-night)" }}
        onScroll={(element)=>{document.Scroll}}
      >
        <div
          className={`notification pl-11 punch text-xl rounded-lg text-white fixed left-3 top-22 ${
            availability == true ? "bg-lime-500" : "bg-red-400"
          } p-3`}
        >
          {availability == true ? "Available for Hire" : "Unavailable for Hire"}
        </div>
        <div
          className="layer absolute top-0 left-0 w-full h-full z-1000"
          style={{
            backgroundColor: "rgba(250, 83, 15, 0.18)",
            pointerEvents: "none",
          }}
        ></div>
        <Hero
          className={"flex w-full text-center flex-col text-base"}
          style={{ color: "white", backgroundColor: "var(--steel)" }}
        ></Hero>
        <div
          id="About Me"
          className="text-xl font-thin flex flex-col justify-center items-center p-10 text-inherit"
        >
          <p className="text-2xl">
            Hello my name is Nohim hasitha, A Computer science undergraduate
            student studying at
            <Highlight color="purple">
              University of Hertfordshire
            </Highlight>{" "}
            Hatfield United Kingdom. I am currently looking for part-time jobs
            that i could help myself with my educational journey.
          </p>
          <DetailsCard
            header={"Immigration Information"}
            data={immigrationData}
          ></DetailsCard>
          <DetailsCard
            header={"Student Information"}
            data={studyData}
          ></DetailsCard>
        </div>
        <Section id={"Skills"} heading={"Skills"} background="steel">
          {Array.from(Object.entries(skillData)).map(([key, value]) => {
            return (
              <>
                <div className="punch skill-card my-3 text-white p-3">
                  <div className="row-1 text-2xl">{key}</div>
                  <div className="row-2 font-light">{value}</div>
                </div>
              </>
            );
          })}
        </Section>

        <Section
          id={"Contact me"}
          heading="Contact me"
          background={"var(--deep-night)"}
        >
          {Array.from(Object.entries(contactData)).map(([key, value]) => {
            return (
              <>
                <div className="punch w-auto  skill-card my-3 text-white p-3">
                  <div className="row-1 text-2xl">{key}</div>
                  <div className="row-2 font-light">{value}</div>
                </div>
              </>
            );
          })}
        </Section>
        <Section heading={"View CV"}>
          <div className="w-[400px] h-screen lg:w-[800px]  sm:w-[500px] md:h-[800px]">
            <iframe
              src={`${import.meta.env.BASE_URL}/NohimHasithaResume.pdf`}
              title="My CV"
              className="w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </Section>
        <Section styles={{justifyContent:"flex-start"}} background={"var(--deep-night)"} className={"sm:flex-col justify-start items-stretch p-0 m-0 bg-amber-600"}>
          <div className="flex w-full justify-between px-3" >
            <div className="col-1">&copy; Designed by nohim. All rights reserved.<br></br></div>
            {/* <div className="col-2">Email me at nohim.net@gmail.com</div> */}
          </div>
        </Section>
        {/* <div className="contact-me">hello</div> */}
      </div>
    </>
  );
}

export default App;
