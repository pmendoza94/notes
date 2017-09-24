var mongoose = require('mongoose');
var Note = mongoose.model('Note');

var notes = require('../controllers/notes.js');

module.exports = function(app) {

    app.get('/create_notee', function(req, res) {
        console.log('GET /create_note');
        Note.find({})
            .then(data => { 
                console.log("****** routes ******")
                res.json(data)
             })
        
    })

    app.post('/create_note', (req, res, next) =>  {
        console.log('POST /create_note')
        let noteInstance = new Note(req.body);
        noteInstance.save(function(err) {
            if(err){
                return res.json(false);
            }
            else {
                Note.find({}, function(err, notes) {
                    return res.json(notes);
                })
            }
        })
    })

    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve('./public/dist/index.html'))
    })
}