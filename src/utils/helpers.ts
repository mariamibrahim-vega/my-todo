import { BadRequestError } from "./custom-error";

export const parseId = (val: string | string[] | undefined) => {
  const id = Number(val);
  if (!id) throw new BadRequestError("Invalid ID");
  return id;
};
