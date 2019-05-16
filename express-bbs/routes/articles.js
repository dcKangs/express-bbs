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
router.get('/:articleNum', (req, res) => {
  const articleNum = req.params.articleNum;
  res.send(articleNum + '번 글 보기');
});

/* /articles 등록 */
router.post('/', (req, res) => {
  const articleJsonFromClient = req.body;
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("test").collection("articles");
    // perform actions on the collection object
    collection.insertOne(articleJsonFromClient);
    client.close();
  });
  res.send(articleJsonFromClient);
});

/* /articles/:id 수정 */
router.put('/:articleNum', (req, res) => {
  const articleNum = req.params.articleNum;
  const articleJsonFromClient = req.body;
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("test").collection("articles");
    // perform actions on the collection object
    collection.updateOne(
        { _id : parseInt(articleNum) },
        {
          $set : articleJsonFromClient,
          //$set: { content : 'cm', arthor : 'test' }
          $currentDate :  { lastModified : true }
        }
    );
    client.close();
  });
  res.send(articleNum + '번 글 수정');
});

/* /articles/:id 삭제 */
router.delete('/:articleNum', (req, res) => {
  const articleNum = parseInt(req.params.articleNum);
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("test").collection("articles");
    // perform actions on the collection object
    collection.deleteOne({_id : articleNum});
    client.close();
  });
  res.send(articleNum + '번 글 삭제');
});

module.exports = router;
