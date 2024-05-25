const { Comment } = require('../models');
const commentData=
[
  {
    content: "wow", 
    user_id:1,
    post_id:3
  }
];


const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;