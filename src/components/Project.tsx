const Project = () => {
  return (
    <div>
      <div className="grid grid-cols-1 text-center text-3xl mt-4 font-bold">
        <h1>My Projects</h1>
      </div>
      <div className=" grid grid-cols-4 gap-8 rounded-lg border border-black">
        <div className="rounded-lg mt-10 ">
          <img src="https://www.yarddiant.com/images/web-development-projects-for-students.jpg"
          className="rounded-lg"></img>
          <h1 className="text-center text-xl pt-8">Project Satu</h1>
          <p className="text-center pt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            quisquam tempore nesciunt voluptatum, quis perspiciatis repellat qui
            ipsum aliquid quos adipisci nulla error possimus provident dolor?
            Veniam ratione inventore aperiam.
          </p>
        </div>
        <div className="rounded-lg mt-40">
          <img src="https://www.nopio.com/wp-content/uploads/2016/05/web-development.jpg"
          className="rounded-lg"></img>
          <h1 className="text-center text-xl pt-8">Project Dua</h1>
          <p className="text-center pt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            quisquam tempore nesciunt voluptatum, quis perspiciatis repellat qui
            ipsum aliquid quos adipisci nulla error possimus provident dolor?
            Veniam ratione inventore aperiam.
          </p>
        </div>
        <div className="rounded-lg mt-10">
          <img src="src/assets/motifkayu.png"
          className="rounded-lg"></img>
          <h1 className="text-center text-xl pt-8">Project Tiga</h1>
          <p className="text-center pt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            quisquam tempore nesciunt voluptatum, quis perspiciatis repellat qui
            ipsum aliquid quos adipisci nulla error possimus provident dolor?
            Veniam ratione inventore aperiam.
          </p>
        </div>
        <div className="rounded-lg mt-40">
          <img src="https://www.netsolutions.com/insights/wp-content/uploads/2023/02/understanding-development-methodologies.webp"
          className="rounded-lg"></img>
          <h1 className="text-center text-xl">Project Empat</h1>
          <p className="text-center pt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            quisquam tempore nesciunt voluptatum, quis perspiciatis repellat qui
            ipsum aliquid quos adipisci nulla error possimus provident dolor?
            Veniam ratione inventore aperiam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
