
const Contact = () => {
  return (
    <section className="mb-10 lg:mb-20 ">
      <h1 className=" text-5xl mt-10  font-sans text-center font-bold ">
        Contact <span className=" font-sans font-semibold italic ">Us</span>{" "}
      </h1>
      {/* Form */}
      <div className=" bg-slate-100 rounded-3xl flex my-10 ">
        <form
          action=""
          className=" bg-slate-100 p-5 rounded-3xl my-10 flex flex-col space-y-6 max-w-4xl px-8  w-full lg:1/2 lg:ml-10 "
        >
          <div className=" space-y-2">
            <label className=" text-xl" htmlFor="name">
              Name
            </label>{" "}
            <br />
            <input
              className=" font-sans w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border "
              placeholder="Name"
              id="name"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label className=" text-xl" htmlFor="email">
              E-mail
            </label>{" "}
            <br />
            <input
              className=" font-sans w-full  p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border "
              id="email"
              type="email"
              placeholder="E-mail"
            />
          </div>
          <div className="space-y-2">
            <label className=" text-xl" htmlFor="message">
              Message
            </label>{" "}
            <br />
            <textarea
              className=" font-sans w-full focus:outline-none focus:ring-2 focus:ring-blue-500 border p-2 rounded-md "
              id="message"
              rows="5"
              placeholder="Message"
            />
          </div>
        </form>
        <div className=" hidden lg:flex lg:1/2 justify-end w-full  ">
          <img height={500} width={500} src="/assets/praposalSec.svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Contact ;
