import ArrowRow from "../../Components/ArrowRow";
import ArrowColumn from "../../Components/ArrowColumn";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function MyServices() {
  const [services, setServices] = useState([]);

  const url = "http://localhost:3000/services";
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    try {
      let response = await fetch(url);
      response = await response.json();
      setServices(response);
    } catch (error) {
      console.log("Error Fetching users:", error);
    }
  };
  const total = services.length;
  const mid = Math.ceil(total / 2);
  const leftColumn = services.slice(0, mid);
  const rightColumn = services.slice(mid);
  return (
    <>
      <div>
        <h5 className="font-[Hanson] font-bold text-[64px] mt-12 mb-0">
          My <span className="mt-0 text-[var(--color-primary)]">Services</span>
        </h5>
        <ArrowRow />
      </div>
      <div className="grid grid-cols-8 mt-3">
        <div className="col-span-3">
          {leftColumn.map((service) => (
            <div
              key={service.id}
              className="flex font-normal text-[32px] mt-8 mb-8"
            >
              <span className="h-[130px] w-[130px] rounded-[50%] bg-[var(--color-black)]">
                <img
                  src={service.image}
                  alt="icon"
                  className="w-[155px] h-[108px]"
                />
              </span>
              <NavLink to={`/services/${services.id}`}>
                <h3 className="ml-3">{service.title}</h3>
              </NavLink>
            </div>
          ))}
        </div>
        <div className="flex justify-center col-span-2">
          <ArrowColumn />
        </div>
        <div className="col-span-3">
          {rightColumn.map((service) => (
            <div
              key={service.id}
              className="flex font-normal text-[32px] mt-8 mb-8"
            >
              <span className="h-[130px] w-[130px] rounded-[50%] bg-[var(--color-black)]">
                <img
                  src={service.image}
                  alt="icon"
                  className="w-[155px] h-[108px]"
                />
              </span>
              <NavLink to={`/services/${services.id}`}>
                <h3 className="ml-3">{service.title}</h3>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <hr className="opacity-25" />
      <div className="h-64"></div>
      <div className="h-64"></div>
      <div className="h-64"></div>
      <div className="m-20">
        <Consultation />
      </div>
    </>
  );
}
