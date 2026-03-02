import { AppDataSource } from "../db/data-source";

console.log("module loaded");

export const initializeDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log("DB connected");
  } catch (error) {
    console.log("DB failed to connect", error);
  }
};
