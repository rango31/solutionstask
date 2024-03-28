
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary().notNull();
        table.string('uuid', 36)
        table.string('first_name', 255)
        table.string('last_name', 255)
        table.boolean('is_admin', 1)
        table.string('email', 255)
        table.timestamp('email_verified_at')
        table.string('password', 255)
        table.string('avatar', 36)
        table.string('address', 255)
        table.string('phone_number', 255)
        table.boolean('is_marketing', 1)
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        table.timestamp('last_login_at')
    }).createTable('payments', function (table) {
        table.increments('id').primary().notNull();
        table.string('uuid', 36)
        table.string('type', 255)
        table.json('details')
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    }).createTable('order_statuses', function (table) {
        table.increments('id').primary().notNull();
        table.string('uuid', 36)
        table.string('title', 255)
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    }).createTable('categories', function (table) {
        table.increments('id').primary().notNull();
        table.string('uuid', 36)
        table.string('title', 255)
        table.string('slug', 255)
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    }).createTable('posts', function (table) {
        table.increments('id').primary().notNull();
        table.string('uuid', 36)
        table.string('title', 255)
        table.string('slug', 255)
        table.string('content', 3000)
        table.json('metadata')
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    }).createTable('products', function (table) {
        table.increments('id').primary().notNull();
        table.integer('category_id')
        table.string('title', 255)
        table.string('uuid', 36)
        table.decimal('price', 12,2)
        table.string('description', 255)
        table.json('metadata')
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        table.timestamp('deleted_at')
    }).createTable('jwt_tokens', function (table) {
        table.increments('id').primary().notNull();
        table.string('unique_id')
        table.integer('user_id')
        table.string('token_title')
        table.json('restrictions')
        table.json('permissions')
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        table.timestamp('expires_at')
        table.timestamp('last_used_at')
        table.timestamp('refreshed_at')
    }).createTable('orders', function (table) {
        table.increments('id').primary().notNull();
        table.integer('user_id')
        table.integer('order_status_id')
        table.integer('payment_id')
        table.string('uuid', 36)
        table.json('products')
        table.json('address')
        table.decimal('delivery_fee', 8,2)
        table.decimal('amount', 12,2)
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        table.timestamp('shipped_at')
    }).createTable('password_resets', function (table) {
        table.string('email').primary().notNull();
        table.string('token', 36)
        table.timestamp('created_at').defaultTo(knex.fn.now());
    }).createTable('brands', function (table) {
        table.increments('id').primary().notNull();
        table.string('uuid', 36)
        table.string('title', 255)
        table.string('slug', 255)
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    }).createTable('promotions', function (table) {
        table.increments('id').primary().notNull();
        table.string('uuid', 36)
        table.string('title', 255)
        table.string('content', 3000)
        table.json('metadata')
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    }).createTable('files', function (table) {
        table.increments('id').primary().notNull();
        table.string('uuid', 36)
        table.string('name', 255)
        table.string('path', 255)
        table.string('size', 255)
        table.string('type', 255)
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('users')
        .dropTable('payments')
        .dropTable('order_statuses')
        .dropTable('categories')
        .dropTable('posts')
        .dropTable('products')
        .dropTable('jwt_tokens')
        .dropTable('orders')
        .dropTable('password_resets')
        .dropTable('brands')
        .dropTable('promotions')
        .dropTable('files')
};
