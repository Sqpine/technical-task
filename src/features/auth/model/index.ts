import { createEffect, createEvent, restore, sample } from "effector";
import { userModel } from "entities/user";
import { HandleChangeType, SubmittedType } from "./types";

export const submitted = createEvent<SubmittedType>();
const setField = createEvent<string>();

export const $username = restore(setField, "");

export const handleChange = setField.prepend<HandleChangeType>(
  (e) => e.target.value
);

const saveNameFx = createEffect((username: string) => {
  localStorage.setItem("username", username);
  userModel.authorised(username);
});

sample({
  clock: submitted,
  source: $username,
  target: saveNameFx,
});

submitted.watch((e) => {
  e.preventDefault();
});
