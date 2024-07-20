import Socails from "./Socails";
const Footer = () => {
const year = new Date().getFullYear();

  return (
    <footer className=" mt-10 py-10 flex flex-col justify-center items-center  ">
      <div className="flex w-full items-center rounded-full">
        <div className="flex-1   border-b border-gray-300"></div>
        <span className="text-black text-lg font-semibold leading-8 px-4 md:px-8 py-3">
          <Socails />
        </span>
        <div className="flex-1 border-b border-gray-300"></div>
      </div>

      <p className="text-center font-sans font-bold pt-10 ">
        {" "}
        © {year}{" "}
        <span className=" text-cyan-800 uppercase tracking-wider ">
          spark studio private limited
        </span>{" "}
      </p>
      <p className=" font-bold   uppercase">ALL RIGHTS RESERVED</p>
    </footer>
  );
}

export default Footer
