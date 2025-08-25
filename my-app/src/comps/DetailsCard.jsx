import ArrowRight from "./ArrowRight";
import Highlight from "./Highlight";

export default function DetailsCard({ header, data }) {
  return (
    <>
      <div
        className="punch details-card flex items-center justify-center m-3 p-5 font-light text-white steel rounded-xl shadow-xl"
        style={{ maxWidth: "600px" }}
      >
        <div className="row-1">
          <h3
            className="text-xl lg:text-2xl mb-4 relative"
            style={{ zIndex: 222 }}
          >
            {header}
          </h3>
        </div>
        <div className="row-2 w-full flex flex-col justify-center">
          {Array.from(Object.entries(data)).map(([key, value]) => (
            <div
              className="row grid grid-cols-3 py-1"
              style={{ gridTemplateColumns: "0.3fr 0.1fr 1fr" }}
            >
              <div className="whitespace-nowrap pr-2 text-left">{key}</div>
              <div className="seperator px-4">
                <ArrowRight></ArrowRight>
              </div>
              <div className="text-left break-words">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
