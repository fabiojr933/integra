/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('empresa').del()
  await knex('empresa').insert([
    { nome: 'SUPERVISOR', 
      email: 'supervisor%foxsistema.com.br',
      telefone: '66999539490',
      instance: 'Fox Sistemas',
      apikey: 'hfsgsdcdcsd8r4fv5fvdfv56d4rver',
      base_url: '127.0.0.1',
      senha: 'cd1s6dc6s986rverv57484rever',
      ativo: 'S'
     },

  ]);
};
