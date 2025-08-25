import Heading from "../comps/Heading";
export default function Section({ heading, background, children }) {
  return (
    <>
      <div
        className="skills flex flex-col items-center  p-5 w-full steel"
        style={{ backgroundColor: background || "var(--steel)" }}
      >
        <div className="row-1">
          <Heading className="text-3xl mb-4 text-white  font-thin">
            {heading}
          </Heading>
        </div>
        <div className="flex flex-col row-2">{children}</div>
      </div>
    </>
  );
}
