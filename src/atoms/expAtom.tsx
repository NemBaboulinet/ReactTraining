import { atom } from "jotai";

export const expAtom = atom(0);

export const lvlUpAtom = atom((get) => {
  return Math.floor(get(expAtom) / 100) + 1;
});
