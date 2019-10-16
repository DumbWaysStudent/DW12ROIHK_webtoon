const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000

app.use(bodyParser.json())

//controllers
const webtoonController = require('./controllers/webtoons')
const episodeController = require('./controllers/episodes')
const imageController = require('./controllers/images')

app.group("/api/v2", (router) => {

    //webtoon API
    router.get('/webtoons', webtoonController.index)    
    router.get('/webtoon/:id', webtoonController.show)    
    router.post('/webtoon', webtoonController.store)    
    router.patch('/webtoon/:id', webtoonController.update)    
    router.delete('/webtoon/:id', webtoonController.delete)
    
    //episode API
    router.get('/episodes', episodeController.index)    
    router.get('/episode/:id', episodeController.show)    
    router.post('/episode', episodeController.store)    
    router.patch('/episode/:id', episodeController.update)    
    router.delete('/episode/:id', episodeController.delete)
    
    //image API
    router.get('/images', imageController.index)    
    router.get('/image/:id', imageController.show)    
    router.post('/image', imageController.store)    
    router.patch('/image/:id', imageController.update)    
    router.delete('/image/:id', imageController.delete)
    
    //another APIs goes here

})


app.listen(port, () => console.log(`Listening on port ${port}!`))