import Consultation from "../../Components/Consultation";
import Question from "./Question";
import MessageForm from "./MessageForm";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      <Question />
      <hr />
      <div>
        <div>
          <ContactForm />
        </div>
        <div>
          <MessageForm />
        </div>
      </div>
      <div className="m-20">
        <Consultation />
      </div>
    </>
  );
}
