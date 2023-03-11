const postService = require('../services/postService');

const getAllPostsInfo = async (_req, res) => {
  const result = await postService.getAllPosts();
  return res.status(200).json(result);
};

module.exports = {
 getAllPostsInfo,
};