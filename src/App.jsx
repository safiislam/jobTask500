import Banner from "./Components/Banner";
import CoffeeMenu from "./Components/CoffeeMenu";
import Footer from "./Components/Footer";
import ImageGellary from "./Components/ImageGellary";
import Navbar from "./Components/Navbar";
import NewResepes from "./Components/NewResepes";
import StatusOfRestrurent from "./Components/StatusOfRestrurent";
import TastPerfectionSection from "./Components/TastPerfectionSection";

const App = () => {
  return (
    <div className="  space-y-24">
      <div className="section-container text-primary_color">
        <Navbar />
        <Banner />
      </div>
      <div>
        <StatusOfRestrurent />
      </div>
      <div className="section-container ">
        <TastPerfectionSection />
      </div>
      <div className="mt-12">
        <CoffeeMenu />
      </div>
      <div>
        <NewResepes />
      </div>
      <div>
        <ImageGellary />
      </div>
      <Footer />
    </div>
  );
};

export default App;