import heroFullNameAtom, {
  heroFirstNameAtom,
  heroLastNameAtom,
} from "../atoms/heroFullNameAtom"; // Et les importer de cette facon NB a la syntaxe {atom1, atom2} from "fichier" et import sans accolades pour l'atome par defaut
import { useAtom, useAtomValue } from "jotai";

function HeroFullName() {
  const [firstName, setFirstName] = useAtom(heroFirstNameAtom);
  const [lastName, setLastName] = useAtom(heroLastNameAtom);
  const heroFullNameValue = useAtomValue(heroFullNameAtom);

  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <p>
        Notre heros s'appelle désormais <b>{heroFullNameValue}</b>
      </p>
    </div>
  );
}

export default HeroFullName;
