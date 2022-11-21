import { atom } from "recoil";

// interface UserInterface {
//   wallet: string;
//   holder: string;
//   amount: number;
// }

interface dataInterface {
  displayName?: string;
  mobile?: string;
}

export const dataAtom = atom<dataInterface | null>({
  key: "data",
  default: null,
});