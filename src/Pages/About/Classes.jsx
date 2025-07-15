import ArrowRow from "../../Components/ArrowRow";
import women6 from "../../images/women6.png";
import women7 from "../../images/women7.png";
import women9 from "../../images/women9.png";
import women8 from "../../images/women8.png";
import Consultation from "../../Components/Consultation";

export default function Classes() {
  return (
    <>
      <div className="text-[var(--color-white)] font-primary">
        <div className="">
          <h2 className="text-6xl">
            Training <span className="c1">classNames</span>
          </h2>
          <ArrowRow />
        </div>
        <div className="flex">
          <div className="">
            <img src={women6} alt="" className="" />
            <div className="">
              <a
                href="power.html"
                className="text-4xl text-underline "
                target="_blank"
              >
                Strength Power Training
              </a>
            </div>
          </div>
          <div>
            <img src={women7} alt="" className="" />
            <div>
              <a
                href="weightloss.html"
                className="text-4xl text-underline c5"
                target="_blank"
              >
                Weight Loss
              </a>
            </div>
          </div>
        </div>
        <div className="flex two-img">
          <div>
            <img src={women8} alt="" className="" />
            <div>
              <a
                href="functional.html"
                className="text-4xl text-underline"
                target="_blank"
              >
                Functional Training
              </a>
            </div>
          </div>
          <div>
            <img src={women9} alt="" className="" />
            <div>
              <a
                href="onlinetraining.html"
                className="text-4xl text-underline c5"
                target="_blank"
              >
                Online Training
              </a>
            </div>
          </div>
        </div>
      </div>
      <Consultation />
    </>
  );
}
