/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('birthdays').del()
  await knex('birthdays').insert([
    { id: 1, name: 'Matthew', day: '5', month: '12' },
    { id: 2, name: 'Ben', day: '22', month: '2' },
    { id: 3, name: 'Alyssa', day: '17', month: '11' },
    { id: 4, name: 'Taua', day: '6', month: '9' },
  ])
}
