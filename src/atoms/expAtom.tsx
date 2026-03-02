import { atom } from "jotai";

const expAtom = atom(0);

const lvlUpAtom = atom((get) => {
  return Math.floor(get(expAtom) / 100) + 1;
});

export default lvlUpAtom;
