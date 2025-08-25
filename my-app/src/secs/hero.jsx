import Header from "../comps/header";

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
            className="img-section rounded-full mb-7"
            style={{
              width: imageSize,
              height: imageSize,
              backgroundImage: 'url("./src/assets/hero.jpg")',
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
            <img src="./src/assets/logo.jpg" style={{width:"50%"}} className="rounded-xl mt-4" alt="" />
            <button className="btn">Download CV</button>
          </div>
        </main>
      </div>
    </>
  );
}
