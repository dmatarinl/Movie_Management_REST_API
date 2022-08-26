const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');


//Using as an example of fetch and the use of async-await
router.get('/', async (req, res) => {

    const resp = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await resp.json();
    res.json(users);

});

module.exports = router;