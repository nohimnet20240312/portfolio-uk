import Header from "../comps/header";
import logo from "../assets/logo.jpg";
import avatar from "../assets/hero.jpg";
import CV from "../pdfs/NohimHasithaResume.pdf";

const handleButton = function () {
  const link = document.createElement("a");
  link.href = { CV };
  link.download = "NohimHasithaCV.pdf";
  link.click();
};
let imageSize = 200;

export default function Hero({ className, style }) {
  return (
    <>
      <div className={className} style={style}>
        <Header></Header>
        <main
          className="h-full w-full flex flex-col justify-center items-center p-5"
          style={{ color: "inherit", minHeight: "60vh" }}
        >
          <div
            className="img-section rounded-full mb-7 shadow-2xl"
            style={{
              width: imageSize,
              height: imageSize,
              backgroundImage: `url(${avatar})`,
              backgroundSize: "cover",
              backgroundPosition: "0px -20px",
              backgroundRepeat: "no-repeat",
              filter: "grayscale(0%)",
            }}
          >
            {/* <img src="./src/assets/hero.jpg" className="rounded-full" style={{width:"100%",height:"100%"}} alt="" /> */}
          </div>
          <div
            className="font-thin flex flex-col items-center text-section text-3xl"
            style={{ width: "70%" }}
          >
            {" "}
            Hello my name is Nohim hasitha, A Computer science undergraduate
            student studying at University of Hertfordshire Hatfield United
            Kingdom.
            {/* <img
              src={logo}
              style={{ width: "50%" }}
              className="rounded-xl mt-4"
              alt=""
            /> */}
            <button className="btn" onClick={handleButton}>
              Download CV
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
