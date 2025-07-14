import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services/Services";
import SessionCard from "./Pages/About/SessionCard";
import Classes from "./Pages/About/Classes";
import Lenka from "./Pages/About/Lenka";


function App() {
  return (
    <div className="bg-[var(--color-dark)] text-[var(--color-white)] min-h-screen w-screen font-primary m-0 p-0">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />

          <Route path="about">
              <Route path="sessions" element={<SessionCard />} />
              <Route path="training-classes" element={<Classes />} />
              <Route path="lenka" element={<Lenka />} />
          </Route>

          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
