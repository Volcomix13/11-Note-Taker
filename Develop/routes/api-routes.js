const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

const router = require('express').Router();

router.get('/notes', (req, res) =>
    readFromFile('./db/db.json').then((data) =>
        res.json(JSON.parse(data))
    )
)

router.post('/notes', (req, res) => {

    const { title, text } = req.body;

    const payload = {
      title: title,
      text: text
    };
    readAndAppend(payload, './db/db.json');
    res.json(`Notes Added`);
});


module.exports = router;
