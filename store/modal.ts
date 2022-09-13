import { atom } from "recoil";

export const isModalOpenState = atom({
  key: "isModalOpenState",
  default: false,
});

export const modalTypeState = atom({
  key: "modelTypeState",
  default: "dropIn",
});
