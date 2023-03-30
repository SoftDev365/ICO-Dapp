import AdSection from "./sections/AdSection";
// import Platforms from "./sections/Platforms";
import AboutUs from "./sections/About_us";
import Footer from './sections/Footer';
import Wallet from './sections/Wallet';
import Service from './sections/Service';
import Assistant from './sections/Assistant';
// import RoadMap from './sections/RoadMap';
import Program from './sections/Program';
import BlackRod from './sections/BlackRod';
import Other from './sections/Other';
const Landing = () => {
  return (
    <div className="">
      <AdSection />
      <AboutUs />
      {/* <Platforms /> */}
      <BlackRod/>
      <Wallet/>
      <BlackRod id='roadmap'/>
      <Other/>
      <BlackRod/>
      <Service/>
      <Program/>
      <Assistant/>
      <Footer />
    </div>
  );
}

export default Landing;