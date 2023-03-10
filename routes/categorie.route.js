const express = require('express');
const router = express.Router();
const Categorie=require("../models/categorie")

// afficher la liste des categories.
router.get('/', async (req, res, )=> {
    try {
        const cat = await Categorie.find().populate("typeID");
                
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

});
// créer un nouvelle catégorie
router.post('/',async (req, res) =>  {
       
    const nouvcateg = new Categorie(req.body)

    try {
        await nouvcateg.save()
        
        const categories = await Categorie.findById(nouvcateg._id).populate('typeID');

        res.status(200).json(categories );
    } catch (error) {
        res.status(404).json({ message: error.message });
    }


});
// chercher une catégorie 
router.get('/:categorieId',async(req, res)=>{
    try {
        const cat = await Categorie.findById(req.params.categorieId);
        
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// modifier une catégorie
router.put('/:categorieId', async (req, res)=> {
    try {
        const categ = await Categorie.findByIdAndUpdate(
            req.params.categorieId,
            { $set: req.body },
          { new: true }
        );
        const categories = await Categorie.findById(categ._id).populate('typeID');
    
        res.status(200).json(categories );
      
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
});
// Supprimer une catégorie
router.delete('/:categorieId', async (req, res)=> {
    const  id  = req.params.categorieId;
    await Categorie.findByIdAndDelete(id);

    res.json({ message: "categorie deleted successfully." });

});
module.exports = router;
