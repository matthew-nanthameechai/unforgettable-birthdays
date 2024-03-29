/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('birthdays').del()
  await knex('birthdays').insert([
    { id: 1, name: 'Matthew', day: '5', month: '12' },
  ])
}
