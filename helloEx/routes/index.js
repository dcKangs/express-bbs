const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('루트 URL로 요청을 하셨습니다.');
});

module.exports = router;