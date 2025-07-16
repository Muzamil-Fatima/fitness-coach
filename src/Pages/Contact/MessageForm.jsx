import DropDown from "../../Components/DropDown";

export default function Question() {
  return (
    <div className="w-[90%] ml-16 font-secondary bg-[var(--color-darker)] p-6 mt-20 rounded-2xl">
      <div className="mt-10">
        <div className="grid grid-cols-2 gap-2">
          <div className=" flex flex-col">
            <label for="" className="font-semibold text-[16px] ">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              required
              className="border-[0.76px] border-[var(--color-white)] h-12 rounded-[7px] justify-center pl-1.5 mt-4 mb-4"
            />
          </div>
          <div className="flex flex-col">
            <label for="" className="">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              required
              className="border-[0.76px] border-[var(--color-white)] h-12 rounded-[7px] justify-center pl-1.5 mt-4 mb-4"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <label for="" className="">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              required
              className="border-[0.76px] border-[var(--color-white)] h-12 rounded-[7px] justify-center pl-1.5 mt-4 mb-4"
            />
          </div>
          <div className="flex flex-col">
            <label for="" className="">
              Phone
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              required
             className="border-[0.76px] border-[var(--color-white)] h-12 rounded-[7px] justify-center pl-1.5 mt-4 mb-4"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <label for="" className="">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter your Subject"
              required
                 className="border-[0.76px] border-[var(--color-white)] h-12 rounded-[7px] justify-center pl-1.5 mt-4 mb-4"
            />
          </div>
        </div>
        <div className="">
          <div>
            <DropDown />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col">
            <label for="" className="">
              Message
            </label>
            <textarea
              placeholder="Enter your message here..."
                 className="border-[0.76px] border-[var(--color-white)] h-12 rounded-[7px] justify-center pl-1.5 mt-4 mb-4"
              required
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-[var(--color-primary)] w-[247px] h-[61px] font-medium text-[16px] rounded-2xl m-12">
            Send your message
          </button>
        </div>
      </div>
    </div>
  );
}
