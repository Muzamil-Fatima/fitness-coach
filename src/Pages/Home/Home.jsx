import ArrowColumn from "../../Components/ArrowColumn";
// import BodyGoal from "./BodyGoal";
import women from "../../images/women.png";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-3 mt-16">
        <div className="font-primary uppercase font-bold text-[89px] col-span-2">
          <h1 className="">
            <span className="block">UNLEASH</span>
            <span className="block">YOUR</span>
            <span className="block">INNER</span>
            <span className="block whitespace-nowrap">STRENGTH💪</span>
          </h1>
        </div>
        <div className="flex justify-center">
          <img src={women} alt="Women image" className="w-[399px] h-[543px]"/>
        </div>
      </div>
      {/* <Banner /> */}
      {/* <BodyGoal /> */}
    </>
  );
}
