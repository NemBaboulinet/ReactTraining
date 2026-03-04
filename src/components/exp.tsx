import { useAtom, useAtomValue } from "jotai";
import { expAtom, lvlUpAtom } from "../atoms/expAtom";

const ExpEvo = () => {
  const levelUpAtomValue = useAtomValue(lvlUpAtom);
  const [exp, setExp] = useAtom(expAtom);
  console.log(levelUpAtomValue);

  return (
    <div>
      <p>
        tu es niveau{" "}
        <b>
          {levelUpAtomValue} ({exp})
        </b>
      </p>
      <button onClick={() => setExp((v) => v + 25)}> + 25 Exp</button>
    </div>
  );
  console.log(setExp);
};

export default ExpEvo;
