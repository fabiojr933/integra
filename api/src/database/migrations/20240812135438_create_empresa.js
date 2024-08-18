exports.up = async (knex) => {
    await knex.schema.createTable('empresa', (t) => {
        t.increments('id').primary().unsigned();
        t.string('nome', 200).notNull();
        t.string('email', 50).notNull().unique();
        t.string('telefone', 50).notNull();
        t.string('instance').notNull().unique();
        t.string('apikey').notNull().unique();
        t.string('base_url').notNull();
        t.string('senha', 120).notNull();
        t.string('ativo', 20).notNull();
    });
};

exports.down = async (knex) => {
    await knex.schema.dropTable('empresa');
};