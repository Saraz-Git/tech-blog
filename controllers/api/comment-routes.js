const router = require('express').Router();
const { Comment } = require('../../models');
const { withAuth } = require('../../utils/helpers');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create(
      {
        content: req.body.content,
        user_id: req.session.user_id,
        post_id: req.body.post_id,
      });
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;