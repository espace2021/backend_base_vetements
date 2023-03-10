const express = require('express');
const router = express.Router();
const Type=require("../models/type")

// afficher la liste des types.
router.get('/', async (req, res, )=> {
    try {
        const cat = await Type.find();
                
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

});
// créer un nouveau type
router.post('/',async (req, res) =>  {
    const { type, imagetype} = req.body;
    
        const newType = new Type({type:type, imagetype:imagetype})
    try {

       await newType.save();

        res.status(200).json(newType );
    } catch (error) {
        res.status(404).json({ message: error.message });
    }


});
// chercher un type 
router.get('/:typeId',async(req, res)=>{
    try {
        const cat = await Type.findById(req.params.typeId);
        
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// modifier un type
router.put('/:typeId', async (req, res)=> {
    try {
        const typ = await Type.findByIdAndUpdate(
            req.params.typeId,
            { $set: req.body },
          { new: true }
        );
           
        res.status(200).json(typ);
      
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
});
// Supprimer un type
router.delete('/:typeId', async (req, res)=> {
    const  id  = req.params.typeId;
    await Type.findByIdAndDelete(id);

    res.json({ message: "type deleted successfully." });

});
module.exports = router;
