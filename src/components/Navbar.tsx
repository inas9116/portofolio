const Navbar = () => {
  return (
    <div className="  bg-cyan-500 flex justify-between items-center pl-4">
      <div>
        <img src="src/assets/NNlogo.avif"
        className="w-[50px] h-[50px]"/>
      </div>
      <div className=" max-w-full container flex items-center justify-end gap-5 p-5 text-gray-50">
        <button className="max-w-[600px] rounded-md border px-10 hover:bg-sky-700 ...">
          Home
        </button>
        <button className="max-w-[600px] rounded-md border px-10 hover:bg-sky-700 ...">
          Working
        </button>
        <button className="max-w-[600px] rounded-md border px-10 hover:bg-sky-700 ...">
          Project
        </button>
        <button className="max-w-[600px] rounded-md border px-10 hover:bg-sky-700 ...">
          Skills
        </button>
        <button className="max-w-[600px] rounded-md border px-10 hover:bg-sky-700 ...">
          Contact
        </button>
      </div>
    </div>
  );
};
 
export default Navbar;
