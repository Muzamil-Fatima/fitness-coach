export default function BookNow({ session }) {
  const handleBook = () => {
    console.log("Booking this session:", session.id);
  };
  return (
    <>
      <button onClick={handleBook}>Book Session</button>
    </>
  );
}
