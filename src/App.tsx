import { useState } from "react";
import Hero from "./components/Hero";
import Details from "./components/Details";
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Share from "./components/Share";

export default function App() {
  const [rsvpOpen, setRsvpOpen] = useState(false);

  return (
    <main className="min-h-screen bg-korean-cream">
      <Hero onRsvpClick={() => setRsvpOpen(true)} />
      <Details />
      <Countdown />
      <Gallery />
      <Share />
      {rsvpOpen && (
        <RSVP isOpen={rsvpOpen} onClose={() => setRsvpOpen(false)} />
      )}
    </main>
  );
}
