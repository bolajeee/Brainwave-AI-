import ButttonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
      </div>

      <ButttonGradient />
    </>
  );
};

export default App;
