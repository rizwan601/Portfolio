import Header from "./(components)/Header/Header";
import About from "./(components)/About/About";
import MyServices from "./(components)/MyServices/MyServices";
import MyPortfolio from "./(components)/MyPortfolio/MyPortfolio";
import Skills from "./(components)/Skills/Skills";
import Testemonials from "./(components)/Testemonials/Testemonials";
import DesignInsights from "./(components)/DesignInsights/DesignInsights";
import GetInTouch from "./(components)/GetInTouch/GetInTouch";
import Footer from "./(components)/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <MyServices />
      <MyPortfolio />
      <Skills />
      <Testemonials />
      <DesignInsights />
      <GetInTouch />
      <Footer />
    </>
  );
}
