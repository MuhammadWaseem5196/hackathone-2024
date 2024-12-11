
import DressStyle from "./components/Dressstyle";
import FooterComponent from "./components/footer";
import Hero from "./components/Hero";

import NewArrival from "./components/NewArrival";
import ReviewComponent from "./components/rating";

export default function Home() {
  return (
    <div>
          {/* Nevbar */}
         
          {/* hersection */}
          <Hero/>
          {/* newArrival */}
          <NewArrival/>
          {/* dress Style */}
          <DressStyle/>
          {/* review components */}
          <ReviewComponent/>
          {/* footer */}
          
    </div>
  );
}
