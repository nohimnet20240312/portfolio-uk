export default function Highlight({ text, color ,children}) {
  return (
    <>
      <div style={{ backgroundColor: color,display:"inline",padding:2,borderRadius:5}} className="w-max ml-1">
        <p className="my-2 p-1 inline w-max" style={{ color: "white" }}>{children}</p>
      </div>
    </>
  );
}
