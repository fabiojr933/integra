exports.up = async (knex) => {
    await knex.schema.createTable('produto', (t) => {
        t.increments('id').primary().unsigned();
        t.string('nome', 200).notNull();
        t.decimal('preco', 10,2).notNull();
        t.string('ativo', 200).notNull();
        t.integer('id_empresa').unsigned().notNull()
        .references('id').inTable('empresa')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    });
};

exports.down = async (knex) => {
    await knex.schema.dropTable('produto');
};