import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  delay: 200,
});

const Contact = () => {
  return (
    <section id="contact" className="mb-10 lg:mb-20 ">
      <h1
        data-aos="fade-up"
        className=" text-5xl mt-10  font-sans text-center font-bold "
      >
        Contact <span className=" font-sans font-semibold italic ">Us</span>{" "}
      </h1>
      {/* Form */}
      <div
        data-aos="zoom-in-down"
        className=" bg-slate-100 rounded-3xl flex my-10 "
      >
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
              required
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
              required
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
              required
            />
          </div>
          <button className=" w-full py-4 font-semibold bg-black text-white hover:bg-slate-50 hover:text-black rounded-lg border transition-all duration-200">
            Submit
          </button>
        </form>
        <div className=" hidden lg:flex lg:1/2 justify-end w-full  ">
          <img height={500} width={500} src="/assets/contact.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
