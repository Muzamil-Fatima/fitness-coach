import arrowDown from "../images/arrowColorDown.svg";
export default function ArrowColumn() {
  return (
    <div className="flex items-center justify-center w-[20%] relative">
      <div className="w-[2px] bg-gray-300 h-full absolute left-0"> </div>
      <div className="flex flex-col items-center justify-center">
        <img src={arrowDown} alt="downarrow" className="w-9 h-9 my-4" />
        <img src={arrowDown} alt="downarrow" className="w-9 h-9 my-4" />
        <img src={arrowDown} alt="downarrow" className="w-9 h-9 my-4" />
      </div>
      <div className="w-[2px] bg-gray-300 h-full absolute right-0"></div>
    </div>
  );
}
