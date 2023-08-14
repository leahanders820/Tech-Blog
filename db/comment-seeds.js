const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1, // Corresponds to the user ID
    post_id: 1,
    comment_content: 'This is a comment by user 1.',
  },
  {
    user_id: 2, // Corresponds to the user ID
    post_id: 2,
    comment_content: 'This is a comment by user 2.',
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;