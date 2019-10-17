const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000

app.use(bodyParser.json())

//controllers
const AuthController = require('./controllers/auth')
const webtoonController = require('./controllers/webtoons')
const episodeController = require('./controllers/episodes')
const imageController = require('./controllers/images')

//middlewares
const { authenticated } = require('./middleware')

app.group("/api/v1", (router) => {

    //auth API
    router.post('/login', AuthController.login)

    //webtoon API
    router.get('/webtoons', webtoonController.index)    
    router.get('/webtoon/:id', webtoonController.show)  
    router.get('/webtoon/:keyword', webtoonController.search)    
    router.post('/webtoon', authenticated, webtoonController.store)    
    router.patch('/webtoon/:id', authenticated, webtoonController.update)    
    router.delete('/webtoon/:id', authenticated, webtoonController.delete)
    
    //episode API
    router.get('/episodes', episodeController.index)    
    router.get('/episode/:id', episodeController.show)    
    router.post('/episode', authenticated, episodeController.store)    
    router.patch('/episode/:id', authenticated, episodeController.update)    
    router.delete('/episode/:id', authenticated, episodeController.delete)
    
    //image API
    router.get('/images', imageController.index)    
    router.get('/image/:id', imageController.show)    
    router.post('/image', authenticated, imageController.store)    
    router.patch('/image/:id', authenticated, imageController.update)    
    router.delete('/image/:id', authenticated, imageController.delete)
    
    //another APIs goes here

})


app.listen(port, () => console.log(`Listening on port ${port}!`))