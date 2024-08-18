exports.up = async (knex) => {
    await knex.schema.createTable('subproduto', (t) => {
        t.increments('id').primary().unsigned();
        t.string('nome', 200).notNull();
        t.decimal('preco', 10,2).notNull();
        t.string('ativo', 200).notNull();

        t.integer('id_produto').unsigned().notNull()
        .references('id').inTable('produto')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

        t.integer('id_empresa').unsigned().notNull()
        .references('id').inTable('empresa')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    });
};

exports.down = async (knex) => {
    await knex.schema.dropTable('subproduto');
};