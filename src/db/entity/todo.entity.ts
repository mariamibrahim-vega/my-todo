import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column({ length: 100 })
  title!: string;

  @Column("text")
  description?: string;

  @Column("boolean", { default: false })
  completed!: boolean;

  @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;
}
