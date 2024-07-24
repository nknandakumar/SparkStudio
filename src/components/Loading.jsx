import thunder from "/assets/favicon.svg"

const Loading = () => {
  return (
    <div className=" flex justify-center items-center pt-32 bg-zinc-300 h-screen ">
      <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
        <div className="rounded-full h-full w-full bg-slate-100  background-blur-md">
          <img className=" w-26 h-26 rounded-full p-2" src={thunder} alt="thunder Logo" />  
          
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