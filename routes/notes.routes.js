const {Router} = require('express');
const MODEL_PATH = '../models/';
const Note = require(MODEL_PATH + 'Note');
const router = Router();
const auth = require('../middleware/auth.middleware');

router.post('/add', auth, async (req, res) => {
    try{
        const {text} = req.body;
        if(!text){
            return res.status(400).json({message:'Пустой текст заметки'})
        }

        const note = new Note({text, owner: req.user.userId})
        await note.save();

        res.status(200).json({note});
    }
    catch(e){
        res.status(500).json({message:'Ошибочка вышла...'})
    }
} )

router.post('/update',auth, async (req, res) => {
    try{
        const id = req.body.id;
        const owner = req.user.userId;
        const done = req.body.done;

        const query = {_id:id, owner}
        await Note.findOneAndUpdate(query, {done});

        res.status(200).json({message:'Заметка изменена'})
    }
    catch(e){
        res.status(500).json({message:'Ошибочка вышла...'})
    }
})

router.post('/remove',auth,  async (req, res) => {
    try{
        const id = req.body.id;
        const owner = req.user.userId;
        await Note.deleteOne({_id:id, owner});
        res.status(200).json({message:'Заметка удалена'})
    }
    catch(e){
        res.status(500).json({message:'Ошибочка вышла...'})
    }
})

router.get('/', auth, async (req, res) => {
    try{
        const notes = await Note.find({owner:req.user.userId});
        res.status(200).json(notes);
    }
    catch(e){
        res.status(500).json({message:'Ошибочка вышла...'})
    }
})

router.get('/:id', auth, async (req, res) => {
    try{
        const note = await Note.findById(req.params.id);
        res.status(200).json(note);
    }
    catch(e){
        res.status(500).json({message:'Ошибочка вышла...'})
    }
})


module.exports = router;
