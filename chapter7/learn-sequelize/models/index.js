const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

// 1:N
db.User.hasMany(db.Comment, {foreignKey: 'commenter', sourceKey: 'id'});
db.Comment.belongsTo(db.User, {foreignKey: 'commenter', targetKey: 'id'});

// 1:1
// db.User.hasOne(db.Info, {foreignKey: 'user_id', sourceKey: 'id'});
// db.Info.belongsTo(db.User, {foreignKey: 'user_id', targetKey: 'id'});

// N:M
// db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'});
// db.Hashtag.belongsToMany(db.Post, {through: 'PostHashtag'});

module.exports = db;