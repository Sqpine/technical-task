import React from "react";

export type SubmittedType = React.FormEvent<HTMLFormElement>;

export type HandleChangeType = React.ChangeEvent<
  HTMLTextAreaElement | HTMLInputElement
>;
