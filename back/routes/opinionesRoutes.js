const express= require('express');
const router= express.Router();
const { 
    getOpiniones, 
    createOpinion, 
    updateOpinion,
    deleteOpinion
}= require('../controllers/opinionesController');

router.get('/', getOpiniones);
router.post('/', createOpinion);
router.put('/:id', updateOpinion);
router.delete('/:id', deleteOpinion);
module.exports=router;