import { DataSource } from "typeorm";
import { Todo } from "./entity/todo.entity";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Todo],
    synchronize: true,
    logging: true,
});
//# sourceMappingURL=data-source.js.map