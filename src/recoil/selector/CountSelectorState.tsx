import { selector } from "recoil";
import { CountState } from "../atom/CountState";

export const CountSelectorState = selector({
  key: "fontSizeLabelState",
  get: ({ get }) => {
    const count = get(CountState);
    const mul = 2;

    return count * mul;
  },
});
