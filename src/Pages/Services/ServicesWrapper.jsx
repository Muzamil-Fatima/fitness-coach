import ArrowRow from "../../Components/ArrowRow";
export default function ServicesWrapper({
  title1,
  title2,
  description,
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
          <p>{description}</p>
        </div>
        <div>
          <img src={image} alt="women" className="w-[555px] h-[397px] m-4" />
        </div>
      </div>
    </div>
  );
}
