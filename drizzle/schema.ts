import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, varchar, decimal } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const product = mysqlTable("product", {
	id: int({ unsigned: true }).autoincrement().notNull(),
	title: varchar({ length: 255 }).notNull(),
	price: decimal({ precision: 10, scale: 2 }).notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "product_id"}),
]);
