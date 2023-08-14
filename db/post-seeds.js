const { Post } = require('../models');

const postData = [
  {
    user_id: 1,
    title: 'title1',
    content: "This is the first post's text content.",
  },
  {
    user_id: 2,
    title: 'title2',
    content: "This is the second post's text content.",
  },
];


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;