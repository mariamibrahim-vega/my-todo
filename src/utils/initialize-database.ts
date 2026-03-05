import { AppDataSource } from "../db/data-source";

export const initializeDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log("DB connected");
  } catch (error) {
    console.log("DB failed to connect", error);
    throw error;
  }
};
