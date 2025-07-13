import BookNow from "../../Components/BookNow";
export default function SessionCard() {
  const sessions = [
    {
      id: 1,
      sessionCount: 1,
      title: "Session",
      duration: "1 HOUR",
      location: "In person (DUBAI) / Online",
      price: "AED 250",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
      id: 2,
      sessionCount: 8,
      title: "Sessions",
      duration: "1 HOUR",
      location: "In person (DUBAI) / Online",
      price: "AED 1520",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
      id: 3,
      sessionCount: 12,
      title: "Sessions",
      duration: "1 HOUR",
      location: "In person (DUBAI) / Online",
      price: "AED 2210",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
      id: 4,
      sessionCount: 16,
      title: "Sessions",
      duration: "1 HOUR",
      location: "In person (DUBAI) / Online",
      price: "AED 2580",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
  ];
  return (
    <>
      {sessions.map((session) => (
        <div key={session.id} className="w-full max-w-[1512px] min-h-[300px] sm:min-h-[400px] md:min-h-[529px] border-b-2 border-dashed border-[var(--color-primary)] mx-auto px-4 hover:bg-[var(--color-darker)]">
          <div className="flex flex-col md:flex-row w-full max-w-[1179px] mx-auto gap-6 items-center
">
            {/* Left Section */}
            <div className="w-full md:w-1/2">
              <div className="">
                <p className="text-[32px] sm:text-[48px] md:text-[64px] font-extrabold font-primary">
                  <span className="text-[var(--color-primary)]">
                    {session.sessionCount}
                  </span>{" "}
                  Session
                </p>
              </div>
              <div className="">
                <p className="text-xl opacity-50">{session.description}</p>
              </div>
            </div>
            {/* Right Section */}
            <div className="w-full md:w-1/2">
              <div className="text-[32px] sm:text-[48px] md:text-[64px] font-semibold">
                {session.duration}
              </div>
              <div className="text-2xl">{session.location}</div>
              <div className="text-[32px] sm:text-[48px] md:text-[64px] font-black">
                {session.price}
              </div>
              {/* Book Now button component */}
              <BookNow session={session} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
