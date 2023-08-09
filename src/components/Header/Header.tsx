import NavBar from "../../modules/Navbar/Navbar";
function Header() {
  return (
    <div className="w-full bg-white z-10 shadow-sm mb-3">
      <div className="py-4 border-b-[1px]">
        <NavBar></NavBar>
      </div>
    </div>
  );
}

export default Header;
