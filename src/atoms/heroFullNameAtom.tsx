import { atom } from "jotai";

//On peut exporter plusieurs atomes dans un même fichier de cette facon
export const heroFirstNameAtom = atom("");
export const heroLastNameAtom = atom("");

const heroFullNameAtom = atom((get) => {
  return get(heroFirstNameAtom) + " " + get(heroLastNameAtom);
});

export default heroFullNameAtom;
