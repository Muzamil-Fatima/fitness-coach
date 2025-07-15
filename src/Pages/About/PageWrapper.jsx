import ArrowRow from "../../Components/ArrowRow";
import DropDown from "../../Components/DropDown";
import BookNow from "./BookNow";

export default function PageWrapper({title1,title2, para1, para2, para3, para4, image1, image2}) {
    return (
      <>
      <h3>{title1}<div>{title2}</div></h3>
      <ArrowRow />
      <div>
        <div>
            <DropDown />
            <span>1 HOUR</span>
            <h4>LOCATION: IN PERSON (DUBAI)</h4>
            <p>{para1}</p>
            <p>{para2}</p>
            <p>{para3}</p>  
            <p>{para4}</p>
        </div>
        <div>
            <img src={image1} alt={title1+title2} />
            <img src={image2} alt={title1+title2} />
        </div>
        <BookNow />
      </div>
      </>
    );
}