exports.up = function(knex) {
    return knex.schema.table('categories', table => {
        table.integer('parent_id', 11);
    })
};
  
exports.down = function(knex) {
    return knex.schema.table('categories', table => {
        table.dropColumn('parent_id');
    })
};