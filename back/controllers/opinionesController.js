
const Opinion= require('../models/opinionesModel');

//ver todas las opiniones
const getOpiniones= async(req, res)=>{
    const opiniones= await Opinion.find().sort({fecha: -1});
    res.json(opiniones)
};
 
//crear opinion
const createOpinion= async(req, res)=>{
    const {nombre, comentario}= req.body;
    if(!nombre ||!comentario){
        return res.status(400).json({message: 'su opinion fue enviada', opinion: nuevaOpinion})
    }
    const nuevaOpinion= new Opinion({nombre, comentario})
    await nuevaOpinion.save()
    res.status(201).json({message: 'guardado', opinion: nuevaOpinion})
};

//actualizar
const updateOpinion= async(req, res)=>{
  const {id}= req.params;
  const {comentario}= req.body;
  const opinionActualizada= await Opinion.findByIdAndUpdate(
    id, {comentario}, {new: true}
  )
  res.json({message: 'actualizado', opinion: opinionActualizada})
};

//delete
const deleteOpinion= async(req, res)=>{
  const {id}= req.params;
  await Opinion.findByIdAndDelete(id)
  res.json({message: 'eliminado'})
};
module.exports={ getOpiniones, createOpinion, updateOpinion, deleteOpinion};