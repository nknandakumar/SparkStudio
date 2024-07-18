
const Footer = () => {
const year = new Date().getFullYear();

  return (
    <footer className=" mt-10 py-10 border-t flex flex-col justify-center items-center  ">
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
