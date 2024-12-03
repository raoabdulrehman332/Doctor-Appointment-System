import DoctorsSection from "./Compunents/DoctorSection";
import Hero from "./Compunents/Hero";


export default function Home() {
  return (
    <>
    <Hero />
   <DoctorsSection isHome={true}/>
    </>
  );
    
}
