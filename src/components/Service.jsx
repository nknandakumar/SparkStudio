import {services} from "../constants/index"

const Service = () => {
  return (
    <section className=" mb-20  ">
      <h1 className=" text-5xl my-20 font-custom font-bold px-4 text-center ">
        Service
      </h1>
      <div className=" lg:flex   lg:justify-center ">
        {services.map((service, index) => (
       
            <div
              key={index}
              className="service-card flex flex-col p-5 justify-center items-center bg-slate-100 gap-4 rounded-3xl mx-2 my-4 shadow-md border border-b-4  border-black " // Add shadow for better separation
            >
              <img className="" src={service.image} alt={service.title} />
              <h2 className="text-2xl font-sans font-semibold py-2 text-center">
                {service.title}
              </h2>
              <p className="text-base font-custom text-gray-600 py-2 text-center">
                {service.description}
              </p>
            </div>
          
        ))}
      </div>
    </section>
  );
}

export default Service
