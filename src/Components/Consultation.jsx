import women5 from "../images/women5.png";
export default function Consultation() {
  return (
    <div className="h-[380px] w-[82vw] mx-auto bg-[var(--color-primary)] flex items-center justify-center p-10 rounded-2xl  overflow-hidden font-secondary">
      <div className="w-full h-full border-2 border-black border-dashed flex rounded-2xl">
        <div className="flex flex-col w-1/2 justify-center p-8 ">
          <p className=" text-[52px] space-[-2] font-semibold ">Get a free Consultation</p>
          <p className=" text-base ">
            Lorem Ipsum'is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printe
          </p>
          <div className="flex">
            <button className="w-[232px] h-14 text-[var(--color-white)] p-2.5 rounded-[10px] bg-[var(--color-darker)]">Email Us</button>
            <button className="h-14 w-[195px] text-[var(--color-darker)] border-2 border-dashed border-[var(--color-white)] rounded-[10px]">Call Us</button>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <p className="text-[var(--color-dark)] bg-[var(--color-white)] py-1 px-2 rounded-xl mt-10 transform -translate-x-16 ">Hey, it's free for you!</p>
          <img src={women5} alt="women img" className="max-h-full object-cover " />
        </div>
      </div>
    </div>
  );
}
