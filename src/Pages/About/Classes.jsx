import ArrowRow from "../../Components/ArrowRow";
import women6 from "../../images/women6.png";
import women7 from "../../images/women7.png";
import women9 from "../../images/women9.png";
import women8 from "../../images/women8.png";
import Consultation from "../../Components/Consultation";
import { Outlet, NavLink } from "react-router-dom";

export default function Classes() {
  return (
    <>
      <div className="text-[var(--color-white)] font-primary">
        <div>
          <h2 className="text-6xl">
            Training <span className="text-[var(--color-primary)]">Classes</span>
          </h2>
          <ArrowRow />
        </div>

        <div className="flex">
          <div className="w-1/2">
            <img src={women6} alt="" className="h-auto"/>
            <NavLink to="strength-power-training" className="text-5xl font-primary underline font-bold">Strength Power Training</NavLink>
          </div>
          <div className="w-1/2">
            <img src={women7} alt="" />
            <NavLink to="weight-loss-training" className="text-5xl font-primary underline font-bold">Weight Loss</NavLink>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <img src={women8} alt="" />
            <NavLink to="functional-training" className="text-5xl font-primary underline font-bold">Functional Training</NavLink>
          </div>
          <div className="w-1/2">
            <img src={women9} alt="" />
            <NavLink to="online-training" className="text-5xl font-primary underline font-bold">Online Training</NavLink>
          </div>
        </div>
      </div>
      <Consultation />
    </>
  );
}
