import "reflect-metadata";
import express from "express";
import "dotenv/config";
import { initializeDB } from "./utils/initializeDB";
const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello from Express + TypeScript 🚀");
});
initializeDB().then(() => app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}));
//# sourceMappingURL=app.js.map