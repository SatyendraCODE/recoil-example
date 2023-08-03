import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

type User = {
  firstName: string;
  lastName: string;
  mobileNumber: string;
};

const { persistAtom } = recoilPersist({
  key: "user",
  storage: sessionStorage,
});

export const UserAtom = atom<User>({
  key: "UserAtom",
  default: {
    firstName: "Satyendrasinh",
    lastName: "Chauhan",
    mobileNumber: "8401189108",
  },
  effects_UNSTABLE: [persistAtom],
});
