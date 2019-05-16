var express = require('express');
var router = express.Router();

const Article = require('../schemas/article')

/* /articles 전체보기 */
router.get('/', async (req, res, next) => {

  try {
      const articles = await Article.find({});
      res.json(articles);
  } catch (err) {
      res.json(err);
      next();
  }
  // Article.find({})
  //   .then((articles) => {
  //       res.json(articles);
  //   })
  //   .catch((err) => {
  //       res.json(err);
  //   });
  // res.json(responseJson);
});

/* /articles/:id 상세보기 */
router.get('/:articleNum', async (req, res, next) => {
  const articleNum = parseInt(req.params.articleNum);

  try {
    const article = await Article.find({_id : articleNum});
    res.send(article);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

/* /articles 등록 */
router.post('/', async (req, res, next) => {
  const articleJsonFromClient = req.body;

  try {
    //const article = new Article(articleJsonFromClient);
    const article = new Article({
      _id : articleJsonFromClient._id,
      title : articleJsonFromClient.title,
      content : articleJsonFromClient.content
    });
    const saved = await article.save();
    res.json(saved);
  } catch(err) {
    console.log(err);
    next(err);
  }
  
});

/* /articles/:id 수정 */
router.put('/:articleNum', async (req, res, next) => {
  const articleNum = parseInt(req.params.articleNum);
  const articleJsonFromClient = req.body;

  try {
    const modifiedRes = await Article.updateOne({_id : articleNum}, articleJsonFromClient);
    res.send(modifiedRes);
  } catch(err) {
    console.log(err.message);
    next(err);
  }
  
});

/* /articles/:id 삭제 */
router.delete('/:articleNum', async (req, res, next) => {
  const articleNum = parseInt(req.params.articleNum);
  
  try {
    const deleteRes = await Article.deleteOne({_id : articleNum});
    res.send(deleteRes);
  } catch(err) {
    console.log(err.message);
    next(err);
  }

});

module.exports = router;
