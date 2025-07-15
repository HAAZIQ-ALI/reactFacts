import reactLogo from "./assets/react.svg";

function Nav() {
  return (
    <nav className="bg-[#22222A] min-h-[15%] w-full flex items-center px-6">
      <div className="flex items-center space-x-4">
        <img src={reactLogo} alt="React Logo" className="w-12 h-12" />
        <h1 className="font-bold text-[#6AD9FC] text-4xl">ReactFacts</h1>
      </div>
    </nav>
  );
}

export default Nav;
