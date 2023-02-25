const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {       // вместо app - везде проставляем router. posts - вообще удаляем
    res.send('GET POSTS')
})

router.post('/', (req, res) => {
    res.send('POST POSTS')
})

router.put('/', (req, res) => {
    res.send('PUT POSTS')
})

router.delete('/', (req, res) => {
    res.send('DELETE POSTS')
})

module.export = router;
