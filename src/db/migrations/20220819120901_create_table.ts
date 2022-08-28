import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("contacts",(table) => {
        table.increments('id').primary().notNullable();
        table.string("first_name").notNullable();
        table.string("middle_name");
        table.string("last_name").notNullable();
        table.string("mobile").notNullable();
        table.string("email");
        table.string("company");
        table.string("photo").notNullable();
        table.boolean("is_favourite").defaultTo(false);
        table.integer("user_id").notNullable().unsigned();
        table.foreign("user_id").references("id").inTable("user_account");


    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("contacts");
}

