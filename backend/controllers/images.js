const models = require('../models')
const Episode = models.episodes
const Image = models.images

exports.index = (req, res) => {
    Image.findAll({
        include: [{ 
            model: Episode,
            as: "episode",
        }]
    }).then(result=>res.send(result))
    .catch(err => console.log(err))
}

exports.show = (req, res) => {
    Image.findOne({where:{id: req.params.id}}).then(result=> res.send(result))
    .catch(err => console.log(err))
}

exports.store = (req, res) => {
    Image.create(req.body).then(webtoon=> {
        res.send({
            message: "success",
            webtoon
        })
    })
    .catch(err => console.log(err))
}

exports.update = (req, res) => {
    Image.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(webtoon=> {
        res.send({
            message: "success",
            webtoon
        })
    })
    .catch(err => console.log(err))
}

exports.delete = (req, res) => {
    Image.destroy({where: {id: req.params.id}}).then(webtoon=> {
        res.send({
            message: "success",
            webtoon
        })
    })
    .catch(err => console.log(err))
}