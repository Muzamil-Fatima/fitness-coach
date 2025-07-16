import ArrowRow from "../../Components/ArrowRow";
import women4 from "../../images/women4.png";

export default function Question() {
  return (
    <div className="font-secondary">
      <div className="con-left flex">
        <div className="flex">
          <p className="w6 font2 text-5xl ask-ques flex">
            <span>Have Questions</span> or want to get in 
            <span className="block">touch with us?</span>
          </p>
        </div>
        <ArrowRow />
        <div>
          <p className="opacity-50">
            We'd love to hear from you! Feel free to reach out through any of
            the following methods.
          </p>
        </div>
      </div>
      <div className="">
        <img src={women4} alt="women"  />
      </div>
      <hr className="dash-line"></hr>
    </div>
  );
}
