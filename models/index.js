// import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');



// Each Post belongs to a User
Post.belongsTo(User, { foreignKey: 'user_id' });
// Each Post can have many Comments
Post.hasMany(Comment, { foreignKey: 'post_id' });
// Each Comment belongs to a Post
Comment.belongsTo(User, { foreignKey: 'user_id' });

module.exports = {
  User,
  Post,
  Comment,
};
