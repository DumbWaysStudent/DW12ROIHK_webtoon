const models = require('../models')
const Episode = models.episodes
const Webtoon = models.webtoons

exports.index = (req, res) => {
    Episode.findAll({
        include: [{ 
            model: Webtoon,
            as: "webtoon_id",
        }]
    }).then(result=>res.send(result))
    .catch(err => console.log(err))
}

exports.show = (req, res) => {
    Episode.findOne({where:{id: req.params.id}}).then(result=> res.send(result))
    .catch(err => console.log(err))
}

exports.store = (req, res) => {
    Episode.create(req.body).then(webtoon=> {
        res.send({
            message: "success",
            webtoon
        })
    })
    .catch(err => console.log(err))
}

exports.update = (req, res) => {
    Episode.update(
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
    Episode.destroy({where: {id: req.params.id}}).then(webtoon=> {
        res.send({
            message: "success",
            webtoon
        })
    })
    .catch(err => console.log(err))
}