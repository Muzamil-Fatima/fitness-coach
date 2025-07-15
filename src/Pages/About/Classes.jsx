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
            Training <span className="c1">classNames</span>
          </h2>
          <ArrowRow />
        </div>

        <div className="flex">
          <div>
            <img src={women6} alt="" />
            <NavLink to="strength-power-training">Strength Power Training</NavLink>
          </div>
          <div>
            <img src={women7} alt="" />
            <NavLink to="weight-loss-training">Weight Loss</NavLink>
          </div>
        </div>

        <div className="flex two-img">
          <div>
            <img src={women8} alt="" />
            <NavLink to="functional-training">Functional Training</NavLink>
          </div>
          <div>
            <img src={women9} alt="" />
            <NavLink to="online-training">Online Training</NavLink>
          </div>
        </div>
      </div>
      <Consultation />
    </>
  );
}
