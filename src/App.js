import "./App.css";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import MainList from "./components/MainList";

function App() {
  return (
    <div className="App">
      <Hero />
      <Featured />
      <MainList />
    </div>
  );
}

export default App;
