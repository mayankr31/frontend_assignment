import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import FeaturedRewards from "./components/FeaturedRewards";
import  SocialBanner  from "./components/SocialBanner";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Cards />
      <FeaturedRewards/>
      <SocialBanner/>
    </>
  );
}

export default App;
