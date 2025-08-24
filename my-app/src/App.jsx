import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./secs/hero";
import Highlight from "./comps/Highlight";
import DetailsCard from "./comps/DetailsCard";

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
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="m-0 p-0 text-base"
        style={{ backgroundColor: "var(--deep-night)" }}
      >
        <Hero
          className={"flex w-svw text-center flex-col text-base"}
          style={{ color: "white", backgroundColor: "var(--steel)" }}
        ></Hero>
        <div className="text-xl font-thin flex flex-col justify-center items-center p-10 text-inherit">
          <p>
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
        <div className="skills w-full h-svh bg-amber-200">
          <div className="row-1">Skills</div>
        </div>
        <div className="contact-me">hello</div>
      </div>
    </>
  );
}

export default App;
