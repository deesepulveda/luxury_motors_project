import "./App.css";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MainList from "./components/MainList";
import NewsMedia from "./components/NewsMedia";
import Tour from "./components/Tour";

function App() {
  return (
    <div className="App">
      <Hero />
      <Featured />
      <Tour />
      <MainList />
      <NewsMedia />
      <Footer />
    </div>
  );
}

export default App;
