var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    content: String,
}, {timestamps: true});
mongoose.model('Note', NoteSchema);
var Note = mongoose.model('Note');