import { createEvent, restore } from "effector";
import { getSavedUser } from "shared/lib";

export const authorised = createEvent<string | null>();

export const $username = restore(authorised, getSavedUser());

export const $isAuth = $username.map((username) => !!username);
