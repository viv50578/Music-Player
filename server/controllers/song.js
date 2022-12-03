const Song = require('../models/song')

createSong = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an Song',
        })
    }
    const song = new Song(body)
    song['views']=0
    song['likes']=0
    if (!song) {
        return res.status(400).json({ success: false, error: err })
    }
    song.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: song._id,
                message: 'Song added!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Song already exists!',
            })
        })
}

updateSong = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Song.findOne({ _id: req.params.id }, (err, song) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Song not found!',
            })
        }
        if(body.imageURL)
            song.imageURL = body.imageURL
        if(body.name)
            song.name = body.name
        if(body.like)
            song.likes += 1
        if(body.dislike)
            song.likes -= 1
        if(body.view)
            song.views += 1
        song.save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: song._id,
                    message: 'Song details updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Song details not updated!',
                })
            })
    })
}

deleteSong = async (req, res) => {
    Song.findOneAndDelete({ _id: req.params.id }, (err, song) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!song) {
            return res
                .status(404)
                .json({ success: false, error: `Song not found` })
        }
        
        return res.status(200).json({ success: true, data: song })
    }).clone().catch(err => console.log(err))
}

getSongById = async (req, res) => {
    Song.findOne({ _id: req.params.id }, (err, song) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!song) {
            return res
                .status(404)
                .json({ success: false, error: `Song not found` })
        }
        return res.status(200).json({ success: true, data: song })
    }).clone().catch(err => console.log(err))
}

getSongsByArtist = async (req, res) => {
    Song.find({ artists: req.params.id }, (err, songs) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!songs.length) {
            return res
                .status(404)
                .json({ success: false, error: `Songs not found` })
        }
        return res.status(200).json({ success: true, data: songs })
    }).clone().catch(err => console.log(err))
}

getSongs = async (req, res) => {
    Song.find({}, (err, songs) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        
        if (!songs.length) {
            return res
                .status(404)
                .json({ success: false, error: `Songs not found` })
        }
        return res.status(200).json({ success: true, data: songs })
    }).sort( { name: 1 } ).clone().catch(err => console.log(err))
}

getSongsByLikes = async (req, res) => {
    Song.find({}, (err, songs) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        
        if (!songs.length) {
            return res
                .status(404)
                .json({ success: false, error: `Songs not found` })
        }
        return res.status(200).json({ success: true, data: songs })
    }).sort( { likes: -1 } ).clone().catch(err => console.log(err))
}

module.exports = {
    createSong,
    updateSong,
    deleteSong,
    getSongById,
    getSongs,
    getSongsByLikes,
    getSongsByArtist,
}