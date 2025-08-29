export default function Header() {
  return (
    <>
      <nav
        className="w-full flex py-3 flex-col px-10 shadow-2xl font-thin"
        style={{}}
      >
        <div className="row-1 text-xl">Nohim Hasitha</div>
        <div className="row-2 flex">
          <ul className="flex w-full justify-center">
            {"Home,About Me,Skills,Contact me".split(",").map((el) => (
              <li className="pr-3 cursor-pointer">
                <a
                  href={`#${el}`}
                  className="cursor-pointer hover:text-2xl hover:bg-black hover:p-3 hover:shadow-2xl transition-all"
                  style={{ color: "inherit", fontWeight: "300" }}
                >
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
