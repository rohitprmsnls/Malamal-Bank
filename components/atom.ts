import { atom } from "recoil";

// interface UserInterface {
//   wallet: string;
//   holder: string;
//   amount: number;
// }

interface dataInterface {
  displayName?: string;
  mobile?: string;
  price?: number;
}

export const dataAtom = atom<dataInterface | null>({
  key: "data",
  default: null,
});

export const show = atom({
  key: "show",
  default: false,
});

