exports.seed = function(knex, Promise){
  return knex("migration")
    .del()
    .then(function(){
      return knex("migration").insert([
        {
          id: 1,
          name: "Ellenor",
        },
        {
          id: 2,
          name: "Rosemary",
        },
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE migration_id_seq RESTART WITH 3;")
    })
}
