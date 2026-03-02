"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDB = void 0;
const data_source_1 = require("../db/data-source");
console.log("module loaded");
const initializeDB = async () => {
    try {
        await data_source_1.AppDataSource.initialize();
        console.log("DB connected");
    }
    catch (error) {
        console.log("DB failed to connect", error);
    }
};
exports.initializeDB = initializeDB;
//# sourceMappingURL=initializeDB.js.map