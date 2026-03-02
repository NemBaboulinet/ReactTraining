import heroNameAtom from "../atoms/heroNameAtom";
import { useAtom } from "jotai";

function HeroComponent() {
  const [heroName, setHeroName] = useAtom(heroNameAtom);

  const extraName = () => {
    setHeroName(heroName + "!");
  };
  return (
    <div>
      <p>
        Notre heros s'appelle <b>{heroName} </b>
        <button onClick={extraName}> ! </button>
      </p>
    </div>
  );
}

export default HeroComponent;
