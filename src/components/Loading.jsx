import thunder from "/assets/favicon.svg"

const Loading = () => {
  return (
    <div className=" flex justify-center items-center  bg-zinc-50 h-screen ">
      <div className="p-3 animate-spin h-16 w-16  border-8 border-dashed rounded-full border-blue-600 ">
        <div className="rounded-full h-full w-full bg-slate-100 flex justify-center items-center  background-blur-md">
           ⚡
        </div>
      </div>
    </div>
  );
}

export default Loading


/*    {" "}
        <img
          class="w-20 h-20 animate-spin"
          src="https://www.svgrepo.com/show/173880/loading-arrows.svg"
          alt="Loading icon"
        ></img>  */