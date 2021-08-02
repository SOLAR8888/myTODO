const {Router} = require('express');
const Note = require('../models/Note');
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

        res.status(201).json({note});
    }
    catch(e){
        res.status(500).json({message:'Ошибочка вышла...'})
    }
} )

router.post('/update/:id', async (req, res) => {
    try{

    }
    catch(e){
        res.status(500).json({message:'Ошибочка вышла...'})
    }
})

router.post('/remove', async (req, res) => {
    try{

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

router.delete

module.exports = router;
