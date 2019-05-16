const express = require('express');
const router = express.Router();

// 이미 넘어온 url은 다시 루트 / 가 된다
router.get('/', (req, res) => {
    const pageNo = req.query.page ? req.query.page : 1;
    const articles = [
        {
            articleNo : 1,
            title : '오늘은 좋은날',
            content : 'goog',
            author : 'Daniel'
        },
        {
            articleNo : 2,
            title : '삼국지',
            content : 'paag',
            author : 'Sanchez'
        },
        {
            articleNo : 3,
            title : '서핑',
            content : 'surf',
            author : 'dcKang'
        }
    ];

    //res.send('게시물 전체보기' + pageNo + '페이지');
    res.json(articles);
});

router.get('/:articleNo/reply/:replyNo', (req, res) => {
    const pathVar = req.params.articleNo;
    const replyVar = req.params.replyNo;
    res.send(pathVar + '번 글 상세보기' + replyVar + '번 댓글 상세보기');
});

router.post('/', (req, res) => {
    const articleFromClient = req.body;
    console.log(req.body);
    //res.send('글 등록이 완료되었습니다.');
    res.json(articleFromClient);
});

router.put('/:articleNo', (req, res) => {
    res.send(req.params.articleNo + '번 글이 수정되었습니다.');
});

router.delete('/:articleNo', (req, res) => {
    res.send(req.params.articleNo + '번 글이 삭제되었습니다.');
});

module.exports = router;