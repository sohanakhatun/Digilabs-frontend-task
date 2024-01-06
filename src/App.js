import "./App.css";
import Cards from "./Components/Cards";
import Client from "./Components/Client";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import CardsSecond from "./Components/CardsSecond";
import Statistics from "./Components/Statistics";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="overflow-x-hidden h-screen w-screen">
      {/* Announcement Section */}
      <section className="flex  flex-grow items-center gap-2 font-Inter md:ml-[25%] mr-[20%]  font-medium sm:ml-2 sm:mr-2 ">
        <div className=" mt-1 rounded-[50px] py-2 px-1 border-[1.5px] border-[#E6E7E9] bg-[#F1F1F2] ">
          Announcement
        </div>
        <div className="sm:text-[15px] xsm:text-[14px] xxsm:text-[13px] font-semibold">
          We are happy to announce that we raise $2 Million in Seed Funding
        </div>
      </section>
      <div className="flex "></div>
      {/* Navbar Section */}
      <Navbar />
      {/* HERO SECTION WITH MESH */}
      <section>
        <HeroSection />
      </section>

      {/* CLIENT SECTION */}
      <section>
        <Client />
      </section>

      {/* Cards Section */}
      <section>
        {" "}
        <Cards />
      </section>
      {/* Cards 2 Section */}
      <section>
        {" "}
        <CardsSecond />
      </section>
      {/* STATISTICS SECTION */}
      <section>
        {" "}
        <Statistics />
      </section>
         {/* Reviews Section */}
      <section>
        <Reviews/>
      </section>
      <div className="mt-12 border-[1px] border-[#d5ddea]"></div>
   
      
      {/* Footer */}
      <section>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
