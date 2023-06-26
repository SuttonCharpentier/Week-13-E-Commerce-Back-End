// Import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

 // Categories have many Products
Category.hasMany(Product, { foreignKey: 'category_id' });

// Products belongsTo Category
Product.belongsTo(Category, { foreignKey: 'category_id' });

// Product belongs to many tag
Product.belongsToMany(Tag, {through: ProductTag, foreignKey: 'product_id'});

// Tag belongs to many product 
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id' });

// Product tag belongs to product
ProductTag.belongsTo(Product, { foreignKey: 'product_id' });

// Products tags belongsTo tag
ProductTag.belongsTo(Tag, { foreignKey: 'tag_id' });

// Product has many product tag
Product.hasMany(ProductTag, { foreignKey: 'product_id' });

// Tag has many product tag
Tag.hasMany(ProductTag, {foreignKey: 'tag_id'});

module.exports = {Product, Category, Tag, ProductTag,};