import ArrowRow from "../../Components/ArrowRow";
export default function ServicesWrapper({
  title1,
  title2,
  para1,
  para2,
  para3,
  image,
}) {
  return (
    <div>
      <div>
        <h3>
          <span className="block">{title1}</span>
          <span className="block mt-0 text-[var(--color-primary)]">
            {title2}
          </span>
        </h3>
        <ArrowRow />
      </div>
      <div>
        <div>
          <p>{para1}</p>
          <p>{para2}</p>
          <p>{para3}</p>
        </div>
        <div>
          <img src={image} alt="women" className="w-[555px] h-[397px] m-4" />
        </div>
      </div>
    </div>
  );
}
