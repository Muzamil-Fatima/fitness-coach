import ArrowRow from "../../Components/ArrowRow";
import ArrowColumn from "../../Components/ArrowColumn";
import service1 from "../../images/service1.png";
import service2 from "../../images/service2.png";
import service3 from "../../images/service3.jpg";
import service4 from "../../images/service4.png";
import service5 from "../../images/service5.png";
import service6 from "../../images/service6.png";
import Consultation from "../../Components/Consultation";
import { NavLink } from "react-router-dom";

export default function Services() {
  return (
    <>
      <div>
        <h5 className="font-[Hanson] font-bold text-[64px] mt-12 mb-0">
          My <span className="mt-0 text-[var(--color-primary)]">Services</span>
        </h5>
        <ArrowRow />
      </div>
      <div className="flex font-secondary font-normal text-[32px] mt-20">
        <div className="">
          <div className="flex">
            <img src={service1} alt="mealPlan-icon" className="rounded-[50%] w-[136px] h-[136px] m-4" />
            <p id="meal-plan"><NavLink to="/services#meal-plan">Custom Fitness & Meal Plans</NavLink></p>
          </div>
          <div className="flex">
            <img src={service2} alt="progressTracking-icon" className="rounded-[50%] w-[136px] h-[136px] m-4" />
            <p id="progress-tracking"> <NavLink to="/services#progress-tracking">Personalized <br /> Progress Tracking</NavLink> </p>
          </div>
          <div className="flex">
            <img src={service3} alt="weeklyWorkout-icon" className="rounded-[50%] w-[136px] h-[136px] m-4" />
            <p id="weekly-plans"><NavLink to="/services#weekly-plans"> Weekly workout plans</NavLink></p>
          </div>
        </div>
        <div className="flex m-20">
          <ArrowColumn />
        </div>
        <div className="">
          <div className="flex">
            <img src={service4} alt="weeklyWorkout" className="rounded-[50%] w-[136px] h-[136px] m-4" />
            <p id="home-exercise"><NavLink to="/services#home-exercise">Home-based exercises</NavLink></p>
          </div>
          <div className="flex">
            <img src={service5} alt="mealWeight" className="rounded-[50%] w-[136px] h-[136px] m-4" />
            <p id="muscle-gain"><NavLink to="/services#muscle-gain">Meal plans for weight <br /> loss, muscle gain</NavLink></p>
          </div>
          <div className="flex">
            <img src={service6} alt="healthyEating" className="rounded-[50%] w-[136px] h-[136px] m-4" />
            <p id="healthy-eat"><NavLink to="/services#healthy-eating">Easy-to-follow healthy eating</NavLink></p>
          </div>
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
