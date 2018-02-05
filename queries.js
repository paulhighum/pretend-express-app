const database = require("./database-connection")

module.exports = {
  list(table){
    return database(table).select()
  },
  create(table, item){
    return database(table)
      .insert(item)
      .returning("*")
      .then(record => record[0])
  }
}
