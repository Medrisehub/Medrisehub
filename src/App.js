import "./App.css";
import AboutUs from "./components/AboutUs";
import Banner from './components/Banner';
import Contacts from "./components/Contacts";
import Distributor from "./components/Distributor";
import Footer from "./components/Footer";
import Products from "./components/Products";

function App() {
  return (
    <div className="App ">
      <Banner />
      <AboutUs />
      <Products />
      <Distributor />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
