import ArrowRow from "../../Components/ArrowRow";

export default function Functional() {
  return (
    <>
      <div>
        <h3 class="w7 text-6x">
          Functional<div class="c1">Training</div>
        </h3>
        <ArrowRow />
      </div>
      <div class="flex">
        <div id="menu-placeholder"></div>
      </div>
      <div class="flex training-container">
        <div class="training-left flex font2">
          <div class="w6 text-6x">
            <span>1 Hour</span>
            <h4 class="w7 text-2xl">LOCATION: In person (dubai)</h4>
            <p class="w4 text-lg opacity-50 training-para">
              Lorem Ipsum'is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p class="w4 text-lg opacity-50 training-para">
              {" "}
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer.
            </p>
            <p class="w4 text-lg opacity-50 training-para">
              Lorem Ipsum'is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <p class="w4 text-lg opacity-50 training-para">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer.
            </p>
            <button class="lg-btn text-lg">Book Now</button>
          </div>
        </div>
        <div class="training-right flex">
          <div>
            <img src="images/women12.png" alt="women" class="training-img1" />
            <img src="images/women8.png" alt="women" class="training-img2" />
          </div>
        </div>
      </div>
      <div id="consultation-placeholder"></div>
    </>
  );
}
