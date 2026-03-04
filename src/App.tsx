import "./style.css";
import HeroComponent from "./components/hero";
import HeroFullName from "./components/heroFullName";
import ExpEvo from "./components/exp";
import Backpack from "./components/inventory";

export default function App() {
  return (
    <div className="App">
      <h1>Train Atom (jotai) et Zod</h1>
      <h2>Atom Simple (HeroName)</h2>
      <HeroComponent />
      <h2>Atom dérivé (heroFullNamne)</h2>
      <HeroFullName />
      <h2> Atom dérivé (exp)</h2>
      <ExpEvo />
      <h2> Atom Objet (inventaire) </h2>
      <Backpack />
    </div>
  );
}
