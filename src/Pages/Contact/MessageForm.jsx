export default function Question() {
  return (
    <>
      <div className="con-right2 c3-bg" id="contact-section">
        <div className="flex text-inpspace">
          <div className=" flex labinp">
            <label for="" className="w6 ">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              required
              className="w5 inp-dec c5"
            />
          </div>
          <div className="flex labinp">
            <label for="" className="w6">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              required
              className="w5 inp-dec c5"
            />
          </div>
        </div>
        <div className="flex text-inpspace">
          <div className=" flex labinp">
            <label for="" className="w6">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              required
              className="w5 inp-dec c5"
            />
          </div>
          <div className=" flex labinp">
            <label for="" className="w6">
              Phone
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              required
              className="w5 inp-dec c5"
            />
          </div>
        </div>
        <div>
          <div className=" flex labinp">
            <label for="" className="w6">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter your Subject"
              required
              className="w5 c5"
            />
          </div>
        </div>
        <div className="input-wrap">
          <div id="menu-placeholder"></div>
        </div>
        <div className="mess-box">
          <div className=" flex labinp">
            <label for="" className="w6">
              Message
            </label>
            <textarea
              placeholder="Enter your message here..."
              className="w5 input-mess c5"
              required
            ></textarea>
          </div>
        </div>
        <div className="btn-message flex">
          <button className="w5 lg-btn" id="sendBtn">
            Send your message
          </button>
        </div>
      </div>
    </>
  );
}
