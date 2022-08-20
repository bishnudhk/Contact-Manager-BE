import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("contacts",(table) => {
        table.increments('id');
        table.string("name").notNullable();
        table.string("contact").notNullable();
        table.string("email");
        table.string("address");
        table.string("photo").notNullable();
        table.boolean("is_favourite").defaultTo(false);
        table.integer("user_id").notNullable().unsigned();
        table.foreign("user_id").references("id").inTable("user_account");


    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("contacts");
}

