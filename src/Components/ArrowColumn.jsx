import arrowDown from "../images/arrowColorDown.svg";
export default function ArrowColumn() {
  return (
    <div className="my-6 mx-0">
      <hr className="opacity-20 items-center w-56" />
      <div className="flex gap-4 m-2">
        <img
          src={arrowDown}
          alt="downarrow"
          className="mx-3.5 my-3 h-2"
        />
        <img
          src={arrowDown}
          alt="downarrow"
          className="mx-3.5 my-3 h-2"
        />
        <img
          src={arrowDown}
          alt="downarrow"
          className="mx-3.5 my-3 h-2"
        />
      </div>
      <hr className="opacity-20 line-length w-56" />
    </div>
  );
}
