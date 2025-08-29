import Heading from "../comps/Heading";
export default function Section({
  className,
  heading,
  background,
  children,
  id,
  styles={},
}) {
  const prop = { backgroundColor: background || "var(--steel)" };

  return (
    <>
      <div
        id={id}
        className={
          `skills flex flex-col items-center  p-5 w-full steel` +
          " " +
          className
        }
        style={{ ...prop, ...styles }}
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
